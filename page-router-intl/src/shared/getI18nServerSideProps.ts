import { GetServerSidePropsContext } from "next";
import { getLocale } from "@/i18n/getLocale";

export async function getI18nServerSideProps(
  context: GetServerSidePropsContext,
) {
  const locale = getLocale(context);
  return {
    props: {
      locale,
      messages: (await import(`../i18n/locales/${locale}.json`)).default,
    },
  };
}
