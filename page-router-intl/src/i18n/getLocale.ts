import { GetServerSidePropsContext } from "next";
import acceptLanguage from "accept-language";

acceptLanguage.languages(["ja", "en"]);

export function getLocale(context: GetServerSidePropsContext) {
  const { req } = context;
  const locale =
    req.cookies["NEXT_LOCALE"] ||
    acceptLanguage.get(req.headers["accept-language"]) ||
    "ja";
  return locale;
}
