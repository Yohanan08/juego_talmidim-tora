# Talmidim de la Torá

App PWA del ministerio **Yeshúa — La Torá Viviente** para niños y jóvenes:
historias de la Torá, juegos, Alef-Bet, parashá semanal y juegos de mesa para imprimir.

## Subir a GitHub y Vercel

```bash
git init
git add .
git commit -m "Talmidim de la Torá v1"
git branch -M main
git remote add origin https://github.com/Yohanan08/talmidim-tora.git
git push -u origin main
```

En Vercel: **Add New → Project →** elige el repo → *Framework Preset: Other* → **Deploy**.
No necesita compilación; son archivos estáticos.

## Estructura

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Página única de la app |
| `css/styles.css` | Colores y diseño (zona niños clara, zona jóvenes oscura) |
| `js/data.js` | **Todo el contenido**: historias, trivia, letras, parashot, juegos de mesa |
| `js/app.js` | Lógica de pantallas y juegos |
| `sw.js` | Modo sin internet |
| `juegos-de-mesa/` | PDF para imprimir |

## Cambios frecuentes

- **Agregar una historia o pregunta:** edita `js/data.js`. En la trivia, la primera opción es la correcta.
- **Agregar tus juegos (Los Guardianes del Pacto, Academia Torah Kids):** copia el PDF en
  `juegos-de-mesa/`, y en `MESA` (al final de `data.js`) cambia `archivo: null` por la ruta,
  por ejemplo `archivo: "juegos-de-mesa/guardianes-del-pacto.pdf"`. Añádelo también a la lista de `sw.js`.
- **Después de cualquier cambio:** sube el número en `sw.js` (`talmidim-v1` → `talmidim-v2`)
  para que los teléfonos descarguen la versión nueva.

## Parashá de la semana

Con internet, la app consulta en Hebcal la lectura de la semana según Yerushaláyim.
Sin internet muestra la última guardada, y siempre se puede elegir otra a mano.
