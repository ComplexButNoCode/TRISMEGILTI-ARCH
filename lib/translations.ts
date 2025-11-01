export const translations = {
  en: {
    // Header
    menu: 'Menu',
    nav_works: 'Works',
    nav_principle: 'Philosophy',
    nav_dialogue: 'Contact',
    close: 'Close',

    // Hero
    hero_line1: 'Minimalist modern architecture and design.',

    // Projects
    section_title_works: 'Selected Works',
    principle_title: 'Our Vision',
    principle_text: "We sculpt with concrete, creating a silent, powerful dialogue between mass and void. Our work embraces organic curves and minimalist principles, reducing architecture to its essential expression. The result is pure, sensorial spaces where raw material and fluid form invite human connection.",
    axioms_title: 'Core Principles',
    axiom_1: 'Minimalism: Distilling form to its purest essence. Every line serves a purpose.',
    axiom_2: 'Materiality: Celebrating raw concrete—its texture, strength, and honesty.',
    axiom_3: 'Fluidity: Embracing organic curves that guide movement and soften structure.',
    axiom_4: 'Light & Shadow: Designing voids that sculpt space and define atmosphere.',
    
    // Footer
    cta_title: "Let's build a vision.",
    cta_email: '@trismegilti',
    about_title: 'Our Studio',
    about_text: 'Trismegilti is a modern architecture studio dedicated to the poetics of minimalism. We specialize in creating resonant spaces defined by the interplay of raw concrete, organic curves, and natural light. Our work is a pursuit of sensorial, essential architecture.',
    copyright: `© ${new Date().getFullYear()} Trismegilti Studio. All rights reserved.`,
    
    // Image Fallback
    image_load_error: "Image failed to load",

    // FIX: Add missing translation keys for the Portfolio Manager to resolve TypeScript errors.
    // Portfolio Manager
    manager_title: 'Manage Portfolio',
    manager_done: 'Done',
    manager_add: 'Add',
    manager_add_aria: 'Add new images',
    manager_remove_image_alt: 'Project image',
    manager_remove_aria: 'Remove image',
    manager_image_error: 'Image failed to load',
  },
  pt: {
    // Header
    menu: 'Menu',
    nav_works: 'Obras',
    nav_principle: 'Filosofia',
    nav_dialogue: 'Contato',
    close: 'Fechar',

    // Hero
    hero_line1: 'Arquitetura e design moderno minimalista.',

    // Projects
    section_title_works: 'Obras Selecionadas',
    principle_title: 'Nossa Visão',
    principle_text: 'Esculpimos com concreto, criando um diálogo silencioso e poderoso entre massa e vazio. Nosso trabalho abraça curvas orgânicas e princípios minimalistas, reduzindo a arquitetura à sua expressão essencial. O resultado são espaços puros e sensoriais onde a matéria-prima e a forma fluida convidam à conexão humana.',
    axioms_title: 'Princípios Essenciais',
    axiom_1: 'Minimalismo: Destilando a forma à sua mais pura essência. Cada linha tem um propósito.',
    axiom_2: 'Materialidade: Celebrando o concreto bruto — sua textura, força e honestidade.',
    axiom_3: 'Fluidez: Abraçando curvas orgânicas que guiam o movimento e suavizam a estrutura.',
    axiom_4: 'Luz & Sombra: Projetando vazios que esculpem o espaço e definem a atmosfera.',

    // Footer
    cta_title: 'Vamos construir uma visão.',
    cta_email: '@trismegilti',
    about_title: 'Nosso Estúdio',
    about_text: 'Trismegilti é um estúdio de arquitetura moderna dedicado à poética do minimalismo. Somos especialistas na criação de espaços ressonantes definidos pela interação entre concreto bruto, curvas orgânicas e luz natural. Nosso trabalho é uma busca por uma arquitetura sensorial e essencial.',
    copyright: `© ${new Date().getFullYear()} Trismegilti Studio. Todos os direitos reservados.`,
    
    // Image Fallback
    image_load_error: "Falha ao carregar imagem",

    // FIX: Add missing translation keys for the Portfolio Manager to resolve TypeScript errors.
    // Portfolio Manager
    manager_title: 'Gerenciar Portfólio',
    manager_done: 'Concluído',
    manager_add: 'Adicionar',
    manager_add_aria: 'Adicionar novas imagens',
    manager_remove_image_alt: 'Imagem do projeto',
    manager_remove_aria: 'Remover imagem',
    manager_image_error: 'Falha ao carregar imagem',
  },
};

export type LanguageStrings = typeof translations.en;
