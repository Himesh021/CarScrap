# Car2Scrap

Car2Scrap is a polished React + TypeScript marketplace and operations platform for selling end-of-life vehicles quickly and transparently. The product combines a customer-facing landing experience with a lead capture flow, instant scrap-value calculator, and admin CRM for managing leads and bookings.

## Why this project matters

This project demonstrates a full conversion funnel for a scrap-car business:
- visitors discover the service through a trust-first landing page
- they estimate car value with a real pricing calculator
- they submit a quote request without friction
- admins review and process leads from a CRM dashboard

## Feature highlights
- Responsive marketing website with clear conversion-focused CTAs
- Instant scrap-value calculator using vehicle category, age, and condition
- Lead capture flow with validation and submission to Supabase
- Admin dashboard with filtering, status management, and CSV export
- Authentication flow for admin access
- SEO-ready structure, accessible navigation, and deployment-friendly configuration

## Architecture

The app is built as a Vite React single-page application with a component-driven UI and a Supabase backend for data persistence and auth.

Key layers:
- Frontend: React, TypeScript, Vite, Tailwind CSS, shadcn/ui components
- State/data: React Query + Supabase client
- Validation: Zod + React Hook Form
- Styling: Tailwind design tokens and custom utility classes
- Deployment target: Vercel or any static hosting provider for the frontend

## Local setup

```bash
npm install
cp .env.example .env
npm run dev
```

## Environment variables

Create a local `.env` file with the values for your Supabase project:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key
```

## Available scripts

```bash
npm run dev
npm run build
npm run lint
npm test
```

## Admin workflow

- Public users can request a quote via the landing page or calculator
- Leads are stored in Supabase and can be managed from the admin dashboard
- Admin users sign in through the `/auth` page and can update lead statuses
- CSV export enables offline follow-up and sales reporting

## Deployment

Recommended deployment options:
- Vercel for the frontend with environment variables configured in Project Settings
- Supabase for auth and database persistence

For production, set the following variables in the hosting platform:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

## Case study

This product is built for a real-world scrap-car operation where trust and speed matter most. The business model depends on fast responses, transparent pricing, and a frictionless pickup process. The site reduces uncertainty for customers by showing value immediately, while giving staff a structured workflow to convert inquiries into booked pickups.

## Demo and portfolio notes

- Website: landing page + calculator + service pages + contact flow
- Admin panel: customer tracking and lead management
- Data layer: Supabase tables for leads and role checks
- Design system: modern SaaS style tuned for trust, eco-friendly branding, and conversion

## Project structure

```bash
src/
  components/
  hooks/
  integrations/
  lib/
  pages/
  test/
  App.tsx
supabase/
  functions/
  migrations/
```

## Future improvements

- richer lead analytics and conversion dashboards
- WhatsApp automation and follow-up sequences
- CRM integrations for call center workflows
- more advanced pricing rules by weight, city, and scrap rate changes
- automated compliance tracking for vehicle deregistration

## License

This project is intended for demonstration and portfolio use.