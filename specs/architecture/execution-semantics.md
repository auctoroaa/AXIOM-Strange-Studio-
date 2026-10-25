# Execution Semantics

Each workflow stage has a stable ID and explicit allowed successors. Terminal stages are explicit. Unknown stage references fail validation.

Required static checks: duplicate stage IDs, unknown transition targets, unreachable required stages, reachable non-terminal dead ends, terminal-state policy, forbidden cycles, missing verification before protected delivery, invalid transition guards, invalid retry-state references, and events without observable effects where required.

Static graph validation does not prove execution. Runtime tests record the input artifact hash, engine contract version, start and end status, emitted events, state transitions and observable outputs.
