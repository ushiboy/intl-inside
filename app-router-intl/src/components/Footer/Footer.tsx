"use client";

import { useTranslations, useLocale } from "next-intl";
import { setUserLocale } from "@/services/locale";

export function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const to = locale === "en" ? "ja" : "en";
  return (
    <footer>
      <p>
        {t.rich("change", {
          from: locale,
          to,
          link: (c) => (
            <a
              href={`/`}
              onClick={(e) => {
                e.preventDefault();
                setUserLocale(to);
              }}
            >
              {c}
            </a>
          ),
        })}
      </p>
    </footer>
  );
}
