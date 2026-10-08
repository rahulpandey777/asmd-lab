# ASMD Lab website

Advanced Semiconductor Materials and Devices Laboratory, NIT Delhi.
Lab In-charge: Dr. Rahul Pandey, Assistant Professor, Department of Applied Sciences (Physics).

## What is included

Eight responsive pages: Home, Research, Publications, People, News, Events, Gallery and Contact.

- Clickable researcher badges for Scopus, Web of Science, ResearchGate, LinkedIn, Google Scholar and ORCID.
- Publications restricted to entries explicitly marked as carrying NIT Delhi affiliation, with keyword/year/type filters, clickable DOI links, citation copying and BibTeX download.
- Present and past people, organised as UG, PG, PhD and Post-Doc.
- News, dated event filters, project summaries, gallery categories and an accessible image viewer.
- Research themes, methods, contact information and a Join the lab section.
- Light-blue design aligned with the lab's door-sign identity; layouts for phones and desktops.

The publication, member, news, event, project and lab-photograph collections start empty. No example publications, people or achievements have been presented as real lab records. Conceptual generated research artwork is clearly labelled separately from the lab photograph gallery. Researcher badges are readable lettermark icons, not copies of official platform logos.

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
- https://nitdelhi.irins.org/profile/245694
- https://www.researchgate.net/profile/Rahul-Pandey-3

Scopus, Web of Science and Google Scholar destinations are taken from NIT Delhi's research profile; those services may request a sign-in or restrict automated access. The office location comes from the institutional profile and should be confirmed before a visit. The NIT Delhi emblem was supplied by the user.
