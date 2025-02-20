import { headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import acceptLanguage from "accept-language";

acceptLanguage.languages(["ja", "en"]);

export default getRequestConfig(async () => {
  const headersList = await headers();
  const locale = acceptLanguage.get(headersList.get("accept-language")) || "en";
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
