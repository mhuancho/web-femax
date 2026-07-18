# FeMax — Sitio web

Sitio web de **FeMax** (FEMAXX S.A.C.), plataforma SaaS de gestión empresarial y facturación electrónica conforme a la normativa de la SUNAT. Incluye la landing del producto y sus documentos legales (Términos y Condiciones + 4 anexos).

## Stack

- [Astro 5](https://astro.build) — sitio estático, cero JavaScript por defecto
- [Tailwind CSS 4](https://tailwindcss.com) — vía plugin de Vite
- **TypeScript** estricto (`astro/tsconfigs/strict`)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — sitemap automático
- **Prettier** con `prettier-plugin-astro` y `prettier-plugin-tailwindcss`

## Estructura del repositorio

```
D:\femax\
├─ docs/                  # HTML de referencia y assets originales (no se publican)
├─ web-femax/             # Proyecto Astro
│  ├─ public/             # favicon.png (48px), apple-touch-icon.png, og.png, robots.txt
│  ├─ src/
│  │  ├─ assets/          # logo.png e isotipo.png originales (optimizados por astro:assets)
│  │  ├─ components/      # Hero, Seccion, SubTag, Callout
│  │  ├─ content/anexos/  # Anexos I–IV en Markdown (content collection)
│  │  ├─ data/site.ts     # ÚNICA fuente de verdad: empresa, contacto, versión, navegación
│  │  ├─ layouts/         # BaseLayout (head/header/footer), AnexoLayout
│  │  ├─ pages/           # index, terminos-y-condiciones, [anexo] (ruta dinámica)
│  │  ├─ styles/          # global.css (tema de colores + estilos .doc-content)
│  │  └─ content.config.ts
│  ├─ astro.config.mjs
│  └─ package.json
└─ README.md
```

## Cómo ejecutar

Requiere Node.js 18+ (probado con v24).

```bash
cd web-femax
npm install
npm run dev        # http://localhost:4321
```

| Script                 | Descripción                                          |
| ---------------------- | ---------------------------------------------------- |
| `npm run dev`          | Servidor de desarrollo con HMR                       |
| `npm run check`        | Chequeo de tipos (astro check)                       |
| `npm run build`        | `astro check` + build de producción en `dist/`       |
| `npm run preview`      | Sirve el build de producción                         |
| `npm run format`       | Formatea el código con Prettier                      |
| `npm run format:check` | Verifica el formato sin modificar archivos           |

## Páginas

| Ruta                                     | Contenido                                                        |
| ---------------------------------------- | ---------------------------------------------------------------- |
| `/`                                      | Landing: hero, funcionalidades, planes, seguridad y contacto     |
| `/terminos-y-condiciones`                | Acuerdo de Uso del Servicio SaaS (17 secciones, índice scrollspy)|
| `/anexo-i-modelo-responsabilidad-compartida` | Anexo I — Modelo de Responsabilidad Compartida               |
| `/anexo-ii-niveles-servicio-sla`         | Anexo II — Niveles de Servicio (SLA)                             |
| `/anexo-iii-politica-uso-aceptable`      | Anexo III — Política de Uso Aceptable                            |
| `/anexo-iv-politica-respaldo-conservacion` | Anexo IV — Política de Respaldo y Conservación de Información  |

## Qué se implementó

### Landing del producto (`/`)

- Hero oscuro con acentos difuminados de la marca, CTAs y métricas (99% disponibilidad, SUNAT, 24/7).
- 6 tarjetas de funcionalidades: gestión empresarial, usuarios/roles/permisos, inventario, compras y proveedores, POS y facturación electrónica.
- Banda destacada de facturación electrónica SUNAT (PSE/OSE, CDR).
- 3 planes (Trial, PyME destacado, Pro) con características según los T&C.
- Sección de seguridad con enlaces a los anexos y sección de contacto.

### Documentos legales

- **Términos y Condiciones**: 17 secciones con índice lateral fijo que resalta la sección visible (scrollspy con IntersectionObserver), tablas estiladas, callouts y tarjetas de anexos.
- **Anexos como content collection**: el contenido vive en Markdown (`src/content/anexos/`) con frontmatter validado por Zod (badge, título, descripción, sección relacionada, nota de referencia). Una sola ruta dinámica (`[anexo].astro`) los renderiza con breadcrumb, chips de versión/vigencia y navegación anterior/siguiente. Para agregar un anexo nuevo basta con crear un `.md`.

### Diseño

- Paleta tomada del logo, definida como tema de Tailwind en `global.css`: naranja `#F0923B`, verde `#1EB554` / `#0E7A32`, carbón `#1E1F22`.
- Header sticky con navegación por anclas, menú desplegable "Legal" y menú hamburguesa en móvil.
- Footer con enlaces legales y datos de contacto.
- Componentes reutilizables: `Hero` (banda oscura compartida), `Seccion`, `Callout`, `SubTag`.

### Buenas prácticas aplicadas

- **Sin duplicación de datos**: `src/data/site.ts` centraliza empresa, contacto, versión/vigencia del documento, navegación y lista de anexos; todos los layouts y páginas importan de ahí.
- **Imágenes optimizadas**: los originales están en `src/assets/` y se sirven con `<Image>` de `astro:assets` (WebP automático: logo ~5 KB, isotipo 122 KB → 21 KB). Favicon real de 48px (2.3 KB), `apple-touch-icon` de 180px e imagen Open Graph de 1200×630 generados con sharp.
- **SEO**: `canonical`, Open Graph con URLs absolutas, `og:locale`, Twitter card, `sitemap-index.xml` y `robots.txt`.
- **Accesibilidad**: HTML válido (`dt`/`dd` en orden), `aria-expanded` sincronizado en el menú desplegable, navegación con landmarks y `aria-label`.
- **Formato consistente**: Prettier con orden automático de clases de Tailwind.

## Pendientes

- [ ] Reemplazar el dominio placeholder `https://femax.pe` por el dominio real en `web-femax/astro.config.mjs` y `web-femax/public/robots.txt` (hay un `TODO` marcado).
- [ ] Definir el canal de mesa de ayuda (aparece como "pendiente de definir" en los T&C y el Anexo II).
- [ ] Definir la frecuencia de respaldos y plazos del Anexo IV.
