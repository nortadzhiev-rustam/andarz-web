"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/lib/translations";

const ISO_CODES: Record<Language, string> = {
  en: "en",
  ru: "ru",
  tj: "tg",
};

export default function LangUpdater() {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = ISO_CODES[language];
  }, [language]);

  return null;
}
