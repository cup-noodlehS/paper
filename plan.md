# Plan: Migrate `main.md` to LaTeX (APA)

## Goals
- Produce a well-formatted LaTeX version of the paper in `main.tex`.
- Apply APA-style citations and a clean bibliography workflow.
- Keep assets (e.g., `images/`) and structure consistent with the current Markdown.
- Use `main.pdf` as the reference for any formulas missing or incorrect in `main.md`.

## Phase 1: Inventory and formatting decisions
1. **Structure audit**
   - Identify front matter sections (title page, approval page, TOC, etc.).
   - Map Markdown headings to LaTeX structure (`\chapter`, `\section`, `\subsection`).
2. **Template decision**
   - Choose document class (likely `report` for chapters).
   - Decide on margins, spacing, and font requirements if your department has a template.
3. **Citation system**
   - Pick APA tooling: `biblatex` + `biber` with `style=apa` (recommended), or `apacite`.
   - Decide how in-text citations should render (parenthetical vs narrative).

## Phase 2: Create LaTeX skeleton in `main.tex`
1. **Preamble setup**
   - Add core packages: `geometry`, `graphicx`, `setspace`, `hyperref`, `booktabs`,
     `longtable` (if needed), and the chosen APA bibliography package.
2. **Front matter**
   - Title page, approval page, and any fixed pages from `main.md`.
   - Table of contents (and list of figures/tables if required).
3. **Chapter scaffolding**
   - Create `\chapter`/`\section` placeholders that mirror the Markdown structure.

## Phase 3: Content conversion (Markdown to LaTeX)
1. **Headings and text**
   - Convert Markdown headings to `\chapter`, `\section`, `\subsection`.
   - Replace Markdown bolding/italics with `\textbf{}`/`\textit{}`.
2. **Lists and tables**
   - Convert numbered lists to `enumerate`, bullets to `itemize`.
   - Convert Markdown tables to `tabular` or `longtable` (use `booktabs`).
3. **Images and page breaks**
   - Replace `<img>` tags with `\includegraphics{}` (set height/width).
   - Use `\newpage` where the Markdown indicates separate pages.

## Phase 4: APA citations and bibliography
1. **Build a `.bib` file**
   - Extract all references from `main.md` and normalize to BibTeX entries.
   - Use consistent citation keys (e.g., `AuthorYear`).
2. **Replace citations in text**
   - Convert `(Author, Year)` to `\parencite{key}`.
   - Convert narrative citations (e.g., "Author (Year)") to `\textcite{key}`.
3. **Insert bibliography**
   - Add `\printbibliography` (biblatex) or `\bibliography{refs}` (apacite).

## Phase 5: QA and polish
1. **Compile and inspect**
   - Check for overfull lines, missing references, and citation errors.
2. **APA compliance**
   - Verify author formatting, corporate authors, and multi-author rules.
3. **Final pass**
   - Ensure consistent spacing, headings, and table/figure captions.

## Optional Phase 6: Automation (if desired)
- Use a local `pandoc` pass to draft LaTeX, then clean up manually.
- Write a small script to transform consistent citation patterns into LaTeX commands.
