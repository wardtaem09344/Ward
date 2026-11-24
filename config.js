/* ============================================================
   كل المحتوى هنا — عدّل هذا الملف فقط وكل الموقع يتغير.
   Everything on the site lives in this file. Edit it only.
   القيم بين [ ] هي أماكن تنتظر معلوماتك.
   ============================================================ */
window.SITE = {
  handle: "ward",                                  // يظهر في بطاقة الكود
  links: {
    telegram: "https://t.me/YOUR_TELEGRAM",      // [مطلوب] رابط تلغرام
    email: "you@example.com",                     // [مطلوب] الإيميل
    github: "https://github.com/wardtaem09344",  // أو اتركه فارغًا ""
    instagram: "",                                // اختياري
    tiktok: ""                                    // اختياري
  },
  en: {
    brand: "Ward",                                // [مطلوب] اسم المشروع/الشركة
    tag: "Software studio",
    title: "Ward — software, built with care",
    desc: "A small studio building web apps, AI tools and automation.",
    nav: { services: "Services", work: "Work", process: "Process", faq: "FAQ", contact: "Contact" },
    cta: "Start a project",
    cta2: "Say hello",
    banner: ["Questions? Message us on Telegram — we usually reply within a day.", "Open Telegram"],
    subs: {
      services: "One small team, from idea to launch. No hand-offs, no guesswork.",
      work: "A few things we have built and shipped.",
      process: "The same five steps every time, so you always know what is next.",
      principles: "The standards every build is measured against before it ships.",
      faq: "Quick answers to what people ask before reaching out."
    },
    principlesTitle: "Principles, not promises",
    principles: [
      ["Security by design", "Access control and encryption are decided at the start, not patched in later."],
      ["Built to scale", "Systems sized for where your business is going, not just where it is today."],
      ["Modern tools", "Chosen for what they solve, not for hype."],
      ["Clean code", "Readable, documented and tested — easy for the next developer."],
      ["Fast by default", "Speed is a feature. Every release is measured."],
      ["Real support", "A direct line to the person who built it."]
    ],
    hero: {
      kicker: "Independent studio · Open for projects",
      h1: ["Software that", "feels", "effortless."],
      p: "We design and build web apps, AI tools and automation for people who want things done properly — and shipped fast.",
      facts: ["You own the code", "Reply within a day", "Direct line to the builder"]
    },
    servicesTitle: "What we build",
    services: [
      ["AI & Chatbots", "Assistants, agents and integrations that do real work."],
      ["Custom Software", "Tools shaped around how your business actually runs."],
      ["Websites", "Fast, accessible sites that look sharp on any screen."],
      ["Mobile Apps", "Clean apps for iOS and Android from one codebase."],
      ["Security", "Hardening, reviews and safe defaults from day one."],
      ["Cloud", "Reliable hosting, deploys and monitoring."],
      ["Automation", "Bots and pipelines that remove repetitive work."],
      ["Consulting", "Honest technical advice before you spend a dollar."]
    ],
    workTitle: "Selected work",
    work: [
      ["[Project one]", "Web app", "Short description of what it does and who it is for.", "#"],
      ["[Project two]", "AI", "Short description of what it does and who it is for.", "#"],
      ["[Project three]", "Automation", "Short description of what it does and who it is for.", "#"],
      ["[Project four]", "Website", "Short description of what it does and who it is for.", "#"]
    ],
    visit: "Visit",
    processTitle: "How a project runs",
    process: [
      ["Discover", "We agree on scope, budget and timeline."],
      ["Design", "You see the look and flow before we build."],
      ["Build", "Short cycles, always something to try."],
      ["Launch", "Tested, deployed, handed over."],
      ["Support", "We stay around after launch."]
    ],
    faqTitle: "Questions",
    faq: [
      ["How long does a project take?", "Websites usually take 2–6 weeks. Larger apps take a few months. You get a clear estimate after the first call."],
      ["How much does it cost?", "Every project is quoted individually. Tell us what you need and we reply with a number."],
      ["Do I own the code?", "Yes. You receive the full source code and documentation."],
      ["I'm not technical. Is that okay?", "Absolutely. We explain everything in plain language."],
      ["Do you offer support afterwards?", "Yes, ongoing maintenance is available."]
    ],
    ownerTitle: "Who's behind it",
    owner: { name: "[Your name]", role: "Founder & developer", bio: "Two or three lines about you: what you build, how long you've been doing it, what you care about." },
    closing: ["Have an idea?", "Tell us about it — we usually reply the same day."],
    footer: "All rights reserved.",
    langSwitch: "عربي"
  },
  ar: {
    brand: "وارد",
    tag: "استوديو برمجة",
    title: "وارد — برمجيات مصنوعة بعناية",
    desc: "استوديو صغير يبني تطبيقات ويب وأدوات ذكاء اصطناعي وأتمتة.",
    nav: { services: "الخدمات", work: "الأعمال", process: "المراحل", faq: "أسئلة", contact: "تواصل" },
    cta: "ابدأ مشروعك",
    cta2: "تواصل معنا",
    banner: ["عندك سؤال؟ راسلنا على تلغرام — نرد عادةً خلال يوم.", "افتح تلغرام"],
    subs: {
      services: "فريق صغير واحد من الفكرة حتى الإطلاق. بلا وسطاء وبلا تخمين.",
      work: "بعض ما بنيناه وأطلقناه.",
      process: "الخطوات الخمس نفسها كل مرة، لتعرف دائمًا ما التالي.",
      principles: "المعايير التي يُقاس بها كل مشروع قبل تسليمه.",
      faq: "إجابات سريعة عمّا يسأله الناس قبل التواصل."
    },
    principlesTitle: "مبادئ لا وعود",
    principles: [
      ["أمان من البداية", "الصلاحيات والتشفير تُحدَّد في أول التصميم، لا تُرقَّع لاحقًا."],
      ["قابل للتوسع", "أنظمة مبنية لمستقبل عملك، لا لحاضره فقط."],
      ["أدوات حديثة", "نختارها لما تحلّه من مشاكل، لا لأنها رائجة."],
      ["كود نظيف", "مقروء وموثّق ومُختبر، يسهل على أي مطوّر بعدنا."],
      ["سريع افتراضيًا", "السرعة ميزة، وكل إصدار يُقاس."],
      ["دعم حقيقي", "تواصل مباشر مع من بنى المشروع."]
    ],
    hero: {
      kicker: "استوديو مستقل · متاحون لمشاريع جديدة",
      h1: ["برمجيات", "تبدو", "سهلة."],
      p: "نصمّم ونبني تطبيقات ويب وأدوات ذكاء اصطناعي وأتمتة لمن يريد عملًا متقنًا وتسليمًا سريعًا.",
      facts: ["الكود ملكك", "رد خلال يوم", "تواصل مباشر مع المنفّذ"]
    },
    servicesTitle: "ماذا نبني",
    services: [
      ["ذكاء اصطناعي وبوتات", "مساعدون ووكلاء وتكاملات تنجز عملًا حقيقيًا."],
      ["برمجيات مخصصة", "أدوات مفصّلة على طريقة عمل شركتك."],
      ["مواقع ويب", "مواقع سريعة وواضحة تبدو رائعة على أي شاشة."],
      ["تطبيقات موبايل", "تطبيقات أنيقة لآيفون وأندرويد من كود واحد."],
      ["الأمن السيبراني", "تحصين ومراجعة وإعدادات آمنة من اليوم الأول."],
      ["السحابة", "استضافة موثوقة ونشر ومراقبة."],
      ["الأتمتة", "بوتات وخطوط عمل تلغي المهام المتكررة."],
      ["استشارات تقنية", "نصيحة صادقة قبل أن تصرف أي مبلغ."]
    ],
    workTitle: "من أعمالنا",
    work: [
      ["[المشروع الأول]", "تطبيق ويب", "وصف قصير لما يفعله ولمن هو.", "#"],
      ["[المشروع الثاني]", "ذكاء اصطناعي", "وصف قصير لما يفعله ولمن هو.", "#"],
      ["[المشروع الثالث]", "أتمتة", "وصف قصير لما يفعله ولمن هو.", "#"],
      ["[المشروع الرابع]", "موقع", "وصف قصير لما يفعله ولمن هو.", "#"]
    ],
    visit: "زيارة",
    processTitle: "كيف يسير المشروع",
    process: [
      ["الاستكشاف", "نتفق على النطاق والميزانية والمدة."],
      ["التصميم", "ترى الشكل والتدفق قبل أن نبدأ البناء."],
      ["البناء", "دورات قصيرة ودائمًا شيء تجربه."],
      ["الإطلاق", "اختبار ونشر وتسليم."],
      ["الدعم", "نبقى معك بعد الإطلاق."]
    ],
    faqTitle: "أسئلة شائعة",
    faq: [
      ["كم يستغرق المشروع؟", "المواقع عادة من 2 إلى 6 أسابيع، والتطبيقات الأكبر بضعة أشهر. تحصل على تقدير واضح بعد أول مكالمة."],
      ["كم التكلفة؟", "كل مشروع يُسعَّر على حدة. أخبرنا بما تحتاجه وسنرد برقم."],
      ["هل الكود ملكي؟", "نعم، تستلم الكود المصدري كاملًا مع التوثيق."],
      ["لست تقنيًا، هل هذا مناسب؟", "بالتأكيد، نشرح كل شيء بلغة بسيطة."],
      ["هل تقدمون دعمًا بعد التسليم؟", "نعم، تتوفر صيانة مستمرة."]
    ],
    ownerTitle: "من وراء العمل",
    owner: { name: "[اسمك]", role: "مؤسس ومطوّر", bio: "سطران أو ثلاثة عنك: ماذا تبني، منذ متى، وما الذي يهمك." },
    closing: ["عندك فكرة؟", "احكِ لنا عنها — نرد عادةً في اليوم نفسه."],
    footer: "جميع الحقوق محفوظة.",
    langSwitch: "English"
  }
};
