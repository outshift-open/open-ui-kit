# Codex Guide

Read `AGENTS.md` first. It is the canonical agent guide for this repository.

Codex-specific notes:

- Use `rg` for search and inspect nearby code before editing.
- Prefer focused patches and explicit file staging.
- Run the smallest meaningful validation for the change, then broaden checks when shared behavior is touched.
- Keep branch and release workflow changes separate from component changes unless the task explicitly connects them.
