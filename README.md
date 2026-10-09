# HASNAIN KHAN — Mental Health Matters: Students' Wellness Hub

A responsive static website for **BIW10203 Web Application, Lab 3: Build Website Based on Theme**. The chosen theme is **Mental Health Matters: Students' Wellness Hub**.

## Included project materials

- A polished single-page responsive website.
- Full name: **HASNAIN KHAN**.
- UTHM and FSKTM logos in the header/footer identity area.
- Educational content on stress, self-care, support, and when to seek professional help.
- Private, on-device four-question wellness check-in.
- One-minute paced breathing interaction.
- Resource filters for Body, Mind, and Connection.
- Malaysia support details including Talian HEAL 15555, Befrienders KL, and an expanded helpline directory.
- Mobile navigation, accordion FAQs, reduced-motion support, semantic HTML, and accessible focus styles.

## Files

```text
index.html
styles.css
script.js
plan.md
assets/
  uthm-logo.png
  fsktm-logo.png
```

## Run locally

Open `index.html` directly in a browser, or start a small local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `hasnain-khan-wellness-hub`.
2. Upload all files and the `assets` folder, or use Git:

```bash
git init
git add .
git commit -m "Create student wellness hub website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/hasnain-khan-wellness-hub.git
git push -u origin main
```

3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Copy the generated public URL into the PDF submission for Author-UTHM.

## Content and source notes

The mental health education language is adapted for a student audience from the U.S. National Institute of Mental Health's “Caring for Your Mental Health” guidance: <https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health>.

Malaysia helpline details were checked against Find A Helpline's Malaysia directory: <https://findahelpline.com/countries/my>. For immediate danger in Malaysia, call **999**. This student project is educational and is not a diagnosis, treatment, or replacement for professional care.

Institutional identity links:

- UTHM: <https://www.uthm.edu.my/en/>
- FSKTM UTHM: <https://fsktm.uthm.edu.my/>

## Assignment checklist

- [x] Website created based on the selected mental health theme.
- [x] Full name included on the site.
- [x] FSKTM logo included.
- [x] UTHM logo included.
- [x] Creativity and original interactions included.
- [x] Ready for public GitHub Pages hosting.
- [ ] Replace the GitHub username in the publish command.
- [ ] Publish the repository and add the public link to a PDF for submission.
