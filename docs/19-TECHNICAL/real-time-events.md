# Real Time Events

**Status:** Proposed specification. This document does not by itself imply implementation.
**System:** Strange Studio · Observable Intelligence Operating System (OIOS)

## Purpose

Describe the intended role of real time events within Strange Studio.

## Minimum event envelope

Every runtime event should include a stable ID, UTC timestamp, event type, source, workflow/correlation ID, state transition when applicable, and a validated versioned payload. UI animation is not a system event.

## Implementation boundary

This document is part of the design corpus, not evidence of a completed runtime component. Track implementation and verification separately.
