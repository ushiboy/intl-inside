import { useTranslations } from "next-intl";
import { Footer } from "@/components/Footer";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <main>{t("title")}</main>
      <Footer />
    </div>
  );
}
