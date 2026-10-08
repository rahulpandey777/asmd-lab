# ASMD Lab website

Advanced Semiconductor Materials and Devices Laboratory, NIT Delhi.
Lab In-charge: Dr. Rahul Pandey, Assistant Professor, Department of Applied Sciences (Physics).

## What is included

Eight responsive pages: Home, Research, Publications, People, News, Events, Gallery and Contact.

The compact homepage contains the lab introduction, researcher profile links, a linked dashboard, one latest news item, the nearest upcoming event and contact access. Detailed content lives on its own pages. Dashboard totals are computed from confirmed content records; unpopulated collections show an em dash rather than an invented lab total.

- Clickable researcher badges for Scopus, Web of Science, ResearchGate, LinkedIn, Google Scholar and ORCID.
- Publications restricted to entries explicitly marked as carrying NIT Delhi affiliation, with keyword/year/type filters, clickable DOI links, citation copying and BibTeX download.
- Present and past people, organised as UG, PG, PhD and Post-Doc, plus a separate institutional collaborators section.
- Dr. Rikmantra Basu is listed as an institutional collaborator as confirmed by Dr. Rahul Pandey; his designation, department and research themes come from his official faculty profile.
- News, dated event filters, project summaries, gallery categories and an accessible image viewer.
- Research themes, methods, contact information and a Join the lab section.
- Light-blue design aligned with the lab's door-sign identity; layouts for phones and desktops.

This website contains 49 articles whose author affiliation attaches NIT Delhi to Dr. Rahul Pandey in his Scopus export of 8 October 2026. It includes 46 records marked Final and 3 Article in press, with years retained as exported. The member, event, project and lab-photograph collections start empty. News includes seven user-selected LinkedIn updates. No example publications, people or achievements have been presented as real lab records. Conceptual generated research artwork is clearly labelled separately from the lab photograph gallery. Researcher badges are readable lettermark icons, not copies of official platform logos.

## Preview

Open `index.html` in a desktop browser. Everything works without installing packages. Alternatively, run `python3 -m http.server 8080` from this folder and visit `http://localhost:8080`.

## Current status: private draft

The repository is private and the website is not published. Review it locally by opening `index.html`. The deployment workflow is stored as an inactive template in `deployment/pages.yml`; there is no active publishing workflow. Publication requires Dr. Rahul Pandey's approval.

## Free hosting on GitHub Pages (when ready)

GitHub Pages supports free hosting from public repositories using GitHub Free. The inactive workflow template can publish the site when the `main` branch changes after it is enabled.

1. After approving publication, change the repository visibility to **public**.
2. Move `deployment/pages.yml` to `.github/workflows/pages.yml` to enable the prepared publishing workflow.
3. Open repository **Settings → Pages** and select **GitHub Actions** as the source.
4. Open **Actions → Publish ASMD Lab website → Run workflow** for the first deployment if needed.
5. Use the website URL reported by the successful deployment. It will usually be `https://YOUR-USERNAME.github.io/asmd-lab/`.

The default `github.io` address requires no purchased domain. No paid backend, database, subscription, analytics or third-party API is required by this website. Your repository's source and published website are public. GitHub's current terms and service limits apply.

Official documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

## Form-based content editor

Open `admin.html`, or use **Manage content** in the website footer. The standalone review file `ASMD_Lab_Content_Editor.html` also works without installing software. Download it and open it in your desktop browser if the ChatGPT viewer does not allow downloads or browser storage.

