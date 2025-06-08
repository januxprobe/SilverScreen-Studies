# SilverScreen Studies - Development Rules

## Project Goals

- Develop interactive lessons, tests, and flashcards for photography education (as outlined in `docs/blueprint.md`).
- Implement personalized feedback using AI (Genkit) based on user-uploaded photos.
- Create a directory of photography resources.

## Coding Style Guidelines

- Use consistent naming conventions for components and variables (e.g., PascalCase for components, camelCase for variables).
- Organize components into logical directories (e.g., `src/components/layout`, `src/components/ui`).
- Use TypeScript for all new code.
- Follow the UI/UX guidelines below.

## UI/UX Guidelines

- Use the UI components from `src/components/ui` consistently throughout the application.
- Maintain a consistent color scheme based on the style guide:
    - Primary color: Dark Olive Green (`#556B2F`)
    - Background color: Very light, desaturated Olive Green (`#F0F8E6`)
    - Accent color: Muted Gold (`#BDB76B`)
- Ensure the application is responsive and works well on mobile devices (use `src/hooks/use-mobile.tsx` to detect mobile devices).

## AI Guidelines

- Use Genkit to implement the personalized feedback feature.
- Ensure that AI functions are modular and well-tested (see `src/ai/`).
- Handle user data and API keys securely (see notes on `.env` files).

## Component Structure

- Create React components for each UI element.
- Place them in `src/components`.
- If the component is part of the UI library, put it in `src/components/ui`.
- If the component is part of the layout, put it in `src/components/layout`.
