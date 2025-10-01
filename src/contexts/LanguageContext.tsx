import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const translations = {
  en: {
    nav: {
      name: "Ivan Nikolov",
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Ivan Nikolov",
      title: "Software Engineer & Innovation Manager",
      subtitle: "13 years of experience building scalable solutions and leading high-performing development teams",
      description: "Transforming ideas into robust software architectures while mentoring the next generation of developers",
      viewWork: "View My Work",
      getInTouch: "Get In Touch"
    },
    about: {
      title: "About",
      titleHighlight: "Me",
      paragraph1: "My unique perspective comes from combining a Bachelor's in Information and Communication Technology, with a Master's in IT Product Design. This dual foundation gives me both deep technical expertise and a profound understanding of users, business context, and design thinking.",
      paragraph2: "With over 13 years in software development, I've evolved from a passionate coder to a strategic technical leader who bridges the gap between complex technical solutions and real user needs. I don't just build software—I craft experiences that solve meaningful problems.",
      paragraph3: "This rare combination of technical mastery and user-centered design thinking is my USP. I lead teams that build scalable, maintainable solutions while always keeping the end user and business objectives at the heart of every decision.",
      highlights: {
        years: { number: "13+", label: "Years Experience", description: "Building enterprise software solutions" },
        acquisition: { number: "1", label: "Company Acquisition", description: "Crucial contributor to the successful sale of our company." },
        saas: { number: "2", label: "SaaS Products", description: "From idea to market release" },
        projects: { number: "30+", label: "Projects Delivered", description: "Mostly in the AEC industry" },
        mentored: { number: "30+", label: "Developers Mentored", description: "Growing the next generation of talent" },
        teams: { number: "5+", label: "Teams Led", description: "Cross-functional agile development teams" }
      }
    },
    experience: {
      title: "Professional",
      titleHighlight: "Experience",
      techStack: "Tech Stack:",
      // Head of Software Engineering position
      headPeriod: "2019 - 2025",
      headRole: "Head of Software Engineering",
      headCompany: "Die Werkbank IT GmbH",
      headDescription: "- Drove the end-to-end development of innovative AEC software products (BIM&More, v.create), from ideation and prototyping through to market release and client adoption.\n- Served as the bridge between business stakeholders and development teams, ensuring complex requirements were translated into actionable backlogs and prototypes.\n- Designed and implemented system architecture for scalable, integration-heavy solutions.\n- Led cross-functional teams of developers (Laravel, Vue.js, .NET, C++) and designers, overseeing architecture decisions, sprint planning, and budgets while fostering a culture of agile iteration.\n- Hired, coordinated, and managed external contractors, ensuring alignment with internal standards.\n- Regularly facilitated client workshops, demos, and feedback sessions with major construction industry players to ensure stakeholder alignment and adoption.\n- Played a key role in the company's acquisition, aligning product vision, technical strategy, and innovation pipeline with business growth objectives.\n",
      headAchievements: [
        "2 SaaS Products Launched",
        "4x Scaled Team",
        "Successfull Sell of the Company"
      ],
      headTechStack: "Laravel, PHP, Vue.js, JavaScript, Babylon.js, Revit API, C#, Unity, Archicad SDK, C++, AWS, Kubernetes, Docker, CI/CD",
      // Senior Software Engineer position
      seniorPeriod: "2015 - 2019",
      seniorRole: "Senior Software Engineer",
      seniorCompany: "Next IT Services",
      seniorDescription: "- Gathered requirements, designed systems, and developed custom solutions for international clients (Knauf, Saint-Gobain, Sto).\n- Delivered Knauf International Plugin (Systemfinder): a tool for configuring construction systems and importing them into Revit/Archicad.\n- Developed the Sto BIM Cockpit, an internal tool for automating PDF and BIM outputs for the sales team, significantly reducing preparation time.\n- Mentored junior developers and contributed to technical leadership within the team.\n",
      seniorAchievements: [
        "Tech Stack Modernization",
        "Custom PHP to Laravel Migration",
        "Blade to Vue.js Migration",
        "Monolith to Microservices Migration"
      ],
      seniorTechStack: "Laravel, PHP, Vue.js, JavaScript, Babylon.js, Revit API, C#, Unity, Archicad SDK, C++",
      // Software Developer position
      devPeriod: "2012 - 2015",
      devRole: "Software Developer",
      devCompany: "Mediatecture Ltd.",
      devDescription: "- Designed and developed custom software solutions tailored to client needs.\n- Built the ISOVER Constructions Multi Comfort Designer tool to support sustainable building design.\n- Created and maintained building materials databases to streamline data-driven workflows.\n- Developed and deployed websites using CMS platforms such as Joomla and WordPress.",
      devAchievements: [
        "Created ISOVER Multi Comfort Designer tool",
        "Built and maintained building materials databases for Saint-Gobain",
        "Developed websites using CMS platforms"
      ],
      devTechStack: "PHP, HTML, CSS, WordPress, Joomla, Adobe Flash, Adobe AIR"
    },
    education: {
      title: "Educational",
      titleHighlight: "Background",
      masterPeriod: "Master's Degree",
      masterDegree: "IT Product Design",
      masterInstitution: "University of Southern Denmark",
      masterLocation: "Kolding, Denmark",
      masterDescription: "Advanced studies focusing on user-centered design, product strategy, and the intersection of technology and business needs. Developed expertise in design thinking, user research, and product management methodologies.",
      masterHighlights: [
        "User-centered design methodologies",
        "Product strategy and business analysis",
        "Design thinking and innovation processes"
      ],
      bachelorPeriod: "Bachelor's Degree",
      bachelorDegree: "Information and Communication Technology",
      bachelorInstitution: "VIA University College",
      bachelorLocation: "Horsens, Denmark",
      bachelorDescription: "Comprehensive technical foundation covering software development, system design, and modern programming practices. Built strong expertise in multiple programming languages and development frameworks.",
      bachelorHighlights: [
        "Software development and architecture",
        "System design and implementation",
        "Programming languages and frameworks"
      ],
      advantageTitle: "Dual Perspective Advantage",
      advantageDescription: "This unique combination of technical expertise and design thinking allows me to bridge the gap between complex technical solutions and meaningful user experiences, making me an effective leader who understands both the \"how\" and the \"why\" of software development."
    },
    skills: {
      title: "Skills &",
      titleHighlight: "Expertise",
      leadership: {
        title: "Leadership & Management",
        skills: ["Vision and Strategy", "Culture and Environment", "Team Leadership", "Risk Management", "Resource Allocation", "Budgeting", "Efficiency", "Control"]
      },
      backend: {
        title: "Backend Development",
        skills: ["Laravel", "PHP", "Nest.js", "C#", ".NET", "PostgreSQL", "MySQL"]
      },
      frontend: {
        title: "Frontend Development",
        skills: ["Livewire", "Vue.js", "React", "JavaScript", "TypeScript", "SaaS", "Unity"]
      },
      devops: {
        title: "DevOps & Architecture",
        skills: ["AWS", "Azure", "Docker", "Portainer", "CI/CD", "Solution Architecture", "Application Architecture"]
      }
    },
    projects: {
      title: "Featured",
      titleHighlight: "Projects",
      keyImpact: "Key Impact:",
      technologies: "Technologies:",
      bimMore: {
        title: "BIM&More – Sustainable BIM Data Platform",
        description: "Digital product suite for the AEC industry, with BIM-Cockpit as its core platform. It acts as a central hub for BIM data management, integrating geometry, attributes, classifications, and project-specific delivery directly into CAD/BIM workflows (Revit, Archicad).\n\nI was part of defined the product vision and architecture, and led cross-functional teams. I have also managed numerous PoCs and pilot projects with customers like KLB, Sto and Autobahn GmbH. I could represented the product in investor presentations during the successful acquisition of the company.",
        technologies: ["Laravel", "Vue.js", "PostgresSQL", "Archicad SDK", "Revit API", "Kubernetes", "Docker", "CI/CD"],
        impact: "- Adoption by leading manufacturers and infrastructure projects.\n- Automated BIM workflows → faster planning, fewer errors, and compliance with industry standards.",
        type: "Software Architecture, Product Management"
      },
      vCreate: {
        title: "v.create",
        description: "Enterprise-level SaaS platform for the rapid configuration of large office spaces. Designed as a serious game with Unity, v.create streamlines space planning by combining immersive 3D visualisation with intelligent automation.\n\nAs Head of Engineering of Die Werkbank IT, I was involved from the earliest stage — from shaping the idea, prototyping, and concept development to leading implementation and supporting market deployment. I oversaw the technical architecture, integration with BIM systems, and the design of the SaaS infrastructure.",
        technologies: ["Laravel", "Vue.js", "Revit API", "Unity", "AWS", "Kubernetes", "Docker", "CI/CD"],
        impact: "- Reduces the time and cost of configuring complex office environments.\n- Adapt workplaces faster, with fewer resources, and with measurable sustainability benefits",
        type: "Software Architecture, Product Management"
      }
    },
    contact: {
      title: "Let's",
      titleHighlight: "Connect",
      subtitle: "Interested in collaboration, have a project in mind, or just want to discuss technology? I'd love to hear from you.",
      phone: "Phone",
      email: "Email",
      linkedin: "LinkedIn"
    },
    footer: {
      copyright: "© 2025 Ivan Nikolov",
      linkedinLabel: "LinkedIn",
      emailLabel: "Email"
    }
  },
  de: {
    nav: {
      name: "Ivan Nikolov",
      about: "Über mich",
      experience: "Erfahrung",
      education: "Ausbildung",
      skills: "Fähigkeiten",
      projects: "Projekte", // Keep this basic nav translation
      contact: "Kontakt"
    },
    hero: {
      greeting: "Hallo, ich bin",
      name: "Ivan Nikolov",
      title: "Softwareingenieur & Innovationsmanager",
      subtitle: "13 Jahre Erfahrung im Aufbau skalierbarer Lösungen und der Leitung leistungsstarker Entwicklungsteams",
      description: "Ideen in robuste Softwarearchitekturen verwandeln und gleichzeitig die nächste Generation von Entwicklern fördern",
      viewWork: "Meine Arbeit ansehen",
      getInTouch: "Kontakt aufnehmen"
    },
    about: {
      title: "Über",
      titleHighlight: "mich",
      paragraph1: "Meine einzigartige Perspektive entsteht aus der Kombination eines Bachelor-Abschlusses in Informations- und Kommunikationstechnologie, mit einem Master in IT-Produktdesign. Diese duale Grundlage verleiht mir sowohl tiefgreifende technische Expertise als auch ein profundes Verständnis für Nutzer, Geschäftskontext und Design Thinking.",
      paragraph2: "Mit über 13 Jahren in der Softwareentwicklung habe ich mich von einem leidenschaftlichen Programmierer zu einem strategischen technischen Leiter entwickelt, der die Lücke zwischen komplexen technischen Lösungen und echten Nutzerbedürfnissen schließt. Ich baue nicht nur Software – ich schaffe Erlebnisse, die bedeutungsvolle Probleme lösen.",
      paragraph3: "Diese seltene Kombination aus technischer Meisterschaft und nutzerzentriertem Design Thinking ist mein USP. Ich führe Teams, die skalierbare, wartbare Lösungen entwickeln und dabei immer den Endnutzer und die Geschäftsziele im Mittelpunkt jeder Entscheidung behalten.",
      highlights: {
        years: { number: "13+", label: "Jahre Erfahrung", description: "Entwicklung von Unternehmenssoftware" },
        acquisition: { number: "1", label: "Firmenübernahme", description: "Entscheidender Beitrag zum erfolgreichen Verkauf unseres Unternehmens." },
        saas: { number: "2", label: "SaaS-Produkte", description: "Von der Idee bis zur Markteinführung" },
        projects: { number: "30+", label: "Projekte geliefert", description: "Hauptsächlich in der AEC-Branche" },
        mentored: { number: "30+", label: "Entwickler betreut", description: "Die nächste Generation von Talenten fördern" },
        teams: { number: "5+", label: "Teams geleitet", description: "Funktionsübergreifende agile Teams" }
      }
    },
    experience: {
      title: "Berufliche",
      titleHighlight: "Erfahrung",
      techStack: "Tech-Stack:",
      // Head of Software Engineering position
      headPeriod: "2019 - 2025",
      headRole: "Leiter der Softwareentwicklung",
      headCompany: "Die Werkbank IT GmbH",
      headDescription: "- Leitete die End-to-End-Entwicklung innovativer AEC-Softwareprodukte (BIM&More, v.create), von der Ideenfindung und Prototypentwicklung bis zur Markteinführung und Kundenadoption.\n- Fungierte als Bindeglied zwischen Geschäftspartnern und Entwicklungsteams und stellte sicher, dass komplexe Anforderungen in umsetzbare Backlogs und Prototypen übersetzt wurden.\n- Entwarf und implementierte Systemarchitektur für skalierbare, integrationslastige Lösungen.\n- Leitete funktionsübergreifende Teams von Entwicklern (Laravel, Vue.js, .NET, C++) und Designern, überwachte Architekturentscheidungen, Sprint-Planung und Budgets und förderte eine Kultur der agilen Iteration.\n- Rekrutierte, koordinierte und managte externe Auftragnehmer unter Gewährleistung der Einhaltung interner Standards.\n- Führte regelmäßig Kundenworkshops, Demos und Feedback-Sessions mit wichtigen Akteuren der Bauindustrie durch, um die Abstimmung und Akzeptanz der Stakeholder sicherzustellen.\n- Spielte eine Schlüsselrolle bei der Übernahme des Unternehmens und stimmte Produktvision, technische Strategie und Innovationspipeline mit den geschäftlichen Wachstumszielen ab.\n",
      headAchievements: [
        "2 SaaS-Produkte eingeführt",
        "Team 4-fach vergrößert",
        "Erfolgreicher Unternehmensverkauf"
      ],
      headTechStack: "Laravel, PHP, Vue.js, JavaScript, Babylon.js, Revit API, C#, Unity, Archicad SDK, C++, AWS, Kubernetes, Docker, CI/CD",
      // Senior Software Engineer position
      seniorPeriod: "2015 - 2019",
      seniorRole: "Senior Softwareentwickler",
      seniorCompany: "Next IT Services",
      seniorDescription: "- Erfasste Anforderungen, entwarf Systeme und entwickelte maßgeschneiderte Lösungen für internationale Kunden (Knauf, Saint-Gobain, Sto).\n- Lieferte Knauf International Plugin (Systemfinder): ein Tool zur Konfiguration von Bausystemen und deren Import in Revit/Archicad.\n- Entwickelte das Sto BIM Cockpit, ein internes Tool zur Automatisierung von PDF- und BIM-Outputs für das Vertriebsteam, was die Vorbereitungszeit erheblich reduzierte.\n- Mentoring von Junior-Entwicklern und Beitrag zur technischen Führung im Team.\n",
      seniorAchievements: [
        "Tech-Stack Modernisierung",
        "Custom PHP zu Laravel Migration",
        "Blade zu Vue.js Migration",
        "Monolith zu Microservices Migration"
      ],
      seniorTechStack: "Laravel, PHP, Vue.js, JavaScript, Babylon.js, Revit API, C#, Unity, Archicad SDK, C++",
      // Software Developer position
      devPeriod: "2012 - 2015",
      devRole: "Softwareentwickler",
      devCompany: "Mediatecture Ltd.",
      devDescription: "- Entwarf und entwickelte maßgeschneiderte Softwarelösungen nach Kundenbedürfnissen.\n- Entwickelte das ISOVER Constructions Multi Comfort Designer Tool zur Unterstützung nachhaltiger Gebäudeplanung.\n- Erstellte und pflegte Datenbanken für Baumaterialien zur Optimierung datengesteuerter Workflows.\n- Entwickelte und implementierte Websites mit CMS-Plattformen wie Joomla und WordPress.",
      devAchievements: [
        "ISOVER Multi Comfort Designer Tool erstellt",
        "Baumaterialien-Datenbanken für Saint-Gobain aufgebaut und gepflegt",
        "Websites mit CMS-Plattformen entwickelt"
      ],
      devTechStack: "PHP, HTML, CSS, WordPress, Joomla, Adobe Flash, Adobe AIR"
    },
    education: {
      title: "Akademischer",
      titleHighlight: "Hintergrund",
      masterPeriod: "Master-Abschluss",
      masterDegree: "IT-Produktdesign",
      masterInstitution: "University of Southern Denmark",
      masterLocation: "Kolding, Dänemark",
      masterDescription: "Fortgeschrittenes Studium mit Schwerpunkt auf nutzerzentriertem Design, Produktstrategie und der Schnittstelle zwischen Technologie und Geschäftsanforderungen. Entwicklung von Expertise in Design Thinking, Nutzerforschung und Produktmanagement-Methoden.",
      masterHighlights: [
        "Nutzerzentrierte Design-Methoden",
        "Produktstrategie und Geschäftsanalyse",
        "Design Thinking und Innovationsprozesse"
      ],
      bachelorPeriod: "Bachelor-Abschluss",
      bachelorDegree: "Informations- und Kommunikationstechnologie",
      bachelorInstitution: "VIA University College",
      bachelorLocation: "Horsens, Dänemark",
      bachelorDescription: "Umfassende technische Grundlage mit Softwareentwicklung, Systemdesign und modernen Programmierpraktiken. Aufbau fundierter Expertise in mehreren Programmiersprachen und Entwicklungs-Frameworks.",
      bachelorHighlights: [
        "Softwareentwicklung und Architektur",
        "Systemdesign und Implementierung",
        "Programmiersprachen und Frameworks"
      ],
      advantageTitle: "Duale Perspektive als Vorteil",
      advantageDescription: "Diese einzigartige Kombination aus technischer Expertise und Design Thinking ermöglicht es mir, die Lücke zwischen komplexen technischen Lösungen und bedeutungsvollen Nutzererlebnissen zu schließen. Das macht mich zu einem effektiven Leader, der sowohl das \"Wie\" als auch das \"Warum\" der Softwareentwicklung versteht."
    },
    skills: {
      title: "Fähigkeiten &",
      titleHighlight: "Expertise",
      leadership: {
        title: "Führung & Management",
        skills: ["Vision und Strategie", "Kultur und Umfeld", "Teamführung", "Risikomanagement", "Ressourcenallokation", "Budgetierung", "Effizienz", "Kontrolle"]
      },
      backend: {
        title: "Backend-Entwicklung",
        skills: ["Laravel", "PHP", "Nest.js", "C#", ".NET", "PostgreSQL", "MySQL"]
      },
      frontend: {
        title: "Frontend-Entwicklung",
        skills: ["Livewire", "Vue.js", "React", "JavaScript", "TypeScript", "SaaS", "Unity"]
      },
      devops: {
        title: "DevOps & Architektur",
        skills: ["AWS", "Azure", "Docker", "Portainer", "CI/CD", "Lösungsarchitektur", "Anwendungsarchitektur"]
      }
    },
    projects: { // Move the full projects section here, at root level
      title: "Ausgewählte",
      titleHighlight: "Projekte",
      keyImpact: "Hauptauswirkung:",
      technologies: "Technologien:",
      bimMore: {
        title: "BIM&More – Nachhaltige BIM-Datenplattform",
        description: "Digitale Produktsuite für die AEC-Branche mit BIM-Cockpit als Kernplattform. Sie fungiert als zentrale Drehscheibe für das BIM-Datenmanagement und integriert Geometrie, Attribute, Klassifizierungen und projektspezifische Lieferungen direkt in CAD/BIM-Workflows (Revit, Archicad).\n\nIch war an der Definition der Produktvision und Architektur beteiligt und leitete funktionsübergreifende Teams. Außerdem habe ich zahlreiche PoCs und Pilotprojekte mit Kunden wie KLB, Sto und der Autobahn GmbH betreut. Ich konnte das Produkt in Investorenpräsentationen während der erfolgreichen Übernahme des Unternehmens vertreten.",
        technologies: ["Laravel", "Vue.js", "PostgresSQL", "Archicad SDK", "Revit API", "Kubernetes", "Docker", "CI/CD"],
        impact: "- Einführung bei führenden Herstellern und Infrastrukturprojekten.\n- Automatisierte BIM-Workflows → schnellere Planung, weniger Fehler und Einhaltung von Industriestandards.",
        type: "Softwarearchitektur, Produktmanagement"
      },
      vCreate: {
        title: "v.create",
        description: "Enterprise-Level SaaS-Plattform für die schnelle Konfiguration großer Büroflächen. Konzipiert als Serious Game mit Unity, optimiert v.create die Raumplanung durch die Kombination von immersiver 3D-Visualisierung mit intelligenter Automatisierung.\n\nAls Head of Engineering von Die Werkbank IT war ich von der ersten Stunde an dabei - von der Ideenfindung, Prototyping und Konzeptentwicklung bis hin zur Leitung der Implementierung und Unterstützung der Markteinführung. Ich überwachte die technische Architektur, die Integration mit BIM-Systemen und das Design der SaaS-Infrastruktur.",
        technologies: ["Laravel", "Vue.js", "Revit API", "Unity", "AWS", "Kubernetes", "Docker", "CI/CD"],
        impact: "- Reduziert Zeit und Kosten für die Konfiguration komplexer Büroumgebungen.\n- Schnellere Anpassung von Arbeitsplätzen mit weniger Ressourcen und messbaren Nachhaltigkeitsvorteilen",
        type: "Softwarearchitektur, Produktmanagement"
      }
    },
    contact: {
      title: "Lassen Sie uns",
      titleHighlight: "verbinden",
      subtitle: "Interesse an Zusammenarbeit, ein Projekt im Kopf oder einfach Lust über Technologie zu sprechen? Ich freue mich auf Ihre Nachricht.",
      phone: "Telefon",
      email: "E-Mail",
      linkedin: "LinkedIn"
    },
    footer: {
      copyright: "© 2025 Ivan Nikolov",
      linkedinLabel: "LinkedIn",
      emailLabel: "E-Mail"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};