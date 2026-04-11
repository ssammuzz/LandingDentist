# Proyecto: Consultorio Dental Dra. Eydi Zabala

## Descripción del Proyecto
Este proyecto es una aplicación web tipo "Landing Page" profesional desarrollada con **Angular** (versión 21). El objetivo principal es proporcionar una plataforma digital moderna para el **Consultorio Dental de la Dra. Eydi Zabala**, permitiendo a los pacientes consultar especialidades, conocer la trayectoria profesional y contactar directamente vía WhatsApp para agendar citas.

## Tecnologías Principales
*   **Framework:** Angular v21+
*   **Lenguaje:** TypeScript
*   **Estilos:** CSS puro (sistema de diseño basado en variables)
*   **Herramientas de Construcción:** Angular CLI, Vite (vía `@angular/build`)
*   **Testing:** Vitest
*   **Formato:** Prettier

## Comandos Principales

### Servidor de Desarrollo
Para iniciar el servidor local y visualizar cambios en tiempo real:
```bash
npm start
```
Accede a `http://localhost:4200/`.

### Construcción para Producción
Para generar los artefactos finales (compilados y optimizados) en la carpeta `dist/`:
```bash
npm run build
```

### Testing
Ejecutar las pruebas unitarias:
```bash
npm test
```

## Convenciones de Desarrollo
*   **Arquitectura:** Se sigue una arquitectura basada en componentes modulares (`src/app/components/*`) y páginas (`src/app/pages/*`).
*   **Modelado:** Los datos están tipados mediante interfaces en `src/app/models/`.
*   **Lógica:** La reactividad se maneja mediante **Angular Signals**.
*   **Estilos:** Se utiliza una metodología de variables CSS globales en `src/styles.css` para mantener la consistencia visual y escalabilidad.
*   **Recursos:** Las imágenes y archivos estáticos deben alojarse en `src/assets/` (configurado en `angular.json`).
