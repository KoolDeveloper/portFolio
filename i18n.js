import { notFound } from "next/navigation";
import { getRequestConfig, unstable_setRequestLocale } from "next-intl/server";

// Puede ser importado desde una configuración compartida
const locales = ["en", "es"];

export default getRequestConfig(async ({ locale }) => {
  // Valida que el parámetro `locale` entrante sea válido
  if (!locales.includes(locale)) notFound();

  // Configura el idioma para el renderizado estático
  unstable_setRequestLocale(locale);

  return {
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
