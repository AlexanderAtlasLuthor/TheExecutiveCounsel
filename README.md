# The Executive Counsel - React Application

Un sitio web premium y de lujo para una organización privada de membresía exclusiva.

## 🎯 Descripción

The Executive Counsel es un sitio web completamente personalizado para una organización de membresía privada e invitación exclusiva. Presenta un diseño de lujo con paleta de colores negro, oro y blanco, diseñado específicamente para ejecutivos, empresarios e inversores de alto nivel en South Florida.

## ✨ Características

- **Diseño Premium**: Estética de club privado de lujo
- **Glassmorphism**: Efectos de vidrio sofisticados en tarjetas y contenedores
- **Navegación Responsiva**: Menú móvil completo con overlay oscuro
- **Formulario de Solicitud**: Sistema de aplicación completo con validación
- **Múltiples Secciones**:
  - Hero Section
  - About Section
  - Founding Members
  - Why Join
  - Membership Tiers (3 niveles)
  - Events
  - Launch Reception
  - Sponsorship
  - Membership Standards
  - Application Form
  - Footer

## 🚀 Inicio Rápido

### Requisitos Previos
- Node.js (v14 o superior)
- npm o yarn

### Instalación

1. **Descomprime el archivo ZIP**
```bash
unzip executive-counsel.zip
cd executive-counsel
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

El sitio se abrirá automáticamente en `http://localhost:3000`

### Build para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

## 📁 Estructura del Proyecto

```
executive-counsel/
├── src/
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── public/
│   └── index.html        # HTML base
├── package.json          # Dependencias
├── vite.config.js        # Configuración de Vite
└── README.md            # Este archivo
```

## 🎨 Personalización

### Cambiar Colores

Los colores principales se definen en las variables CSS dentro de `App.jsx`:
- Gold: `#d4af37`
- Negro: `#0a0a0a`, `#1a1a1a`
- Blanco/Gris: `#ffffff`, `#d4d4d4`

### Editar Contenido

Todo el contenido se encuentra en `src/App.jsx`:
- **Texto del sitio**: En el JSX directamente
- **Iconos**: Símbolos Unicode o puedes reemplazarlos con Lucide React icons
- **Enlaces de navegación**: Array `navigationLinks`
- **Tiers de membresía**: Array `membershipTiers`
- **Eventos**: Array `events`
- **Patrocinadores**: Array `sponsorships`

### Agregar Nuevas Secciones

1. Agrega un nuevo `<section id="nueva-seccion">` en el JSX
2. Agrega el enlace a `navigationLinks`
3. Asegúrate de usar el mismo estilo y estructura de las otras secciones

## 🎭 Estilos y Diseño

### Glassmorphism

El sitio utiliza efectos glassmorphism en las tarjetas:
```css
backdrop-filter: blur(10px);
background: linear-gradient(135deg, rgba(26, 26, 26, 0.7) 0%, rgba(37, 37, 37, 0.7) 100%);
```

### Animaciones

- Fade-in al desplazarse
- Hover effects en botones y tarjetas
- Floating de elementos decorativos
- Menú móvil slide-in

## 🔧 Tecnologías Utilizadas

- **React 18.2**
- **Vite** (Build tool)
- **Lucide React** (Icons)
- **CSS3** (Glassmorphism, animations, gradients)

## 📱 Responsividad

El sitio es completamente responsivo:
- **Desktop**: Menú horizontal completo
- **Tablet**: Menú adaptativo
- **Mobile**: Menú hamburguesa con overlay

## 🌐 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
Arrastra la carpeta `dist/` a [netlify.com](https://netlify.com)

### Otros hosts
Copia el contenido de `dist/` a tu servidor web

## 📝 Notas Importantes

- El formulario actualmente no envía datos a ningún servidor. Para conectarlo, necesitarás un backend.
- Los iconos son símbolos Unicode. Puedes reemplazarlos con Lucide React icons importando más desde `lucide-react`.
- El sitio está completamente optimizado para mobile-first design.

## 📧 Contacto y Soporte

Para preguntas o sugerencias sobre este proyecto, contacta al equipo de desarrollo.

## 📄 Licencia

Este proyecto es propietario y solo para uso autorizado.

---

**The Executive Counsel** - Donde las personas exceptionales se reúnen con las personas exceptionales.
