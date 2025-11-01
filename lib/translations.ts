
export const translations = {
  en: {
    // Header
    menu: 'Menu',
    nav_works: 'Works',
    nav_principle: 'Principle',
    nav_dialogue: 'Dialogue',
    close: 'Close',

    // Hero
    hero_line1: 'As Above, So Below:',
    hero_line2: 'Shaping Space, Light,',
    hero_line3: 'and the Silence Within.',

    // Projects
    section_title_works: 'Works',
    principle_title: 'Our Principle',
    principle_text: 'We perceive architecture as a medium for correspondence—a bridge between the inner emotional landscape and the outer material world. Each space is a vessel, designed to resonate with the vibration of its inhabitants and its environment.',
    axioms_title: 'Our Axioms',
    axiom_1: 'Rhythm in Form',
    axiom_2: 'Polarity of Light & Shadow',
    axiom_3: 'Vibration of Matter',
    axiom_4: 'The Gender of Space',
    
    // Footer
    cta_title: "Let's Manifest",
    cta_email: 'dialogue@trismegilti.com',
    about_title: 'Principle',
    about_text: 'A Brazil-based studio dedicated to the hermetic art of architecture, creating atmospheric vessels for human experience.',
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
    hero_line1: 'O que está Acima é como o que está Abaixo:',
    hero_line2: 'Moldando o Espaço, a Luz,',
    hero_line3: 'e o Silêncio Interior.',

    // Projects
    section_title_works: 'Obras',
    principle_title: 'Nosso Princípio',
    principle_text: 'Percebemos a arquitetura como um meio de correspondência — uma ponte entre a paisagem emocional interna e o mundo material externo. Cada espaço é um receptáculo, projetado para ressoar com a vibração de seus habitantes e seu ambiente.',
    axioms_title: 'Nossos Axiomas',
    axiom_1: 'Ritmo na Forma',
    axiom_2: 'Polaridade de Luz e Sombra',
    axiom_3: 'Vibração da Matéria',
    axiom_4: 'O Gênero do Espaço',

    // Footer
    cta_title: 'Vamos Manifestar',
    cta_email: 'dialogo@trismegilti.com',
    about_title: 'Princípio',
    about_text: 'Um estúdio sediado no Brasil, dedicado à arte hermética da arquitetura, criando receptáculos atmosféricos para a experiência humana.',
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
