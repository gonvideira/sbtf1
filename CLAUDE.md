# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**See [AGENTS.md](AGENTS.md) for the full team workflow, architecture, and project conventions — it is the source of truth and applies to Claude Code as well.**

The critical rules bear repeating here since they are easy to violate by accident:

- 🚫 **Never work on `main`.** Always `git checkout -b feat/your-feature-name` (or `fix/`, `chore/`, `refactor/`, `docs/`) before making changes.
- 📝 **Always update `CHANGELOG.md`** under `[Unreleased]` when completing a feature, fix, or closing an issue.

Everything else — commands, architecture, design system, local-only folders, issue/PR conventions — lives in [AGENTS.md](AGENTS.md).
