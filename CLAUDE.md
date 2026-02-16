# Repository Guidelines

## Project Structure & Module Organization

- `main.tex`: Primary thesis/manuscript source (single entry point).
- `refs.bib`: BibLaTeX bibliography database (APA style via `biblatex` + `biber`).
- `images/`: Figures used by `main.tex` (keep filenames stable once referenced).
- `.archive/`: Older Markdown drafts and planning notes; treat as reference only.
- `revision-*.md`: Revision plan/review/tracker documents.

## Build, Test, and Development Commands

This repo is a LaTeX document; the “build” is compiling `main.tex` to a PDF (requires TeX Live/MacTeX + `biber`).

- `latexmk -pdf -use-biber -interaction=nonstopmode -synctex=1 main.tex`: Compile to `main.pdf` (recommended).
- `latexmk -C`: Clean LaTeX build artifacts.
- If `latexmk` isn’t available: `pdflatex main.tex` → `biber main` → `pdflatex main.tex` (run `pdflatex` twice if needed).

## Coding Style & Naming Conventions

- Use spaces (no tabs); prefer 2-space indentation inside environments.
- Keep lines readable (aim ≤100 chars) and avoid noisy reformatting of unchanged paragraphs.
- Labels: `\label{sec:...}`, `fig:...`, `tab:...`, `eq:...` (match `\ref{...}` usage).
- Figures: place files in `images/` and reference with relative paths (e.g., `images/atvd-pipeline.png`).

## Writing Style

- Write in an academic, defensible tone: make claims specific, avoid hype, and hedge when evidence is limited.
- Keep claim→evidence tight: add citations for non-obvious statements and ensure the citation matches the claim.
- Prefer clear, short paragraphs (topic sentence first) and consistent terminology across chapters (define acronyms on first use).
- When adding background, explicitly connect it back to the methodology (e.g., a 1-sentence “Implication for this study:” bridge).

## Common Workflows

- Add a citation: add the source to `refs.bib`, then cite with `\parencite{Key}` / `\textcite{Key}` in `main.tex`. Avoid changing existing citation keys.
- Add a figure: put the asset in `images/`, reference it via `\includegraphics{images/...}`, and add a `\caption{...}` + `\label{fig:...}` for stable cross-references.

## Testing Guidelines

- No automated tests are configured; treat a clean LaTeX compile (no errors, minimal warnings) as the baseline check.
- Before opening a PR, ensure references and the bibliography render correctly (no “?” placeholders, no “undefined references/citations” warnings).

## Commit & Pull Request Guidelines

- Follow existing history: descriptive, sentence-case messages, often grouped as “Phase N — …” for larger revision passes.
- PRs should include: sections changed (chapter/section titles), rationale for the edit, and confirmation that `latexmk` completes successfully.

## Configuration Tips

- Bibliography is `biblatex` APA with `backend=biber` (see `main.tex`); keep edits in `refs.bib` and avoid mixing in legacy BibTeX commands like `\bibliographystyle{...}`.
