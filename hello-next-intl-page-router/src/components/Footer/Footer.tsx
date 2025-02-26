import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

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
          link: (c) => <Link href={`/${to}`}>{c}</Link>,
        })}
      </p>
    </footer>
  );
}