1. Choose **Events**, **Gallery**, **People**, **Interns** or **News**.
2. Complete the form and select **Add to draft** / **Save entry**. Edit or remove existing entries from the saved-entry list.
3. Upload JPG, PNG or WebP photographs through the image field. The editor resizes photographs to a maximum of 1600 pixels and stores them as JPEG files under `assets/uploads/`. Enter captions and image descriptions as appropriate. Images above 20 MB or 50 million decoded pixels are rejected.
4. Use **Show first** on a news item to feature it first in News and on the homepage. Newly added news is featured first by default. This updates `displayOrder` without changing existing dates. The homepage selects the nearest upcoming event from its dates.
5. Use **Download draft backup** regularly, particularly before closing the editor or switching devices. **Restore backup** accepts a backup from the same website version. Browser storage may be unavailable or full; the editor reports this and asks you to download a backup. Form changes must be saved before backup/export.
6. Select **Download updates**. Extract `ASMD_Lab_Updates.zip` on your computer. It contains `content.js` and only the new uploaded images still referenced by an entry.
7. Sign in to https://github.com/rahulpandey777/asmd-lab/upload/main and drag the extracted `content.js` and `assets` folder onto the upload area. Preserve the folder structure; do not upload the ZIP itself. Review the changed files and commit them. Alternatively, send the ZIP here and ask to synchronise it.
8. While the repository remains private and unpublished, download the current repository to review its pages. Once publishing is authorised and the prepared hosting workflow is enabled, committed changes can deploy automatically.

The editor does not authenticate users or write directly to GitHub. Anyone with a copy can make their own local draft; only authorised GitHub repository users can change the saved website. There are no passwords, tokens or credentials embedded in the editor. It requires no paid backend or external JavaScript libraries.

Keep past members under **past** and finished internships under **completed** to preserve the lab's history. The editor preserves all publications, researcher links and project data. The two institutional faculty cards remain in the page template; ask to update them if needed.

For LinkedIn news, paste a direct post link and a short summary. Optionally paste the iframe code copied from LinkedIn into **LinkedIn iframe code**, then select **Use embed code**. Only the supported LinkedIn iframe URL and height are extracted; arbitrary HTML is never added. Full-post display is selected by removing `collapsed=1`. Native embeds may still be blocked by LinkedIn or the viewer; links and summaries remain available.

Always start with the latest repository version before editing. A draft from a different baseline is not silently restored or merged: download the old draft as a reference, then apply the changes to the new version. Coordinate changes if someone else is also editing, as the exported content file replaces the repository's existing content file.

GitHub upload documentation: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository

## Updates through ChatGPT

Send papers, names, photographs or announcements in the chat and ask to update the ASMD Lab website. Once repository access is available, updates can be committed to the private draft. Once public hosting is approved and the workflow is enabled, updates can be automatically published.

Useful details to provide:

- **Paper:** title, authors, journal/venue, publication year, DOI, type and confirmation that NIT Delhi affiliation appears in the paper.
- **Member:** name, UG/PG/PhD/Post-Doc, present/past, programme, research topic, association period, photograph and optional profile link/current position.
- **News/event:** title, date, short description, venue, optional details link and photo/poster; for a multi-day event, the end date.
- **Gallery:** photo, caption, category (Lab/Events/People/Research), and date if relevant.
- **Project:** title, short description, funding organisation and collaborators confirmed by you.

The shared content lives in `content.js`. The website never automatically scrapes or imports papers. Entries with `nitDelhiAffiliation: true` appear in the publication list; `false` or missing confirmation excludes them.

Example record shapes (documentation only; these are not loaded into the website):

```javascript
publications: [{
  title: "Paper title", authors: "Author list", journal: "Journal name",
  year: 2026, doi: "10.xxxx/your-doi", type: "Journal article",
  nitDelhiAffiliation: true, tags: ["Photovoltaics"]
}]
members: [{
  name: "Member name", level: "PhD", status: "present",
  programme: "PhD in Physics", topic: "Research topic", period: "2026–present",
  photo: "assets/member-photo.jpg", profile: "https://..."
}]
news: [{title: "Announcement", date: "2026-10-08", summary: "Details", url: "https://..."}]
events: [{title: "Event title", date: "2026-11-01", endDate: "2026-11-02", summary: "Details", venue: "Location", url: "https://..."}]
gallery: [{image: "assets/photo.jpg", alt: "Image description", caption: "Caption", category: "Events"}]
projects: [{title: "Project title", summary: "Summary", funder: "Organisation"}]
```

Use empty strings or omit optional fields. Keep research collection records separate from profile-wide publication metrics. `build.py` regenerates the HTML templates and badge files only; it preserves an existing `content.js`.

## Verified profile and institutional sources

- https://faculty.nitdelhi.ac.in/RahulPandey/profile
- https://faculty.nitdelhi.ac.in/RahulPandey/research
- https://faculty.nitdelhi.ac.in/RikmantraBasu/profile
- https://nitdelhi.irins.org/profile/245694
- https://www.researchgate.net/profile/Rahul-Pandey-3

