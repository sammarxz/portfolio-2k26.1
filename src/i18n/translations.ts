export type Lang = "en" | "pt";

export const translations = {
  en: {
    // Hero
    availableForWork: "Available for work",
    role: "Design Engineer",
    bio: "I'm Sam, a Design Engineer. Years shipping pixel-perfect interfaces taught me that great products aren't built in layers, they're built whole. I live at the intersection of design and code: from Figma to the API, from the design system to the database.",
    pressKey: "Press",
    copyEmailHint: "to copy my email",
    copied: "Copied!",
    getInTouch: "Get in touch",
    // Experience
    experienceHeading: "Experience",
    experienceIntro:
      "6+ years building digital products at the intersection of design and engineering. Here's a brief overview.",
    downloadResume: "Download full resume",
    // Works
    worksHeading: "Selected Works",
    worksDesc: "Here are some of my favorite projects I've worked on.",
    // Testimonials / Ventures / Writing / Tools / Personal
    testimonialsHeading: "Testimonials",
    venturesHeading: "Ventures",
    writingHeading: "Writing",
    toolsHeading: "Tools",
    personalHeading: "Personal",
    personalBio:
      "In my free time, I enjoy spend time with my family, go to walk with my dogs, read books, and sharing my learnings on my podcast.",
    podcastDescription: "Where every learning experience becomes an episode",
    weeklyPodcast: "Weekly Podcast in Portuguese",
    listenOnSpotify: "Listen on Spotify",
    somePartsOfMyLife: "Some parts of my life :)",
    seeMoreOnIG: "See more on IG",
    // Contact
    contactHeading: "Contact",
    contactIntro: "You can contact me using the form or via the links below.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project...",
    sendMessage: "Send message",
    sending: "Sending…",
    sent: "Sent!",
    or: "or",
    enterToSend: "Enter to send",
    successMessage: "Message sent! I'll get back to you soon.",
    errorMessage: "Something went wrong. Please try again.",
    // Footer / Meta
    builtWith: "Built with Astro",
    skipToContent: "Skip to content",
    pageTitle: "Sam Marxz — Design Engineer",
    pageDescription:
      "Design Engineer and maker. I build clean, focused products that solve real problems.",
  },
  pt: {
    availableForWork: "Disponível",
    role: "Design Engineer",
    bio: "Sou Sam, um Design Engineer. Anos entregando interfaces pixel-perfect me ensinaram que grandes produtos não são construídos em camadas, são construídos por inteiro. Vivo na interseção entre design e código: do componente à API, do Figma ao banco de dados.",
    pressKey: "Pressione",
    copyEmailHint: "para copiar meu email",
    copied: "Copiado!",
    getInTouch: "Entre em contato",
    experienceHeading: "Experiência",
    experienceIntro:
      "6+ anos construindo produtos digitais na interseção entre design e engenharia. Aqui está um breve resumo.",
    downloadResume: "Baixar currículo completo",
    worksHeading: "Trabalhos Selecionados",
    worksDesc: "Aqui estão alguns dos meus projetos favoritos.",
    testimonialsHeading: "Depoimentos",
    venturesHeading: "Projetos",
    writingHeading: "Escritos",
    toolsHeading: "Ferramentas",
    personalHeading: "Pessoal",
    personalBio:
      "No meu tempo livre, gosto de passar tempo com a família, passear com os cachorros, ler livros e compartilhar meu aprendizado no meu podcast.",
    podcastDescription: "Onde cada experiência de aprendizado vira um episódio",
    weeklyPodcast: "Podcast semanal em português",
    listenOnSpotify: "Ouvir no Spotify",
    somePartsOfMyLife: "Partes da minha vida :)",
    seeMoreOnIG: "Ver mais no IG",
    contactHeading: "Contato",
    contactIntro:
      "Você pode me contatar pelo formulário ou pelos links abaixo.",
    nameLabel: "Nome",
    namePlaceholder: "Seu nome",
    emailLabel: "Email",
    emailPlaceholder: "seu@email.com",
    messageLabel: "Mensagem",
    messagePlaceholder: "Me conte sobre o seu projeto...",
    sendMessage: "Enviar mensagem",
    sending: "Enviando…",
    sent: "Enviado!",
    or: "ou",
    enterToSend: "Enter para enviar",
    successMessage: "Mensagem enviada! Vou responder em breve.",
    errorMessage: "Algo deu errado. Por favor, tente novamente.",
    builtWith: "Feito com Astro",
    skipToContent: "Pular para o conteúdo",
    pageTitle: "Sam Marxz — Designer e Desenvolvedor Web",
    pageDescription:
      "Designer e Desenvolvedor Web e maker. Crio produtos limpos e focados que resolvem problemas reais.",
  },
} satisfies Record<Lang, Record<string, string>>;

export function useTranslations(lang: Lang) {
  return translations[lang];
}
