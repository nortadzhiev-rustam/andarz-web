export type Language = "en" | "ru" | "tj";

export interface HeroSlide {
  badge: string;
  headline: [string, string, string];
  description: string;
}

export interface Translations {
  siteName: string;
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
  hero: {
    slides: [HeroSlide, HeroSlide, HeroSlide];
    stats: {
      schoolsServed: string;
      seminarsPerYear: string;
      booksPublished: string;
      experts: string;
    };
    cards: {
      schools: { title: string; subtitle: string };
      seminars: { title: string; subtitle: string };
      featured: { label: string; title: string; subtext: string };
      experts: { title: string; subtitle: string };
      books: { title: string; subtitle: string };
    };
    browseCourses: string;
    learnMore: string;
    slideLabel: string;
  };
  home: {
    services: {
      title: string;
      subtitle: string;
      items: [string, string, string, string, string, string];
    };
    cta: { title: string; subtitle: string; button: string };
    featuredCourses: { title: string; subtitle: string; viewAll: string };
  };
  about: {
    hero: { title: string; subtitle: string };
    mission: { title: string; text: string };
    strategicGoal: { title: string; text: string };
    whatWeDo: { title: string; subtitle: string };
    activities: [
      { title: string; text: string },
      { title: string; text: string },
      { title: string; text: string },
      { title: string; text: string },
      { title: string; text: string },
      { title: string; text: string },
    ];
    scale: { title: string };
    statsLabels: [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
    ];
    whyAndarz: { title: string; subtitle: string };
    advantages: [
      { title: string; text: string },
      { title: string; text: string },
      { title: string; text: string },
      { title: string; text: string },
      { title: string; text: string },
    ];
  };
  courses: {
    pageTitle: string;
    pageSubtitle: string;
    searchPlaceholder: string;
    resultsSingular: string;
    resultsPlural: string;
    noResults: string;
    noResultsHint: string;
    allLevels: string;
    levels: { beginner: string; intermediate: string; advanced: string };
    enroll: string;
    moneyBack: string;
    aboutCourse: string;
    curriculum: string;
    lessons: string;
    free: string;
    yourInstructor: string;
    reviews: string;
    students: string;
  };
  blog: { pageTitle: string; pageSubtitle: string };
  contact: {
    pageTitle: string;
    pageSubtitle: string;
    getInTouch: string;
    getInTouchDesc: string;
    emailLabel: string;
    addressLabel: string;
    hoursLabel: string;
    form: {
      fullName: string;
      emailAddress: string;
      subject: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
    };
    success: { title: string; message: string };
  };
  footer: {
    description: string;
    navigationHeading: string;
    legalHeading: string;
    legal: [string, string, string];
  };
  auth: {
    login: {
      title: string;
      emailLabel: string;
      passwordLabel: string;
      submit: string;
      submitting: string;
      error: string;
      noAccount: string;
      signUp: string;
    };
    register: {
      title: string;
      firstNameLabel: string;
      lastNameLabel: string;
      emailLabel: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      submit: string;
      success: { title: string; message: string };
      hasAccount: string;
      signIn: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    siteName: "Andarz",
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
    hero: {
      slides: [
        {
          badge: "👩‍🏫 Professional Development",
          headline: ["Elevating", "Education Quality", "in Tajikistan"],
          description:
            "Practical seminars for school leaders, teachers, educators, and parents — building professional competencies that drive real academic results.",
        },
        {
          badge: "🔬 STEM Programs",
          headline: ["Science of", "the Future", "for Every School"],
          description:
            "International-standard STEM curriculum taught in English with a spiral methodology and digital integration — localised for Tajikistan's schools.",
        },
        {
          badge: "📊 Digital Ecosystem",
          headline: ["Smart Analytics", "for Modern", "Education"],
          description:
            "Digital testing, knowledge assessment, and data-driven analytics help identify learning gaps and provide meaningful feedback for schools and families.",
        },
      ],
      stats: {
        schoolsServed: "Schools Served",
        seminarsPerYear: "Seminars / Year",
        booksPublished: "Books Published",
        experts: "Experts",
      },
      cards: {
        schools: { title: "20 Schools", subtitle: "Partner institutions" },
        seminars: {
          title: "20+ Seminars",
          subtitle: "500+ participants each",
        },
        featured: {
          label: "STEM Programme",
          title: "Science of the Future",
          subtext: "Spiral methodology + digital integration",
        },
        experts: { title: "18 Experts", subtitle: "12 subject + 6 preschool" },
        books: { title: "19+ Books", subtitle: "Published & translated" },
      },
      browseCourses: "Browse Courses →",
      learnMore: "Learn More",
      slideLabel: "Go to slide",
    },
    home: {
      services: {
        title: "Our Services",
        subtitle:
          "A comprehensive approach to improving education quality across Tajikistan.",
        items: [
          "Professional Development",
          "Education Monitoring",
          "Digital Ecosystem",
          "STEM Programs",
          "Publishing",
          "Consulting",
        ],
      },
      cta: {
        title: "Partner with Andarz",
        subtitle:
          "Join 20 schools and 15 kindergartens already transforming education in Tajikistan.",
        button: "Get in Touch",
      },
      featuredCourses: {
        title: "Featured Courses",
        subtitle: "Hand-picked courses to help you get started.",
        viewAll: "View all courses →",
      },
    },
    about: {
      hero: {
        title: "About Andarz",
        subtitle:
          "Andarz LLC is an educational and publishing organisation committed to building a modern, safe, and sustainable learning environment in the Republic of Tajikistan — operating since 2023.",
      },
      mission: {
        title: "Our Mission",
        text: "To improve education quality in Tajikistan through modern educational solutions, professional development for teachers and leaders, and an effective ecosystem that connects schools, families, and students.",
      },
      strategicGoal: {
        title: "Strategic Goal",
        text: "To build a sustainable education model that raises student academic outcomes, upskills teachers and managers, embeds modern methodologies, reduces systemic risks when founding schools, and fosters a culture of reading and scientific thinking.",
      },
      whatWeDo: {
        title: "What We Do",
        subtitle:
          "Six interconnected service lines that together transform education.",
      },
      activities: [
        {
          title: "Professional Development",
          text: "Practical seminars (1–2 per year) for school leaders, teachers, educators, assistants, students, and parents — building competencies that drive measurable academic results.",
        },
        {
          title: "Education Quality Monitoring",
          text: "Expert lesson observations, programme-implementation assessments, individual consultations, personalised recommendations, and ongoing school support.",
        },
        {
          title: "Digital Ecosystem",
          text: "Student testing, knowledge assessment, results analytics, learning-gap identification, and structured feedback loops for schools and families.",
        },
        {
          title: "STEM Programmes",
          text: "The 'Science of the Future' line: English-language instruction, international standards, localisation for Tajikistan, spiral methodology, and digital integration.",
        },
        {
          title: "Publishing",
          text: "19 published books including world classics in translation and purpose-built educational materials for teachers and students.",
        },
        {
          title: "Consulting",
          text: "End-to-end support for opening and licensing schools, curriculum design, institutional management, quality improvement, and creating safe learning environments.",
        },
      ],
      scale: { title: "Our Scale" },
      statsLabels: [
        "Schools Served",
        "Kindergartens",
        "Seminars / Year",
        "Participants / Event",
        "Subject Experts",
        "Preschool Specialists",
        "Books Published",
        "Founded",
      ],
      whyAndarz: {
        title: "Why Andarz",
        subtitle:
          "What sets us apart in Tajikistan\u2019s education landscape.",
      },
      advantages: [
        {
          title: "Systematic Approach",
          text: "We integrate every dimension of education — training, monitoring, analytics, and content — into one coherent model.",
        },
        {
          title: "Learning + Analytics",
          text: "Data-driven insights are embedded in every programme, turning feedback into actionable improvement plans.",
        },
        {
          title: "Own Products",
          text: "Proprietary textbooks, STEM curricula, and digital tools designed specifically for the Tajikistani education context.",
        },
        {
          title: "Digital Technologies",
          text: "Modern EdTech tools enable remote assessment, real-time analytics, and seamless school\u2013family communication.",
        },
        {
          title: "International + Local",
          text: "Global best practices adapted to local language, culture, and curriculum standards for maximum relevance.",
        },
      ],
    },
    courses: {
      pageTitle: "All Courses",
      pageSubtitle: "Explore our full library of expert-led courses.",
      searchPlaceholder: "Search courses...",
      resultsSingular: "course found",
      resultsPlural: "courses found",
      noResults: "No courses found.",
      noResultsHint: "Try adjusting your filters or search query.",
      allLevels: "All Levels",
      levels: {
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
      },
      enroll: "Enroll Now",
      moneyBack: "30-day money-back guarantee",
      aboutCourse: "About This Course",
      curriculum: "Curriculum",
      lessons: "lessons",
      free: "Free",
      yourInstructor: "Your Instructor",
      reviews: "reviews",
      students: "students",
    },
    blog: {
      pageTitle: "Blog",
      pageSubtitle: "Insights, tips, and stories from our community.",
    },
    contact: {
      pageTitle: "Contact Us",
      pageSubtitle: "We\u2019d love to hear from you. Send us a message!",
      getInTouch: "Get in Touch",
      getInTouchDesc:
        "Have questions about our courses? Need help with your account? Our team is here to help.",
      emailLabel: "Email",
      addressLabel: "Address",
      hoursLabel: "Support Hours",
      form: {
        fullName: "Full Name",
        emailAddress: "Email Address",
        subject: "Subject",
        message: "Message",
        namePlaceholder: "John Doe",
        emailPlaceholder: "john@example.com",
        subjectPlaceholder: "How can we help?",
        messagePlaceholder: "Tell us more...",
        submit: "Send Message",
      },
      success: {
        title: "Message Sent!",
        message:
          "Thank you for reaching out. We\u2019ll get back to you within 24 hours.",
      },
    },
    footer: {
      description:
        "Improving education quality in Tajikistan through professional development, STEM programmes, digital analytics, publishing, and consulting \u2014 since 2023.",
      navigationHeading: "Navigation",
      legalHeading: "Legal",
      legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
    auth: {
      login: {
        title: "Sign in to your account",
        emailLabel: "Email address",
        passwordLabel: "Password",
        submit: "Sign in",
        submitting: "Signing in\u2026",
        error: "Invalid email or password. Please try again.",
        noAccount: "Don\u2019t have an account?",
        signUp: "Sign up",
      },
      register: {
        title: "Create your account",
        firstNameLabel: "First name",
        lastNameLabel: "Last name",
        emailLabel: "Email address",
        passwordLabel: "Password",
        passwordPlaceholder: "Min. 8 characters",
        submit: "Create Account",
        success: {
          title: "Account Created!",
          message:
            "Welcome to Andarz. You can now sign in and start learning.",
        },
        hasAccount: "Already have an account?",
        signIn: "Sign in",
      },
    },
  },

  ru: {
    siteName: "Андарз",
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
    hero: {
      slides: [
        {
          badge: "👩‍🏫 Профессиональное развитие",
          headline: [
            "Повышение",
            "Качества образования",
            "в Таджикистане",
          ],
          description:
            "Практические семинары для руководителей школ, учителей, воспитателей и родителей — развитие профессиональных компетенций для реальных академических результатов.",
        },
        {
          badge: "🔬 STEM-программы",
          headline: ["Наука", "Будущего", "для каждой школы"],
          description:
            "Учебные программы STEM международного стандарта на английском языке со спиральной методикой и цифровой интеграцией — адаптированные для школ Таджикистана.",
        },
        {
          badge: "📊 Цифровая экосистема",
          headline: ["Умная аналитика", "для современного", "образования"],
          description:
            "Цифровое тестирование, оценка знаний и аналитика данных помогают выявить пробелы в обучении и дать значимую обратную связь школам и семьям.",
        },
      ],
      stats: {
        schoolsServed: "Школ обслуживается",
        seminarsPerYear: "Семинаров в год",
        booksPublished: "Издано книг",
        experts: "Эксперты",
      },
      cards: {
        schools: {
          title: "20 школ",
          subtitle: "Партнёрские учреждения",
        },
        seminars: {
          title: "20+ семинаров",
          subtitle: "500+ участников каждый",
        },
        featured: {
          label: "STEM-программа",
          title: "Наука будущего",
          subtext: "Спиральная методика + цифровая интеграция",
        },
        experts: {
          title: "18 экспертов",
          subtitle: "12 предметных + 6 дошкольных",
        },
        books: { title: "19+ книг", subtitle: "Изданные и переведённые" },
      },
      browseCourses: "Перейти к курсам →",
      learnMore: "Узнать больше",
      slideLabel: "Перейти к слайду",
    },
    home: {
      services: {
        title: "Наши услуги",
        subtitle:
          "Системный подход к улучшению качества образования по всему Таджикистану.",
        items: [
          "Профессиональное развитие",
          "Мониторинг образования",
          "Цифровая экосистема",
          "STEM-программы",
          "Издательство",
          "Консалтинг",
        ],
      },
      cta: {
        title: "Партнёрство с Андарз",
        subtitle:
          "Присоединяйтесь к 20 школам и 15 детским садам, уже трансформирующим образование в Таджикистане.",
        button: "Связаться с нами",
      },
      featuredCourses: {
        title: "Рекомендуемые курсы",
        subtitle: "Избранные курсы для начала обучения.",
        viewAll: "Все курсы →",
      },
    },
    about: {
      hero: {
        title: "О нас",
        subtitle:
          "ООО «Андарз» — образовательная и издательская организация, приверженная созданию современной, безопасной и устойчивой образовательной среды в Республике Таджикистан — работает с 2023 года.",
      },
      mission: {
        title: "Наша миссия",
        text: "Повышение качества образования в Таджикистане посредством современных образовательных решений, профессионального развития учителей и руководителей, а также эффективной экосистемы взаимодействия школ, семей и учеников.",
      },
      strategicGoal: {
        title: "Стратегическая цель",
        text: "Формирование устойчивой модели образования, которая повышает академические результаты учащихся, развивает компетенции учителей и руководителей, внедряет современные методики, снижает системные риски при открытии школ и развивает культуру чтения и научного мышления.",
      },
      whatWeDo: {
        title: "Наша деятельность",
        subtitle:
          "Шесть взаимосвязанных направлений, которые вместе трансформируют образование.",
      },
      activities: [
        {
          title: "Профессиональное развитие",
          text: "Практические семинары (1–2 в год) для руководителей школ, учителей, воспитателей, ассистентов, студентов и родителей — развитие компетенций для измеримых академических результатов.",
        },
        {
          title: "Мониторинг качества образования",
          text: "Посещение уроков экспертами, оценка внедрения программ, индивидуальные консультации, персональные рекомендации и сопровождение школ.",
        },
        {
          title: "Цифровая экосистема",
          text: "Тестирование учащихся, оценка знаний, аналитика результатов, выявление пробелов в обучении и структурированная обратная связь для школ и семей.",
        },
        {
          title: "STEM-программы",
          text: "Линейка «Наука будущего»: обучение на английском языке, международные стандарты, локализация для Таджикистана, спиральная методика и цифровая интеграция.",
        },
        {
          title: "Издательская деятельность",
          text: "19 изданных книг, включая переводы мировой классики и учебные материалы для учителей и учеников.",
        },
        {
          title: "Консалтинг",
          text: "Комплексное сопровождение открытия и лицензирования школ, разработки программ, управления, повышения качества и создания безопасной образовательной среды.",
        },
      ],
      scale: { title: "Масштаб деятельности" },
      statsLabels: [
        "Обслуживаемых школ",
        "Детских садов",
        "Семинаров в год",
        "Участников на событие",
        "Экспертов по предметам",
        "Специалистов дошкольного образования",
        "Издано книг",
        "Год основания",
      ],
      whyAndarz: {
        title: "Почему Андарз",
        subtitle:
          "Наши конкурентные преимущества на образовательном рынке Таджикистана.",
      },
      advantages: [
        {
          title: "Системный подход",
          text: "Мы интегрируем все измерения образования — обучение, мониторинг, аналитику и контент — в единую когерентную модель.",
        },
        {
          title: "Обучение + аналитика",
          text: "Аналитика на основе данных встроена в каждую программу, превращая обратную связь в планы конкретных улучшений.",
        },
        {
          title: "Собственные продукты",
          text: "Фирменные учебники, STEM-программы и цифровые инструменты, разработанные специально для образовательного контекста Таджикистана.",
        },
        {
          title: "Цифровые технологии",
          text: "Современные EdTech-инструменты обеспечивают дистанционное оценивание, аналитику в реальном времени и бесперебойную коммуникацию между школой и семьёй.",
        },
        {
          title: "Международное + локальное",
          text: "Глобальные лучшие практики адаптированы к местному языку, культуре и учебным стандартам для максимальной актуальности.",
        },
      ],
    },
    courses: {
      pageTitle: "Все курсы",
      pageSubtitle:
        "Изучите наш полный каталог курсов под руководством экспертов.",
      searchPlaceholder: "Поиск курсов...",
      resultsSingular: "курс найден",
      resultsPlural: "курсов найдено",
      noResults: "Курсы не найдены.",
      noResultsHint:
        "Попробуйте изменить фильтры или поисковый запрос.",
      allLevels: "Все уровни",
      levels: {
        beginner: "Начинающий",
        intermediate: "Средний",
        advanced: "Продвинутый",
      },
      enroll: "Записаться",
      moneyBack: "Гарантия возврата денег в течение 30 дней",
      aboutCourse: "О курсе",
      curriculum: "Учебный план",
      lessons: "уроков",
      free: "Бесплатно",
      yourInstructor: "Ваш инструктор",
      reviews: "отзывов",
      students: "учеников",
    },
    blog: {
      pageTitle: "Блог",
      pageSubtitle: "Идеи, советы и истории нашего сообщества.",
    },
    contact: {
      pageTitle: "Свяжитесь с нами",
      pageSubtitle: "Напишите нам — мы будем рады помочь!",
      getInTouch: "Связаться с нами",
      getInTouchDesc:
        "Есть вопросы о наших программах? Нужна помощь с аккаунтом? Наша команда готова помочь.",
      emailLabel: "Электронная почта",
      addressLabel: "Адрес",
      hoursLabel: "Часы работы",
      form: {
        fullName: "Полное имя",
        emailAddress: "Адрес электронной почты",
        subject: "Тема",
        message: "Сообщение",
        namePlaceholder: "Иван Иванов",
        emailPlaceholder: "ivan@example.com",
        subjectPlaceholder: "Чем можем помочь?",
        messagePlaceholder: "Расскажите подробнее...",
        submit: "Отправить",
      },
      success: {
        title: "Сообщение отправлено!",
        message: "Спасибо за обращение. Мы ответим в течение 24 часов.",
      },
    },
    footer: {
      description:
        "Повышение качества образования в Таджикистане через профессиональное развитие, STEM-программы, цифровую аналитику, издательство и консалтинг — с 2023 года.",
      navigationHeading: "Навигация",
      legalHeading: "Правовая информация",
      legal: [
        "Политика конфиденциальности",
        "Условия использования",
        "Политика cookie",
      ],
    },
    auth: {
      login: {
        title: "Войдите в аккаунт",
        emailLabel: "Электронная почта",
        passwordLabel: "Пароль",
        submit: "Войти",
        submitting: "Вход...",
        error: "Неверный email или пароль. Попробуйте снова.",
        noAccount: "Нет аккаунта?",
        signUp: "Зарегистрироваться",
      },
      register: {
        title: "Создайте аккаунт",
        firstNameLabel: "Имя",
        lastNameLabel: "Фамилия",
        emailLabel: "Электронная почта",
        passwordLabel: "Пароль",
        passwordPlaceholder: "Мин. 8 символов",
        submit: "Создать аккаунт",
        success: {
          title: "Аккаунт создан!",
          message:
            "Добро пожаловать в Андарз. Теперь вы можете войти и начать обучение.",
        },
        hasAccount: "Уже есть аккаунт?",
        signIn: "Войти",
      },
    },
  },

  tj: {
    siteName: "Андарз",
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
    hero: {
      slides: [
        {
          badge: "👩‍🏫 Рушди касбӣ",
          headline: [
            "Баланд бардоштани",
            "Сифати таҳсил",
            "дар Тоҷикистон",
          ],
          description:
            "Семинарҳои амалӣ барои роҳбарони мактабҳо, муаллимон, мураббиён ва падару модарон — инкишофи салоҳиятҳои касбӣ барои натиҷаҳои воқеии академӣ.",
        },
        {
          badge: "🔬 Барномаҳои STEM",
          headline: ["Илми", "Оянда", "барои ҳар мактаб"],
          description:
            "Барномаи таълимии STEM бо стандартҳои байналмилалӣ ба забони англисӣ бо методикаи спиралӣ ва интегратсияи рақамӣ — мутобиқшуда барои мактабҳои Тоҷикистон.",
        },
        {
          badge: "📊 Экосистемаи рақамӣ",
          headline: ["Таҳлили зиракона", "барои таҳсили", "муосир"],
          description:
            "Санҷишҳои рақамӣ, арзёбии дониш ва таҳлили маълумот барои муайян кардани камбудиҳо ва пешниҳоди бозхӯрди судманд ба мактабҳо ва оилаҳо кӯмак мекунанд.",
        },
      ],
      stats: {
        schoolsServed: "Мактабҳои хизматрасӣ",
        seminarsPerYear: "Семинар дар сол",
        booksPublished: "Китобҳои нашршуда",
        experts: "Коршиносон",
      },
      cards: {
        schools: {
          title: "20 мактаб",
          subtitle: "Муассисаҳои шарик",
        },
        seminars: {
          title: "Зиёда аз 20 семинар",
          subtitle: "500+ иштирокчӣ дар ҳар яке",
        },
        featured: {
          label: "Барномаи STEM",
          title: "Илми оянда",
          subtext: "Методикаи спиралӣ + интегратсияи рақамӣ",
        },
        experts: {
          title: "18 коршинос",
          subtitle: "12 фаннӣ + 6 томактабӣ",
        },
        books: {
          title: "Зиёда аз 19 китоб",
          subtitle: "Нашршуда ва тарҷумашуда",
        },
      },
      browseCourses: "Курсҳоро бинед →",
      learnMore: "Бештар бидонед",
      slideLabel: "Ба слайди гузаред",
    },
    home: {
      services: {
        title: "Хидматҳои мо",
        subtitle:
          "Равиши ҳамаҷониба барои беҳтар кардани сифати таҳсил дар саросари Тоҷикистон.",
        items: [
          "Рушди касбӣ",
          "Мониторинги таҳсил",
          "Экосистемаи рақамӣ",
          "Барномаҳои STEM",
          "Нашриёт",
          "Машваратдиҳӣ",
        ],
      },
      cta: {
        title: "Ҳамкорӣ бо Андарз",
        subtitle:
          "Ба 20 мактаб ва 15 кӯдакистоне ҳамроҳ шавед, ки аллакай таҳсилро дар Тоҷикистон тағйир медиҳанд.",
        button: "Бо мо тамос гиред",
      },
      featuredCourses: {
        title: "Курсҳои тавсияшуда",
        subtitle: "Курсҳои мунтахаб барои шурӯъ кардани таҳсил.",
        viewAll: "Ҳама курсҳо →",
      },
    },
    about: {
      hero: {
        title: "Дар бораи мо",
        subtitle:
          "МСП «Андарз» — ташкилоти таълимӣ ва нашриётие, ки вазифадор аст муҳити таълимии муосир, бехатар ва устуворро дар Ҷумҳурии Тоҷикистон созад — аз соли 2023 фаъолият мекунад.",
      },
      mission: {
        title: "Рисолати мо",
        text: "Беҳтар кардани сифати таҳсил дар Тоҷикистон тавассути роҳҳалҳои таълимии муосир, рушди касбии муаллимон ва роҳбарон ва экосистемаи муассири ҳамкории мактабҳо, оилаҳо ва хонандагон.",
      },
      strategicGoal: {
        title: "Ҳадафи стратегӣ",
        text: "Ташкили модели устувори таҳсил, ки натиҷаҳои академии хонандагонро баланд мебардорад, салоҳиятҳои муаллимон ва роҳбаронро инкишоф медиҳад, методикаҳои муосирро ворид мекунад, хатарҳои системавиро дар ҳангоми кушодани мактабҳо кам мекунад ва фарҳанги хонданро инкишоф медиҳад.",
      },
      whatWeDo: {
        title: "Фаъолияти мо",
        subtitle:
          "Шаш самти ба ҳам алоқаманде, ки якҷоя таҳсилро тағйир медиҳанд.",
      },
      activities: [
        {
          title: "Рушди касбӣ",
          text: "Семинарҳои амалӣ (1–2 маротиба дар сол) барои роҳбарони мактабҳо, муаллимон, мураббиён, ассистентон, донишҷӯён ва падару модарон — инкишофи салоҳиятҳо барои натиҷаҳои академии андозашаванда.",
        },
        {
          title: "Мониторинги сифати таҳсил",
          text: "Аз дарсҳо дидани коршиносон, арзёбии иҷрои барномаҳо, машваратҳои инфиродӣ, тавсияҳои шахсӣ ва ҳамроҳӣ бо мактабҳо.",
        },
        {
          title: "Экосистемаи рақамӣ",
          text: "Санҷиши хонандагон, арзёбии дониш, таҳлили натиҷаҳо, муайян кардани камбудиҳо ва бозхӯрди сохторёфта барои мактабҳо ва оилаҳо.",
        },
        {
          title: "Барномаҳои STEM",
          text: "Хати «Илми оянда»: таълим ба забони англисӣ, стандартҳои байналмилалӣ, локализатсия барои Тоҷикистон, методикаи спиралӣ ва интегратсияи рақамӣ.",
        },
        {
          title: "Нашриёт",
          text: "19 китоби нашршуда, аз ҷумла тарҷумаи классикаи ҷаҳонӣ ва маводи таълимии махсус барои муаллимон ва хонандагон.",
        },
        {
          title: "Машваратдиҳӣ",
          text: "Дастгирии ҳамаҷониба дар кушодан ва иҷозатнома гирифтани мактабҳо, таҳияи барнома, идоракунӣ, беҳтар кардани сифат ва эҷоди муҳити таълимии бехатар.",
        },
      ],
      scale: { title: "Миқёси фаъолият" },
      statsLabels: [
        "Мактабҳои хизматрасӣ",
        "Кӯдакистонҳо",
        "Семинар дар сол",
        "Иштирокчӣ дар чорабинӣ",
        "Коршиносони фаннӣ",
        "Мутахассисони томактабӣ",
        "Китобҳои нашршуда",
        "Соли таъсис",
      ],
      whyAndarz: {
        title: "Чаро Андарз",
        subtitle: "Бартариҳои мо дар майдони таҳсили Тоҷикистон.",
      },
      advantages: [
        {
          title: "Равиши системавӣ",
          text: "Мо ҳама абъоди таҳсилро — омӯзиш, мониторинг, таҳлил ва мундариҷаро — дар як модели ягона якҷо мекунем.",
        },
        {
          title: "Омӯзиш + таҳлил",
          text: "Таҳлили маълумотмуҳаррик дар ҳар барнома ҷойгир аст ва бозхӯрдро ба нақшаҳои беҳтарсозии амалӣ табдил медиҳад.",
        },
        {
          title: "Маҳсулоти худӣ",
          text: "Китобҳои дарсии фирмавӣ, барномаҳои STEM ва асбобҳои рақамӣ, ки махсус барои контексти таълимии Тоҷикистон таҳия шудаанд.",
        },
        {
          title: "Технологияҳои рақамӣ",
          text: "Асбобҳои муосири EdTech арзёбии дурдастро, таҳлили воқеии вақт ва алоқаи бефосилаи мактаб–оиларо таъмин мекунанд.",
        },
        {
          title: "Байналмилалӣ + маҳаллӣ",
          text: "Таҷрибаҳои беҳтарини ҷаҳонӣ бо забон, фарҳанг ва стандартҳои таълимии маҳаллӣ мутобиқ карда шудаанд.",
        },
      ],
    },
    courses: {
      pageTitle: "Ҳама курсҳо",
      pageSubtitle: "Феҳристи пурраи курсҳои коршиносони моро омӯзед.",
      searchPlaceholder: "Ҷустуҷӯи курсҳо...",
      resultsSingular: "курс ёфт шуд",
      resultsPlural: "курс ёфт шуд",
      noResults: "Курсе ёфт нашуд.",
      noResultsHint: "Филтрҳо ё дархости ҷустуҷӯро тағйир диҳед.",
      allLevels: "Ҳама сатҳҳо",
      levels: {
        beginner: "Ибтидоӣ",
        intermediate: "Миёна",
        advanced: "Пешрафта",
      },
      enroll: "Сабт намоед",
      moneyBack: "Кафолати баргардонидани пул дар 30 рӯз",
      aboutCourse: "Дар бораи курс",
      curriculum: "Барномаи таълимӣ",
      lessons: "дарс",
      free: "Ройгон",
      yourInstructor: "Муаллими шумо",
      reviews: "шарҳ",
      students: "хонанда",
    },
    blog: {
      pageTitle: "Блог",
      pageSubtitle: "Ғояҳо, маслиҳатҳо ва ҳикояҳои ҷомеаи мо.",
    },
    contact: {
      pageTitle: "Бо мо тамос гиред",
      pageSubtitle: "Ба мо нависед — мо хурсанд мешавем!",
      getInTouch: "Тамос гиред",
      getInTouchDesc:
        "Дар бораи барномаҳои мо саволҳо доред? Гурӯҳи мо омода аст кӯмак кунад.",
      emailLabel: "Почтаи электронӣ",
      addressLabel: "Суроға",
      hoursLabel: "Соатҳои кор",
      form: {
        fullName: "Номи пурра",
        emailAddress: "Почтаи электронӣ",
        subject: "Мавзӯъ",
        message: "Паём",
        namePlaceholder: "Исмуллоев Алӣ",
        emailPlaceholder: "ali@example.com",
        subjectPlaceholder: "Чи кӯмак карда метавонем?",
        messagePlaceholder: "Бештар нависед...",
        submit: "Фиристодан",
      },
      success: {
        title: "Паём фиристода шуд!",
        message:
          "Сипосгузорем. Мо дар тӯли 24 соат ҷавоб хоҳем дод.",
      },
    },
    footer: {
      description:
        "Беҳтар кардани сифати таҳсил дар Тоҷикистон тавассути рушди касбӣ, барномаҳои STEM, таҳлили рақамӣ, нашриёт ва машваратдиҳӣ — аз соли 2023.",
      navigationHeading: "Гузаргоҳ",
      legalHeading: "Маълумоти ҳуқуқӣ",
      legal: ["Сиёсати махфият", "Шартҳои хизматрасӣ", "Сиёсати Cookie"],
    },
    auth: {
      login: {
        title: "Ба аккаунти худ ворид шавед",
        emailLabel: "Почтаи электронӣ",
        passwordLabel: "Рамз",
        submit: "Даромадан",
        submitting: "Даромадан...",
        error:
          "Почтаи электронӣ ё рамз нодуруст аст. Дубора кӯшиш кунед.",
        noAccount: "Аккаунт надоред?",
        signUp: "Сабти ном",
      },
      register: {
        title: "Аккаунти худро созед",
        firstNameLabel: "Ном",
        lastNameLabel: "Насаб",
        emailLabel: "Почтаи электронӣ",
        passwordLabel: "Рамз",
        passwordPlaceholder: "Ҳадди аққал 8 аломат",
        submit: "Аккаунт созед",
        success: {
          title: "Аккаунт сохта шуд!",
          message:
            "Ба Андарз хуш омадед. Акнун шумо метавонед ворид шавед ва таҳсилро оғоз кунед.",
        },
        hasAccount: "Аллакай аккаунт доред?",
        signIn: "Даромадан",
      },
    },
  },
};

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "tj", label: "Тоҷикӣ", flag: "🇹🇯" },
];
