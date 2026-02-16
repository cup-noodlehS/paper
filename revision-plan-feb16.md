# Revision Plan - February 16, 2026

**Status: COMPLETED**

## Overview
This plan addresses reviewer comments on `main.tex` to improve the rationale section, reduce repetitive phrasing, expand abbreviations in definitions, and reconsider the "Implication for this study" pattern in Chapter 2.

---

## Comment 1: Rationale Section Improvements (Lines 77-87)

### Issues Identified
- Heavy dependence on citations with insufficient original elaboration
- Does not explain *to what extent* model reliability is degraded
- Trajectory-based reasoning is mentioned in paragraph 4 but not introduced earlier
- Rationale reads too similarly to the Research Gap section

### Proposed Changes

**A. Elaborate on model reliability degradation (before line 83)**
Add 1-2 sentences explaining concrete effects of distribution shift:
- Detection confidence drops (e.g., missed vehicles, false positives)
- Class confusion (e.g., motorcycle vs bicycle)
- Quantify if possible (e.g., "studies report 10-30% mAP drops")

**B. Introduce trajectory-based reasoning earlier (after line 83)**
Before the paragraph starting "Accordingly, this study investigates..." add a transitional sentence explaining:
- Violations are temporal events (not single-frame classifications)
- Stable tracking enables reasoning about *where* and *how* a vehicle moved
- This sets up the MOT discussion naturally

**C. Differentiate Rationale from Research Gap**
- Rationale: Focus on the *problem context* (why this matters, real-world stakes)
- Research Gap: Focus on *what is missing* in existing solutions
- Consider adding: local Philippine context, NCAP challenges, concrete examples of enforcement difficulties

**D. Optional: Add a conceptual diagram**
Create a simple figure showing the problem landscape:
```
[Detection Issues] → [Tracking Instability] → [Unreliable Violation Inference]
```

---

## Comment 2: Add Charts/Diagrams/Visualizations

### Proposed Visualizations

| Location | Diagram Type | Purpose |
|----------|--------------|---------|
| Chapter 1 (Rationale) | Problem flow diagram | Show how detection issues cascade to unreliable enforcement |
| Chapter 1 (Theoretical Framework) | Pipeline architecture diagram | Visualize the three-layer framework |
| Chapter 3 (System Overview) | System block diagram | Show module connections and data flow |
| Chapter 3 (Fuzzy Logic) | Membership function plots | Illustrate fuzzy input variables |

### Implementation
- Create Python script: `scripts/generate_figures.py`
- Use matplotlib/seaborn for clean academic figures
- Output to `images/` directory as PDF or PNG
- Reference in LaTeX with `\includegraphics`

---

## Comment 3: Rephrase Repetitive "Deployment Environment" Phrase

### Current Occurrences
1. Line 83: "deployment conditions differ from training data"
2. Line 119: "deployment environment differs from the training environment"
3. Line 131: "deployment environments can differ from common training data"

### Proposed Rephrasing
1. **Line 83**: Keep as-is (first occurrence)
2. **Line 119**: → "real-world conditions diverge from the data on which models were trained"
3. **Line 131**: → "target deployment sites exhibit characteristics not represented in training corpora"

---

## Comment 4: Expand Abbreviations in Definition of Terms (Lines 140-171)

### Items Requiring Full Form Expansion

| Current | Proposed |
|---------|----------|
| `\item[\textbf{ATVD}]` | `\item[\textbf{Automated Traffic Violation Detection (ATVD)}]` |
| `\item[\textbf{IoU}]` | `\item[\textbf{Intersection over Union (IoU)}]` |
| `\item[\textbf{MOT}]` | `\item[\textbf{Multi-Object Tracking (MOT)}]` |
| `\item[\textbf{OOD}]` | `\item[\textbf{Out-of-Distribution (OOD)}]` |
| `\item[\textbf{ROI}]` | `\item[\textbf{Region of Interest (ROI)}]` |
| `\item[\textbf{YOLO}]` | `\item[\textbf{You Only Look Once (YOLO)}]` |

---

## Comment 5: Reconsider "Implication for this study:" Pattern in Chapter 2

### Current Pattern
Every section in Chapter 2 ends with "Implication for this study: ..."

### Analysis
**Arguments for keeping:**
- Makes literature-to-methodology connection explicit
- Helps reviewers see relevance of each section

**Arguments against:**
- Repetitive structure
- Can feel formulaic
- The connection should be implicit in good academic writing

### Recommendation
**Option A (Recommended):** Remove most "Implication" sentences and integrate the key points into the prose naturally. Keep only 1-2 in sections where the implication is non-obvious.

**Option B:** Keep all but vary the phrasing:
- "This informs the present design by..."
- "The study responds to this by..."
- "Accordingly, the proposed pipeline..."

---

## Implementation Order

1. **Phase 1: Definition of Terms** (quick fix)
   - Expand abbreviations in lines 140-171

2. **Phase 2: Repetitive Phrasing** (quick fix)
   - Rephrase lines 119 and 131

3. **Phase 3: Chapter 2 Implications** (moderate)
   - Review and revise/remove "Implication" sentences

4. **Phase 4: Rationale Section** (substantial)
   - Elaborate on model reliability degradation
   - Introduce trajectory-based reasoning
   - Differentiate from Research Gap

5. **Phase 5: Visualizations** (optional/substantial)
   - Create Python script for figures
   - Generate and integrate diagrams

---

## Questions for User Before Proceeding

1. **Rationale expansion**: Should I add specific statistics/numbers about mAP degradation, or keep it qualitative?

2. **Chapter 2 implications**: Which option do you prefer?
   - (A) Remove most, keep 1-2
   - (B) Keep all but vary phrasing
   - (C) Remove all completely

3. **Visualizations**: Which diagrams should I prioritize?
   - Pipeline architecture diagram
   - Problem flow diagram
   - Fuzzy membership function plots
   - All of the above
   - None for now

---

## Files to Modify
- `main.tex` (primary)
- `images/` (new figures)
- `scripts/generate_figures.py` (new, if visualizations needed)
