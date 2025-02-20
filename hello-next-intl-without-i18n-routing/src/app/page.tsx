import { useTranslations, useFormatter } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("HomePage");
  const format = useFormatter();
  return (
    <main>
      <h1>{t("title")}</h1>
      <p>{format.number(1234567890.012)}</p>
      <p>{format.dateTime(new Date())}</p>
      <ul>
        <li>
          {t.rich("to2ndPage", {
            link: (c) => <Link href="/2nd">{c}</Link>,
          })}
        </li>
      </ul>
    </main>
  );
}
