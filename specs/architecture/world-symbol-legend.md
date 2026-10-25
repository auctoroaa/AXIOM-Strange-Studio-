# Strange Studio World Symbol Legend

Status: specification baseline; this does not claim runtime coverage.

## Color semantics

- Blue: active
- Green: verified, only with authorized verification result
- Gold: discovery, not certification
- Amber: warning / attention needed
- Red: failure or invalidated state
- Purple: simulation, never silently promoted to observed fact
- White: trust context, not a certificate by itself
- Black: unknown / unresolved
- Cyan: knowledge category, not a truth verdict

Color must never be the only carrier of meaning. Use labels/shapes for accessibility.

## Canonical symbols

| Meaning | Symbol |
|---|---|
| Agent | `◉` |
| Builder / Researcher / Verifier / Strategist | `◉ Builder` / `◈ Researcher` / `⬢ Verifier` / `⬟ Strategist` |
| Workflow | `═►` |
| Event / major event | `✦` / `✦✦` |
| Context / Tool / Delivery | `⬡` / `⚒` / `📦` |
| Unknown | `?` / `◌` |
| Knowledge record / archive / graph / relic | `📖` / `🏛` / `⬢──⬢` / `◇` |
| Supports / Contradicts / Refines / DerivedFrom / DependsOn | `➜` / `⚔` / `⬆` / `◁` / `⛓` |
| Certified / AAA authority / certificate / revoked / expired | `◈` / `⚖` / `⚖◇` / `⚖✖` / `⚖⌛` |
| Lineage / Evidence bundle / Provenance / Verified knowledge | `🌿` / `📚` / `🧾` / `📖✓` |
| Objective / Plan / Recommendation / Campaign | `🎯` / `🗺` / `➤` / `🏴` |
| Seed / Meaning / Function / Human Model / Architecture | `🌱` / `🌸` / `⚙` / `👤` / `🏗` |
| Builder Hut / Library / Workshop / Debate Hall / Railway | `⌂` / `🏛` / `⚒` / `⚔` / `═╬═` |
| Architecture Academy / AAA Citadel / Observatory | `🏗` / `⚖🏛` / `◉` |
| First Monolith / Infinite Archive / Ouroboros Gate / Map of Everything | `◇⚖` / `📖∞` / `∞` / `🗺◇` |

Global quick reference: `◇` Artifact; `⚖` Trust; `📖` Knowledge; `🎯` Objective; `⚒` Execution; `🌱` Idea; `🧾` Evidence; `🌿` Lineage; `⚔` Contradiction; `🏛` Archive; `🏗` Architecture; `◉` Observability; `?` Unknown.

Workflow states map separately from identity: running = blue; waiting = gold; blocked/failure = red; complete = green only when authoritative; simulation remains explicitly purple/labeled. Unknown remains unresolved. Revoked/expired trust must not display current certification.

Every symbol requires an accessible text label. Tests should cover canonical keys, unknown fallback, state-to-color mapping, and trust lifecycle. Legend entries document intended semantics, not proof of rendered implementation.
