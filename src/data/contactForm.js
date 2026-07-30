export const PROJECT_TYPES = [
  { id: "landing", label: "Landing page" },
  { id: "vitrine", label: "Site vitrine" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "web-app", label: "Application web" },
  { id: "mobile-app", label: "Application mobile" },
  { id: "metier", label: "Application métier" },
  { id: "crm", label: "CRM" },
  { id: "erp", label: "ERP / progiciel" },
  { id: "saas", label: "SaaS" },
  { id: "automation-ia", label: "Automatisation / IA" },
  { id: "autre", label: "Autre" },
]

export const SITUATIONS = [
  { id: "zero", label: "Je pars de zéro" },
  { id: "existant", label: "J’ai déjà un site ou une application" },
  { id: "refonte", label: "Je souhaite une refonte" },
  { id: "idee", label: "J’ai seulement une idée à cadrer" },
]

export const BUDGETS = [
  { id: "lt-1000", label: "Moins de 1 000 €" },
  { id: "1000-3000", label: "1 000 à 3 000 €" },
  { id: "3000-7000", label: "3 000 à 7 000 €" },
  { id: "gt-7000", label: "Plus de 7 000 €" },
  { id: "unknown", label: "Je ne sais pas encore" },
]

export const TIMELINES = [
  { id: "asap", label: "Dès que possible" },
  { id: "lt-2m", label: "Moins de 2 mois" },
  { id: "2-6m", label: "2 à 6 mois" },
  { id: "flexible", label: "Pas de délai précis" },
]

export const CONTACT_FORM_LIMITS = {
  otherProjectType: 50,
  need: 400,
}

