
export const translations = {
  en: {
    // Header
    menu: 'Menu',
    nav_works: 'Works',
    nav_principle: 'Principle',
    nav_dialogue: 'Dialogue',
    close: 'Close',

    // Hero
    hero_line1: 'Transcending Form, Defining Space.',
    hero_line2: 'A Dialogue of Modern Architecture,',
    hero_line3: 'in Light, Matter, and Rhythm.',

    // Projects
    section_title_works: 'Works',
    principle_title: 'Our Principle',
    principle_text: 'We practice architectural design as applied philosophy. Guided by Hermetic principles, our work creates a conscious dialogue between human experience and the built environment. We specialize in contemporary residential and commercial projects, crafting spaces that are not mere structures, but resonant compositions of light, material, and geometric harmony, timelessly connected to their context.',
    axioms_title: 'Our Axioms',
    axiom_1: 'Rhythm in Form',
    axiom_2: 'Polarity of Light & Shadow',
    axiom_3: 'Vibration of Matter',
    axiom_4: 'The Gender of Space',
    
    // Footer
    cta_title: "Begin Your Architectural Dialogue",
    cta_email: 'dialogue@trismegilti.com',
    about_title: 'Principle',
    about_text: 'Trismegilti is a Brazil-based architecture studio focused on contemporary design with a philosophical core. We apply hermetic principles to create unique residential and commercial projects, crafting atmospheric and meaningful spaces where form and function resonate.',
    manage_portfolio: 'Manage Portfolio',
    copyright: `© ${new Date().getFullYear()} Trismegilti Studio. All rights reserved.`,

    // Manager
    manager_title: 'Manage Archive',
    manager_done: 'Done',
    manager_add: 'Add Images',
    manager_remove_image_alt: 'Image of project',
    manager_remove_aria: 'Remove image of project',
    manager_add_aria: 'Add new images',
    manager_image_error: 'Could not load image',
    
    // Image Fallback
    image_load_error: "Image failed to load",
  },
  pt: {
    // Header
    menu: 'Menu',
    nav_works: 'Obras',
    nav_principle: 'Princípio',
    nav_dialogue: 'Diálogo',
    close: 'Fechar',

    // Hero
    hero_line1: 'Transcendendo a Forma, Definindo o Espaço.',
    hero_line2: 'Um Diálogo da Arquitetura Moderna,',
    hero_line3: 'em Luz, Matéria e Ritmo.',

    // Projects
    section_title_works: 'Obras',
    principle_title: 'Nosso Princípio',
    principle_text: 'Praticamos o design arquitetônico como filosofia aplicada. Guiados por princípios Herméticos, nosso trabalho cria um diálogo consciente entre a experiência humana e o ambiente construído. Especializamo-nos em projetos residenciais e comerciais contemporâneos, criando espaços que não são meras estruturas, mas composições ressonantes de luz, matéria e harmonia geométrica, atemporalmente conectadas ao seu contexto.',
    axioms_title: 'Nossos Axiomas',
    axiom_1: 'Ritmo na Forma',
    axiom_2: 'Polaridade de Luz e Sombra',
    axiom_3: 'Vibração da Matéria',
    axiom_4: 'O Gênero do Espaço',

    // Footer
    cta_title: 'Inicie Seu Diálogo Arquitetônico',
    cta_email: 'dialogo@trismegilti.com',
    about_title: 'Princípio',
    about_text: 'Trismegilti é um estúdio de arquitetura brasileiro focado em design contemporâneo com uma essência filosófica. Aplicamos princípios herméticos para criar projetos residenciais e comerciais únicos, elaborando espaços atmosféricos e significativos onde forma e função ressoam.',
    manage_portfolio: 'Gerenciar Portfólio',
    copyright: `© ${new Date().getFullYear()} Trismegilti Studio. Todos os direitos reservados.`,

    // Manager
    manager_title: 'Gerenciar Arquivo',
    manager_done: 'Concluir',
    manager_add: 'Adicionar Imagens',
    manager_remove_image_alt: 'Imagem do projeto',
    manager_remove_aria: 'Remover imagem do projeto',
    manager_add_aria: 'Adicionar novas imagens',
    manager_image_error: 'Não foi possível carregar a imagem',
    
    // Image Fallback
    image_load_error: "Imagem não carregada",
  },
};

export type LanguageStrings = typeof translations.en;
