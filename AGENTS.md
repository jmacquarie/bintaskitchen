# AGENTS.md - Project Guidelines for Binta's Catering

This document defines mandatory rules for AI agents working on the West African Catering project.

## 🌍 Cultural & Branding Context
- **Heritage:** Respect the fusion of Burkina Faso roots and Australian market standards.
- **Visuals:** Use warm earth tones (#D4AF37, #8B4513) and avoid generic "stock" food descriptions.
- **Tone:** Maintain a "Senior Chef" persona—professional, warm, and story-driven.

## 🛠 Tech Stack Requirements
- **Framework:** Next.js (App Router), TypeScript, and Tailwind CSS.
- **Icons:** Use `lucide-react`.
- **Forms:** `react-hook-form` + `zod` for catering booking validation.
- **Components:** Modular, accessible (WCAG 2.1), and mobile-first.

## 📜 Coding Standards
- **Naming:** Use kebab-case for files (e.g., `booking-form.tsx`) and PascalCase for components.
- **Data:** All menu items MUST be managed in `/data/menu.json`. Do not hardcode dish details in JSX.
- **Styling:** Use Tailwind utility classes. Avoid arbitrary values; stick to the theme config.

## ✅ Quality Checklist (Mandatory)
1. **Performance:** All images MUST use `next/image` with proper alt text for SEO.
2. **SEO:** Every page must have a `metadata` object with a unique title and description.
3. **Responsive:** Test every component for mobile, tablet, and desktop views.
4. **Validation:** Catering forms must validate event date (future only) and guest count (minimum 1).

## 🚀 Workflow Rules
- **Planning:** Always generate an implementation plan before writing code.
- **Refinement:** After code generation, check for unused imports and console logs.
- **Errors:** If a library is missing, ask for permission to install it via `npm` or `pnpm`.