/** Questions conditionnelles par type de projet. mode: "single" | "multi" */
export const PROJECT_TYPE_QUESTIONS = {
  landing: [
    {
      id: "landing-goal",
      label: "Quel est l’objectif principal de la page ?",
      mode: "single",
      options: [
        { id: "contact", label: "Recevoir des demandes de contact" },
        { id: "sell", label: "Vendre une offre" },
        { id: "signup", label: "Obtenir des inscriptions" },
        { id: "event", label: "Promouvoir un événement" },
        { id: "product-teaser", label: "Présenter un produit à venir" },
      ],
    },
    {
      id: "landing-content",
      label: "Le contenu est-il déjà disponible ?",
      mode: "single",
      options: [
        { id: "ready", label: "Oui, textes et visuels sont prêts" },
        { id: "partial", label: "Partiellement" },
        { id: "need-help", label: "Non, j’ai besoin d’accompagnement" },
      ],
    },
    {
      id: "landing-tracking",
      label: "Souhaitez-vous suivre les conversions ?",
      mode: "single",
      options: [
        { id: "detailed", label: "Oui, avec des statistiques détaillées" },
        { id: "forms-only", label: "Seulement les envois de formulaire" },
        { id: "no", label: "Non / Je ne sais pas encore" },
      ],
    },
  ],

  vitrine: [
    {
      id: "vitrine-pages",
      label: "Combien de pages envisagez-vous ?",
      mode: "single",
      options: [
        { id: "one", label: "Une seule page" },
        { id: "2-5", label: "2 à 5 pages" },
        { id: "6-10", label: "6 à 10 pages" },
        { id: "gt-10", label: "Plus de 10" },
        { id: "unknown", label: "Je ne sais pas encore" },
      ],
    },
    {
      id: "vitrine-features",
      label: "Quelles fonctionnalités souhaitez-vous ?",
      mode: "multi",
      options: [
        { id: "contact-form", label: "Formulaire de contact" },
        { id: "gallery", label: "Galerie ou réalisations" },
        { id: "booking", label: "Prise de rendez-vous" },
        { id: "blog", label: "Blog ou actualités" },
        { id: "reviews", label: "Avis clients" },
        { id: "map", label: "Carte et zone d’intervention" },
      ],
    },
    {
      id: "vitrine-branding",
      label: "Disposez-vous déjà d’une identité visuelle ?",
      mode: "single",
      options: [
        { id: "complete", label: "Oui, complète" },
        { id: "logo-only", label: "J’ai uniquement un logo" },
        { id: "refresh", label: "Elle doit être modernisée" },
        { id: "from-scratch", label: "Je pars de zéro" },
      ],
    },
  ],

  ecommerce: [
    {
      id: "ecom-sell",
      label: "Que souhaitez-vous vendre ?",
      mode: "single",
      options: [
        { id: "physical", label: "Produits physiques" },
        { id: "digital", label: "Produits numériques" },
        { id: "services", label: "Services" },
        { id: "subscriptions", label: "Abonnements" },
        { id: "mixed", label: "Plusieurs catégories" },
      ],
    },
    {
      id: "ecom-catalog-size",
      label: "Combien de produits environ ?",
      mode: "single",
      options: [
        { id: "lt-10", label: "Moins de 10" },
        { id: "10-50", label: "10 à 50" },
        { id: "50-250", label: "50 à 250" },
        { id: "gt-250", label: "Plus de 250" },
        { id: "undefined", label: "Catalogue encore indéfini" },
      ],
    },
    {
      id: "ecom-needs",
      label: "Quels besoins commerciaux sont nécessaires ?",
      mode: "multi",
      options: [
        { id: "payment", label: "Paiement en ligne" },
        { id: "stock", label: "Gestion des stocks" },
        { id: "shipping", label: "Livraison" },
        { id: "promo", label: "Codes promotionnels" },
        { id: "invoices", label: "Factures" },
        { id: "accounts", label: "Comptes clients" },
      ],
    },
  ],

  "web-app": [
    {
      id: "webapp-goal",
      label: "Quel est l’objectif principal de l’application ?",
      mode: "single",
      options: [
        { id: "data", label: "Gérer des données" },
        { id: "collab", label: "Faciliter une collaboration" },
        { id: "automate", label: "Automatiser une tâche" },
        { id: "service", label: "Fournir un service en ligne" },
        { id: "client-space", label: "Créer un espace client" },
        { id: "other", label: "Autre" },
      ],
    },
    {
      id: "webapp-accounts",
      label: "Les utilisateurs doivent-ils avoir un compte ?",
      mode: "single",
      options: [
        { id: "single-role", label: "Oui, un seul type d’utilisateur" },
        { id: "multi-role", label: "Oui, avec plusieurs rôles" },
        { id: "no", label: "Non" },
        { id: "unknown", label: "Je ne sais pas encore" },
      ],
    },
    {
      id: "webapp-integrations",
      label: "L’application doit-elle communiquer avec d’autres services ?",
      mode: "single",
      options: [
        { id: "existing-api", label: "Oui, avec des API existantes" },
        { id: "to-define", label: "Oui, mais les services restent à définir" },
        { id: "no", label: "Non" },
        { id: "unknown", label: "Je ne sais pas encore" },
      ],
    },
  ],

  "mobile-app": [
    {
      id: "mobile-platforms",
      label: "Sur quelles plateformes doit-elle fonctionner ?",
      mode: "single",
      options: [
        { id: "android", label: "Android" },
        { id: "ios", label: "iPhone" },
        { id: "both", label: "Android et iPhone" },
        { id: "unknown", label: "Je ne sais pas encore" },
      ],
    },
    {
      id: "mobile-device-features",
      label: "Quelles fonctions du téléphone seront utilisées ?",
      mode: "multi",
      options: [
        { id: "geoloc", label: "Géolocalisation" },
        { id: "camera", label: "Appareil photo" },
        { id: "notifications", label: "Notifications" },
        { id: "voice", label: "Micro ou reconnaissance vocale" },
        { id: "offline", label: "Fonctionnement hors connexion" },
        { id: "none", label: "Aucune de ces fonctions" },
      ],
    },
    {
      id: "mobile-accounts",
      label: "Un compte utilisateur sera-t-il nécessaire ?",
      mode: "single",
      options: [
        { id: "classic", label: "Oui, avec connexion classique" },
        { id: "social", label: "Oui, avec Google ou Apple" },
        { id: "no", label: "Non" },
        { id: "unknown", label: "À déterminer" },
      ],
    },
  ],

  metier: [
    {
      id: "metier-process",
      label: "Quel processus souhaitez-vous simplifier ?",
      mode: "single",
      options: [
        { id: "files", label: "Gestion de dossiers" },
        { id: "planning", label: "Planification" },
        { id: "interventions", label: "Suivi d’interventions" },
        { id: "docs", label: "Gestion documentaire" },
        { id: "billing", label: "Facturation" },
        { id: "other", label: "Autre processus métier" },
      ],
    },
    {
      id: "metier-users",
      label: "Combien de personnes utiliseront l’outil ?",
      mode: "single",
      options: [
        { id: "1-5", label: "1 à 5" },
        { id: "6-20", label: "6 à 20" },
        { id: "21-100", label: "21 à 100" },
        { id: "gt-100", label: "Plus de 100" },
        { id: "unknown", label: "Je ne sais pas encore" },
      ],
    },
    {
      id: "metier-sensitive",
      label: "Les données manipulées sont-elles sensibles ?",
      mode: "single",
      options: [
        { id: "health", label: "Oui, données de santé" },
        { id: "finance", label: "Oui, données financières" },
        { id: "personal", label: "Oui, données personnelles ou confidentielles" },
        { id: "no", label: "Non" },
        { id: "unknown", label: "Je ne sais pas" },
      ],
    },
  ],

  crm: [
    {
      id: "crm-manage",
      label: "Que souhaitez-vous principalement gérer ?",
      mode: "multi",
      options: [
        { id: "leads", label: "Prospects" },
        { id: "clients", label: "Clients" },
        { id: "opportunities", label: "Opportunités commerciales" },
        { id: "followups", label: "Relances" },
        { id: "quotes", label: "Devis et factures" },
        { id: "support", label: "Support client" },
      ],
    },
    {
      id: "crm-users",
      label: "Combien d’utilisateurs auront accès au CRM ?",
      mode: "single",
      options: [
        { id: "1-5", label: "1 à 5" },
        { id: "6-20", label: "6 à 20" },
        { id: "21-100", label: "21 à 100" },
        { id: "gt-100", label: "Plus de 100" },
      ],
    },
    {
      id: "crm-integrations",
      label: "Quels outils doivent être connectés au CRM ?",
      mode: "multi",
      options: [
        { id: "email", label: "Messagerie électronique" },
        { id: "calendar", label: "Agenda" },
        { id: "website", label: "Site web ou formulaires" },
        { id: "billing", label: "Outil de facturation" },
        { id: "phone", label: "Téléphonie" },
        { id: "none", label: "Aucun / À définir" },
      ],
    },
  ],

  erp: [
    {
      id: "erp-domains",
      label: "Quels domaines doivent être centralisés ?",
      mode: "multi",
      options: [
        { id: "clients", label: "Clients" },
        { id: "stock", label: "Stocks" },
        { id: "orders", label: "Commandes" },
        { id: "billing", label: "Facturation" },
        { id: "hr", label: "Ressources humaines" },
        { id: "planning", label: "Planification" },
        { id: "suppliers", label: "Fournisseurs" },
      ],
    },
    {
      id: "erp-existing",
      label: "Utilisez-vous déjà des logiciels métier ?",
      mode: "single",
      options: [
        { id: "many", label: "Oui, plusieurs outils séparés" },
        { id: "main", label: "Oui, un outil principal" },
        { id: "no", label: "Non" },
        { id: "replace", label: "Je souhaite remplacer l’existant" },
      ],
    },
    {
      id: "erp-need",
      label: "Quel est le besoin principal ?",
      mode: "single",
      options: [
        { id: "centralize", label: "Centraliser les informations" },
        { id: "automate", label: "Automatiser les échanges entre services" },
        { id: "dedupe", label: "Réduire les doubles saisies" },
        { id: "dashboards", label: "Obtenir des tableaux de bord" },
        { id: "replace", label: "Remplacer un outil devenu inadapté" },
      ],
    },
  ],

  saas: [
    {
      id: "saas-audience",
      label: "À qui le service est-il destiné ?",
      mode: "single",
      options: [
        { id: "individuals", label: "Particuliers" },
        { id: "pros", label: "Professionnels" },
        { id: "companies", label: "Entreprises" },
        { id: "associations", label: "Associations" },
        { id: "internal", label: "Équipes internes" },
      ],
    },
    {
      id: "saas-model",
      label: "Quel modèle économique envisagez-vous ?",
      mode: "single",
      options: [
        { id: "monthly", label: "Abonnement mensuel" },
        { id: "yearly", label: "Abonnement annuel" },
        { id: "usage", label: "Paiement à l’usage" },
        { id: "freemium", label: "Version gratuite et offres payantes" },
        { id: "unknown", label: "Je ne sais pas encore" },
      ],
    },
    {
      id: "saas-access",
      label: "Quels niveaux d’accès sont nécessaires ?",
      mode: "single",
      options: [
        { id: "single", label: "Un seul type d’utilisateur" },
        { id: "plans", label: "Plusieurs formules d’abonnement" },
        { id: "roles", label: "Plusieurs rôles utilisateurs" },
        { id: "admin", label: "Administration complète" },
        { id: "unknown", label: "À définir" },
      ],
    },
  ],

  "automation-ia": [
    {
      id: "ai-tasks",
      label: "Quelle(s) tâche(s) souhaitez-vous automatiser ?",
      mode: "multi",
      options: [
        { id: "documents", label: "Traitement de documents" },
        { id: "support", label: "Réponses ou assistance client" },
        { id: "content", label: "Génération de contenu" },
        { id: "analysis", label: "Classement ou analyse de données" },
        { id: "notifications", label: "Envoi de notifications" },
        { id: "admin", label: "Tâches administratives répétitives" },
      ],
    },
    {
      id: "ai-data",
      label: "Quelles données seront utilisées ?",
      mode: "multi",
      options: [
        { id: "internal-docs", label: "Documents internes" },
        { id: "database", label: "Base de données" },
        { id: "messages", label: "Emails ou messages" },
        { id: "api", label: "Données provenant d’une API" },
        { id: "sensitive", label: "Données sensibles" },
        { id: "unknown", label: "Je ne sais pas encore" },
      ],
    },
    {
      id: "ai-type",
      label: "Quel type d’intelligence artificielle envisagez-vous ?",
      mode: "single",
      options: [
        { id: "chatbot", label: "Assistant conversationnel" },
        { id: "text", label: "Génération ou résumé de texte" },
        { id: "classify", label: "Analyse ou classification" },
        { id: "voice", label: "Reconnaissance ou synthèse vocale" },
        { id: "images", label: "Analyse d’images" },
        { id: "advise", label: "Je souhaite être conseillé" },
      ],
    },
  ],
}