Scopus, Web of Science and Google Scholar destinations are taken from NIT Delhi's research profile; those services may request a sign-in or restrict automated access. The office location comes from the institutional profile and should be confirmed before a visit. The NIT Delhi emblem was supplied by the user.

## Research word clouds

The homepage and Lab Publications page offer expandable word clouds, collapsed initially to keep the homepage compact. Word frequency counts how many displayed publications mention a term in their title or author keywords, counting each term once per paper. Common words are excluded and simple singular/plural forms are grouped. The top 24 terms are placed without overlap, with all term counts also available in an accessible table. The Publications cloud follows the search/year/type filters; the homepage cloud covers all included papers. Each plot can be downloaded as SVG.

## External interns

The People page has a separate Interns section with completed and ongoing internship tabs. Internship students are stored independently from regular members, so they do not change the Current members dashboard count. Supply the student's name, home institution, programme, internship dates, project topic and optional photograph/profile link. No student identities are invented.

```javascript
interns: [{
  name: "Student name", institution: "Home university or college",
  programme: "BTech / MSc / other programme", status: "completed",
  period: "June–July 2026", topic: "Internship project",
  photo: "assets/intern.jpg", profile: "https://..."
}]
```

## Faculty portraits

The People page uses portraits from the official NIT Delhi faculty profiles, saved as local image assets for reliable display. Each portrait links to the corresponding official faculty profile. Sources:

- Dr. Rahul Pandey: https://faculty.nitdelhi.ac.in/RahulPandey/profile — https://facultyportal.nitdelhi.ac.in/faculty_images/dr_rahul_pandey_af8166.jpg
- Dr. Rikmantra Basu: https://faculty.nitdelhi.ac.in/RikmantraBasu/profile — https://facultyportal.nitdelhi.ac.in/faculty_images/dr_rikmantra_basu_3c8c71.jpg

## News: manual entries and selected LinkedIn posts

The News page combines manually written lab announcements, linked LinkedIn cards and optional native full-post LinkedIn embeds. Source tabs (All news / Lab news / LinkedIn posts), topic filtering and keyword search apply together. Entries appear newest first by their recorded dates unless an explicit `displayOrder` is supplied for curated posts. The homepage shows only the latest title, date and summary, with a link to News; it never loads a LinkedIn iframe.

To add an entry yourself, open `content.js`, find `"news": []`, and add a record between the brackets. Use double quotes and commas between records. To add further news, append a record to the same array. On GitHub, use the file's pencil/Edit control, save the change and deploy the site when publishing is enabled. You can also send details in ChatGPT for preview-first updates. No LinkedIn password, subscription or API access is required for this selected-post workflow.

All examples below are templates only and are not displayed as actual lab news.

Manual announcement:

```json
{
  "source": "manual", "category": "Research",
  "title": "Your announcement title", "date": "2026-10-08",
  "summary": "Your short news description.",
  "image": "assets/your-photo.jpg", "imageAlt": "Description of your photo",
  "url": "https://your-details-page.example"
}
```

LinkedIn card (without an embed):

```json
{
  "source": "linkedin", "category": "Publications",
  "title": "Your research-post title", "date": "2026-10-08",
  "summary": "Your own short summary of the research post.",
  "linkedinUrl": "https://www.linkedin.com/posts/your-actual-post-slug"
}
```

To display a supported embedded post as well, add `"linkedinEmbedUrl"` to that same LinkedIn record. On LinkedIn's desktop site, open the public post → More (three dots) → Embed this post → Copy code. Copy **only the iframe's src URL** into `linkedinEmbedUrl`, not the full HTML. The accepted URL shape is `https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:ACTUAL_NUMERIC_ID` (also `share` or `activity`, with a real numeric ID). Choose **Embed full post** when copying the LinkedIn code. Optional `embedHeight` sets the frame height, limited to 380–2400 pixels; it defaults to 1000. Use the height provided by LinkedIn in the copied code when available. The post link and summary are available even without an embed.

