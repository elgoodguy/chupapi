# Guía de Contribución

## Introducción

Gracias por contribuir al proyecto Super-App Delivery. Este documento proporciona las pautas y los flujos de trabajo para contribuir efectivamente al proyecto.

## Configuración del Entorno de Desarrollo

1. Asegúrate de tener Node.js v18 instalado (recomendamos usar nvm)
   ```bash
   nvm use
   ```

2. Instala pnpm v8 (no uses v10 debido a problemas de compatibilidad)
   ```bash
   npm install -g pnpm@8
   ```

3. Instala las dependencias
   ```bash
   pnpm install
   ```

4. Ejecuta el entorno de desarrollo
   ```bash
   # Para todas las aplicaciones
   pnpm dev
   
   # Para una aplicación específica
   pnpm dev:customer  # Cliente
   pnpm dev:admin     # Panel de administración
   pnpm dev:driver    # Aplicación de conductores
   ```

## Estructura del Proyecto

```
super-app-delivery/
├── apps/                # Aplicaciones
│   ├── customer-pwa/    # Aplicación del cliente (puerto 3000)
│   ├── admin-panel/     # Panel de administración (puerto 3001)
│   └── driver-app/      # Aplicación de conductores (puerto 3002)
├── packages/            # Paquetes compartidos
│   ├── api-client/      # Cliente de API para Supabase y otros servicios
│   ├── types/           # Definiciones de tipos y esquemas Zod
│   └── ui/              # Componentes UI compartidos
└── ...
```

## Flujo de Trabajo Git

1. Crea una rama desde `main` para tu característica o corrección
   ```bash
   git checkout -b feature/nombre-de-la-caracteristica
   ```

2. Realiza tus cambios siguiendo las convenciones de código

3. Asegúrate de que el código pase el linting y los tests
   ```bash
   pnpm lint
   pnpm test  # cuando se implementen tests
   ```

4. Haz commit de tus cambios siguiendo las convenciones de commit
   ```bash
   git commit -m "feat: añadir nueva funcionalidad X"
   ```

5. Envía tu rama al repositorio remoto
   ```bash
   git push origin feature/nombre-de-la-caracteristica
   ```

6. Crea un Pull Request en GitHub

## Convenciones de Commit

Seguimos las convenciones de [Conventional Commits](https://www.conventionalcommits.org/):

- `feat`: Nueva característica
- `fix`: Corrección de errores
- `docs`: Cambios en la documentación
- `style`: Cambios que no afectan al significado del código (espacios en blanco, formato, etc.)
- `refactor`: Cambio de código que no corrige un error ni añade una característica
- `perf`: Cambio de código que mejora el rendimiento
- `test`: Añadir o corregir pruebas
- `chore`: Cambios en el proceso de construcción o herramientas auxiliares

## Revisión de Código

- Todo el código debe ser revisado por al menos un miembro del equipo antes de ser fusionado
- Los comentarios de revisión deben ser constructivos y claros
- Aborda todos los comentarios de revisión antes de solicitar una nueva revisión

## Pautas de Estilo de Código

- Seguimos las reglas de ESLint y Prettier configuradas en el proyecto
- El código debe ser legible y bien documentado
- Los nombres de variables y funciones deben ser descriptivos y seguir camelCase
- Los componentes de React deben seguir PascalCase

## CI/CD

- GitHub Actions se encarga de ejecutar las pruebas y el linting en cada PR
- Las ramas fusionadas con `main` se despliegan automáticamente en Vercel

## Resolución de Problemas

Si encuentras problemas durante el desarrollo:

1. Limpia las cachés y los módulos
   ```bash
   pnpm clean
   pnpm install
   ```

2. Verifica que estás usando la versión correcta de Node.js y pnpm

3. Consulta los problemas conocidos en el repositorio de GitHub
