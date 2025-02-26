"use client";

import { GetStaticPropsContext } from "next";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ClientPage() {
  const [count, setCount] = useState(0);
  const t = useTranslations("ClientPage");
  return (
    <main>
      <h1>{t("title")}</h1>
      <p>{t("count", { count })}</p>
      <button type="button" onClick={() => setCount((prev) => prev - 1)}>
        -
      </button>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        +
      </button>
      <ul>
        <li>
          <Link href="/">{t("backToHome")}</Link>
        </li>
      </ul>
    </main>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../messages/${context.locale}.json`))
        .default,
    },
  };
}
