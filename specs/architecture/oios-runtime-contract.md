# OIOS Runtime Contract (ORC)

Version 1.0.0. Individual engine compatibility remains unverified until tested.

Every engine contract declares a canonical engine identifier, semantic version, lifecycle status, capabilities, emitted and accepted events, states and transitions, API operations, and evidence supporting any runtime-verified claim.

Compatibility resolves the engine and version constraint, loads its contract from a trusted registry, checks version policy and required capabilities, states, events and APIs, verifies that the tested implementation matches the contract hash, and requires execution evidence for behavior that cannot be established structurally.

A missing contract or required evidence yields BLOCKED, not PASS. A contract marked declared is an assertion only.
