import type { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";

type PageProps = {
  locale: string;
  messages: IntlMessages;
};

export default function App({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <NextIntlClientProvider
      locale={pageProps.locale}
      messages={pageProps.messages}
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
