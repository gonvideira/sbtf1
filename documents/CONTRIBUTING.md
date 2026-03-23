# **🚀 Team Development Workflow: The "AI-Accelerated GitHub Flow"**

Welcome to the team workflow guide\! This document outlines how we build, test, and ship software using **GitHub**, **Claude Code**, and our **Antigravity** stack.

Our goal is maximum velocity without sacrificing stability. We achieve this by heavily leveraging AI for writing code (the "Inner Loop") while relying on strict, human-driven code reviews and structural guidelines (the "Outer Loop").

## **🏗️ 1\. Branching Strategy**

We use a modified, team-friendly version of the "Solo GitHub Flow."

* **Rule \#1: NEVER push directly to main.** The main branch is protected.  
* **Rule \#2: Short-lived branches.** Branches should live for hours or a few days at most, not weeks.  
* **Rule \#3: Squash-Merge Only.** You can make 50 messy "WIP" commits on your branch. When merged, they will be squashed into a single, clean commit on main.

**Branch Naming Conventions:**

Always prefix your branches so the team knows what you are working on:

* feat/ (e.g., feat/recurring-invoices)  
* fix/ (e.g., fix/stripe-webhook-retry)  
* chore/ (e.g., chore/supabase-rls-policies)  
* refactor/ (e.g., refactor/auth-module)  
* docs/ (e.g., docs/api-endpoints)

## **🎫 2\. Issues, Labels & Milestones**

Every piece of work starts as an Issue. Keep issues short and actionable.

**Issue Anatomy:**

* **What:** One sentence describing the goal.  
* **Why:** One sentence describing the user/business value.  
* **Tasks:** A markdown checklist (- \[ \]) of acceptance criteria.

**Labels (14 total):**

When creating an issue, assign one label from each category:

1. **Type:** feature, bug, chore, spike  
2. **Area:** api, frontend, billing, database, auth (adjust to our stack)  
3. **Priority:** P0-critical, P1-important, P2-normal

**Milestones (The Roadmap):**

Issues are grouped into Milestones (e.g., v0.1.0 \- Core Invoicing). **Do not pull issues outside of the current active milestone.** \---

## **⚡ 3\. The Daily Developer Loop**

This is how you actually write code day-to-day. It is split into two phases.

### **Phase A: The "Inner Loop" (You, Claude Code, and Localhost)**

This is where you iterate fast. You live here 90% of the time.

1. **Pick & Branch:** Assign an issue to yourself from the current milestone. Check out a branch using the prefix rules.  
   * *Claude prompt:* \`"Look at issue \#14, check out a new branch following our prefix rules, and summarize what we need to build."\*  
2. **AI-Assisted Dev:** Use Claude Code to write the core logic within our Antigravity stack.  
3. **MANDATORY Localhost Testing:** Run your local environment (localhost). **If it hasn't run on localhost, it doesn't get a PR.**  
4. **Debug with AI:** If localhost throws an error, copy the stack trace and feed it back to Claude.  
   * *Claude prompt:* \`"Localhost is throwing this error on the auth route: \[paste error\]. Fix the antigravity service logic."\*

### **Phase B: The "Outer Loop" (Commit, PR, and Review)**

Once your localhost is running perfectly, transition to the Outer Loop.

5. **Pre-flight Check:** Run the local test suite. Ensure your new code didn't break existing features.  
6. **Commit & PR:** Have Claude stage, commit, and open the PR. Since we squash-merge, the PR title is critical.  
   * *Claude prompt:* \`"The localhost tests passed. Commit this and open a PR. Make sure the PR title is clean (e.g., 'feat: generate PDF invoices') and the description includes 'Closes \#14'."\*  
7. **Team Review:** At least 1 team member must approve the PR. Since functionality was verified on localhost, the reviewer focuses on architecture, security, and code quality.  
8. **Squash and Merge:** Once approved, squash-merge into main and delete the branch.

## **🏷️ 4\. Release Tags (SemVer)**

We tag releases when a Milestone closes, not on every merge.

Format: 0.MILESTONE.PATCH

* 0.1.0 → Milestone complete.  
* 0.1.1 → Hotfix merged into an already completed milestone.  
* 1.0.0 → Public Launch 🚀

## **📂 5\. Required Repository Templates**

To enforce this workflow, we use GitHub templates. Please ensure these files are added to the repository.

### **Pull Request Template**

**Filepath:** .github/pull\_request\_template.md

\#\# What does this PR do?  
\<\!-- Describe the purpose of this PR. \--\>

\#\# Why are we doing this?  
\<\!-- Link to the issue and explain the value. \--\>  
Closes \#\<\!-- Issue Number \--\>

\#\# 🚨 MANDATORY Pre-Flight Checklist  
\<\!-- You MUST check these before requesting a review\! \--\>  
\- \[ \] \*\*I have thoroughly tested these changes on my \`localhost\` environment.\*\*  
\- \[ \] My PR title follows the conventional format (e.g., \`feat: ...\`, \`fix: ...\`).  
\- \[ \] I have run the local test suite, and all tests pass.  
\- \[ \] Claude Code/AI generated code has been manually reviewed by me for hallucinations or security flaws.

\#\# Tasks Completed  
\<\!-- List the specific technical tasks finished in this PR \--\>  
\- \[ \] Task 1  
\- \[ \] Task 2

### **Issue Template (Feature Request)**

**Filepath:** .github/ISSUE\_TEMPLATE/feature\_request.md

\---  
name: Feature Request  
about: Propose a new feature for the milestone  
title: 'feat: '  
labels: feature  
assignees: ''  
\---

\#\# What  
\<\!-- One concise sentence explaining what needs to be built. \--\>

\#\# Why  
\<\!-- One concise sentence explaining the user or business value. \--\>

\#\# Tasks  
\<\!-- Checklist of what needs to be completed to close this issue. \--\>  
\- \[ \]   
\- \[ \]   
