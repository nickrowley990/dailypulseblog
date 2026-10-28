/**
 * Pulse Insider Daily - Official Application Script (script.js)
 * Clean, Dependency-Free Vanilla JavaScript (ES2018)
 * Features:
 *   - 12-Language i18n Engine & Dynamic Content Filter
 *   - Dark/Light/System Theme Manager
 *   - Blogger JSON Feed Integrator (Bento Hero, Niches, Trending, Infinite Feed)
 *   - Article Utilities (Reading Progress, Dynamic TOC, Text Resizer, Share Bar, Lightbox)
 *   - LocalStorage Saved Stories System
 *   - Cmd/Ctrl+K Search Palette
 *   - Cookie Privacy Consent
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. GLOBAL 12-LANGUAGE DICTIONARY (Complete translations of every UI key)
  // ==========================================================================
  const I18N = {
    en: {
      skip_content: 'Skip to content',
      breaking_news: 'BREAKING',
      tagline: 'Daily Pulses',
      cat_all: 'All',
      cat_world: 'World',
      cat_politics: 'Politics',
      cat_business: 'Business',
      cat_tech: 'Tech',
      cat_ai: 'AI',
      cat_science: 'Science',
      cat_health: 'Health',
      cat_crypto: 'Crypto',
      cat_sports: 'Sports',
      cat_entertainment: 'Entertainment',
      cat_gaming: 'Gaming',
      cat_climate: 'Climate',
      cat_auto: 'Auto',
      cat_lifestyle: 'Lifestyle',
      cat_travel: 'Travel',
      cat_fashion: 'Fashion',
      cat_food: 'Food',
      cat_realestate: 'Real Estate',
      cat_education: 'Education',
      explore_niches: 'Explore Niches',
      about_us: 'About Us',
      editorial_policy: 'Editorial Policy',
      corrections: 'Corrections',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      disclaimer: 'Disclaimer',
      advertise: 'Advertise With Us',
      editorial_standards: 'Editorial Standards',
      corrections_policy: 'Corrections Policy',
      newsroom_contact: 'Newsroom & Tips',
      key_sectors: 'Key Sectors',
      editorial_trust: 'Editorial Trust',
      global_editions: '12 Global Editions',
      back_to_top: 'Back to Top',
      trending_now: 'Trending Now',
      realtime_pulses: 'REAL-TIME PULSES',
      latest_news: 'Latest News',
      load_more: 'Load More Stories',
      newsletter_title: 'The Pulse Daily Dispatch',
      newsletter_desc: 'Get unbiased global intelligence curated every morning across tech, markets, and world affairs.',
      newsletter_placeholder: 'your.name@domain.com',
      subscribe: 'Subscribe Free',
      newsletter_disclaimer: 'No spam. Unsubscribe anytime.',
      most_read: 'Most Read',
      explore_topics: 'Explore Topics',
      breadcrumb_home: 'Home',
      available_in: 'This dispatch is also available in:',
      min_read: 'min read',
      save_btn: 'Save',
      saved_btn: 'Saved',
      share_article: 'SHARE',
      table_of_contents: 'Table of Contents',
      editorial_integrity: 'EDITORIAL INTEGRITY',
      editorial_statement: 'Pulse Insider Daily adheres to rigorous standards of verification. Facts are verified against named primary sources. If you detect an inaccuracy, submit a note via our Corrections Desk.',
      reported_by: 'REPORTED BY',
      author_bio_default: 'Staff correspondent for Pulse Insider Daily covering global technology, markets, and policy.',
      related_stories: 'Related Stories',
      reader_discussion: 'Reader Discussion',
      saved_stories_title: 'Your Saved Stories',
      saved_stories_subtitle: 'Articles saved to your local device for offline or later reading.',
      clear_all_saved: 'Clear All Saved',
      no_saved_yet: 'No saved stories yet',
      no_saved_desc: 'Click the bookmark icon on any dispatch to save it here.',
      browse_news: 'Browse News',
      remove_saved: 'Remove',
      error_title: 'Pulse Not Found',
      error_desc: 'The dispatch you are looking for has been moved, archived, or is temporarily unavailable.',
      search: 'Search',
      back_to_homepage: 'Back to Homepage',
      search_placeholder: 'Search global dispatches...',
      cmd_search_placeholder: 'Type keywords, topics or press Esc to close...',
      quick_topics: 'Quick Topics',
      ad_label: 'SPONSORED / ADVERTISEMENT',
      consent_text: 'Pulse Insider Daily respects your privacy. We use essential storage for your theme, language choice, and saved dispatches.',
      consent_accept: 'Accept',
      consent_more: 'Learn More',
      link_copied: 'Link copied to clipboard!',
      newsletter_success: 'Thank you for subscribing to Pulse Insider Daily!',
      no_posts_in_lang: 'Showing international dispatches in English for this section.',
      read_more: 'Read dispatch',
      prev_article: 'Previous Dispatch',
      next_article: 'Next Dispatch'
    },
    es: {
      skip_content: 'Saltar al contenido',
      breaking_news: 'ÚLTIMA HORA',
      tagline: 'Pulsos Diarios',
      cat_all: 'Todo',
      cat_world: 'Mundo',
      cat_politics: 'Política',
      cat_business: 'Negocios',
      cat_tech: 'Tecnología',
      cat_ai: 'IA',
      cat_science: 'Ciencia',
      cat_health: 'Salud',
      cat_crypto: 'Cripto',
      cat_sports: 'Deportes',
      cat_entertainment: 'Entretenimiento',
      cat_gaming: 'Videojuegos',
      cat_climate: 'Clima',
      cat_auto: 'Motor',
      cat_lifestyle: 'Estilo de Vida',
      cat_travel: 'Viajes',
      cat_fashion: 'Moda',
      cat_food: 'Gastronomía',
      cat_realestate: 'Inmobiliaria',
      cat_education: 'Educación',
      explore_niches: 'Explorar Secciones',
      about_us: 'Sobre Nosotros',
      editorial_policy: 'Política Editorial',
      corrections: 'Correcciones',
      contact: 'Contacto',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      disclaimer: 'Aviso Legal',
      advertise: 'Publicidad',
      editorial_standards: 'Normas Editoriales',
      corrections_policy: 'Política de Correcciones',
      newsroom_contact: 'Redacción y Contacto',
      key_sectors: 'Sectores Clave',
      editorial_trust: 'Confianza Editorial',
      global_editions: '12 Ediciones Globales',
      back_to_top: 'Volver Arriba',
      trending_now: 'Tendencias',
      realtime_pulses: 'PULSOS EN VIVO',
      latest_news: 'Últimas Noticias',
      load_more: 'Cargar Más Historias',
      newsletter_title: 'El Despacho Diario de Pulse',
      newsletter_desc: 'Reciba inteligencia global imparcial cada mañana sobre tecnología, mercados y geopolítica.',
      newsletter_placeholder: 'su.nombre@correo.com',
      subscribe: 'Suscribirse Gratis',
      newsletter_disclaimer: 'Sin spam. Cancele cuando quiera.',
      most_read: 'Más Leído',
      explore_topics: 'Temas Destacados',
      breadcrumb_home: 'Inicio',
      available_in: 'Este despacho también está disponible en:',
      min_read: 'min de lectura',
      save_btn: 'Guardar',
      saved_btn: 'Guardado',
      share_article: 'COMPARTIR',
      table_of_contents: 'Índice de Contenidos',
      editorial_integrity: 'INTEGRIDAD EDITORIAL',
      editorial_statement: 'Pulse Insider Daily mantiene rigurosos estándares de verificación con fuentes primarias citadas.',
      reported_by: 'INFORMADO POR',
      author_bio_default: 'Corresponsal de Pulse Insider Daily especializado en tecnología global, finanzas y política.',
      related_stories: 'Noticias Relacionadas',
      reader_discussion: 'Comentarios de Lectores',
      saved_stories_title: 'Historias Guardadas',
      saved_stories_subtitle: 'Artículos guardados en su dispositivo para lectura sin conexión.',
      clear_all_saved: 'Borrar Todo',
      no_saved_yet: 'Aún no tiene historias guardadas',
      no_saved_desc: 'Haga clic en el marcador de cualquier despacho para guardarlo aquí.',
      browse_news: 'Explorar Noticias',
      remove_saved: 'Eliminar',
      error_title: 'Pulso No Encontrado',
      error_desc: 'El despacho solicitado ha sido trasladado o no está disponible.',
      search: 'Buscar',
      back_to_homepage: 'Volver al Inicio',
      search_placeholder: 'Buscar despachos globales...',
      cmd_search_placeholder: 'Escriba palabras clave o pulse Esc para salir...',
      quick_topics: 'Temas Rápidos',
      ad_label: 'PUBLICIDAD / PATROCINIO',
      consent_text: 'Pulse Insider Daily respeta su privacidad y utiliza almacenamiento esencial para su experiencia.',
      consent_accept: 'Aceptar',
      consent_more: 'Más Información',
      link_copied: '¡Enlace copiado al portapapeles!',
      newsletter_success: '¡Gracias por suscribirse a Pulse Insider Daily!',
      no_posts_in_lang: 'Mostrando despachos internacionales en inglés para esta sección.',
      read_more: 'Leer despacho',
      prev_article: 'Despacho Anterior',
      next_article: 'Despacho Siguiente'
    },
    pt: {
      skip_content: 'Pular para o conteúdo',
      breaking_news: 'URGENTE',
      tagline: 'Pulsos Diários',
      cat_all: 'Tudo',
      cat_world: 'Mundo',
      cat_politics: 'Política',
      cat_business: 'Negócios',
      cat_tech: 'Tecnologia',
      cat_ai: 'IA',
      cat_science: 'Ciência',
      cat_health: 'Saúde',
      cat_crypto: 'Cripto',
      cat_sports: 'Esportes',
      cat_entertainment: 'Entretenimento',
      cat_gaming: 'Games',
      cat_climate: 'Clima',
      cat_auto: 'Auto',
      cat_lifestyle: 'Estilo de Vida',
      cat_travel: 'Viagens',
      cat_fashion: 'Moda',
      cat_food: 'Gastronomia',
      cat_realestate: 'Imobiliário',
      cat_education: 'Educação',
      explore_niches: 'Explorar Seções',
      about_us: 'Sobre Nós',
      editorial_policy: 'Política Editorial',
      corrections: 'Correções',
      contact: 'Contato',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Serviço',
      disclaimer: 'Aviso Legal',
      advertise: 'Anuncie Conosco',
      editorial_standards: 'Padrões Editoriais',
      corrections_policy: 'Política de Correções',
      newsroom_contact: 'Redação e Contato',
      key_sectors: 'Setores Principais',
      editorial_trust: 'Confiança Editorial',
      global_editions: '12 Edições Globais',
      back_to_top: 'Voltar ao Topo',
      trending_now: 'Em Alta',
      realtime_pulses: 'PULSOS EM TEMPO REAL',
      latest_news: 'Últimas Notícias',
      load_more: 'Carregar Mais',
      newsletter_title: 'O Despacho Diário Pulse',
      newsletter_desc: 'Inteligência global independente todas as manhãs sobre tecnologia, mercados e geopolítica.',
      newsletter_placeholder: 'seu.email@dominio.com',
      subscribe: 'Assinar Grátis',
      newsletter_disclaimer: 'Sem spam. Cancele quando quiser.',
      most_read: 'Mais Lidas',
      explore_topics: 'Explorar Tópicos',
      breadcrumb_home: 'Início',
      available_in: 'Este despacho também está disponível em:',
      min_read: 'min de leitura',
      save_btn: 'Salvar',
      saved_btn: 'Salvo',
      share_article: 'COMPARTILHAR',
      table_of_contents: 'Índice',
      editorial_integrity: 'INTEGRIDADE EDITORIAL',
      editorial_statement: 'Pulse Insider Daily adota padrões rigorosos de verificação com fontes primárias.',
      reported_by: 'REPORTAGEM POR',
      author_bio_default: 'Correspondente do Pulse Insider Daily para tecnologia, economia e política global.',
      related_stories: 'Notícias Relacionadas',
      reader_discussion: 'Discussão dos Leitores',
      saved_stories_title: 'Histórias Salvas',
      saved_stories_subtitle: 'Artigos salvos no seu dispositivo para leitura offline.',
      clear_all_saved: 'Limpar Tudo',
      no_saved_yet: 'Nenhuma história salva ainda',
      no_saved_desc: 'Clique no ícone de marcador para salvar despachos aqui.',
      browse_news: 'Explorar Notícias',
      remove_saved: 'Remover',
      error_title: 'Pulso Não Encontrado',
      error_desc: 'O despacho solicitado foi movido ou está temporariamente indisponível.',
      search: 'Buscar',
      back_to_homepage: 'Voltar ao Início',
      search_placeholder: 'Buscar despachos...',
      cmd_search_placeholder: 'Digite palavras-chave ou pressione Esc...',
      quick_topics: 'Tópicos Rápidos',
      ad_label: 'PUBLICIDADE',
      consent_text: 'O Pulse Insider Daily respeita a sua privacidade.',
      consent_accept: 'Aceitar',
      consent_more: 'Saiba Mais',
      link_copied: 'Link copiado!',
      newsletter_success: 'Obrigado por assinar!',
      no_posts_in_lang: 'Exibindo despachos internacionais em inglês.',
      read_more: 'Ler despacho',
      prev_article: 'Despacho Anterior',
      next_article: 'Próximo Despacho'
    },
    ru: {
      skip_content: 'Перейти к содержанию',
      breaking_news: 'СРОЧНО',
      tagline: 'Ежедневный Пульс',
      cat_all: 'Все',
      cat_world: 'Мир',
      cat_politics: 'Политика',
      cat_business: 'Бизнес',
      cat_tech: 'Технологии',
      cat_ai: 'ИИ',
      cat_science: 'Наука',
      cat_health: 'Здоровье',
      cat_crypto: 'Крипто',
      cat_sports: 'Спорт',
      cat_entertainment: 'Развлечения',
      cat_gaming: 'Игры',
      cat_climate: 'Климат',
      cat_auto: 'Авто',
      cat_lifestyle: 'Стиль жизни',
      cat_travel: 'Путешествия',
      cat_fashion: 'Мода',
      cat_food: 'Еда',
      cat_realestate: 'Недвижимость',
      cat_education: 'Образование',
      explore_niches: 'Разделы новостей',
      about_us: 'О проекте',
      editorial_policy: 'Редакционная политика',
      corrections: 'Исправления',
      contact: 'Контакты',
      privacy: 'Конфиденциальность',
      terms: 'Условия использования',
      disclaimer: 'Отказ от ответственности',
      advertise: 'Реклама',
      editorial_standards: 'Стандарты редакции',
      corrections_policy: 'Политика исправлений',
      newsroom_contact: 'Редакция и инсайды',
      key_sectors: 'Ключевые сферы',
      editorial_trust: 'Доверие редакции',
      global_editions: '12 мировых изданий',
      back_to_top: 'Наверх',
      trending_now: 'В тренде',
      realtime_pulses: 'ПУЛЬС В РЕАЛЬНОМ ВРЕМЕНИ',
      latest_news: 'Свежие новости',
      load_more: 'Загрузить ещё',
      newsletter_title: 'Утренняя сводка Pulse',
      newsletter_desc: 'Независимая аналитика рынков, технологий и геополитики каждое утро.',
      newsletter_placeholder: 'vash.email@domain.com',
      subscribe: 'Подписаться бесплатно',
      newsletter_disclaimer: 'Без спама. Отписка в любой момент.',
      most_read: 'Популярное',
      explore_topics: 'Темы',
      breadcrumb_home: 'Главная',
      available_in: 'Материал также доступен на языках:',
      min_read: 'мин чтения',
      save_btn: 'Сохранить',
      saved_btn: 'Сохранено',
      share_article: 'ПОДЕЛИТЬСЯ',
      table_of_contents: 'Содержание',
      editorial_integrity: 'РЕДАКЦИОННАЯ ЧЕСТНОСТЬ',
      editorial_statement: 'Pulse Insider Daily проверяет все факты по первоисточникам.',
      reported_by: 'АВТОР МАТЕРИАЛА',
      author_bio_default: 'Обозреватель издания Pulse Insider Daily по международным событиям и технологиям.',
      related_stories: 'Похожие материалы',
      reader_discussion: 'Обсуждение читателей',
      saved_stories_title: 'Сохраненные статьи',
      saved_stories_subtitle: 'Материалы, сохраненные для чтения без интернета.',
      clear_all_saved: 'Очистить все',
      no_saved_yet: 'Нет сохраненных статей',
      no_saved_desc: 'Нажмите значок закладки в любой статье, чтобы сохранить её.',
      browse_news: 'Смотреть новости',
      remove_saved: 'Удалить',
      error_title: 'Материал не найден',
      error_desc: 'Запрошенная страница перемещена или временно недоступна.',
      search: 'Поиск',
      back_to_homepage: 'На главную страницу',
      search_placeholder: 'Поиск новостей...',
      cmd_search_placeholder: 'Введите запрос или нажмите Esc...',
      quick_topics: 'Популярные темы',
      ad_label: 'РЕКЛАМА И СПОНСОРСТВО',
      consent_text: 'Pulse Insider Daily бережно относится к вашей конфиденциальности.',
      consent_accept: 'Принять',
      consent_more: 'Подробнее',
      link_copied: 'Ссылка скопирована в буфер обмена!',
      newsletter_success: 'Спасибо за подписку на Pulse Insider Daily!',
      no_posts_in_lang: 'Для данного раздела показаны международные материалы на английском языке.',
      read_more: 'Читать материал',
      prev_article: 'Предыдущий выпуск',
      next_article: 'Следующий выпуск'
    },
    de: {
      skip_content: 'Zum Inhalt springen',
      breaking_news: 'EILMELDUNG',
      tagline: 'Tägliche Impulse',
      cat_all: 'Alle',
      cat_world: 'Welt',
      cat_politics: 'Politik',
      cat_business: 'Wirtschaft',
      cat_tech: 'Technologie',
      cat_ai: 'KI',
      cat_science: 'Wissenschaft',
      cat_health: 'Gesundheit',
      cat_crypto: 'Krypto',
      cat_sports: 'Sport',
      cat_entertainment: 'Unterhaltung',
      cat_gaming: 'Gaming',
      cat_climate: 'Klima',
      cat_auto: 'Auto',
      cat_lifestyle: 'Lifestyle',
      cat_travel: 'Reisen',
      cat_fashion: 'Mode',
      cat_food: 'Kulinarik',
      cat_realestate: 'Immobilien',
      cat_education: 'Bildung',
      explore_niches: 'Ressorts',
      about_us: 'Über uns',
      editorial_policy: 'Redaktionsrichtlinien',
      corrections: 'Korrekturen',
      contact: 'Kontakt',
      privacy: 'Datenschutz',
      terms: 'AGB',
      disclaimer: 'Haftungsausschluss',
      advertise: 'Werbung',
      editorial_standards: 'Redaktionelle Standards',
      corrections_policy: 'Korrekturrichtlinien',
      newsroom_contact: 'Redaktion & Hinweise',
      key_sectors: 'Schlüsselsektoren',
      editorial_trust: 'Redaktionelles Vertrauen',
      global_editions: '12 globale Ausgaben',
      back_to_top: 'Nach oben',
      trending_now: 'Trending',
      realtime_pulses: 'ECHTZEIT-IMPULSE',
      latest_news: 'Aktuelle Nachrichten',
      load_more: 'Weitere Berichte laden',
      newsletter_title: 'Das tägliche Pulse-Briefing',
      newsletter_desc: 'Unabhängige globale Berichterstattung über Tech, Märkte und Geopolitik.',
      newsletter_placeholder: 'ihre.adresse@domain.de',
      subscribe: 'Kostenlos abonnieren',
      newsletter_disclaimer: 'Kein Spam. Jederzeit kündbar.',
      most_read: 'Meistgelesen',
      explore_topics: 'Themengebiete',
      breadcrumb_home: 'Startseite',
      available_in: 'Dieser Bericht ist auch verfügbar auf:',
      min_read: 'Min. Lesezeit',
      save_btn: 'Merken',
      saved_btn: 'Gemerkt',
      share_article: 'TEILEN',
      table_of_contents: 'Inhaltsverzeichnis',
      editorial_integrity: 'REDAKTIONELLE INTEGRITÄT',
      editorial_statement: 'Pulse Insider Daily prüft Fakten nach strengen Kriterien anhand von Primärquellen.',
      reported_by: 'BERICHTET VON',
      author_bio_default: 'Korrespondent für Pulse Insider Daily mit Schwerpunkt auf Technologie, Wirtschaft und Geopolitik.',
      related_stories: 'Verwandte Berichte',
      reader_discussion: 'Leserdiskussion',
      saved_stories_title: 'Gespeicherte Artikel',
      saved_stories_subtitle: 'Auf diesem Gerät für Offline-Lektüre gespeicherte Berichte.',
      clear_all_saved: 'Alle löschen',
      no_saved_yet: 'Noch keine Artikel gespeichert',
      no_saved_desc: 'Klicken Sie auf das Lesezeichen-Symbol eines Berichts, um ihn hier zu speichern.',
      browse_news: 'Nachrichten durchsuchen',
      remove_saved: 'Entfernen',
      error_title: 'Bericht nicht gefunden',
      error_desc: 'Der angeforderte Bericht wurde verschoben oder ist vorübergehend nicht erreichbar.',
      search: 'Suchen',
      back_to_homepage: 'Zur Startseite',
      search_placeholder: 'Nachrichten suchen...',
      cmd_search_placeholder: 'Suchbegriff eingeben oder Esc drücken...',
      quick_topics: 'Beliebte Themen',
      ad_label: 'ANZEIGE / SPONSORING',
      consent_text: 'Pulse Insider Daily schützt Ihre Privatsphäre.',
      consent_accept: 'Akzeptieren',
      consent_more: 'Mehr erfahren',
      link_copied: 'Link in Zwischenablage kopiert!',
      newsletter_success: 'Vielen Dank für Ihre Anmeldung!',
      no_posts_in_lang: 'Für dieses Ressort werden internationale Berichte auf Englisch angezeigt.',
      read_more: 'Bericht lesen',
      prev_article: 'Vorheriger Bericht',
      next_article: 'Nächster Bericht'
    },
    fr: {
      skip_content: 'Aller au contenu',
      breaking_news: 'FLASH INFO',
      tagline: 'Pouls Quotidiens',
      cat_all: 'Tout',
      cat_world: 'Monde',
      cat_politics: 'Politique',
      cat_business: 'Économie',
      cat_tech: 'Technologie',
      cat_ai: 'IA',
      cat_science: 'Sciences',
      cat_health: 'Santé',
      cat_crypto: 'Crypto',
      cat_sports: 'Sport',
      cat_entertainment: 'Divertissement',
      cat_gaming: 'Jeux Vidéo',
      cat_climate: 'Climat',
      cat_auto: 'Auto',
      cat_lifestyle: 'Mode de vie',
      cat_travel: 'Voyage',
      cat_fashion: 'Mode',
      cat_food: 'Gastronomie',
      cat_realestate: 'Immobilier',
      cat_education: 'Éducation',
      explore_niches: 'Explorer les rubriques',
      about_us: 'À propos',
      editorial_policy: 'Charte éditoriale',
      corrections: 'Corrections',
      contact: 'Contact',
      privacy: 'Confidentialité',
      terms: 'Conditions d’utilisation',
      disclaimer: 'Mentions légales',
      advertise: 'Publicité',
      editorial_standards: 'Normes de rédaction',
      corrections_policy: 'Politique de correction',
      newsroom_contact: 'Rédaction & Contacts',
      key_sectors: 'Secteurs Clés',
      editorial_trust: 'Confiance Éditoriale',
      global_editions: '12 Éditions Mondiales',
      back_to_top: 'Haut de page',
      trending_now: 'Tendances',
      realtime_pulses: 'EN DIRECT',
      latest_news: 'Dernières Nouvelles',
      load_more: 'Charger plus d’articles',
      newsletter_title: 'La Dépêche Pulse',
      newsletter_desc: 'L’actualité internationale essentielle chaque matin sur la tech, la finance et le monde.',
      newsletter_placeholder: 'votre.email@domaine.fr',
      subscribe: 'S’abonner gratuitement',
      newsletter_disclaimer: 'Aucun spam. Désabonnement en 1 clic.',
      most_read: 'Les plus lus',
      explore_topics: 'Thématiques',
      breadcrumb_home: 'Accueil',
      available_in: 'Cet article est également disponible en :',
      min_read: 'min de lecture',
      save_btn: 'Enregistrer',
      saved_btn: 'Enregistré',
      share_article: 'PARTAGER',
      table_of_contents: 'Sommaire',
      editorial_integrity: 'INTÉGRITÉ ÉDITORIALE',
      editorial_statement: 'Pulse Insider Daily respecte une stricte exigence de vérification des sources.',
      reported_by: 'PAR',
      author_bio_default: 'Journaliste pour Pulse Insider Daily spécialiste des nouvelles technologies et de l’économie.',
      related_stories: 'Articles Recommandés',
      reader_discussion: 'Commentaires des Lecteurs',
      saved_stories_title: 'Articles Enregistrés',
      saved_stories_subtitle: 'Vos articles conservés pour une lecture hors ligne.',
      clear_all_saved: 'Tout effacer',
      no_saved_yet: 'Aucun article enregistré pour le moment',
      no_saved_desc: 'Cliquez sur l’icône de signet pour enregistrer un article ici.',
      browse_news: 'Consulter l’actualité',
      remove_saved: 'Supprimer',
      error_title: 'Page non trouvée',
      error_desc: 'L’article que vous cherchez n’est plus disponible.',
      search: 'Rechercher',
      back_to_homepage: 'Retour à l’accueil',
      search_placeholder: 'Rechercher des articles...',
      cmd_search_placeholder: 'Tapez un mot-clé ou Échap...',
      quick_topics: 'Thèmes rapides',
      ad_label: 'PUBLICITÉ / SPONSORISÉ',
      consent_text: 'Pulse Insider Daily respecte votre vie privée.',
      consent_accept: 'Accepter',
      consent_more: 'En savoir plus',
      link_copied: 'Lien copié dans le presse-papier !',
      newsletter_success: 'Merci pour votre inscription !',
      no_posts_in_lang: 'Articles internationaux affichés en anglais pour cette rubrique.',
      read_more: 'Lire la suite',
      prev_article: 'Article Précédent',
      next_article: 'Article Suivant'
    },
    it: {
      skip_content: 'Salta al contenuto',
      breaking_news: 'ULTIM’ORA',
      tagline: 'Pulsazioni Quotidiane',
      cat_all: 'Tutto',
      cat_world: 'Mondo',
      cat_politics: 'Politica',
      cat_business: 'Economia',
      cat_tech: 'Tecnologia',
      cat_ai: 'IA',
      cat_science: 'Scienza',
      cat_health: 'Salute',
      cat_crypto: 'Cripto',
      cat_sports: 'Sport',
      cat_entertainment: 'Spettacolo',
      cat_gaming: 'Gaming',
      cat_climate: 'Clima',
      cat_auto: 'Motori',
      cat_lifestyle: 'Stile di vita',
      cat_travel: 'Viaggi',
      cat_fashion: 'Moda',
      cat_food: 'Cucina',
      cat_realestate: 'Immobiliare',
      cat_education: 'Istruzione',
      explore_niches: 'Esplora le sezioni',
      about_us: 'Chi Siamo',
      editorial_policy: 'Linea Editoriale',
      corrections: 'Rettifiche',
      contact: 'Contatti',
      privacy: 'Privacy',
      terms: 'Termini di Servizio',
      disclaimer: 'Note Legali',
      advertise: 'Pubblicità',
      editorial_standards: 'Standard Giornalistici',
      corrections_policy: 'Politica di Rettifica',
      newsroom_contact: 'Redazione & Segnalazioni',
      key_sectors: 'Settori Chiave',
      editorial_trust: 'Fiducia Editoriale',
      global_editions: '12 Edizioni Mondiali',
      back_to_top: 'Torna su',
      trending_now: 'Di Tendenza',
      realtime_pulses: 'PULSAZIONI IN TEMPO REALE',
      latest_news: 'Ultime Notizie',
      load_more: 'Carica altri articoli',
      newsletter_title: 'Il Dispaccio Quotidiano Pulse',
      newsletter_desc: 'Analisi globale indipendente ogni mattina su tecnologia, finanza e geopolitica.',
      newsletter_placeholder: 'nome@dominio.it',
      subscribe: 'Iscriviti Gratis',
      newsletter_disclaimer: 'Niente spam. Disiscriviti quando vuoi.',
      most_read: 'I Più Letti',
      explore_topics: 'Argomenti Principali',
      breadcrumb_home: 'Home',
      available_in: 'Questo articolo è disponibile anche in:',
      min_read: 'min di lettura',
      save_btn: 'Salva',
      saved_btn: 'Salvato',
      share_article: 'CONDIVIDI',
      table_of_contents: 'Indice dei Contenuti',
      editorial_integrity: 'INTEGRITÀ EDITORIALE',
      editorial_statement: 'Pulse Insider Daily garantisce notizie verificate con fonti primarie.',
      reported_by: 'A CURA DI',
      author_bio_default: 'Corrispondente di Pulse Insider Daily per innovazione tecnologica ed economia globale.',
      related_stories: 'Notizie Correlate',
      reader_discussion: 'Commenti dei Lettori',
      saved_stories_title: 'Articoli Salvati',
      saved_stories_subtitle: 'Articoli memorizzati per la lettura offline.',
      clear_all_saved: 'Cancella Tutto',
      no_saved_yet: 'Nessun articolo salvato',
      no_saved_desc: 'Fai clic sull’icona segnalibro per salvare gli articoli qui.',
      browse_news: 'Sfoglia Notizie',
      remove_saved: 'Rimuovi',
      error_title: 'Articolo non trovato',
      error_desc: 'La pagina richiesta è stata spostata o non è al momento disponibile.',
      search: 'Cerca',
      back_to_homepage: 'Torna alla Home',
      search_placeholder: 'Cerca articoli...',
      cmd_search_placeholder: 'Scrivi parole chiave o premi Esc...',
      quick_topics: 'Argomenti rapidi',
      ad_label: 'PUBBLICITÀ',
      consent_text: 'Pulse Insider Daily rispetta la tua riservatezza.',
      consent_accept: 'Accetta',
      consent_more: 'Maggiori info',
      link_copied: 'Link copiato negli appunti!',
      newsletter_success: 'Grazie per esserti iscritto!',
      no_posts_in_lang: 'Mostrati articoli internazionali in inglese per questa sezione.',
      read_more: 'Leggi articolo',
      prev_article: 'Articolo Precedente',
      next_article: 'Articolo Successivo'
    },
    pl: {
      skip_content: 'Przejdź do treści',
      breaking_news: 'PILNE',
      tagline: 'Codzienny Puls',
      cat_all: 'Wszystko',
      cat_world: 'Świat',
      cat_politics: 'Polityka',
      cat_business: 'Biznes',
      cat_tech: 'Technologie',
      cat_ai: 'AI',
      cat_science: 'Nauka',
      cat_health: 'Zdrowie',
      cat_crypto: 'Krypto',
      cat_sports: 'Sport',
      cat_entertainment: 'Rozrywka',
      cat_gaming: 'Gry',
      cat_climate: 'Klimat',
      cat_auto: 'Moto',
      cat_lifestyle: 'Styl życia',
      cat_travel: 'Podróże',
      cat_fashion: 'Moda',
      cat_food: 'Kulinaria',
      cat_realestate: 'Nieruchomości',
      cat_education: 'Edukacja',
      explore_niches: 'Przeglądaj działy',
      about_us: 'O nas',
      editorial_policy: 'Zasady redakcyjne',
      corrections: 'Sprostowania',
      contact: 'Kontakt',
      privacy: 'Prywatność',
      terms: 'Regulamin',
      disclaimer: 'Nota prawna',
      advertise: 'Reklama',
      editorial_standards: 'Standardy dziennikarskie',
      corrections_policy: 'Polityka sprostowań',
      newsroom_contact: 'Redakcja i kontakt',
      key_sectors: 'Kluczowe sektory',
      editorial_trust: 'Zaufanie redakcyjne',
      global_editions: '12 wydań na świecie',
      back_to_top: 'Do góry',
      trending_now: 'Na czasie',
      realtime_pulses: 'PULS NA ŻYWO',
      latest_news: 'Najnowsze wiadomości',
      load_more: 'Załaduj więcej',
      newsletter_title: 'Codzienny biuletyn Pulse',
      newsletter_desc: 'Rzetelne globalne informacje ze świata technologii i rynków każdego ranka.',
      newsletter_placeholder: 'twoj.email@domena.pl',
      subscribe: 'Zapisz się bezpłatnie',
      newsletter_disclaimer: 'Zero spamu. Wypisz się w każdej chwili.',
      most_read: 'Najczęściej czytane',
      explore_topics: 'Tematy',
      breadcrumb_home: 'Główna',
      available_in: 'Ten artykuł jest dostępny także w języku:',
      min_read: 'min czytania',
      save_btn: 'Zapisz',
      saved_btn: 'Zapisano',
      share_article: 'UDOSTĘPNIJ',
      table_of_contents: 'Spis treści',
      editorial_integrity: 'RZETELNOŚĆ DZIENNIKARSKA',
      editorial_statement: 'Pulse Insider Daily weryfikuje fakty w oparciu o źródła pierwotne.',
      reported_by: 'AUTOR',
      author_bio_default: 'Korespondent Pulse Insider Daily relacjonujący wydarzenia technologiczne i rynkowe.',
      related_stories: 'Powiązane artykuły',
      reader_discussion: 'Dyskusja czytelników',
      saved_stories_title: 'Zapisane artykuły',
      saved_stories_subtitle: 'Materiały zapisane na Twoim urządzeniu do czytania offline.',
      clear_all_saved: 'Wyczyść wszystko',
      no_saved_yet: 'Brak zapisanych artykułów',
      no_saved_desc: 'Kliknij ikonę zakładki przy dowolnym artykule, aby zapisać go tutaj.',
      browse_news: 'Przeglądaj wiadomości',
      remove_saved: 'Usuń',
      error_title: 'Nie znaleziono artykułu',
      error_desc: 'Szukany artykuł został przeniesiony lub jest niedostępny.',
      search: 'Szukaj',
      back_to_homepage: 'Powrót do strony głównej',
      search_placeholder: 'Szukaj wiadomości...',
      cmd_search_placeholder: 'Wpisz frazę lub wciśnij Esc...',
      quick_topics: 'Szybkie tematy',
      ad_label: 'REKLAMA / SPONSOROWANE',
      consent_text: 'Pulse Insider Daily szanuje Twoją prywatność.',
      consent_accept: 'Akceptuję',
      consent_more: 'Dowiedz się więcej',
      link_copied: 'Link skopiowany do schowka!',
      newsletter_success: 'Dziękujemy za subskrypcję!',
      no_posts_in_lang: 'Dla tego działu wyświetlane są materiały międzynarodowe w języku angielskim.',
      read_more: 'Czytaj artykuł',
      prev_article: 'Poprzedni artykuł',
      next_article: 'Następny artykuł'
    },
    ro: {
      skip_content: 'Sari la conținut',
      breaking_news: 'ULTIMA ORĂ',
      tagline: 'Pulsul Zilei',
      cat_all: 'Toate',
      cat_world: 'Externe',
      cat_politics: 'Politică',
      cat_business: 'Afaceri',
      cat_tech: 'Tehnologie',
      cat_ai: 'IA',
      cat_science: 'Știință',
      cat_health: 'Sănătate',
      cat_crypto: 'Cripto',
      cat_sports: 'Sport',
      cat_entertainment: 'Divertisment',
      cat_gaming: 'Gaming',
      cat_climate: 'Climă',
      cat_auto: 'Auto',
      cat_lifestyle: 'Stil de viață',
      cat_travel: 'Călătorii',
      cat_fashion: 'Modă',
      cat_food: 'Gastronomie',
      cat_realestate: 'Imobiliare',
      cat_education: 'Educație',
      explore_niches: 'Explorează Secțiuni',
      about_us: 'Despre noi',
      editorial_policy: 'Politica editorială',
      corrections: 'Erate și corecturi',
      contact: 'Contact',
      privacy: 'Confidențialitate',
      terms: 'Termeni și condiții',
      disclaimer: 'Declinare responsabilitate',
      advertise: 'Publicitate',
      editorial_standards: 'Standarde jurnalistice',
      corrections_policy: 'Politica de corecții',
      newsroom_contact: 'Redacție & Ponturi',
      key_sectors: 'Sectoare cheie',
      editorial_trust: 'Încredere editorială',
      global_editions: '12 ediții globale',
      back_to_top: 'Sus',
      trending_now: 'În tendințe',
      realtime_pulses: 'PULS ÎN TIMP REAL',
      latest_news: 'Ultimele știri',
      load_more: 'Încarcă mai multe',
      newsletter_title: 'Sinteza Zilei Pulse',
      newsletter_desc: 'Informații globale obiective în fiecare dimineață despre tehnologie și economie.',
      newsletter_placeholder: 'nume@domeniu.ro',
      subscribe: 'Abonează-te gratuit',
      newsletter_disclaimer: 'Fără spam. Te poți dezabona oricând.',
      most_read: 'Cele mai citite',
      explore_topics: 'Subiecte principale',
      breadcrumb_home: 'Acasă',
      available_in: 'Acest articol este disponibil și în:',
      min_read: 'min de lectură',
      save_btn: 'Salvează',
      saved_btn: 'Salvat',
      share_article: 'DISTRIBUIE',
      table_of_contents: 'Cuprins',
      editorial_integrity: 'INTEGRITATE EDITORIALĂ',
      editorial_statement: 'Pulse Insider Daily verifică faptele cu surse primare directe.',
      reported_by: 'RELATAT DE',
      author_bio_default: 'Corespondent Pulse Insider Daily pentru tehnologie și afaceri internaționale.',
      related_stories: 'Știri similare',
      reader_discussion: 'Comentariile cititorilor',
      saved_stories_title: 'Articole salvate',
      saved_stories_subtitle: 'Articole memorate pe dispozitiv pentru citire fără conexiune.',
      clear_all_saved: 'Șterge tot',
      no_saved_yet: 'Niciun articol salvat',
      no_saved_desc: 'Apasă pictograma de marcaj pentru a salva articole aici.',
      browse_news: 'Răsfoiește știri',
      remove_saved: 'Elimină',
      error_title: 'Articolul nu a fost găsit',
      error_desc: 'Pagina căutată a fost mutată sau nu este disponibilă.',
      search: 'Caută',
      back_to_homepage: 'Înapoi la pagina principală',
      search_placeholder: 'Caută articole...',
      cmd_search_placeholder: 'Scrie cuvinte cheie sau apasă Esc...',
      quick_topics: 'Subiecte rapide',
      ad_label: 'PUBLICITATE',
      consent_text: 'Pulse Insider Daily respectă confidențialitatea datelor dumneavoastră.',
      consent_accept: 'Accept',
      consent_more: 'Află mai multe',
      link_copied: 'Link copiat în clipboard!',
      newsletter_success: 'Vă mulțumim pentru abonare!',
      no_posts_in_lang: 'Se afișează articole internaționale în engleză pentru această secțiune.',
      read_more: 'Citește articolul',
      prev_article: 'Articolul precedent',
      next_article: 'Articolul următor'
    },
    uk: {
      skip_content: 'Перейти до змісту',
      breaking_news: 'ТЕРМІНОВО',
      tagline: 'Щоденний Пульс',
      cat_all: 'Все',
      cat_world: 'Світ',
      cat_politics: 'Політика',
      cat_business: 'Бізнес',
      cat_tech: 'Технології',
      cat_ai: 'ШІ',
      cat_science: 'Наука',
      cat_health: 'Здоров’я',
      cat_crypto: 'Крипто',
      cat_sports: 'Спорт',
      cat_entertainment: 'Розваги',
      cat_gaming: 'Ігри',
      cat_climate: 'Клімат',
      cat_auto: 'Авто',
      cat_lifestyle: 'Стиль життя',
      cat_travel: 'Подорожі',
      cat_fashion: 'Мода',
      cat_food: 'Кулінарія',
      cat_realestate: 'Нерухомість',
      cat_education: 'Освіта',
      explore_niches: 'Розділи новин',
      about_us: 'Про нас',
      editorial_policy: 'Редакційна політика',
      corrections: 'Виправлення',
      contact: 'Контакти',
      privacy: 'Конфіденційність',
      terms: 'Умови користування',
      disclaimer: 'Правове застереження',
      advertise: 'Реклама',
      editorial_standards: 'Стандарти редакції',
      corrections_policy: 'Політика виправлень',
      newsroom_contact: 'Редакція та новини',
      key_sectors: 'Головні напрямки',
      editorial_trust: 'Редакційна довіра',
      global_editions: '12 світових видань',
      back_to_top: 'Вгору',
      trending_now: 'У тренді',
      realtime_pulses: 'ПУЛЬС У РЕАЛЬНОМУ ЧАСІ',
      latest_news: 'Останні новини',
      load_more: 'Завантажити ще',
      newsletter_title: 'Ранковий дайджест Pulse',
      newsletter_desc: 'Незалежний аналіз ринків, інновацій та світової політики щоранку.',
      newsletter_placeholder: 'vash.email@domain.ua',
      subscribe: 'Підписатися безкоштовно',
      newsletter_disclaimer: 'Жодного спаму. Скасування будь-коли.',
      most_read: 'Популярне',
      explore_topics: 'Теми',
      breadcrumb_home: 'Головна',
      available_in: 'Цей матеріал також доступний такими мовами:',
      min_read: 'хв читання',
      save_btn: 'Зберегти',
      saved_btn: 'Збережено',
      share_article: 'ПОДІЛИТИСЯ',
      table_of_contents: 'Зміст',
      editorial_integrity: 'РЕДАКЦІЙНА ЧЕСНІСТЬ',
      editorial_statement: 'Pulse Insider Daily неухильно перевіряє факти за першоджерелами.',
      reported_by: 'АВТОР МАТЕРІАЛУ',
      author_bio_default: 'Кореспондент Pulse Insider Daily, що висвітлює світові ринки та технології.',
      related_stories: 'Схожі матеріали',
      reader_discussion: 'Обговорення читачів',
      saved_stories_title: 'Збережені статті',
      saved_stories_subtitle: 'Статті, збережені на пристрої для читання офлайн.',
      clear_all_saved: 'Очистити все',
      no_saved_yet: 'Немає збережених статей',
      no_saved_desc: 'Натисніть на значок закладки, щоб додати статтю сюди.',
      browse_news: 'Переглянути новини',
      remove_saved: 'Видалити',
      error_title: 'Матеріал не знайдено',
      error_desc: 'Запитувану сторінку переміщено або вона тимчасово недоступна.',
      search: 'Пошук',
      back_to_homepage: 'На головну',
      search_placeholder: 'Пошук новин...',
      cmd_search_placeholder: 'Введіть тему або натисніть Esc...',
      quick_topics: 'Популярні теми',
      ad_label: 'РЕКЛАМА ТА СПОНСОРСТВО',
      consent_text: 'Pulse Insider Daily поважає вашу конфіденційність.',
      consent_accept: 'Прийняти',
      consent_more: 'Детальніше',
      link_copied: 'Посилання скопійовано в буфер обміну!',
      newsletter_success: 'Дякуємо за підписку на Pulse Insider Daily!',
      no_posts_in_lang: 'Для цього розділу відображаються міжнародні матеріали англійською.',
      read_more: 'Читати матеріал',
      prev_article: 'Попередній матеріал',
      next_article: 'Наступний матеріал'
    },
    nl: {
      skip_content: 'Naar inhoud springen',
      breaking_news: 'LAATSTE NIEUWS',
      tagline: 'Dagelijkse Impulsen',
      cat_all: 'Alles',
      cat_world: 'Wereld',
      cat_politics: 'Politiek',
      cat_business: 'Economie',
      cat_tech: 'Tech',
      cat_ai: 'AI',
      cat_science: 'Wetenschap',
      cat_health: 'Gezondheid',
      cat_crypto: 'Crypto',
      cat_sports: 'Sport',
      cat_entertainment: 'Entertainment',
      cat_gaming: 'Gaming',
      cat_climate: 'Klimaat',
      cat_auto: 'Auto',
      cat_lifestyle: 'Lifestyle',
      cat_travel: 'Reizen',
      cat_fashion: 'Mode',
      cat_food: 'Culinair',
      cat_realestate: 'Vastgoed',
      cat_education: 'Onderwijs',
      explore_niches: 'Ontdek Categorieën',
      about_us: 'Over ons',
      editorial_policy: 'Redactioneel beleid',
      corrections: 'Correcties',
      contact: 'Contact',
      privacy: 'Privacybeleid',
      terms: 'Voorwaarden',
      disclaimer: 'Disclaimer',
      advertise: 'Adverteren',
      editorial_standards: 'Redactionele normen',
      corrections_policy: 'Correctiebeleid',
      newsroom_contact: 'Redactie & Tips',
      key_sectors: 'Belangrijkste sectoren',
      editorial_trust: 'Redactioneel vertrouwen',
      global_editions: '12 Wereldwijde edities',
      back_to_top: 'Naar boven',
      trending_now: 'Trending',
      realtime_pulses: 'LIVE IMPULSEN',
      latest_news: 'Laatste Berichten',
      load_more: 'Meer laden',
      newsletter_title: 'De Pulse Dagelijkse Briefing',
      newsletter_desc: 'Onafhankelijk mondiaal nieuws over technologie, economie en geopolitiek.',
      newsletter_placeholder: 'uw.naam@domein.nl',
      subscribe: 'Gratis Aanmelden',
      newsletter_disclaimer: 'Geen spam. Altijd uitschrijfbaar.',
      most_read: 'Meest Gelezen',
      explore_topics: 'Onderwerpen',
      breadcrumb_home: 'Home',
      available_in: 'Dit bericht is ook beschikbaar in:',
      min_read: 'min leestijd',
      save_btn: 'Opslaan',
      saved_btn: 'Opgeslagen',
      share_article: 'DELEN',
      table_of_contents: 'Inhoudsopgave',
      editorial_integrity: 'REDACTIONELE INTEGRITEIT',
      editorial_statement: 'Pulse Insider Daily hanteert strikte verificatie aan de hand van primaire bronnen.',
      reported_by: 'DOOR',
      author_bio_default: 'Redacteur voor Pulse Insider Daily gespecialiseerd in mondiale trends en tech.',
      related_stories: 'Gerelateerde Berichten',
      reader_discussion: 'Reacties',
      saved_stories_title: 'Opgeslagen Berichten',
      saved_stories_subtitle: 'Berichten die lokaal bewaard zijn voor offline lezen.',
      clear_all_saved: 'Alles wissen',
      no_saved_yet: 'Nog geen opgeslagen berichten',
      no_saved_desc: 'Klik op het bladwijzericoon om berichten hier te bewaren.',
      browse_news: 'Nieuws bekijken',
      remove_saved: 'Verwijderen',
      error_title: 'Bericht niet gevonden',
      error_desc: 'De pagina die u zoekt is verplaatst of tijdelijk niet beschikbaar.',
      search: 'Zoeken',
      back_to_homepage: 'Terug naar homepage',
      search_placeholder: 'Zoek berichten...',
      cmd_search_placeholder: 'Typ zoekwoorden of druk op Esc...',
      quick_topics: 'Snel zoeken',
      ad_label: 'ADVERTENTIE',
      consent_text: 'Pulse Insider Daily respecteert uw privacy.',
      consent_accept: 'Accepteren',
      consent_more: 'Meer info',
      link_copied: 'Link gekopieerd naar klembord!',
      newsletter_success: 'Bedankt voor uw inschrijving!',
      no_posts_in_lang: 'Voor deze sectie worden internationale Engelstalige berichten weergegeven.',
      read_more: 'Lees bericht',
      prev_article: 'Vorig Bericht',
      next_article: 'Volgend Bericht'
    },
    tr: {
      skip_content: 'İçeriğe atla',
      breaking_news: 'SON DAKİKA',
      tagline: 'Günlük Nabız',
      cat_all: 'Tümü',
      cat_world: 'Dünya',
      cat_politics: 'Siyaset',
      cat_business: 'Ekonomi',
      cat_tech: 'Teknoloji',
      cat_ai: 'Yapay Zeka',
      cat_science: 'Bilim',
      cat_health: 'Sağlık',
      cat_crypto: 'Kripto',
      cat_sports: 'Spor',
      cat_entertainment: 'Magazin',
      cat_gaming: 'Oyun',
      cat_climate: 'İklim',
      cat_auto: 'Otomotiv',
      cat_lifestyle: 'Yaşam',
      cat_travel: 'Seyahat',
      cat_fashion: 'Moda',
      cat_food: 'Yemek',
      cat_realestate: 'Emlak',
      cat_education: 'Eğitim',
      explore_niches: 'Kategorileri Keşfet',
      about_us: 'Hakkımızda',
      editorial_policy: 'Yayın İlkeleri',
      corrections: 'Düzeltmeler',
      contact: 'İletişim',
      privacy: 'Gizlilik Politikası',
      terms: 'Kullanım Şartları',
      disclaimer: 'Yasal Uyarı',
      advertise: 'Reklam',
      editorial_standards: 'Editoryal Standartlar',
      corrections_policy: 'Düzeltme Politikası',
      newsroom_contact: 'Haber Merkezi ve İhbar',
      key_sectors: 'Kilit Sektörler',
      editorial_trust: 'Editoryal Güven',
      global_editions: '12 Küresel Edisyon',
      back_to_top: 'Yukarı Çık',
      trending_now: 'Gündemdekiler',
      realtime_pulses: 'CANLI NABIZ',
      latest_news: 'Son Haberler',
      load_more: 'Daha Fazla Göster',
      newsletter_title: 'Pulse Günlük Bülten',
      newsletter_desc: 'Teknoloji, piyasalar ve küresel jeopolitik hakkında her sabah bağımsız analizler.',
      newsletter_placeholder: 'adiniz@alanadi.com',
      subscribe: 'Ücretsiz Abone Ol',
      newsletter_disclaimer: 'Spam yok. İstediğiniz an ayrılabilirsiniz.',
      most_read: 'En Çok Okunanlar',
      explore_topics: 'Konular',
      breadcrumb_home: 'Ana Sayfa',
      available_in: 'Bu haber şu dillerde de mevcuttur:',
      min_read: 'dk okuma',
      save_btn: 'Kaydet',
      saved_btn: 'Kaydedildi',
      share_article: 'PAYLAŞ',
      table_of_contents: 'İçindekiler',
      editorial_integrity: 'EDİTORYAL DÜRÜSTLÜK',
      editorial_statement: 'Pulse Insider Daily haberleri doğrulanmış birincil kaynaklara dayandırır.',
      reported_by: 'HABERİ YAPAN',
      author_bio_default: 'Pulse Insider Daily küresel teknoloji ve ekonomi muhabiri.',
      related_stories: 'İlgili Haberler',
      reader_discussion: 'Okur Yorumları',
      saved_stories_title: 'Kaydedilen Haberler',
      saved_stories_subtitle: 'Cihazınızda çevrimdışı okumak için saklanan haberler.',
      clear_all_saved: 'Tümünü Temizle',
      no_saved_yet: 'Henüz kaydedilmiş haber yok',
      no_saved_desc: 'Haberleri buraya eklemek için yer imi simgesine tıklayın.',
      browse_news: 'Haberleri İncele',
      remove_saved: 'Kaldır',
      error_title: 'Haber Bulunamadı',
      error_desc: 'Aradığınız sayfa taşınmış veya geçici olarak yayından kaldırılmış olabilir.',
      search: 'Ara',
      back_to_homepage: 'Ana Sayfaya Dön',
      search_placeholder: 'Haberlerde ara...',
      cmd_search_placeholder: 'Kelime yazın veya Esc tuşuna basın...',
      quick_topics: 'Hızlı Konular',
      ad_label: 'REKLAM / SPONSORLU',
      consent_text: 'Pulse Insider Daily gizliliğinize saygı gösterir.',
      consent_accept: 'Kabul Et',
      consent_more: 'Daha Fazla Bilgi',
      link_copied: 'Bağlantı panoya kopyalandı!',
      newsletter_success: 'Aboneliğiniz için teşekkür ederiz!',
      no_posts_in_lang: 'Bu kategori için uluslararası İngilizce haberler gösteriliyor.',
      read_more: 'Haberi oku',
      prev_article: 'Önceki Haber',
      next_article: 'Sonraki Haber'
    }
  };

  // Supported language code list
  const SUPPORTED_LANGS = ['en', 'es', 'pt', 'ru', 'de', 'fr', 'it', 'pl', 'ro', 'uk', 'nl', 'tr'];

  // Category label mapping for nice clean display
  const CATEGORY_MAP = {
    'cat-world': 'cat_world',
    'cat-politics': 'cat_politics',
    'cat-business': 'cat_business',
    'cat-tech': 'cat_tech',
    'cat-ai': 'cat_ai',
    'cat-science': 'cat_science',
    'cat-health': 'cat_health',
    'cat-crypto': 'cat_crypto',
    'cat-sports': 'cat_sports',
    'cat-entertainment': 'cat_entertainment',
    'cat-gaming': 'cat_gaming',
    'cat-climate': 'cat_climate',
    'cat-auto': 'cat_auto',
    'cat-lifestyle': 'cat_lifestyle',
    'cat-travel': 'cat_travel',
    'cat-fashion': 'cat_fashion',
    'cat-food': 'cat_food',
    'cat-realestate': 'cat_realestate',
    'cat-education': 'cat_education'
  };

  // ==========================================================================
  // 2. CORE APPLICATION STATE
  // ==========================================================================
  const state = {
    currentLang: 'en',
    currentTheme: 'system',
    savedArticles: [],
    feedIndex: 1,
    feedBatchSize: 8,
    isFeedLoading: false,
    hasMoreFeedPosts: true
  };

  // ==========================================================================
  // 3. STORAGE & THEME MANAGER
  // ==========================================================================
  const ThemeManager = {
    init() {
      const saved = localStorage.getItem('pid_theme') || 'system';
      state.currentTheme = saved;
      this.apply(saved);

      // System preference change listener
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (state.currentTheme === 'system') {
          document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
      });

      // Bind toggle button
      const btn = document.getElementById('theme-toggle-btn');
      if (btn) {
        btn.addEventListener('click', () => this.toggle());
      }
    },

    apply(theme) {
      let resolved = theme;
      if (theme === 'system') {
        resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      document.documentElement.setAttribute('data-theme', resolved);
      localStorage.setItem('pid_theme', theme);
    },

    toggle() {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      state.currentTheme = next;
      this.apply(next);
      Toast.show(next === 'dark' ? 'Dark mode enabled' : 'Light mode enabled');
    }
  };

  // ==========================================================================
  // 4. MULTILINGUAL & TRANSLATION ENGINE
  // ==========================================================================
  const I18nManager = {
    init() {
      const stored = localStorage.getItem('pid_lang');
      let lang = stored;

      if (!lang) {
        const sys = (navigator.language || navigator.userLanguage || 'en').substring(0, 2).toLowerCase();
        lang = SUPPORTED_LANGS.includes(sys) ? sys : 'en';
      }

      this.setLanguage(lang, false);
      this.bindDropdown();
    },

    setLanguage(lang, reloadFeed = true) {
      if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';
      state.currentLang = lang;
      localStorage.setItem('pid_lang', lang);
      document.documentElement.setAttribute('data-user-lang', lang);
      document.documentElement.setAttribute('lang', lang);

      // Update Header Indicator
      const codeLabel = document.getElementById('current-lang-code');
      if (codeLabel) codeLabel.textContent = lang.toUpperCase();

      // Translate all DOM elements
      this.translateDOM();

      // Update active option in dropdown
      document.querySelectorAll('.lang-opt').forEach(opt => {
        opt.classList.toggle('is-selected', opt.dataset.code === lang);
      });

      // Reload home feeds if user switched language
      if (reloadFeed && document.body.classList.contains('index')) {
        FeedEngine.reloadAllFeeds();
      }
    },

    translateDOM() {
      const dict = I18N[state.currentLang] || I18N.en;

      // Translate innerText
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.textContent = dict[key];
        }
      });

      // Translate attributes (e.g. placeholder)
      document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        const val = el.getAttribute('data-i18n-attr');
        const [attr, key] = val.split(':');
        if (attr && key && dict[key]) {
          el.setAttribute(attr, dict[key]);
        }
      });

      // Clean raw category labels inside article badges
      document.querySelectorAll('.article-label-pill').forEach(pill => {
        const raw = pill.getAttribute('data-raw-label');
        if (raw && CATEGORY_MAP[raw]) {
          const dictKey = CATEGORY_MAP[raw];
          pill.textContent = dict[dictKey] || raw;
        } else if (raw && raw.startsWith('lang-')) {
          pill.style.display = 'none'; // hide language tags from chips
        }
      });
    },

    get(key) {
      const dict = I18N[state.currentLang] || I18N.en;
      return dict[key] || I18N.en[key] || key;
    },

    bindDropdown() {
      const btn = document.getElementById('lang-menu-btn');
      const panel = document.getElementById('lang-menu-panel');

      if (!btn || !panel) return;

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !expanded);
        panel.classList.toggle('is-open', !expanded);
      });

      panel.querySelectorAll('.lang-opt').forEach(opt => {
        opt.addEventListener('click', () => {
          const code = opt.dataset.code;
          this.setLanguage(code, true);
          panel.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
        });
      });

      // Footer edition quick pills
      document.querySelectorAll('.edition-tag').forEach(tag => {
        tag.addEventListener('click', () => {
          const code = tag.dataset.code;
          this.setLanguage(code, true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!e.target.closest('#lang-dropdown')) {
          panel.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  };

  // ==========================================================================
  // 5. TOAST NOTIFICATIONS
  // ==========================================================================
  const Toast = {
    show(message, duration = 3000) {
      const el = document.getElementById('toast-notification');
      if (!el) return;
      el.textContent = message;
      el.classList.add('is-visible');
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        el.classList.remove('is-visible');
      }, duration);
    }
  };

  // ==========================================================================
  // 6. BLOGGER JSON FEED ENGINE
  // ==========================================================================
  const FeedEngine = {
    init() {
      if (!document.body.classList.contains('index')) return;

      this.fetchBreaking();
      this.fetchHeroBento();
      this.fetchTrending();
      this.fetchNicheBlocks();
      this.fetchLatestFeed(1);
      this.fetchSidebarPopular();

      const loadMoreBtn = document.getElementById('load-more-btn');
      if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
          if (!state.isFeedLoading && state.hasMoreFeedPosts) {
            state.feedIndex += state.feedBatchSize;
            this.fetchLatestFeed(state.feedIndex);
          }
        });
      }
    },

    reloadAllFeeds() {
      state.feedIndex = 1;
      state.hasMoreFeedPosts = true;
      this.fetchHeroBento();
      this.fetchTrending();
      this.fetchNicheBlocks();
      const target = document.getElementById('latest-feed-target');
      if (target) target.innerHTML = '';
      this.fetchLatestFeed(1);
    },

    // Format Blogger images to high-definition responsive crops
    formatImageUrl(url, width = 800, height = 450) {
      if (!url) return 'https://resources.blogblog.com/img/blank.gif';
      if (url.includes('/s1600/') || url.includes('/s72-c/')) {
        return url.replace(/\/s(1600|72-c)\//, `/w${width}-h${height}-c/`);
      }
      return url;
    },

    // Extract categories, dates, titles from Blogger JSON post entry
    parsePostEntry(entry) {
      const title = entry.title.$t || 'Untitled Dispatch';
      let link = '#';
      if (entry.link) {
        const altLink = entry.link.find(l => l.rel === 'alternate');
        if (altLink) link = altLink.href;
      }

      let img = 'https://resources.blogblog.com/img/blank.gif';
      if (entry.media$thumbnail && entry.media$thumbnail.url) {
        img = this.formatImageUrl(entry.media$thumbnail.url, 800, 450);
      } else if (entry.content && entry.content.$t) {
        const match = entry.content.$t.match(/<img[^>]+src="([^">]+)"/);
        if (match) img = this.formatImageUrl(match[1], 800, 450);
      }

      let category = 'News';
      if (entry.category && entry.category.length > 0) {
        const catObj = entry.category.find(c => c.term && c.term.startsWith('cat-'));
        if (catObj && CATEGORY_MAP[catObj.term]) {
          category = I18nManager.get(CATEGORY_MAP[catObj.term]);
        } else if (catObj) {
          category = catObj.term.replace('cat-', '').toUpperCase();
        }
      }

      const published = entry.published ? new Date(entry.published.$t) : new Date();
      const relativeTime = this.timeAgo(published);
      const snippet = entry.summary ? entry.summary.$t.replace(/<[^>]*>?/gm, '').substring(0, 120) + '...' : '';

      return { title, link, img, category, published, relativeTime, snippet };
    },

    timeAgo(date) {
      const seconds = Math.floor((new Date() - date) / 1000);
      const intervals = { y: 31536000, m: 2592000, d: 86400, h: 3600, min: 60 };
      if (seconds < 60) return 'Just now';
      if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
      if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
      return `${Math.floor(seconds / 86400)}d ago`;
    },

    // 1. Breaking News Bar
    fetchBreaking() {
      const url = `/feeds/posts/default/-/breaking?alt=json&max-results=5`;
      fetch(url)
        .then(r => (r.ok ? r.json() : Promise.reject()))
        .then(data => {
          const entries = data.feed.entry || [];
          const bar = document.getElementById('breaking-bar');
          const track = document.getElementById('breaking-track');
          if (!bar || !track || entries.length === 0) return;

          let html = '';
          entries.forEach(e => {
            const post = this.parsePostEntry(e);
            html += `<a href="${post.link}" class="ticker-item">● ${post.title}</a>`;
          });
          track.innerHTML = html + html; // duplicate for smooth continuous loop
          bar.style.display = 'block';

          const closeBtn = document.getElementById('breaking-close-btn');
          if (closeBtn) {
            closeBtn.addEventListener('click', () => { bar.style.display = 'none'; });
          }
        })
        .catch(() => {});
    },

    // 2. Bento Hero Section
    fetchHeroBento() {
      const langLabel = `lang-${state.currentLang}`;
      const url = `/feeds/posts/default/-/${langLabel}?alt=json&max-results=3`;
      fetch(url)
        .then(r => (r.ok ? r.json() : this.fallbackEnglishHero()))
        .then(data => {
          const entries = (data && data.feed && data.feed.entry) ? data.feed.entry : [];
          if (entries.length === 0) {
            this.fallbackEnglishHero();
            return;
          }
          this.renderBento(entries);
        })
        .catch(() => this.fallbackEnglishHero());
    },

    fallbackEnglishHero() {
      fetch(`/feeds/posts/default/-/lang-en?alt=json&max-results=3`)
        .then(r => r.ok ? r.json() : null)
        .then(data => {
          if (data && data.feed && data.feed.entry) {
            this.renderBento(data.feed.entry);
          }
        })
        .catch(() => {});
    },

    renderBento(entries) {
      const target = document.getElementById('bento-grid-target');
      if (!target || entries.length === 0) return;

      const p0 = this.parsePostEntry(entries[0]);
      let html = `
        <a href="${p0.link}" class="bento-card hero-main">
          <img src="${p0.img}" class="bento-card-img" alt="${p0.title}" loading="eager" />
          <div class="bento-overlay"></div>
          <div class="bento-content">
            <div class="bento-tag-row">
              <span class="bento-chip">${p0.category}</span>
              <span class="bento-time">${p0.relativeTime}</span>
            </div>
            <h2 class="bento-title">${p0.title}</h2>
          </div>
        </a>
      `;

      for (let i = 1; i < entries.length; i++) {
        const p = this.parsePostEntry(entries[i]);
        html += `
          <a href="${p.link}" class="bento-card hero-sub">
            <img src="${p.img}" class="bento-card-img" alt="${p.title}" loading="lazy" />
            <div class="bento-overlay"></div>
            <div class="bento-content">
              <div class="bento-tag-row">
                <span class="bento-chip">${p.category}</span>
                <span class="bento-time">${p.relativeTime}</span>
              </div>
              <h3 class="bento-title">${p.title}</h3>
            </div>
          </a>
        `;
      }
      target.innerHTML = html;
    },

    // 3. Trending Now Strip (Numbered 01 to 04)
    fetchTrending() {
      const url = `/feeds/posts/default?alt=json&max-results=4`;
      fetch(url)
        .then(r => r.ok ? r.json() : null)
        .then(data => {
          const target = document.getElementById('trending-grid-target');
          if (!target || !data || !data.feed.entry) return;

          let html = '';
          data.feed.entry.forEach((e, idx) => {
            const p = this.parsePostEntry(e);
            const num = String(idx + 1).padStart(2, '0');
            html += `
              <a href="${p.link}" class="trending-item">
                <span class="trending-number">${num}</span>
                <div class="trending-body">
                  <span class="trending-cat">${p.category}</span>
                  <h4 class="trending-title">${p.title}</h4>
                </div>
              </a>
            `;
          });
          target.innerHTML = html;
        })
        .catch(() => {});
    },

    // 4. Niche Blocks (1 Lead + 3 Small Cards per Niche)
    fetchNicheBlocks() {
      const niches = [
        { label: 'cat-world', name: 'World Affairs' },
        { label: 'cat-tech', name: 'Technology' },
        { label: 'cat-ai', name: 'Artificial Intelligence' },
        { label: 'cat-business', name: 'Business & Finance' }
      ];

      const container = document.getElementById('niche-sections-target');
      if (!container) return;
      container.innerHTML = '';

      niches.forEach(niche => {
        const url = `/feeds/posts/default/-/${niche.label}?alt=json&max-results=4`;
        fetch(url)
          .then(r => r.ok ? r.json() : null)
          .then(data => {
            if (!data || !data.feed.entry || data.feed.entry.length === 0) return;
            const entries = data.feed.entry;
            const lead = this.parsePostEntry(entries[0]);

            let compactHtml = '';
            for (let i = 1; i < entries.length; i++) {
              const item = this.parsePostEntry(entries[i]);
              compactHtml += `
                <a href="${item.link}" class="niche-compact-item">
                  <img src="${item.img}" class="niche-compact-thumb" alt="${item.title}" loading="lazy" />
                  <div class="niche-compact-body">
                    <h5 class="niche-compact-title">${item.title}</h5>
                    <span class="card-meta-line">${item.relativeTime}</span>
                  </div>
                </a>
              `;
            }

            const dictKey = CATEGORY_MAP[niche.label] || 'cat_all';
            const translatedNicheName = I18nManager.get(dictKey);

            const block = document.createElement('section');
            block.className = 'niche-block';
            block.innerHTML = `
              <div class="niche-block-header">
                <h3 class="niche-block-title">${translatedNicheName}</h3>
                <a href="/search/label/${niche.label}" class="niche-view-all">${I18nManager.get('read_more')} &rarr;</a>
              </div>
              <div class="niche-cards-layout">
                <a href="${lead.link}" class="niche-lead-card">
                  <img src="${lead.img}" class="niche-lead-thumb" alt="${lead.title}" loading="lazy" />
                  <div class="niche-lead-body">
                    <h4 class="niche-lead-title">${lead.title}</h4>
                    <p class="niche-lead-snippet">${lead.snippet}</p>
                    <span class="card-meta-line">${lead.relativeTime}</span>
                  </div>
                </a>
                <div class="niche-compact-list">${compactHtml}</div>
              </div>
            `;
            container.appendChild(block);
          })
          .catch(() => {});
      });
    },

    // 5. Latest Feed (Paginated Infinite Stream)
    fetchLatestFeed(startIndex = 1) {
      state.isFeedLoading = true;
      const spinner = document.getElementById('feed-spinner');
      const loadBtn = document.getElementById('load-more-btn');
      if (spinner) spinner.style.display = 'block';
      if (loadBtn) loadBtn.style.display = 'none';

      const langLabel = `lang-${state.currentLang}`;
      const url = `/feeds/posts/default/-/${langLabel}?alt=json&start-index=${startIndex}&max-results=${state.feedBatchSize}`;

      fetch(url)
        .then(r => r.ok ? r.json() : this.fallbackLatestFeed(startIndex))
        .then(data => {
          if (!data || !data.feed.entry || data.feed.entry.length === 0) {
            state.hasMoreFeedPosts = false;
            if (loadBtn) {
              loadBtn.textContent = 'No more stories';
              loadBtn.disabled = true;
              loadBtn.style.display = 'inline-flex';
            }
            if (spinner) spinner.style.display = 'none';
            return;
          }
          this.renderLatestCards(data.feed.entry);
          if (spinner) spinner.style.display = 'none';
          if (loadBtn) loadBtn.style.display = 'inline-flex';
          state.isFeedLoading = false;
        })
        .catch(() => {
          state.isFeedLoading = false;
          if (spinner) spinner.style.display = 'none';
        });
    },

    fallbackLatestFeed(startIndex) {
      return fetch(`/feeds/posts/default?alt=json&start-index=${startIndex}&max-results=${state.feedBatchSize}`)
        .then(r => r.ok ? r.json() : null);
    },

    renderLatestCards(entries) {
      const target = document.getElementById('latest-feed-target');
      if (!target) return;

      entries.forEach(e => {
        const p = this.parsePostEntry(e);
        const card = document.createElement('a');
        card.href = p.link;
        card.className = 'feed-story-card';
        card.innerHTML = `
          <img src="${p.img}" class="feed-story-thumb" alt="${p.title}" loading="lazy" />
          <div class="feed-story-body">
            <h4 class="feed-story-title">${p.title}</h4>
            <div class="card-meta-line">
              <span class="card-cat-badge">${p.category}</span>
              <span>•</span>
              <time datetime="${p.published.toISOString()}">${p.relativeTime}</time>
            </div>
          </div>
        `;
        target.appendChild(card);
      });
    },

    // 6. Sidebar Popular Posts
    fetchSidebarPopular() {
      const url = `/feeds/posts/default?alt=json&max-results=5`;
      fetch(url)
        .then(r => r.ok ? r.json() : null)
        .then(data => {
          const target = document.getElementById('sidebar-popular-target');
          if (!target || !data || !data.feed.entry) return;

          let html = '';
          data.feed.entry.forEach((e, idx) => {
            const p = this.parsePostEntry(e);
            html += `
              <a href="${p.link}" class="popular-entry">
                <span class="popular-num">${idx + 1}</span>
                <span class="popular-entry-title">${p.title}</span>
              </a>
            `;
          });
          target.innerHTML = html;
        })
        .catch(() => {});
    }
  };

  // ==========================================================================
  // 7. ARTICLE PAGE UTILITIES (TOC, Reading Progress, Resizer, Lightbox)
  // ==========================================================================
  const ArticleManager = {
    init() {
      if (!document.body.classList.contains('item')) return;

      this.calcReadingProgress();
      this.generateTOC();
      this.calcReadingTime();
      this.initTextResizer();
      this.initShareButtons();
      this.initBookmarkState();
      this.initLightbox();
      this.initFAQ();
      this.checkTranslationLinker();
    },

    calcReadingProgress() {
      const bar = document.getElementById('reading-progress-bar');
      if (!bar) return;

      window.addEventListener('scroll', () => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const progress = total > 0 ? (window.pageYOffset / total) * 100 : 0;
        bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }, { passive: true });
    },

    generateTOC() {
      const body = document.getElementById('article-body');
      const tocList = document.getElementById('article-toc-list');
      const rail = document.getElementById('toc-rail');
      if (!body || !tocList || !rail) return;

      const headings = body.querySelectorAll('h2, h3');
      if (headings.length < 2) {
        rail.style.display = 'none';
        return;
      }

      tocList.innerHTML = '';
      headings.forEach((h, idx) => {
        if (!h.id) h.id = `section-heading-${idx}`;
        const a = document.createElement('a');
        a.href = `#${h.id}`;
        a.className = `toc-link ${h.tagName.toLowerCase() === 'h3' ? 'toc-h3' : 'toc-h2'}`;
        a.textContent = h.textContent;
        tocList.appendChild(a);
      });

      // Mobile collapse toggle
      const header = document.getElementById('toc-toggle-header');
      if (header) {
        header.addEventListener('click', () => {
          tocList.classList.toggle('is-collapsed');
        });
      }

      // Scroll spy via IntersectionObserver
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            tocList.querySelectorAll('.toc-link').forEach(link => {
              link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      }, { rootMargin: '0px 0px -70% 0px' });

      headings.forEach(h => observer.observe(h));
    },

    calcReadingTime() {
      const body = document.getElementById('article-body');
      const label = document.getElementById('reading-time-estimate');
      if (!body || !label) return;

      const text = body.textContent || '';
      const words = text.trim().split(/\s+/).length;
      // Approximate: 200 words per minute
      const minutes = Math.max(1, Math.ceil(words / 200));
      label.textContent = `${minutes} ${I18nManager.get('min_read')}`;
    },

    initTextResizer() {
      const body = document.getElementById('article-body');
      if (!body) return;

      const scales = ['font-scale-sm', 'font-scale-md', 'font-scale-lg', 'font-scale-xl'];
      let currentIdx = 1; // default font-scale-md

      const applyScale = (idx) => {
        scales.forEach(s => body.classList.remove(s));
        body.classList.add(scales[idx]);
        localStorage.setItem('pid_font_scale', idx);
      };

      const savedScale = localStorage.getItem('pid_font_scale');
      if (savedScale !== null) {
        currentIdx = parseInt(savedScale, 10);
        applyScale(currentIdx);
      }

      const decBtn = document.getElementById('text-decrease-btn');
      const resetBtn = document.getElementById('text-reset-btn');
      const incBtn = document.getElementById('text-increase-btn');

      if (decBtn) decBtn.addEventListener('click', () => {
        if (currentIdx > 0) applyScale(--currentIdx);
      });
      if (resetBtn) resetBtn.addEventListener('click', () => {
        currentIdx = 1; applyScale(currentIdx);
      });
      if (incBtn) incBtn.addEventListener('click', () => {
        if (currentIdx < scales.length - 1) applyScale(++currentIdx);
      });
    },

    initShareButtons() {
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);

      const xBtn = document.getElementById('share-x-btn');
      if (xBtn) xBtn.href = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;

      const fbBtn = document.getElementById('share-fb-btn');
      if (fbBtn) fbBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;

      const waBtn = document.getElementById('share-wa-btn');
      if (waBtn) waBtn.href = `https://api.whatsapp.com/send?text=${title}%20${url}`;

      const tgBtn = document.getElementById('share-tg-btn');
      if (tgBtn) tgBtn.href = `https://t.me/share/url?url=${url}&text=${title}`;

      const mailBtn = document.getElementById('share-mail-btn');
      if (mailBtn) mailBtn.href = `mailto:?subject=${title}&body=${url}`;

      // Native Web Share
      const nativeBtn = document.getElementById('native-share-btn');
      if (nativeBtn) {
        if (navigator.share) {
          nativeBtn.addEventListener('click', () => {
            navigator.share({ title: document.title, url: window.location.href }).catch(() => {});
          });
        } else {
          nativeBtn.style.display = 'none';
        }
      }

      // Copy Link
      const copyBtn = document.getElementById('copy-link-btn');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(window.location.href).then(() => {
            Toast.show(I18nManager.get('link_copied'));
          });
        });
      }
    },

    initBookmarkState() {
      const btn = document.getElementById('article-save-btn');
      if (!btn) return;

      const postId = window.location.pathname;
      const isSaved = SavedManager.isSaved(postId);
      btn.classList.toggle('is-saved', isSaved);

      btn.addEventListener('click', () => {
        const title = document.getElementById('article-title') ? document.getElementById('article-title').textContent : document.title;
        const nowSaved = SavedManager.toggle({
          id: postId,
          title: title,
          url: window.location.href,
          date: new Date().toISOString()
        });
        btn.classList.toggle('is-saved', nowSaved);
        Toast.show(nowSaved ? 'Article saved for offline reading' : 'Article removed from saved');
      });
    },

    initLightbox() {
      const modal = document.getElementById('image-lightbox');
      const img = document.getElementById('lightbox-img');
      const caption = document.getElementById('lightbox-caption');
      const closeBtn = document.getElementById('lightbox-close-btn');
      if (!modal || !img) return;

      // Attach click to article images
      const images = Array.from(document.querySelectorAll('#article-body img, .image-gallery img'));
      let currentImgIdx = 0;

      const openAt = (idx) => {
        currentImgIdx = idx;
        const target = images[idx];
        img.src = target.src;
        caption.textContent = target.alt || target.getAttribute('title') || '';
        modal.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      };

      images.forEach((image, i) => {
        image.style.cursor = 'zoom-in';
        image.addEventListener('click', () => openAt(i));
      });

      const close = () => {
        modal.classList.remove('is-active');
        document.body.style.overflow = '';
      };

      if (closeBtn) closeBtn.addEventListener('click', close);
      modal.addEventListener('click', (e) => { if (e.target === modal) close(); });

      document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('is-active')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowRight' && images.length > 1) {
          openAt((currentImgIdx + 1) % images.length);
        }
        if (e.key === 'ArrowLeft' && images.length > 1) {
          openAt((currentImgIdx - 1 + images.length) % images.length);
        }
      });
    },

    initFAQ() {
      document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
          const item = btn.closest('.faq-item');
          if (item) item.classList.toggle('is-open');
        });
      });
    },

    checkTranslationLinker() {
      const block = document.querySelector('.post-translations');
      const container = document.getElementById('translations-bar');
      const linksTarget = document.getElementById('trans-links-container');
      if (!block || !container || !linksTarget) return;

      try {
        const data = JSON.parse(block.getAttribute('data-translations') || '{}');
        const langs = Object.keys(data);
        if (langs.length === 0) return;

        let html = '';
        langs.forEach(l => {
          const name = I18N[l] ? (l.toUpperCase()) : l;
          html += `<a href="${data[l]}" class="trans-link-pill">${name}</a>`;

          // Inject SEO hreflang into head
          const linkEl = document.createElement('link');
          linkEl.rel = 'alternate';
          linkEl.hreflang = l;
          linkEl.href = data[l];
          document.head.appendChild(linkEl);
        });

        linksTarget.innerHTML = html;
        container.style.display = 'flex';
      } catch (e) {}
    }
  };

  // ==========================================================================
  // 8. LOCALSTORAGE SAVED STORIES DASHBOARD
  // ==========================================================================
  const SavedManager = {
    getAll() {
      try {
        return JSON.parse(localStorage.getItem('pid_saved') || '[]');
      } catch (e) {
        return [];
      }
    },

    isSaved(id) {
      return this.getAll().some(item => item.id === id);
    },

    toggle(postObj) {
      let list = this.getAll();
      const exists = list.some(i => i.id === postObj.id);
      if (exists) {
        list = list.filter(i => i.id !== postObj.id);
      } else {
        list.unshift(postObj);
      }
      localStorage.setItem('pid_saved', JSON.stringify(list));
      this.updateHeaderBadge();
      return !exists;
    },

    remove(id) {
      let list = this.getAll().filter(i => i.id !== id);
      localStorage.setItem('pid_saved', JSON.stringify(list));
      this.updateHeaderBadge();
      this.renderSavedPage();
    },

    clearAll() {
      localStorage.removeItem('pid_saved');
      this.updateHeaderBadge();
      this.renderSavedPage();
    },

    updateHeaderBadge() {
      const badge = document.getElementById('saved-count');
      if (!badge) return;
      const count = this.getAll().length;
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    },

    renderSavedPage() {
      // Triggered on static page with URL /p/saved.html
      if (!window.location.pathname.includes('/p/saved.html')) return;

      const mainView = document.getElementById('saved-articles-view');
      const stdContent = document.getElementById('standard-static-content');
      const listTarget = document.getElementById('saved-stories-list');
      const emptyMsg = document.getElementById('saved-empty-message');

      if (!mainView) return;
      mainView.style.display = 'block';
      if (stdContent) stdContent.style.display = 'none';

      const items = this.getAll();
      if (items.length === 0) {
        if (emptyMsg) emptyMsg.style.display = 'block';
        if (listTarget) listTarget.innerHTML = '';
        return;
      }

      if (emptyMsg) emptyMsg.style.display = 'none';
      if (!listTarget) return;

      listTarget.innerHTML = items.map(item => `
        <div class="saved-card">
          <a href="${item.url}" class="saved-card-title">${item.title}</a>
          <button class="saved-card-remove" onclick="window.PulseApp.removeSaved('${item.id}')">${I18nManager.get('remove_saved')}</button>
        </div>
      `).join('');

      const clearBtn = document.getElementById('clear-saved-btn');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => this.clearAll());
      }
    }
  };

  // ==========================================================================
  // 9. COMMAND PALETTE & SEARCH MODAL (Cmd/Ctrl + K)
  // ==========================================================================
  const SearchPalette = {
    init() {
      const modal = document.getElementById('cmd-palette-modal');
      const input = document.getElementById('cmd-search-input');
      const trigger = document.getElementById('search-modal-trigger');
      const backdrop = document.getElementById('cmd-palette-backdrop');
      const viewport = document.getElementById('cmd-results-viewport');
      if (!modal || !input) return;

      const open = () => {
        modal.classList.add('is-active');
        input.value = '';
        input.focus();
        document.body.style.overflow = 'hidden';
      };

      const close = () => {
        modal.classList.remove('is-active');
        document.body.style.overflow = '';
      };

      if (trigger) trigger.addEventListener('click', open);
      if (backdrop) backdrop.addEventListener('click', close);

      // Keyboard Shortcut listener (Cmd+K or Ctrl+K)
      document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          modal.classList.contains('is-active') ? close() : open();
        }
        if (e.key === 'Escape' && modal.classList.contains('is-active')) {
          close();
        }
      });

      // Live search typing debounce
      let debounceTimer;
      input.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        const q = input.value.trim();
        if (q.length < 2) return;

        debounceTimer = setTimeout(() => {
          fetch(`/feeds/posts/default?q=${encodeURIComponent(q)}&alt=json&max-results=6`)
            .then(r => r.ok ? r.json() : null)
            .then(data => {
              if (!data || !data.feed.entry) {
                viewport.innerHTML = `<p style="padding:16px;color:var(--text-muted);">No matching dispatches found.</p>`;
                return;
              }
              let html = '';
              data.feed.entry.forEach(e => {
                const p = FeedEngine.parsePostEntry(e);
                html += `
                  <a href="${p.link}" class="cmd-result-item">
                    <span class="cmd-result-cat">${p.category}</span>
                    <span class="cmd-result-title">${p.title}</span>
                  </a>
                `;
              });
              viewport.innerHTML = html;
            });
        }, 220);
      });

      // Quick topic tag buttons
      document.querySelectorAll('.cmd-tag').forEach(tag => {
        tag.addEventListener('click', () => {
          input.value = tag.dataset.search || tag.textContent;
          input.dispatchEvent(new Event('input'));
        });
      });
    }
  };

  // ==========================================================================
  // 10. MOBILE DRAWER & PRIVACY CONSENT
  // ==========================================================================
  const MobileDrawer = {
    init() {
      const trigger = document.getElementById('mobile-menu-trigger');
      const drawer = document.getElementById('mobile-drawer');
      const closeBtn = document.getElementById('drawer-close-btn');
      const backdrop = document.getElementById('drawer-backdrop');
      const list = document.getElementById('mobile-niche-list');

      if (!trigger || !drawer) return;

      // Populate mobile niche grid
      if (list) {
        list.innerHTML = Object.keys(CATEGORY_MAP).map(key => `
          <li class="mobile-niche-item">
            <a href="/search/label/${key}" data-i18n="${CATEGORY_MAP[key]}">${I18nManager.get(CATEGORY_MAP[key])}</a>
          </li>
        `).join('');
      }

      const open = () => drawer.classList.add('is-active');
      const close = () => drawer.classList.remove('is-active');

      trigger.addEventListener('click', open);
      if (closeBtn) closeBtn.addEventListener('click', close);
      if (backdrop) backdrop.addEventListener('click', close);
    }
  };

  const PrivacyConsent = {
    init() {
      if (localStorage.getItem('pid_consent_accepted')) return;
      const banner = document.getElementById('consent-banner');
      const acceptBtn = document.getElementById('consent-accept-btn');
      if (!banner || !acceptBtn) return;

      banner.style.display = 'block';
      acceptBtn.addEventListener('click', () => {
        localStorage.setItem('pid_consent_accepted', 'true');
        banner.style.display = 'none';
      });
    }
  };

  // ==========================================================================
  // 11. BOOTSTRAP INITIALIZATION
  // ==========================================================================
  const PulseApp = {
    init() {
      ThemeManager.init();
      I18nManager.init();
      SavedManager.updateHeaderBadge();
      FeedEngine.init();
      ArticleManager.init();
      SavedManager.renderSavedPage();
      SearchPalette.init();
      MobileDrawer.init();
      PrivacyConsent.init();

      // Back to top smooth scroll
      const backToTop = document.getElementById('back-to-top-btn');
      if (backToTop) {
        backToTop.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      // Dynamic copyright year
      const yearEl = document.getElementById('copyright-year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();

      document.body.classList.remove('loading');
    },

    removeSaved(id) {
      SavedManager.remove(id);
    },

    handleNewsletterSubmit(form) {
      Toast.show(I18nManager.get('newsletter_success'));
      form.reset();
    }
  };

  // Expose global API
  window.PulseApp = PulseApp;

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => PulseApp.init());
  } else {
    PulseApp.init();
  }

})();

