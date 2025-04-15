import { Messages } from "next-intl";

import { AppLocale } from "./types";

import ja from "./locales/ja.json";
import en from "./locales/en.json";

export function getMessages(locale: AppLocale): Messages {
  switch (locale) {
    case "en":
      return en;
    case "ja":
      return ja;
    default:
      // fallback
      return ja;
  }
}
