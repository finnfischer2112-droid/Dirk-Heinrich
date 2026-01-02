# Dirk Heinrich - Baufinanzierung

## Overview

A premium single-page marketing website for Dirk Heinrich, a mortgage financing consultant partnered with Swiss Life Select. The application serves as a conversion-focused landing page targeting German-speaking customers seeking mortgage financing services (Baufinanzierung, Anschlussfinanzierung, Umschuldung, and Kapitalanlage).

The primary goal is to drive users toward the main CTA "Finanzierung prüfen" (Check Financing), which redirects to an external Swiss Life Select financing portal.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom design tokens defined in CSS variables
- **UI Components**: shadcn/ui component library (New York style variant)
- **Build Tool**: Vite with React plugin

### Design System
The application follows strict design guidelines:
- **Typography**: Playfair Display (serif headlines) + Inter/DM Sans (body)
- **Colors**: White primary background, `#D82033` accent for CTAs only
- **Animations**: Premium cinematic feel with scroll-triggered fade/slide animations
- **Layout**: Maximum whitespace, no template aesthetics

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful routes prefixed with `/api`
- **Storage**: Abstracted storage interface with in-memory implementation (MemStorage)

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts`
- **Migrations**: Drizzle Kit with output to `./migrations`
- **Current Schema**: Basic users table (prepared for future auth features)

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # UI components (sections, UI primitives)
│   │   ├── pages/        # Route pages
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle database schema
```

### Build Process
- Development: Vite dev server with HMR proxied through Express
- Production: Vite builds to `dist/public`, esbuild bundles server to `dist/index.cjs`

## External Dependencies

### Third-Party Services
- **Swiss Life Select Financing Portal**: External redirect for lead capture (`swisslife-select.finlink.de`)
- **Google Fonts**: Playfair Display, DM Sans, Inter, Geist Mono

### Key NPM Dependencies
- **UI**: Radix UI primitives, Lucide React icons, class-variance-authority
- **Forms**: React Hook Form with Zod validation
- **Database**: Drizzle ORM, PostgreSQL driver (pg), connect-pg-simple for sessions
- **Carousel**: Embla Carousel React

### Environment Requirements
- `DATABASE_URL`: PostgreSQL connection string (required for Drizzle)