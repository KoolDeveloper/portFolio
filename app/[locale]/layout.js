import "../globals.css";
import Header from "../ui/Header";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";


export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export const metadata = {
  title: "My Portfolio",
  description: "James Ruiz Software developer portforlio",
};

export default async function RootLayout({ children, params }) {
  const { locale } = params;
  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    console.error("Failed to load messages:", error);
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className="bg-peach-cream dark:bg-anakiwa-900 dark:text-harvest-gold select-none"
      >
        <div id="inicio"></div>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
