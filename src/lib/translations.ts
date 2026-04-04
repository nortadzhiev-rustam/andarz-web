export type Language = "en" | "ru" | "tj";

export interface Translations {
  nav: {
    home: string;
    courses: string;
    blog: string;
    about: string;
    contact: string;
    login: string;
    getStarted: string;
  };
  language: {
    en: string;
    ru: string;
    tj: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      courses: "Courses",
      blog: "Blog",
      about: "About",
      contact: "Contact",
      login: "Log in",
      getStarted: "Get Started",
    },
    language: {
      en: "English",
      ru: "Russian",
      tj: "Tajik",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      courses: "Курсы",
      blog: "Блог",
      about: "О нас",
      contact: "Контакты",
      login: "Войти",
      getStarted: "Начать",
    },
    language: {
      en: "Английский",
      ru: "Русский",
      tj: "Таджикский",
    },
  },
  tj: {
    nav: {
      home: "Асосӣ",
      courses: "Курсҳо",
      blog: "Блог",
      about: "Дар бораи мо",
      contact: "Тамос",
      login: "Даромадан",
      getStarted: "Оғоз кунед",
    },
    language: {
      en: "Англисӣ",
      ru: "Русӣ",
      tj: "Тоҷикӣ",
    },
  },
};

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "tj", label: "Тоҷикӣ", flag: "🇹🇯" },
];
