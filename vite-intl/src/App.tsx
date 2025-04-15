import { NextIntlClientProvider } from "next-intl";

import { HomePage } from "./pages/HomePage";
import { getMessages, getLocale } from "./i18n";

export function App() {
  const locale = getLocale();
  const messages = getMessages(locale);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone="Asia/Tokyo"
    >
      <HomePage />
    </NextIntlClientProvider>
  );
}
