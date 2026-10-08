'use strict';
// Form definitions, validation and portable ZIP export. No network writes.
(()=>{
 const f=(key,label,type='text',options={})=>({key,label,type,...options});
 const schemas={
  events:{label:'Events',singular:'Event',fields:[f('title','Event title','text',{required:true}),f('date','Start date','date',{required:true}),f('endDate','End date','date'),f('venue','Venue'),f('summary','Description','textarea'),f('url','Details or registration link','url'),f('image','Poster / photograph','image'),f('imageAlt','Image description')]},
  gallery:{label:'Gallery',singular:'Photo',fields:[f('caption','Caption','text',{required:true}),f('image','Photograph','image',{required:true}),f('alt','Image description','text',{required:true}),f('category','Category','select',{choices:['Lab','Events','People','Research'],required:true}),f('date','Date','date')]},
  members:{label:'People',singular:'Member',fields:[f('name','Full name','text',{required:true}),f('level','Research level','select',{choices:['UG','PG','PhD','Post-Doc'],required:true}),f('status','Association','select',{choices:['present','past'],required:true}),f('programme','Programme'),f('topic','Research topic','textarea'),f('period','Association period'),f('currentPosition','Current position (for alumni)'),f('photo','Photograph','image'),f('profile','Profile link','url')]},
  interns:{label:'Interns',singular:'Intern',fields:[f('name','Full name','text',{required:true}),f('institution','Home institution','text',{required:true}),f('programme','Programme'),f('status','Internship status','select',{choices:['ongoing','completed'],required:true}),f('period','Internship period'),f('topic','Research topic','textarea'),f('photo','Photograph','image'),f('profile','Profile link','url')]},
  news:{label:'News',singular:'News item',fields:[f('title','News title','text',{required:true}),f('source','Source','select',{choices:['manual','linkedin'],required:true}),f('category','Topic','select',{choices:['Research','Publications','Awards','Projects','Internships','Events','Announcements'],required:true}),f('date','Date','date'),f('dateLabel','Date label (optional, e.g. event dates)'),f('summary','Short summary','textarea',{required:true}),f('image','Photograph','image'),f('imageAlt','Image description'),f('url','Details link','url'),f('linkedinUrl','LinkedIn post link','url'),f('linkedinEmbedUrl','LinkedIn embed URL','url'),f('embedHeight','Embed height','number'),f('sourceAuthor','Post author'),f('sharedBy','Shared by'),f('tags','Keywords (comma separated)','tags')]}
 };
 function validDate(v){return /^\d{4}-\d{2}-\d{2}$/.test(v)&&!Number.isNaN(Date.parse(v+'T00:00:00Z'))&&new Date(v+'T00:00:00Z').toISOString().slice(0,10)===v;}
 function validLink(v,embed=false){try{const u=new URL(v);if(!['https:','http:'].includes(u.protocol)||u.username||u.password)return false;if(embed)return u.protocol==='https:'&&!u.port&&['www.linkedin.com','linkedin.com'].includes(u.hostname)&&/^\/embed\/feed\/update\/urn:li:(share|activity|ugcPost):\d+$/.test(u.pathname);return true;}catch{return false;}}
 function validPost(v){if(!validLink(v))return false;const u=new URL(v);return u.protocol==='https:'&&!u.port&&['www.linkedin.com','linkedin.com','lnkd.in'].includes(u.hostname)&& (u.hostname==='lnkd.in'||/^\/(posts\/[^/]+\/?|feed\/update\/urn:li:(activity|share|ugcPost):\d+\/?)$/.test(u.pathname));}
 function assetPath(v){return /^assets\/[a-zA-Z0-9/_-]+\.(jpg|jpeg|png|webp)$/i.test(v)&&!v.includes('..');}
 function validate(kind,record){const errors=[];const schema=schemas[kind];if(!schema)return ['Unknown section.'];
  schema.fields.forEach(field=>{const v=record[field.key];if(field.required&&(v===undefined||v===null||String(v).trim()===''))errors.push(field.label+' is required.');if(v===undefined||v===null||v==='')return;
   if(field.type==='select'&&!field.choices.includes(v))errors.push('Choose a valid '+field.label.toLowerCase()+'.');
   if(field.type==='date'&&!validDate(v))errors.push(field.label+' must be a valid date.');
   if(field.type==='url'&&!validLink(v,field.key==='linkedinEmbedUrl'))errors.push(field.label+' must be a valid '+(field.key==='linkedinEmbedUrl'?'LinkedIn embed URL.':'web link.'));
   if(field.type==='image'&&!assetPath(v)&&!validLink(v))errors.push(field.label+' must be an uploaded image or a web image link.');
   if(field.type==='number'&&(!Number.isFinite(v)||v<380||v>2400))errors.push('Embed height must be between 380 and 2400.');
   if(field.type==='tags'&&(!Array.isArray(v)||v.some(t=>typeof t!=='string')))errors.push('Keywords must be text.');
   if(typeof v==='string'&&v.length>20000)errors.push(field.label+' is too long.');
  });
  if(kind==='events'&&record.date&&record.endDate&&record.endDate<record.date)errors.push('End date cannot be before the start date.');
  if(kind==='news'&&record.source==='linkedin'&&(!record.linkedinUrl||!validPost(record.linkedinUrl)))errors.push('Add a valid LinkedIn post link. Short lnkd.in links are accepted.');
  return errors;
 }
 const clone=value=>JSON.parse(JSON.stringify(value));
 const serialize=data=>'/* Shared ASMD Lab content. Updated using the content editor. */\nwindow.LAB_CONTENT = '+JSON.stringify(data,null,2).replace(/</g,'\\u003c').replace(/\u2028/g,'\\u2028').replace(/\u2029/g,'\\u2029')+';\n';
 function fingerprint(data){const text=JSON.stringify(data);let h=2166136261;for(let i=0;i<text.length;i++)h=Math.imul(h^text.charCodeAt(i),16777619);return (h>>>0).toString(16);}
 function validateBackup(backup,baseline){if(!backup||backup.format!=='asmd-lab-editor-v1'||backup.base!==fingerprint(baseline))throw Error('This backup belongs to a different website version. Keep it as a reference and apply the changes to the current version.');
  if(!backup.data||!backup.images||typeof backup.images!=='object'||Array.isArray(backup.images))throw Error('Invalid draft backup.');
  for(const key of Object.keys(baseline)){if(!schemas[key]&&JSON.stringify(backup.data[key])!==JSON.stringify(baseline[key]))throw Error('The backup changes content outside the editor sections.');}
  for(const [kind,schema] of Object.entries(schemas)){if(!Array.isArray(backup.data[kind]))throw Error('Missing '+schema.label+' section.');for(const record of backup.data[kind]){if(!record||typeof record!=='object'||Array.isArray(record))throw Error('Invalid entry.');const errors=validate(kind,record);if(errors.length)throw Error(schema.label+': '+errors.join(' '));}}
  for(const [path,value] of Object.entries(backup.images)){if(!assetPath(path)||typeof value!=='string'||!/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/]+=*$/.test(value)||value.length>4000000)throw Error('Invalid image in the backup.');}
  return clone(backup);
 }
 function crc32(bytes){let crc=0xffffffff;for(const b of bytes){crc^=b;for(let i=0;i<8;i++)crc=(crc>>>1)^((crc&1)?0xedb88320:0);}return (crc^0xffffffff)>>>0;}
 // ZIP "store" format: no external scripts, credentials or compression library.
 function zip(files){const encoder=new TextEncoder(),locals=[],central=[];let offset=0;for(const file of files){const name=encoder.encode(file.name),bytes=typeof file.bytes==='string'?encoder.encode(file.bytes):file.bytes,crc=crc32(bytes);const local=new Uint8Array(30+name.length),lv=new DataView(local.buffer);lv.setUint32(0,0x04034b50,true);lv.setUint16(4,20,true);lv.setUint16(6,0x800,true);lv.setUint16(12,33,true);lv.setUint32(14,crc,true);lv.setUint32(18,bytes.length,true);lv.setUint32(22,bytes.length,true);lv.setUint16(26,name.length,true);local.set(name,30);locals.push(local,bytes);
   const entry=new Uint8Array(46+name.length),cv=new DataView(entry.buffer);cv.setUint32(0,0x02014b50,true);cv.setUint16(4,20,true);cv.setUint16(6,20,true);cv.setUint16(8,0x800,true);cv.setUint16(14,33,true);cv.setUint32(16,crc,true);cv.setUint32(20,bytes.length,true);cv.setUint32(24,bytes.length,true);cv.setUint16(28,name.length,true);cv.setUint32(42,offset,true);entry.set(name,46);central.push(entry);offset+=local.length+bytes.length;
  }const end=new Uint8Array(22),ev=new DataView(end.buffer);ev.setUint32(0,0x06054b50,true);ev.setUint16(8,files.length,true);ev.setUint16(10,files.length,true);ev.setUint32(12,central.reduce((sum,b)=>sum+b.length,0),true);ev.setUint32(16,offset,true);return new Blob([...locals,...central,end],{type:'application/zip'});
 }
 function packageFiles(data,images){const files=[{name:'content.js',bytes:serialize(data)}],references=new Set(Object.keys(schemas).flatMap(kind=>(data[kind]||[]).flatMap(record=>[record.image,record.photo].filter(Boolean))));for(const [name,value] of Object.entries(images)){if(!references.has(name))continue;if(!assetPath(name)||!/^data:image\/(jpeg|png|webp);base64,/.test(value))throw Error('Invalid image.');const binary=atob(value.split(',')[1]);files.push({name,bytes:Uint8Array.from(binary,c=>c.charCodeAt(0))});}return files;}
 window.LAB_EDITOR_CORE={schemas,validate,validLink,validPost,assetPath,clone,serialize,fingerprint,validateBackup,zip,packageFiles};
})();
