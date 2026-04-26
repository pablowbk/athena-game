# Athena Game — Design Document (living)

**Status:** Premise, scope, endings, and pacing locked; remaining work is implementation and writing against this spine.  
**Last updated:** 2026-04-26

---

## 1. Purpose of this document

Align **creative goals**, **player-facing mechanics**, and **narrative spine** before further story or scene rewrites. The game intentionally mixes:

- **Choose Your Own Adventure (CYOA)**-style *agency* and *explicit forks* (second person, consequential choices).
- **Classic parser adventures** (*Colossal Cave*, *Zork*): *spatial exploration*, *typed commands*, *light simulation* (objects, doors, inventory), and *discovery through experimentation*.

**Current direction (locked):** Parser-first, cave-like hub structure, original mythic fantasy, family-friendly tone, strict EN/ES parity, **~30 min** average first myth, **v1 = first myth only** (myths 2–3 deferred).

---

## 2. Reference: what CYOA did well (per *The Cave of Time* / IF50)

Source: [Aaron A. Reed, “1979: The Cave of Time”](https://if50.substack.com/p/1979-the-cave-of-time).

| Idea | Implication for us |
|------|---------------------|
| **Second person, “you”** | Keep “you”; class flavors perception. **Different mortal per class** (not one soul replayed). |
| **Choices feel frequent** | We lean **typing** over buttons; “choice” moments can still appear as **typed goals** or occasional buttons where useful. |
| **Many endings** | **Bad endings allowed**; pair with **~80% logical, ~20% risky** outcomes so failures feel teachable, not arbitrary. |
| **Branching shape** | **Cave-like**: paths diverge and **rejoin** around hubs rather than purely radial one-off twigs. |
| **Parser friction** | Synonyms, `help`, onboarding remain important because input is **mostly typing**. |

---

## 3. Reference: parser classics (*Colossal Cave*, *Zork I*)

| Idea | Implication for us |
|------|---------------------|
| **Place as character** | Hubs reward return visits; room text can shift slightly with inventory or plot flags. |
| **Light puzzles** | Teach examine → take → use; keep verbal **danger** modest (see §5). |
| **Tone** | Room for **dry wit** alongside **epic** and **educational** beats (§5). |
| **Score** | **Not required** — no visible favor/kleos meter unless we revisit later. |

---

## 4. Current implementation snapshot (codebase)

| Area | Today |
|------|--------|
| **Structure** | `story.json` scene graph + `translations.ts` for EN/ES. |
| **Input** | **Keyword parser** + choice buttons on some scenes. |
| **Roles** | Wizard, hero, thief — character-specific text and special items/actions. |
| **Flow** | Title → character select → optional onboarding → intro → awakening → prison → Athena → **Hercules / Hydra** (Daedalus & Persephone disabled — **v1 out of scope**). |
| **Persistence** | LocalStorage; `migrateStorySceneId` and similar for renamed scenes. |

**v1 scope:** **Myth 2 (Daedalus) and myth 3 (Persephone) are out of scope** — no requirement to ship or enable them in the first release. **Target:** **~30 minutes** average for completing **one** myth (Hydra path) once content is tuned.

**Ongoing:** Parser teaching can stay **mostly diegetic**; violence in myth combat should be reviewed against §5.3.

---

## 5. Design pillars (locked from Q&A)

1. **Audience** — Written for **kids, teenagers, and adults**; **any gender**; no assumption of prior parser experience (onboarding + `help` stay first-class).

2. **Tone — epic + wit + educational** — Grand stakes and mythic voice, occasional understated humor (cave-adventure tradition), and **teachable** references to myth (original fantasy inspired by Greek motifs, not a scholarly retelling).

3. **Safety / comfort** — **No horror.** **As little violence as possible** in prose: prefer tension, strategy, cleverness, and **offstage** or **abstract** harm over gore or prolonged suffering. Bosses (Hydra, future Minotaur, Underworld) framed as **trials** rather than splatter.

4. **Parser-first** — **Mostly typing.** **Parser-only gates are acceptable** for major beats (no obligation to duplicate every moment as a button).

5. **Outcomes** — **Bad endings are in scope**; aim for **~80%** of setbacks to feel **fair / logical** and **~20%** deliberate **risk**. **No score UI.** After a bad ending, player may **restart from Athena’s quest-choice screen** (the scene where Hercules / Daedalus / Persephone branches are offered) **or** perform a **full reset** — implementation may use **either** pattern or **offer both** (see §6).

6. **World structure** — **Cave-like**: explore, loop, recombine; fewer “one-way random twigs” than early CYOA.

7. **Roles** — **Three different mortals** (one per class), same **setting frame** (trials, gods). **Player name** is **optional / low impact** — do not hang plot beats on it.

8. **Class and myths** — Class changes **both** offered myths (when multiple exist) **and** scene **flavor** / some branches. **Canon:** **original** fantasy in a Greek-myth **register** (not fidelity to a single classical text).

9. **Localization** — **Strict parallel:** Spanish and English should match in meaning, beats, and teachable content (allow natural idiom differences, not divergent plots).

10. **Scope** — Long-term: **three myths**. **v1:** **first myth (Hydra) only**; myths 2–3 **out of scope** until a later release. **No in-game glossary/codex for v1** (optional later).

11. **Pacing** — **~30 minutes** average to reach the **end of one myth** (successful path through that myth’s puzzle arc), once tuned.

---

## 6. Mechanics matrix (target)

| Mechanic | Our target |
|----------|------------|
| **Primary input** | **Typing**; synonyms + help; buttons optional. |
| **Branching** | **Cave-like** hubs; paths can rejoin. |
| **Death / failure** | **Yes** — bad endings OK. **Recovery:** restart from **Athena’s quest-choice screen** and/or **full reset** (design accepts either; UX TBD if we expose one or both). |
| **Command discovery** | Core loop: examine, take, use, movement verbs; expand lists as scenes grow. |
| **Inventory** | Keep as part of puzzle / character fantasy. |
| **Length per run** | **~30 min** average for one full myth completion (tune with playtesting). |
| **Score** | None (implicit outcomes only). |

---

## 7. Storyline — layers

### 7.1 Premise

**Athena** exists primarily to give a **clear narrative frame**: Greek-flavored trials, a recognizable patron of wisdom/strategy, and a natural moment to **offer myth branches**. The fiction does **not** depend on explaining whether the temple, prison, or trials are “really” happening, a **dream**, or something else — **that ambiguity is intentionally low priority** and need not be resolved for the player to enjoy a run.

The three mortals (classes) face **the trials themselves** as the structure of the game; deeper cosmology can stay light.

### 7.2 Timeline

**Not a design constraint.** Story beats should **not** depend on clock time, travel time, or strict chronology between scenes. Advancement is **event-driven** (puzzles solved, doors passed, myth milestones), not simulated duration.

### 7.3 Antagonistic forces

What opposes the player is **the trials themselves** — obstacles, puzzles, and mythic set-pieces — rather than a single villain monologue or cosmic war as the default engine. Individual myths may still have creatures (Hydra, etc.) framed as **trial opponents** (see §5.3).

### 7.4 Act structure (working)

| Act | Rough content | Scenes / notes |
|-----|----------------|----------------|
| I | Arrival, first trial, parser onboarding | intro → awakening → scroll / door → … |
| II | Divine briefing, myth commitment | Athena; **v1: Hydra branch only** |
| III | First myth resolution | Hercules / Hydra graph — **v1 polish target** |
| IV | Other myths, epilogue | **Post–v1** (myths 2–3); see §7.5 meta ending |

### 7.5 Ending taxonomy

- **Triumph** — Player helps the mythic hero **solve the puzzle** / complete the trial successfully (core positive closure per run).
- **Secrets** — Optional branches, easter-egg style discoveries, or non-obvious success paths worth replay.
- **Bad / setback endings** — Allowed (§5.5); keep **no horror** and **minimal violence** in text.
- **Meta ending (post–v1, requires all three myths in the game):** When the player has **completed all three myth arcs** (three “full” successes across the designed trilogy — not v1 alone), **reveal** that the entire adventure was **a dream** while the protagonist was **travelling by train across Athens**. This is a **long-term** capstone, blocked until myths 2–3 exist and can be beaten; **strict parallel** EN/ES when implemented.

### 7.6 Non-negotiable story beats

1. **Every successful v1 run** must allow the player to **reach the end of one myth** in the sense of **helping the hero solve the puzzle** (complete that myth’s arc — Hydra path for v1).
2. **Athena-as-frame** remains the default briefing / branch structure unless a future redesign explicitly replaces it.
3. **Comfort constraints** from §5.3 apply to all written endings.

---

## 8. Resolved Q&A (archive)

| # | Topic | Decision |
|---|--------|----------|
| 1 | Audience | Kids, teens, adults; any gender. |
| 2 | Tone | Epic + wit + educational. |
| 3 | Violence / horror | No horror; as little violence as possible. |
| 4 | Choices vs typing | **Mostly typing.** |
| 5 | Parser-only beats | **OK** — not every major beat needs a button. |
| 6 | Bad endings | **Yes.** Recovery: restart to **Athena’s quest-choice screen** and/or **full reset** (either acceptable). |
| 7 | Fairness | **~80% logical, ~20% risky.** |
| 8 | Score | **None required.** |
| 9 | Length per run | **~30 min** average for one myth completion (tune with playtests). |
| 10 | Three myths | Long-term three; **v1: first myth only** while robustness and polish land. |
| 11 | Hub model | **Cave-like** (merge / hub-and-spoke). |
| 12 | Same soul vs classes | **Different mortals** per class. |
| 13 | Player name | **Does not matter** for plot (keep optional, light). |
| 14 | Class vs myths | **Both** flavor and **which** myths are offered (when enabled). |
| 15 | Canon | **Original** fantasy (myth-flavored, not source-faithful). |
| 16 | Non-negotiable beats | **§7.6** — must finish one myth by helping hero solve puzzle; comfort + frame beats. |
| 17 | EN / ES | **Strict parallel.** |
| 18 | Glossary / codex | **Not for v1** / no need for now. |
| 19 | Production priority | **One polished myth** first. |
| 20 | v1 out of scope | **Myth 2 and myth 3** (content + enablement) **out of scope for v1.** |

---

## 9. Open decisions (short list)

*None blocking narrative direction.* Optional later:

- **Bad-ending UX:** choose one UX or offer both — **return to Athena’s quest-choice scene** vs **full reset to title/character flow** (design allows either).
- **Secret content** for v1: which optional branches count as “secrets” beyond the post–v1 train meta-ending.

---

## 10. Next steps

1. Tune Hydra path toward **~30 min** average playtime.  
2. **Hydra path:** prose pass for **low violence**, **no horror**, **80/20** fairness; cave-like hubs where useful.  
3. Keep Daedalus / Persephone **disabled** until post–v1; document meta-ending in `story.json` / translations when implementing trilogy completion.  
4. Optional: ASCII or Mermaid **scene graph** for Act I + Hydra in `docs/`.  
5. Implement bad-end flow (restart at **Athena’s quest choice** vs full reset) per §9.

---

## 11. Appendix — links

- [IF50: 1979 — The Cave of Time](https://if50.substack.com/p/1979-the-cave-of-time)  
- Internal: `src/data/story.json`, `src/i18n/translations.ts`, `src/constants.ts`, `src/components/Game.tsx`.
