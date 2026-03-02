
# Stage Clarity Check v1 - Full Rebuild Plan

## Overview
Rebuild the Stage Clarity Check component to exactly match the PDF specification (v1). This is a significant change affecting the flow, questions, logic, and UI.

---

## Summary of Changes

### 1. Flow Restructure (5 Steps)
- **Step 1**: Start screen (no changes needed from current Welcome)
- **Step 2**: 7 questions (one at a time) - replaces current 5 questions
- **Step 3**: Partial Result (NEW) - shows Stage + Bottleneck only, ungated
- **Step 4**: Soft Gate (NEW) - Name, Email, WhatsApp (optional)
- **Step 5**: Full Result - Stage explained, Bottleneck explained, What NOT to focus on, Recommended system

### 2. Stage Names Update
Change from `Early | Foundation | Stability` to `Launch | Growth | Scale`

### 3. New 7 Questions (Exact from PDF)

| # | Question | Purpose |
|---|----------|---------|
| Q1 | Which best describes your current situation? | Stage Anchor (5 options) |
| Q2 | What feels hardest right now? | Primary Bottleneck (5 options) |
| Q3 | How clear is your business direction? | Clarity Signal (4 options) |
| Q4 | How dependent is the business on you personally? | Dependency (4 options) |
| Q5 | What happens if demand suddenly increases? | Scale Readiness (4 options) |
| Q6 | Where are most of your decisions stuck? | Decision Bottleneck (5 options) |
| Q7 | What are you trying to achieve in the next 6 months? | Intent (5 options) |

### 4. Logic Mapping Update

**Stage Determination:**
- **Launch**: Q1 = exploring/idea/early launch OR Q3 = unclear/shaky
- **Growth**: Q1 = launched/consistent revenue AND Q5 = struggle or effort required
- **Scale**: Q1 = team/growing ops AND Q4 = high dependency AND Q5 = built to handle growth

**Bottleneck Determination (from Q2):**
- Clarity bottleneck → BoltGuider
- Brand/understanding bottleneck → BrandToFly
- Revenue execution bottleneck → D2CBolt or B2BBolt
- Stability bottleneck → BoltRunway
- Founder dependency/systems → ScaleRunway

### 5. New UI Components

**Partial Result Screen (NEW):**
- Shows immediately after Q7
- Displays: "Your Current Stage: [Launch/Growth/Scale]"
- Displays: "Primary Bottleneck: [1-2 line explanation]"
- CTA: Continue to get full results

**Soft Gate Screen (NEW):**
- Message: "Want your full clarity summary and recommended next step?"
- Form fields:
  - Name (required)
  - Email (required)
  - WhatsApp number (optional but encouraged)
- Skip option (optional, based on interpretation)

**Full Result Screen (Updated):**
- Your Stage Explained (paragraph)
- Your Main Bottleneck (explanation)
- What You Should NOT Focus On Right Now (NEW - trust-building paragraph)
- Recommended Next System with description
- CTA: "Explore [System Name]" → routes to hero section

### 6. CTA Rules
- CTA text: "Explore [System Name]"
- Routes to hero section of system page (e.g., `/services/boltguider#hero`)
- No pricing shown
- No booking forced

---

## File Changes

### `src/components/StageClarityCheck/types.ts`
- Update `Stage` type: `'Launch' | 'Growth' | 'Scale'`
- Update `Bottleneck` type with 5 values matching PDF
- Update `Answers` interface for 7 question IDs
- Add `UserDetails` interface for gate form
- Update `DiagnosticResult` to include `whatNotToFocusOn` field

### `src/components/StageClarityCheck/questions.ts`
- Replace all 5 questions with exact 7 questions from PDF
- Update option values and labels exactly as specified

### `src/components/StageClarityCheck/logic.ts`
- Rewrite `detectStage()` using Q1, Q3, Q4, Q5 as per PDF logic
- Rewrite `detectBottleneck()` using Q2 as primary signal
- Update stage descriptions for Launch/Growth/Scale
- Update bottleneck descriptions
- Add `whatNotToFocusOn` generation function
- Update system recommendations mapping

### `src/components/StageClarityCheck/index.tsx`
- Update `TOTAL_STEPS` from 6 to 10 (Start + 7 Questions + Partial + Gate + Full)
- Add `PartialResultScreen` component
- Add `SoftGateScreen` component with form
- Update `ResultScreen` to show "What NOT to Focus On"
- Update CTA text to "Explore [System Name]"
- Add state for user details (name, email, whatsApp)
- Update flow logic for new step structure

---

## Content (Exact from PDF)

### Welcome Screen Text
- Title: "Stage Clarity Check"
- Subtitle: Keep calm, non-salesy tone
- Note: "7 questions - ~2 minutes - No email required to start"

### Partial Result Labels
- "Your Current Stage: Launch / Growth / Scale"
- "Primary Bottleneck: [short explanation]"

### Soft Gate Message
- "Want your full clarity summary and recommended next step?"

### Full Result Sections
1. "Your Stage Explained" - paragraph about what this stage feels like
2. "Your Main Bottleneck" - clear explanation of what's slowing progress
3. "What You Should NOT Focus On Right Now" - trust-building paragraph
4. "Recommended Next System" - system name + 2-3 line why it fits

---

## Design and Tone Rules (from PDF)
- Calm language
- No hype
- No scores or percentages
- No "you must" statements
- Feels like a diagnosis, not a quiz

## Non-Negotiable Rules (from PDF)
- No auto-email without consent
- No pricing in results
- No upsell language
- No AI essay-style answers
