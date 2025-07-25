# 🛶 River Rush - El Lobo, la Cabra y las Coles

**River Rush** es un juego lógico interactivo desarrollado con **Ionic React**, donde deberás ayudar a un granjero a cruzar un río con su lobo 🐺, su cabra 🐐 y sus coles 🌽, sin que nadie se coma a nadie.

---

## 🔧 Instalación y uso rápido

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/river-rush.git
cd river-rush

# Instala Ionic si no lo tienes
npm install -g @ionic/cli

# Instala las dependencias del proyecto
npm install

# Inicia el servidor de desarrollo
ionic serve
```

---

## 🎮 Reglas del juego

- El bote solo puede llevar al granjero 🧍 y un solo elemento (🐺, 🐐 o 🌽) a la vez.
- Si dejas solos al 🐺 y la 🐐, el lobo se la come.
- Si dejas solas a la 🐐 y 🌽, la cabra se las come.
- El objetivo es cruzar todo sin romper estas reglas.

---

## 📂 Estructura del proyecto

```
src/
├── pages/
│   ├── Inicio.tsx      → Pantalla de inicio
│   ├── Reglas.tsx      → Pantalla con las reglas del juego
│   ├── Juego.tsx       → Pantalla principal del juego
│   ├── Ganaste.tsx     → Pantalla de victoria
│   └── Perdiste.tsx    → Pantalla de derrota
├── App.tsx             → Configuración de rutas
├── App.css             → Estilos globales y personalizados
└── main.tsx
```
