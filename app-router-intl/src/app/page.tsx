import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <main>{t("title")}</main>
    </div>
  );
}
