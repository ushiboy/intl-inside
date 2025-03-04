import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/router";

export function Footer() {
  const t = useTranslations("Footer");
  const router = useRouter();
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
                document.cookie = `NEXT_LOCALE=${to}; path=/;`;
                router.reload();
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
