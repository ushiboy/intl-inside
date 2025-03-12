import type { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";
import type { AppConfig } from "next-intl";

type PageProps = {
  locale: string;
  messages: AppConfig["Messages"];
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
