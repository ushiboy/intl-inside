import { AppLocale } from "./types";

export function getLocale(): AppLocale {
  return (localStorage.getItem("locale") as AppLocale) || "ja";
}
