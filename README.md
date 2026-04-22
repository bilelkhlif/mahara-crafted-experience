# Mahara Crafted Experience

Mahara Crafted Experience is a frontend-first marketplace experience built with React, TypeScript, and Vite. The product is designed around two complementary journeys: one for service providers and one for clients.

## UI Experience

The interface is organized as a full product journey rather than isolated screens.

- Landing flow with narrative sections:
	- Hero, problem framing, solution positioning, trust signals, AI value, and a clear call to action.
- Dual-role dashboard architecture:
	- Provider and client each have dedicated navigation, tailored widgets, and role-specific workflows.
- Clear action hierarchy:
	- Frequent actions (messages, orders, gigs, recommendations) are surfaced with badges and quick access paths.
- Trust and decision support:
	- Reputation, reviews, analytics, and AI-assisted recommendations are integrated into the core navigation.
- Modern component system:
	- Built with reusable UI primitives and utility-first styling for consistency and responsive behavior.

### Provider Journey

The provider experience is focused on operational clarity and growth.

- Dashboard overview for daily visibility.
- Earnings and wallet pages for financial tracking.
- Gigs and calendar for planning and delivery.
- Messages for client communication.
- AI assistant, analytics, and reputation pages for performance optimization.

### Client Journey

The client experience is focused on speed, confidence, and follow-through.

- Dashboard overview for active activity.
- Search and recommendations for discovery.
- Orders and messages for execution.
- Favorites and reviews for quality control and decision memory.

## Tech Stack

- React 18
- TypeScript
- Vite 5
- React Router
- TanStack Query
- Tailwind CSS
- Radix UI primitives
- Framer Motion

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Run tests:

```bash
npm run test
```

## Project Structure

- `src/pages`: Route-level pages for landing, provider, and client views.
- `src/components`: Shared UI and feature components.
- `src/data`: Mock and seed data used by dashboards and flows.
- `src/hooks`: Reusable hooks for feature logic.

## Status

This repository currently focuses on delivering and refining the frontend user experience for the Mahara platform.
