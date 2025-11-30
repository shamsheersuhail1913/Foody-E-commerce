# Foody — Static Site

This repository contains a small static demo site for "Foody" (HTML + CSS).

Live preview
------------
You can preview the site locally from the `Foody` folder.

Option A — quick HTTP server (recommended):

```powershell
# from the project folder
python -m http.server 5500
# then open http://localhost:5500/ in a browser (or use the VS Code Simple Browser)
```

Option B — VS Code Live Server extension:
- Install the "Live Server" extension in VS Code.
- Open `Foody home.html` (or `index.html`) and click "Go Live" in the status bar.

Files of interest
-----------------
- `index.html` — root entry (used by GitHub Pages).
- `Foody home.html` — original file (kept for editing).
- `styles.css` — stylesheet linked by the HTML files.

Enable GitHub Pages
-------------------
1. Go to your repository on GitHub: https://github.com/shamsheersuhail1913/Foody-E-commerce
2. Settings → Pages (left sidebar).
3. Under "Build and deployment" / "Source" choose: Branch: `main`, Folder: `/ (root)` and click Save.
4. After a short build, your site will be available at:
   `https://shamsheersuhail1913.github.io/Foody-E-commerce/`

Notes & troubleshooting
-----------------------
- GitHub Pages serves `index.html` from the publishing source. I added `index.html` at repository root so the site can be served.
- If you see a 404 after enabling Pages, wait a few minutes and then reload. Also confirm the publishing source is `main` (root).
- If your CSS or assets do not appear, ensure the files are present at the repository root and referenced with relative paths (e.g. `styles.css`).

Commit & push commands used (already run)
----------------------------------------
```powershell
git add README.md
git commit -m "Add README with preview and GitHub Pages instructions"
git push
```

If you'd like, I can also:
- Add a small `README` demo screenshot.
- Configure GitHub Pages to use the `/docs` folder or a specific branch.
- Create a GitHub Actions workflow to deploy a built site.

Enjoy — tell me which next step you'd like.
