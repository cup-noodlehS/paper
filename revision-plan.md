
## Global revision rules (apply to all phases)

### A. Source credibility and citation rules (non-negotiable)

1. **Use only real, reputable sources.** Prioritize:

   * Peer-reviewed journals/conference papers (IEEE, ACM, Elsevier, Springer, MDPI *only if peer-reviewed and strong*).
   * Official government/IGO documents (e.g., National Privacy Commission, Department of Transportation, Land Transportation Office, World Health Organization).
   * Established technical benchmarks/papers for methods (e.g., YOLO, MOT metrics, ByteTrack, UA-DETRAC).
2. **Avoid using news articles as primary evidence** for technical or statistical claims (e.g., “motorcycles are most registered”). If a news article is kept, it must be **supplementary**, and you must also provide **an official dataset/report** or peer-reviewed study for the same claim.
3. **Every major factual claim must have a citation** (e.g., crash burden, enforcement context, limitations of CCTV, domain shift effects, value of MOT, privacy implications).
4. **Use APA 7th edition consistently**:

   * In-text: (Author, Year) / (Author et al., Year)
   * References list must include complete bibliographic details.
5. **No citation dumping.** If 3+ citations are listed at the end of a sentence, rewrite and explicitly attribute what each supports.

### B. Academic writing rules

1. **Write in academic tone**: no conversational phrasing (“this shows that…”, “a lot of…”, “very important”).
2. Each paragraph must have:

   * **Topic sentence** (what this paragraph argues)
   * **Evidence/explanation**
   * **Link back** to the section purpose or your study
3. **Define acronyms once** (full form first, then acronym thereafter), and keep terminology consistent (e.g., automated traffic violation detection (ATVD), multi-object tracking (MOT), region of interest (ROI)).
4. **No untestable claims.** If you can’t measure it in Chapter 3, do not promise it strongly in Chapters 1–2.

### C. Alignment rules (Chapters 1–3 must match)

* Title ↔ Problem ↔ Objectives ↔ Research Questions ↔ Scope ↔ Methods ↔ Metrics
  If any element doesn’t map to a concrete method/metric, revise or remove it.

---

## Phase 1 (High-impact coherence fixes) — “Make it one study”

**Goal:** Remove disconnection and make the “logic chain” explicit.

### Tasks

1. **Write one core argument chain (6–8 sentences)** and reuse it as the backbone:

   * Context (PH CCTV enforcement needs) → gap (domain shift + occlusion) → tracking instability → geometric rules depend on stable tracks → purpose (MOT + geometric rules + uncertainty handling) → outputs (reviewable evidence).
2. **Restructure Chapter 1 flow** into:

   * Rationale → Gap → Purpose → Research Questions → Objectives → Framework → Scope/Delimitations → Significance → Definition of Terms
3. **Refocus Chapter 2 headings to mirror the pipeline**:

   * ATVD pipelines → Object detection (brief) → MOT under occlusion → uncertainty handling/fuzzy decision fusion → geometric rule-based inference → calibration/speed estimation (only what you use)
4. Add **two bridge paragraphs**:

   * End of Chapter 1 → why the RRL is organized by pipeline components
   * End of Chapter 2 → why Chapter 3 operationalizes these components and how evaluation will validate them

### Deliverable checks (you should be able to say “yes”)

* By the end of Chapter 1, a reader knows **exactly**: what you’re building, why, what you’ll evaluate, and what is out of scope.
* Chapter 2 sections each answer: **“How does this directly support my method in Chapter 3?”**

---

## Phase 2 (Research alignment cleanup) — “Make promises match methods”

**Goal:** Ensure the research questions/objectives are measurable and consistent with Chapter 3.

### Tasks

1. Rewrite **Statement of the Problem → Research Questions** (3–4 max):

   * RQ1 Detection stability effect on tracking
   * RQ2 Fuzzy-enhanced MOT vs baseline (ID switches/IDF1)
   * RQ3 Event-level violation accuracy (precision/recall per violation)
   * (Optional) Evidence bundle sufficiency checklist
2. Rewrite **Objectives** to map 1:1 to RQs (no extras).
3. Update **Scope/Delimitations**:

   * Explicitly list the **five violations** (the same five used in Chapter 3)
   * Add **non-goals**: no license plate recognition, no identity inference, not legal adjudication, not nationwide generalization
4. Add a **construct-to-metric preview in Chapter 1** (3 bullets):

   * detection metrics, tracking metrics, event-level violation metrics

### Deliverable checks

* Every RQ has a corresponding: method step + metric + expected output artifact.
* No objective introduces something not evaluated (e.g., “weather-robust” unless you define how you test it).

---

## Phase 3 (Chapter 2 tightening) — “Remove padding, strengthen justification”

**Goal:** Make RRL defensible, selective, and directly tied to your design.

### Tasks

1. Cut/condense broad CV history. Keep only what supports:

   * Why YOLO-family for real-time
   * Why tracking-by-detection is appropriate
   * Why uncertainty stabilization is needed
2. Remove/shorten tangents **unless tested** (e.g., attention-enhanced edge deployment).
3. For each RRL subsection, add a final sentence:
   **“Implication for this study:”** (e.g., “Therefore, we adopt MOT + fuzzy association to reduce identity switches in dense scenes.”)
4. Replace weak sources with stronger ones:

   * Context stats → official PH sources or peer-reviewed transport studies
   * Legal/privacy → primary law text + National Privacy Commission guidance

### Deliverable checks

* Chapter 2 reads like a **justification memo** for your Chapter 3 design choices.
* No subsection exists “for background only” unless it’s ½ page max and clearly necessary.

---

## Phase 4 (Methodology defensibility upgrade) — “Make Chapter 3 reproducible”

**Goal:** Turn methodology into something another researcher could implement.

### Tasks

1. Add a **ground-truth annotation protocol**:

   * Who annotates, what labels, how event boundaries are defined (start/end), and minimal quality control (even simple agreement checks).
2. Specify fuzzy system choices at a high level:

   * Inputs, membership functions (type), inference method, defuzzification, and tuning approach.
3. Add a **calibration protocol checklist** (per camera):

   * Steps to mark ROIs, homography, reference distances, validation
4. Evidence packaging: define **minimum evidence bundle per violation** (small table).

### Deliverable checks

* A reader can replicate your evaluation with the same data and get comparable metrics.
* “Evidence bundles” are clearly defined and consistent with ethics and scope.

---

## Phase 5 (Academic writing pass + APA audit) — “Polish and standardize”

**Goal:** Improve clarity, flow, and compliance.

### Tasks

1. **Paragraph surgery pass**:

   * 1 idea per paragraph; add topic sentence + link sentence
2. **Term consistency pass**:

   * Create a mini glossary of preferred terms and enforce it (ATVD, MOT, ROI, OOD)
3. **APA consistency pass**:

   * Cross-check: every in-text citation appears in references; every reference is cited
   * Fix missing fields (DOI, venue, pages)
4. **Claim-evidence pass**:

   * Highlight vague claims (“many,” “significant,” “robust”) and either quantify, cite, or soften.

### Deliverable checks

* No undefined acronyms.
* No long paragraphs that mix multiple unrelated points.
* References are complete and consistent.
