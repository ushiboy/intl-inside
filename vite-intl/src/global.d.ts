import messages from "./i18n/locales/ja.json";
import { AppLocale } from "./i18n/types";

declare module "next-intl" {
  interface AppConfig {
    Locale: AppLocale;
    Messages: typeof messages;
  }
}
