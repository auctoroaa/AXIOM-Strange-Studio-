# Visual System

**Product:** Strange Studio  
**System:** Observable Intelligence Operating System (OIOS)  
**Tagline:** See. Think. Build.

## Visual premise

The interface has three synchronized perspectives on the same intelligence:
- **Mind View:** memory, planning, reasoning, tools, verification.
- **City View:** Memory City, Workshop District, Delivery Harbor.
- **Machine View:** compute, models, memory fabric, APIs, infrastructure.

All views converge on the Intelligence Core and share one state model. They must never become three contradictory versions of reality.

## Primary regions

### The Observatory
Global activity, health, open work, recent events, truth classifications, evidence, and confidence.

### Agent Mind
Memory Constellation, Tool Galaxy, Agent Core, Verification Ring, and Planning Layer. Each visible node should open an inspection panel containing purpose, inputs, outputs, dependencies, state, history, ownership, and confidence when known.

### Memory City
Great Library, Archive Tower, Source Hall, Connection Gardens, and Knowledge Routes. Knowledge links must resolve to actual source or relationship records.

### Workshop District
Blueprint Hall → Builder Guild → Toolbox Forge → Assembly Chambers → Verification Station. Builder states: Idle, Researching, Working, Waiting, Blocked, Failed, Complete, Simulated.

### Intelligence Railway
Stations: Request, Planning, Research, Build/Execution, Verification, Delivery. Retry and failure routes are visible, not hidden behind a success-only path.

### Transparent Machine
Compute, models, memory, APIs, and infrastructure. Unknown telemetry must not be represented as healthy telemetry.

### Delivery Harbor
Verification Dock → Approval Gate → Launch Pier → Delivery Fleet. Outputs include websites, reports, apps, APIs, and knowledge artifacts. The gate must evaluate explicit requirements.

## State language

| State | Meaning | UI treatment |
|---|---|---|
| Ready | Available for work | Stable geometry |
| Working | Work is actually in progress | Restrained motion tied to events |
| Waiting | Waiting on a dependency or approval | Slow pulse with reason |
| Blocked | Cannot proceed | Broken path plus blocking dependency |
| Failed | Attempt failed | Clear failure marker and preserved history |
| Complete | Required work finished | Completion indicator tied to evidence |
| Unknown | State cannot be established | Neutral/partial treatment |
| Low confidence | Evidence is weak or incomplete | Translucency plus explicit label |
| Simulated | Demonstration or sandbox state | Purple simulation label, never confused with live state |

Color is not the sole signal. Labels, icons, and accessible contrast must communicate state too.

## Interaction principles

- Motion communicates an actual state change or a navigational transition.
- No decorative animation that implies work is occurring.
- Every important node is inspectable.
- Dependency and impact paths are navigable.
- History preserves previous states and failed attempts.
- Empty, loading, unavailable, and error states receive deliberate designs.
- Respect reduced-motion preferences.

## Responsive behavior

On small screens, prioritize the Observatory summary, active workflow, truth/evidence indicators, and inspectable details. A dense spatial map should collapse into navigable lists or panels rather than becoming an unusable miniature.

## Prototype boundary

The current frontend uses local demonstration data. It illustrates hierarchy and visual language, not a live agent graph, real infrastructure telemetry, or production verification engine.
