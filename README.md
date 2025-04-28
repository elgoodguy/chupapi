# Super-App Delivery

Plataforma multi-tenant de delivery que funciona como un "Shopify de última milla". Integra tres PWAs (Customer, Admin y Driver) alojadas en un monorepo Turborepo con backend Supabase.

## Estructura del Monorepo

Este proyecto utiliza una arquitectura de monorepo con Turborepo y pnpm para gestionar múltiples aplicaciones y paquetes compartidos.

### Aplicaciones (`apps/`)

- **customer-pwa**: Aplicación web progresiva para clientes finales (puerto 3000)
- **admin-panel**: Panel de administración para gestionar la plataforma (puerto 3001)
- **driver-app**: Aplicación para conductores/repartidores (puerto 3002)

### Paquetes Compartidos (`packages/`)

- **@super-app/api-client**: Cliente API para interactuar con Supabase y otras APIs
- **@super-app/types**: Definiciones de tipos y esquemas Zod compartidos
- **@super-app/ui**: Componentes de UI reutilizables basados en shadcn-ui

## Tecnologías Principales

- **Frontend**: React 18, Vite, PWA, TanStack Query
- **Shared Packages**: UI (shadcn-ui), types (Zod schemas), api-client
- **Backend**: Supabase (Auth, Postgres, Storage, Edge Functions, Realtime)
- **CI/CD**: GitHub Actions, Turbo cache, Vercel
- **Integraciones**: Stripe, Clip, Google Maps, OneSignal, Resend

## Requisitos

- Node.js >= 18.0.0
- pnpm v8.x (no actualizar a v10 por problemas de compatibilidad)

## Comandos Principales

```bash
# Instalar dependencias
pnpm install

# Desarrollo (inicia todas las aplicaciones)
pnpm dev

# Construir todos los paquetes y aplicaciones
pnpm build

# Linting
pnpm lint
```

## Puertos de Desarrollo

- Customer PWA: http://localhost:3000
- Admin Panel: http://localhost:3001
- Driver App: http://localhost:3002

## Notas Importantes

- Usar pnpm v8.x (no actualizar a v10 por problemas de compatibilidad con workspaces)
- Todas las aplicaciones comparten los paquetes locales mediante referencias internas
- El proyecto utiliza Task Master para gestionar tareas de desarrollo (ver README-task-master.md)
