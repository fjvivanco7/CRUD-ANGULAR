# Angular Simple CRUD - One Piece Theme

Este proyecto es una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) desarrollada en Angular, con un diseño moderno y una temática inspirada en One Piece.

## Características principales

- **Angular Standalone Components**: Arquitectura modular y moderna.
- **CRUD de Productos y Personas**: Permite gestionar productos y personas con formularios y tablas dinámicas.
- **Backend simulado con json-server**: Base de datos local editable en `db.json`.
- **Estilo visual moderno**: Paleta de colores vibrante, animaciones, botones con iconos y efectos visuales.
- **Tema One Piece**: Iconografía, colores y frases inspiradas en el anime.
- **Validaciones de formularios**: Mensajes claros y controles amigables.
- **Feedback visual**: Mensajes de éxito/error y spinners de carga.
- **Responsive**: Adaptado para dispositivos móviles y escritorio.

## Estructura de la app

- **Home**: Pantalla de bienvenida con imagen animada y botones de acceso a productos y personas.
- **Productos**: Listado, creación, edición y eliminación de productos (nombre, precio, stock).
- **Personas**: Listado, creación, edición y eliminación de personas (nombre, edad, ocupación, recompensa).
- **Rutas**: Navegación entre Home, Productos y Personas.

## Instalación y ejecución

1. Instala las dependencias:
   ```powershell
   npm install
   ```
2. Inicia el backend (json-server):
   ```powershell
   npx json-server --watch db.json --port 3000
   ```
3. Inicia la app Angular:
   ```powershell
   npm start
   ```
4. Accede a la app en [http://localhost:4200](http://localhost:4200)

## Personalización

- Puedes editar `db.json` para agregar o modificar productos y personas.
- Los estilos y animaciones se encuentran en `src/styles.css`.
- Los iconos y colores pueden ser cambiados fácilmente para adaptar la temática.

## Créditos

Desarrollado por Fernando Vivanco.
