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

- Node.js >= 18.0.0 (recomendamos usar nvm: `nvm use`)
- pnpm v8.x (no actualizar a v10 por problemas de compatibilidad)

## Primeros Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/super-app-delivery.git
   cd super-app-delivery
   ```

2. **Instalar pnpm v8 (si no lo tienes)**
   ```bash
   npm install -g pnpm@8
   ```

3. **Instalar dependencias**
   ```bash
   pnpm install
   ```

4. **Iniciar el entorno de desarrollo**
   ```bash
   # Todas las aplicaciones
   pnpm dev
   
   # O individualmente
   pnpm dev:customer  # Cliente
   pnpm dev:admin     # Panel de administración
   pnpm dev:driver    # Aplicación de conductores
   ```

## Comandos Principales

```bash
# Desarrollo
pnpm dev                # Todas las aplicaciones
pnpm dev:customer       # Solo aplicación cliente
pnpm dev:admin          # Solo panel admin
pnpm dev:driver         # Solo app de conductores

# Construcción
pnpm build              # Construir todo

# Linting y Formato
pnpm lint               # Ejecutar ESLint
pnpm format             # Ejecutar Prettier

# Limpieza
pnpm clean              # Limpiar caches y node_modules

# Tests (cuando se implementen)
pnpm test               # Ejecutar tests
```

## Turborepo y Caching

Este proyecto utiliza Turborepo para optimizar los builds mediante caching inteligente:

- Los builds son incrementales y solo reconstruyen lo necesario
- Los resultados se cachean localmente para acelerar futuros builds
- La configuración de pipelines está en `turbo.json`

## Puertos de Desarrollo

- Customer PWA: http://localhost:3000
- Admin Panel: http://localhost:3001
- Driver App: http://localhost:3002

## CI/CD con GitHub Actions

El proyecto incluye flujos de trabajo de GitHub Actions para:

- **CI**: Ejecuta linting y build en cada PR y push a main
- **CD**: Despliega automáticamente a Vercel cuando se fusiona a main

## Contribución

Consulta [CONTRIBUTING.md](./CONTRIBUTING.md) para obtener pautas detalladas sobre cómo contribuir al proyecto.

## Notas Importantes

- Usar pnpm v8.x (no actualizar a v10 por problemas de compatibilidad con workspaces)
- Todas las aplicaciones comparten los paquetes locales mediante referencias internas
- El proyecto utiliza Task Master para gestionar tareas de desarrollo (ver README-task-master.md)
- Las aplicaciones están configuradas como PWAs para experiencia móvil óptima
- Configuración de ESLint y Prettier para mantener consistencia de código
