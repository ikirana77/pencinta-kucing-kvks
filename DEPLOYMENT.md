# Deployment plan — Pencinta Kucing KVKS

Target site: <https://cats.ekvks.com>. GitHub is intended to become the source of truth. The workflow currently validates the deployable files on pushes to `main`; it does **not** upload or publish anything. The transport to cPanel hosting is not yet selected.

## Repository structure

| Path | Purpose |
| --- | --- |
| `dist/` | Complete static website and the future deployment source. |
| `.github/workflows/deploy.yml` | Safe GitHub Actions scaffold; checks `dist/` and skips deployment. |
| `.gitignore` | Excludes local metadata, temporary files, logs, and credentials. |
| `PROJECT_CONTEXT.md` | Project rules, architecture, and V6 baseline context. |
| `CHANGELOG.md` | Record of controlled changes. |
| `.openai/hosting.json` | Existing local static-hosting configuration pointing to `dist/`. |

`dist/` is tracked because it contains the ready-to-serve HTML, CSS, JavaScript, and images. There is no build step or framework that recreates it elsewhere.

## Branch strategy

`main` contains production-ready code. Review and preview changes locally before committing or merging them into `main`. A push to `main` runs the scaffold, but does not deploy until a transport is deliberately configured later.

## Recommended update workflow

1. Edit the project locally in VS Code and update `CHANGELOG.md` for website changes.
2. Preview `dist/` locally, for example with `python3 -m http.server 8000 --bind 127.0.0.1 --directory dist`, then open `http://127.0.0.1:8000/`.
3. Review changed files and verify links and image paths.
4. Run:

   ```sh
   git status
   git add .
   git commit -m "Describe update"
   git push
   ```

The intended flow is **local editing in VS Code → local preview → git add → git commit → git push → GitHub → deployment to cats.ekvks.com**. The final deployment step is pending hosting setup. Once GitHub is the source of truth, do not edit production files directly in cPanel; make changes in this repository and deploy them through the chosen process.

## Credentials and deployment options

Never commit passwords, tokens, API keys, SSH private keys, or cPanel/FTP credentials. Store required credentials only in GitHub Secrets, with access limited to the deployment workflow. The scaffold uses `DEPLOY_TARGET` and `DEPLOY_CREDENTIAL` as generic placeholders and never prints or uses their values to connect anywhere.

Evaluate these options with the hosting provider before implementing deployment:

1. **cPanel Git Version Control:** confirm repository access, branch handling, and how `dist/` maps to the public document root.
2. **GitHub Actions via SFTP/SSH:** confirm SFTP or SSH access and the approved target directory; SSH/rsync is another possibility if shell access is available.
3. **GitHub Actions via FTP/FTPS:** use only if supported and appropriate for the hosting account; prefer FTPS over unencrypted FTP where possible.

Whichever method is selected, deploy only the contents of `dist/` to the site document root and test the mapping before enabling automatic deployment.

## Rollback

Use Git history to identify a previous known-good commit. Prefer a reviewed `git revert` commit for a published change, then deploy that state through the same process. Keep the previous production version available until the new deployment is verified.

## Connecting GitHub later

Create an empty GitHub repository without a generated README, `.gitignore`, or license. After reviewing its URL, add it as `origin` and push `main` only when explicitly ready. No remote or GitHub repository is created by this preparation step.
