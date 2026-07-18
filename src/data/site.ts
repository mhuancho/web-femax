/** Única fuente de verdad para los datos del sitio: empresa, documento legal y navegación. */

export const empresa = {
  razonSocial: "FEMAXX S.A.C.",
  nombreComercial: "FeMax",
  correo: "femaxsac@gmail.com",
  telefono: "+51 922 030 906",
  telefonoHref: "tel:+51922030906",
  direccion: "Av. Petit Thouars, 9 - 6",
  horario: "Lunes a viernes, de 9:00 a.m. a 6:00 p.m.",
  horarioCorto: "Lun a Vie, 9:00 a.m. – 6:00 p.m.",
} as const;

export const documento = {
  version: "1.0",
  vigencia: "01/01/2027",
  anio: "2027",
  actualizacion: "enero 2027",
} as const;

/** Anclas de la landing usadas por el header y el menú móvil. */
export const seccionesNav = [
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#funcionalidades", label: "Soluciones" },
  { href: "/#planes", label: "Planes" },
  { href: "/#seguridad", label: "Seguridad" },
  { href: "/#contacto", label: "Contacto" },
] as const;

/** Anexos del Acuerdo. El slug es también el id de la content collection `anexos`. */
export const anexos = [
  {
    slug: "anexo-i-modelo-responsabilidad-compartida",
    badge: "ANEXO I",
    nombre: "Modelo de Responsabilidad Compartida",
    corto: "Responsabilidad Compartida",
    detalle: "Distribución de responsabilidades entre FeMax y el Cliente.",
  },
  {
    slug: "anexo-ii-niveles-servicio-sla",
    badge: "ANEXO II",
    nombre: "Niveles de Servicio (SLA)",
    corto: "Niveles de Servicio (SLA)",
    detalle: "Disponibilidad, soporte, mantenimientos e incidentes.",
  },
  {
    slug: "anexo-iii-politica-uso-aceptable",
    badge: "ANEXO III",
    nombre: "Política de Uso Aceptable",
    corto: "Política de Uso Aceptable",
    detalle: "Uso permitido, acciones prohibidas y consecuencias.",
  },
  {
    slug: "anexo-iv-politica-respaldo-conservacion",
    badge: "ANEXO IV",
    nombre: "Política de Respaldo y Conservación de Información",
    corto: "Respaldo y Conservación",
    detalle: "Copias de seguridad, conservación y exportación de datos.",
  },
] as const;

export type Anexo = (typeof anexos)[number];

export const hrefAnexo = (a: Anexo) => `/${a.slug}`;

/** "ANEXO I" → "Anexo I" (conserva el número romano en mayúsculas). */
export const badgeTitulo = (badge: string) => `Anexo ${badge.split(" ")[1] ?? ""}`.trim();

/** Documentos legales para el menú "Legal" y el footer. */
export const legales = [
  { href: "/terminos-y-condiciones", label: "Términos y Condiciones" },
  ...anexos.map((a) => ({ href: hrefAnexo(a), label: `${badgeTitulo(a.badge)} — ${a.corto}` })),
] as const;