Supported embeds display directly on the News page in LinkedIn’s own full-post format, with browser lazy loading. A visible text summary and direct post link provide a fallback, and the visitor can hide a blocked embed. The homepage continues to show a compact summary only. No arbitrary embed HTML, scripts or iframe hosts are accepted. Links must point to LinkedIn post paths on linkedin.com or www.linkedin.com over HTTPS. Private, deleted or unsupported posts may not display; the direct link remains available. Unsupported multi-photo posts or reposts with commentary can be represented by a linked news card and your own summary instead.

Supported topic labels: Research, Publications, Awards, Projects, Internships, Events, Announcements. Use `tags` for optional search keywords. Optional fields can be omitted. Add only the selected research posts you want to show; the website does not automatically fetch or classify your LinkedIn activity.

LinkedIn's official embed instructions: https://www.linkedin.com/help/linkedin/answer/a523402

## Verified news entry: REconnect Summit 2026

The user supplied https://lnkd.in/p/g79nR3av, which resolves to Rahul Pandey's repost at https://www.linkedin.com/feed/update/urn:li:activity:7507443092518572032/. The original author is REconnect Summit. The news summary and event dates were checked against the public post. The card uses the post's event graphic, with the supplied repost link and a directly displayed full-post embed of the original REconnect Summit post (`urn:li:share:7507428564988968960`); the embed endpoint returned the matching content when checked. This does not guarantee the embed will remain available.

`date` is the event's first day (21 May 2026) for sorting. `dateLabel` explicitly displays “21–22 May 2026 (event dates)” in News and on the homepage. The precise LinkedIn posting date is not claimed. Optional `dateLabel` lets future entries clarify a verified event date separately from an unavailable publication date.

The user selected the LinkedIn “Embed full post” format on 8 October 2026. Apply that choice to existing and future embeddable News entries. The screenshot is a display-setting reference; it does not provide a complete URL for the Stanford/Elsevier post shown, so that additional post has not been invented or added.

## Six additional selected LinkedIn posts

Six user-supplied embed endpoints were retrieved and their public text checked on 8 October 2026. The items cover Stanford/Elsevier recognition (Awards), the SRAM/QuantumATK workshop and two REconnect updates (Events), and two IEEE paper announcements (Publications). The existing REconnect reflection is retained, giving seven News entries. These news announcements do not change the 49 verified Lab Publications.

The supplied URLs contain `collapsed=1`. The displayed URLs omit that compact-mode flag to honour the user's previously selected **Embed full post** setting. The originally supplied URLs/heights are retained in content data; displayed frame heights include additional space for full text. LinkedIn controls the frame content and may show its own scrolling or access messages.

Exact LinkedIn publication dates were unavailable in the retrieved HTML. Event dates are explicitly labelled; other entries say “LinkedIn update” and keep LinkedIn's native relative date inside the embed. `displayOrder` provides an explicit editorial sequence for these seven posts, with the new recognition announcement first, followed by the existing reflection, workshop, panel highlights, speaker invitation and paper announcements. It does not claim a precise posting date. Future manual news can use a known date without `displayOrder`, or assign its own order when a curated position is needed.

## Preview compatibility and blocked frames

On 8 October 2026 the user reported “www.linkedin.com refused to connect” in the preview. Fetching an embed's HTML does not verify that a particular browser or nested preview can display it. Sampled LinkedIn embed responses returned HTTP 200 without X-Frame-Options and with `frame-ancestors *`, so the reported blocking cause was not conclusively established; preview constraints, local-file origins or a browser/session-specific response remain possible.

The standalone review preview now sets `window.LAB_PREVIEW = true` and displays LinkedIn-style summary cards using local images and direct post links, with **no external post iframes**. Opening the source site with a `file:` origin also uses these cards. These are labelled summaries, not simulated live LinkedIn widgets; reactions and comments are not invented. All seven posts retain their native embed URLs in the source data. The HTTPS-hosted site still supports full native embeds, with the summary always visible and a Hide/Show button so an inaccessible frame does not obscure the news. Hosted browser embedding remains unverified until a real site URL is available.

The six added card images were taken from the user-selected public LinkedIn embed pages and saved as local assets. This avoids remote image dependencies inside the preview. LinkedIn itself remains accessible through each card's direct link.
