# Page Router での next-intl 利用について

## インストール

pnpm の場合

```
pnpm add next-intl
```

## 基本的な環境設定

### `_app.tsx`の設定

`NextIntlClientProvider`を適用して各ページで`useTranslations`が使えるようにする。

```typescript:src/pages/_app.tsx
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
```

### リクエストに対してのリソースの設定

ページごとの`getServerSideProps`でロケールに応じた言語リソースを import する。

```typescript:src/pages/index.tsx
import { GetServerSidePropsContext } from "next";
import { getLocale } from "@/i18n/getLocale";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return <main>{t("title")}</main>;
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
) {
  const locale = getLocale(context);
  return {
    props: {
      locale,
      messages: (await import(`../i18n/locales/${locale}.json`)).default,
    },
  };
}
```

### 言語リソースファイルの配置

言語リソースファイルの置き場に規定はないが、この例では`src/i18n/locales`配下に置いている

言語リソースファイルはネームスペースごとキーと値で設定する。

```json:src/i18n/locales/ja.json
{
  "HomePage": {
    "title": "こんにちは！こんにちは！"
  }
}
```

### 各ページでのリソースの利用

`useTranslations`にネームスペースを指定して利用する。

```typescript:src/app/page.tsx
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <main>{t("title")}</main>
    </div>
  );
}
```

## ロケールの決定方法

### 方法 1: next.js の i18n 設定を利用する

next.config.ts の i18n 設定を行う。
パスのプレフィックスにロケールを含むルーティングやサブドメインにロケールを含むルーティングとなる。

next-intl 公式に方法が書かれているのでそちらを参照。

see: https://next-intl.dev/docs/getting-started/pages-router

### 方法 2: next.js の i18n 設定を利用しない

ページごとの`getServerSideProps`などでなんからの処理からロケールを取得して言語リソースの特定に使用する。

```typescript:src/pages/index.tsx
import { GetServerSidePropsContext } from "next";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return <main>{t("title")}</main>;
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
) {
  const locale = await 何らかのユーザーロケール取得処理();
  return {
    props: {
      locale,
      messages: (await import(`../i18n/locales/${locale}.json`)).default,
    },
  };
}
```
