import { useTranslations } from "next-intl";

export function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main>
      <h1>{t("title")}</h1>
    </main>
  );
}
