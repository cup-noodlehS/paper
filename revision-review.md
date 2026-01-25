Below are the **mistakes / issues to fix**, prioritized by impact, with **exactly what to change**.

---

## High-impact mistakes (fix these first)

### 1) Several citations do not actually support the claim being made (citation–claim mismatch)

These are the most serious because they weaken academic rigor.

* **Scope exclusion of helmet/seatbelt uses Brophy et al. (2023)**
  In **1.7 Scope and Delimitation**, you cite *Brophy et al. (2023)* to justify excluding driver-attribute violations (helmet/seatbelt). But that paper (as referenced in your bibliography) is about **rain effects on camera perception**, not helmet/seatbelt detection.
  **Fix:** Replace that supporting citation with sources specifically about **helmet/seatbelt detection** (computer vision for rider/occupant attributes), or remove the citation and justify exclusion based on **observability limits of monocular fixed CCTV** (resolution/angle/interior visibility) with appropriate surveillance-focused sources. 

* **Motorcycle presence → more occlusion is cited to Santiago et al. (2023)**
  In **3.1 Research Design**, you justify dense mixed traffic and motorcycle presence increasing occlusion, citing *Santiago et al. (2023)* (a transportation conference proceeding about motorcycle taxis). That’s not a direct technical source for **occlusion effects in CCTV tracking**.
  **Fix:** Cite MOT/traffic surveillance sources (e.g., UA-DETRAC, MOT surveys, or CCTV traffic analytics papers) for occlusion/identity-switch problems, and keep Santiago only if you’re making a socio-transport point. 

* **ByteTrack principle is credited to Revaud & Humenberger (2021) in 3.7.1**
  You describe ByteTrack’s principle (using low-confidence detections) but cite the speed-estimation paper alongside ByteTrack.
  **Fix:** When describing ByteTrack-specific design, cite **Zhang et al. (2022)** only (or primarily). Keep Revaud & Humenberger for speed-estimation/calibration discussions. 

**Why this matters:** even if the narrative is correct, mismatched citations are a red flag for examiners—this is usually what gets challenged first in a defense.

---

### 2) Your “speeding” framing becomes legally ambiguous when you use non-posted thresholds

In **3.9.3**, you say speed limits will follow signage when available; otherwise you’ll use a researcher-defined threshold “for experimental consistency.”

**Problem:** Calling those events “speeding violations” may be interpreted as legal claims.
**Fix options (pick one, and apply consistently in Chapters 1–3):**

* **Option A (recommended):** Rename this violation to **“overspeed events”** when thresholds are researcher-defined, and reserve “speeding violation” only when posted limits are known and validated for that site.
* **Option B:** Keep “speeding,” but state explicitly in Scope/Ethics that results are **non-enforcement, research-only estimates** and thresholds are **experimental**, not legal. Add this to 1.7 and 3.15 for consistency. 

---

### 3) Ethics/privacy is mentioned well in Chapter 2 but under-cited in Chapter 3 ethics

You cite Data Privacy Act + NPC guidance in **2.1**, but **3.15 Ethical and Practical Considerations** discusses privacy without explicitly citing those primary sources again.

**Fix:** Add the legal/privacy citations directly in **3.15**, because that is where your compliance claims belong. (Keep it brief—1–2 sentences with citations.) 

---

## Medium-impact issues (quality/clarity improvements)

### 4) Chapter 1 still contains some repetition across Rationale → Gap → Purpose

Your new structure is correct, but **1.1, 1.2, and 1.3 repeat the same causal chain** with slightly different wording (occlusion + distribution shift → unstable detection/tracks → rules need stable tracks → fuzzy helps). This is now “acceptable” but still a bit verbose.

**Fix:** Keep the full causal chain in **1.2 Research Gap** (best place), then:

* In **1.1**, shorten the technical part to 2–3 sentences.
* In **1.3**, focus on *what you will build and evaluate*, not re-explaining the gap. 

---

### 5) Minor methodological underspecification: detector model choice and training/fine-tuning plan

You say “YOLO-family detector,” but it’s still unclear whether you will:

* use pretrained weights only,
* fine-tune on your collected data,
* or do domain adaptation.

**Fix:** Add a short paragraph in **3.6** stating your baseline:

* pretrained dataset (e.g., COCO),
* whether you will fine-tune (and how many labeled frames/epochs),
* what classes you’ll support and how you map them to your label set. 

---

## Low-impact but important “paper hygiene” mistakes (APA and formatting)

### 6) Many bibliography URLs are broken by spaces and line wraps

Examples include: `wp - content`, spaces in file names, and broken links across lines. This can cause markers to treat sources as sloppy or unverifiable.

**Fix:** Clean all URLs so they are valid (no inserted spaces). If your LaTeX/word processor is inserting breaks, use:

* URL formatting that preserves characters,
* DOI links when available,
* or stable landing pages (e.g., CVF OpenAccess for ICCV/ECCV papers). 

### 7) Some references look like local file paths rather than public sources

Example: the Revaud & Humenberger entry looks like it references a PDF filename rather than a canonical public URL.

**Fix:** Replace with the official publisher/OpenAccess page link. 

### 8) Government document APA formatting needs consistency

For MMDA/NPC/Republic Act entries:

* Ensure the **institution is the author**,
* titles are in **sentence case**,
* include publication date if available,
* and treat circulars/acts as official documents.

**Fix:** Standardize these entries using APA 7 “Government report/document” format. 

---

## Quick “did you make any mistakes?” checklist (pass/fail)

You’re mostly passing, except for the **citation mismatches** and **speeding framing**:

* ✅ Chapters 1–3 now flow logically (pipeline-structured RRL + Chapter 3 operationalization).
* ✅ RQs ↔ objectives ↔ metrics are aligned (this is a major upgrade).
* ✅ Added annotation protocol + calibration checklist + evidence bundle table (excellent).
* ❌ Some citations do not support the claim (must fix).
* ⚠️ “Speeding” needs legal/experimental clarity (must clarify).
* ⚠️ Bibliography URLs need cleanup (should fix).

---

## What I need you to do next (tight, doable steps)

1. **Fix citation mismatches** (Brophy 2023 in Scope; Santiago 2023 in 3.1; Revaud citation in ByteTrack paragraph).
2. Decide: **“speeding violation” vs “overspeed event”** under experimental thresholds, then apply consistently in 1.7 + 3.9 + 3.15.
3. **Clean all broken URLs** and replace file-name links with canonical sources.
4. Add a 4–6 sentence **detector training plan** in 3.6 (pretrained vs fine-tune).
