import { useTranslations } from "next-intl";
import Link from "next/link";

export default function SecondPage() {
  const t = useTranslations("SecondPage");
  return (
    <main>
      <h1>{t("title", { name: "2nd" })}</h1>
      <ul>
        <li>
          <Link href="/">{t("backToHome")}</Link>
        </li>
      </ul>
    </main>
  );
}
