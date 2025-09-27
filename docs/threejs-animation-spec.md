# Three.js Animation Concept Spec

## Purpose
- Elevate the portfolio's first impression with cinematic-yet-calm 3D motion that mirrors the narrative tone already present in the copy.
- Reinforce three signature themes: thoughtful discovery, agentic AI craft, and collaborative delivery.
- Keep interaction lightweight (sub‑35% GPU) on modern laptops while providing graceful fallbacks for low-power devices and assistive tech.

## Tooling & Integration Baseline
- Stack: `three`, `@react-three/fiber`, `@react-three/drei`, `three-stdlib`, plus a shared `ThemeContext` hook for color palettes.
- Canvas host: dedicated React components (`HeroScene`, `ProjectsScene`, `SkillsScene`) rendered inside existing sections.
- Rendering: WebGL primary, SVG/CSS animated illustration fallback based on assets in `docs/assets` (added in this spec) through feature detection guard (`supportsWebGL2`).
- State linkage: React Context for theme, Zustand store (new) for animation timeline cues if cross-section sync is needed.

## Scene 01 — Journey Portal (Hero)
- **Narrative**: A luminous data ribbon flows around a central “listening orb,” echoing the four HERO_STORY_BEATS. Icons from story beats appear as holo cards orbiting the orb.
- **Layout**: Full-width canvas behind existing hero copy. Orb centered behind the hero headline, orbit cards align with list items.
- **Geometry**:
  - Core orb: subdivided `IcosahedronGeometry` with glassy shader (refraction via `MeshTransmissionMaterial`).
  - Data ribbon: instanced `CatmullRomCurve3` tube with shader-driven gradient pulse synchronized to `storyProgress` state.
  - Story glyphs: plane meshes with subtle `ShaderMaterial` fresnel, each keyed to `HERO_STORY_BEATS` indices.
- **Motion**:
  - Idle: Orb slowly rotates on Y-axis (8s loop), ribbon pulses every beat cycle (matching `STORY_DURATION_MS`).
  - Interaction: Hover over hero story list highlights corresponding glyph (scale-up, emissive bloom), clicking focuses camera dolly inward for 1.5s.
  - Scroll tie-in: As hero leaves viewport, timeline scrubs to fade materials out and reduce render resolution (`dpr`) to 0.75.
- **Fallback**: SVG `journey-portal.svg` layered behind content, CSS animation on gradient masks to mimic pulse.

## Scene 02 — Orbiting Case Files (Projects)
- **Narrative**: Project cards float as translucent panels in orbital paths, illustrating multi-track delivery. Planets correspond to project categories.
- **Layout**: Canvas anchored to top of Projects page, height ~420px, sits above grid of project cards.
- **Geometry**:
  - Central node: low-poly truncated octahedron with emissive edges.
  - Orbit rings: multiple `RingGeometry` with dashed materials for depth.
  - Project panels: `RoundedBoxGeometry` using textures generated from card thumbnails, with subtle parallax text overlay via `Html` from drei.
  - Connector particles: GPU-instanced light sprites (approx 120) using `PointsMaterial` with additive blending.
- **Motion**:
  - Idle: Panels orbit at varying angular velocities (10–16s loops), gentle bobbing using simplex noise.
  - Interaction: Hover on a project card in DOM triggers corresponding panel highlight (color shift, orbit pause). Clicking DOM card brings camera focus to panel and shows detail tooltip rendered inside the canvas.
  - Scroll: Section entrance animates rings drawing themselves via shader uniform; exit fades to 40% opacity.
- **Fallback**: SVG `orbiting-case-files.svg` illustrating central poly with radial connectors.

## Scene 03 — Skill Pulse Grid (Skills)
- **Narrative**: A reactive grid of tiles pulses with AI “signal” bands whenever a skill tag is highlighted, embodying calm intelligence.
- **Layout**: Canvas embedded as background of Skills list; ensures text contrast via additive light rays kept below 0.35 intensity.
- **Geometry**:
  - Base grid: 6x4 array of thin boxes with emissive caps.
  - Signal bands: shader-driven sine waves mapped along XZ plane using `planeGeometry` with displacement map.
  - Icon billboards: minimal `SpriteMaterial` icons floating slightly above each tile, tinted by skill category (frontend, backend, leadership, AI).
- **Motion**:
  - Idle: Subtle breathing of grid intensity (5s loop) using shared easing curve.
  - Interaction: Hovering DOM skill tag sends event to R3F store: nearest tile spikes brightness, emits vertical beam, and triggers perlin ripple across neighbors.
  - Keyboard focus: Focused skill triggers same event for accessibility parity.
- **Fallback**: SVG `skill-pulse-grid.svg` with layered rectangles, blend gradients, and stroke icons.

## Shared Interaction Guidelines
- Use `@react-three/drei` `ScrollControls` or manual `useScroll` to align animations with viewport entry (GSAP optional but not required).
- Provide `prefers-reduced-motion` check to disable camera moves, relying on static fallback frames.
- Use `EffectComposer` with mild bloom (threshold 0.78, strength 0.4) and SSAO only on desktop > 1024px.
- Limit poly count (<45k tris combined), use texture atlases for project panels, compress via `KTX2` if introducing photographic textures later.

## Implementation Roadmap
1. **Infrastructure (0.5 day)**: Install Three.js stack, create `ThreeCanvas` wrapper with DPR management, WebGL feature detection, motion preference guard.
2. **Scene scaffolding (1.5 days)**: Build base components, load test data, ensure layout integration with existing CSS, stub fallback injection.
3. **Hero Journey Portal (1.5 days)**: Model orb + ribbon, connect to `HERO_STORY_BEATS`, implement hover/click interactions, tune post-processing.
4. **Projects Orbit (1.5 days)**: Build orbital mechanics, data-driven panels, DOM ↔ canvas event bridge.
5. **Skills Pulse Grid (1 day)**: Implement grid shader, tie into skill tags, add focus/hover hooks.
6. **Polish & QA (1 day)**: Performance profiling, accessibility review, fallback verification, cross-device smoke tests.

## Open Questions
- Should Testimonials incorporate 3D elements (e.g., floating quotes) or remain 2D for focus on clarity?
- Need confirmation on color palette for emissive/glass materials—stick with existing gradient (#6c5ce7→#00cec9) or evolve to deeper tones?
- Are additional call-to-action triggers desired from canvas interactions (e.g., open contact modal when certain beat selected)?

## Assets
SVG mockups that echo the planned motion live in `docs/assets/`:
- `journey-portal.svg`
- `orbiting-case-files.svg`
- `skill-pulse-grid.svg`

These serve as fallback art direction references and can be refined once Three.js scenes are prototyped.
