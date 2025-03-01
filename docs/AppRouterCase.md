# App Router での next-intl 利用について

## インストール

pnpmの場合

```
pnpm add next-intl
```

## 基本的な環境設定

### Next.jsの設定

リクエストに対して国際化設定を適用するプラグインを Next.js の設定に適用する。

```typescript:next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
```

### リクエストに対してのロケールとリソースの設定

リクエストに対して国際化設定を適用する設定を行う。

```typescript:src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // ロケールの決定の仕方は別途記載する（この例ではja固定）
  const locale = "ja";

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
```

> **補足**
>
> - createNextIntlPlugin の引数を省略した場合、次のパスを自動読み込みする
>   - `./i18n/request.(tsx?|jsx?)`
>   - `./src/i18n/request.(tsx?|jsx?)`
> - 上記以外のパスにファイルを置きたい場合は createNextIntlPlugin の引数にパスを指定する

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

### ルートレイアウトの設定

ルートレイアウトに`NextIntlClientProvider`を適用して各ページで`useTranslations`が使えるようにする。

```typescript:src/app/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
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

### 方法1:パスの先頭で決定する

`https://example.com/ja/path/to/page`のように、パスの先頭でロケールが決まるパターン。
next-intl公式に方法が書かれているのでそちらを参照。

see: https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing

### 方法2:Cookieから取得して決定する

T.B.D

### 方法3:Accept-Languageヘッダーから決定する

T.B.D
