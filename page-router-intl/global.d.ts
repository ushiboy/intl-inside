import en from "@/i18n/locales/en.json";

declare module "next-intl" {
  interface AppConfig {
    Messages: typeof en;
  }
}
