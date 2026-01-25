# Revision Tracker (Source of Truth)

This file tracks revisions applied to `main.tex` and `refs.bib` according to `revision-plan.md`.

## Phase 1 — High-impact coherence fixes (“Make it one study”)

### Core argument chain (backbone paragraph)

In Philippine urban roads, CCTV-based enforcement such as the No-Contact Apprehension Policy (NCAP) relies on video evidence to scale monitoring and documentation of traffic violations \parencite{MMDA2022}. However, dense mixed traffic and frequent occlusions in real-world scenes lead to inconsistent detections and unstable multi-object tracks \parencite{Wen2020,Zhang2022}. Distribution shift between widely used training datasets and local road environments further exacerbates detection inconsistency, increasing identity switches and fragmented trajectories \parencite{Koh2021,TorralbaEfros2011}. Because geometric, lane-, and region-based violation rules depend on temporally stable trajectories, tracking instability directly undermines the reliability and auditability of inferred violations \parencite{Olugbade2022,Rathore2021}. This study therefore develops an automated traffic violation detection (ATVD) pipeline that couples real-time vehicle detection with multi-object tracking (MOT) and explicitly handles uncertainty during association and class stabilization using fuzzy logic \parencite{Zadeh1965,Fakhri2023}. Stable trajectories are then evaluated with calibrated geometric rules to infer a defined set of violations within a fixed camera view \parencite{Bell2020,RevaudHumenberger2021}. The system outputs evidence bundles (e.g., annotated frames, timestamps, track identifiers, and rule-trigger traces) intended for human review and verification in camera-based enforcement workflows \parencite{MMDA2022,Olugbade2022}.

### Changes applied in `main.tex`

- Chapter 1 flow restructured to: Rationale → Gap → Purpose → Research Questions → Objectives → Framework → Scope/Delimitations → Significance → Definition of Terms.
- Chapter 2 headings refocused to mirror the pipeline (ATVD pipeline → detection → MOT → uncertainty/fuzzy → geometric inference → calibration/speed).
- Added bridge paragraph at end of Chapter 1 explaining Chapter 2 organization.
- Added bridge paragraph at end of Chapter 2 explaining how Chapter 3 operationalizes the components.
- Fixed a LaTeX escaping issue in Chapter 2 (`$>90\\%$` → `$>90\%$`) that would otherwise break compilation.

### Notes / carryover to Phase 2

- Reduce Research Questions to 3–4 measurable RQs and map Objectives 1:1.
- Update Scope/Delimitations to explicitly list the five violations used in Chapter 3 and add non-goals (e.g., LPR, adjudication).

## Phase 2 — Research alignment cleanup (“Make promises match methods”)

### Changes applied in `main.tex`

- Research Questions reduced to 3 measurable RQs aligned to Chapter 3 metrics:
  - RQ1 detector operating point → tracking stability
  - RQ2 fuzzy-enhanced MOT vs baseline → ID stability metrics
  - RQ3 event-level violation accuracy → precision/recall/F1 per violation
- Objectives rewritten to map 1:1 to the 3 RQs (no extra objectives).
- Added a Chapter 1 construct-to-metric preview (detection, tracking, event-level violation metrics).
- Scope/Delimitation updated to explicitly list the five evaluated violations and clarify non-goals (no LPR, no identity inference, no adjudication/citation issuance).
- Chapter 3 experimental design updated with a detector-threshold sensitivity experiment to support RQ1.
- Removed citation-dumping in Chapter 1 Rationale by splitting multi-citation claims into attributed sentences.

## Phase 3 — Chapter 2 tightening (“Remove padding, strengthen justification”)

### Changes applied in `main.tex`

- Condensed Chapter 2 to focus on the study pipeline (ATVD → detection → MOT → uncertainty/fuzzy → geometric inference → calibration/speed) and removed off-scope tangents (e.g., LPR and unrelated edge/attention claims) in `main.tex:163`.
- Added an explicit “Implication for this study:” sentence at the end of each Chapter 2 section to make design justification traceable to Chapter 3 implementation and evaluation.
- Strengthened governance/privacy grounding by citing the Data Privacy Act of 2012 and NPC CCTV guidance in `main.tex:164`.

### Changes applied in `refs.bib`

- Added primary Philippine privacy sources: `RA10173` and `NPCCircular2024CCTV` in `refs.bib:160`.

## Phase 4 — Methodology defensibility upgrade (“Make Chapter 3 reproducible”)

### Changes applied in `main.tex`

- Added a ground-truth annotation protocol (who annotates, label schema, event-boundary definitions, and quality-control checks) in `main.tex:212`.
- Specified the fuzzy inference design at a reproducible level (membership function types, Mamdani inference, centroid defuzzification, and tuning approach) in `main.tex:281`.
- Added a per-camera calibration protocol checklist (ROIs → reference measurements → homography → validation → ground-contact convention) in `main.tex:285`.
- Defined a minimum evidence bundle per violation type (table) to standardize outputs for review in `main.tex:377`.

### Changes applied in `refs.bib`

- No changes required in this phase.
