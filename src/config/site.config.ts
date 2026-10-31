export type StandardIcon =
  | "cooling"
  | "heating"
  | "plumbing"
  | "air-quality"
  | "electrical"
  | "maintenance";

export type ThemeStyle = "clean" | "technical" | "industrial" | "warm";

export type ThemeColors = {
  brandPrimary: string;
  brandSecondary: string;
  brandAccent: string;
  page: string;
  surfaceDark: string;
  surfaceDarkAlt: string;
  surfaceElevated: string;
  surfaceSoft: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnBrand: string;
  borderSubtle: string;
  borderStrong: string;
  glowPrimary: string;
  glowSecondary: string;
  networkLine: string;
  success: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  service5: string;
};

export type CoverageLocation = {
  name: string;
  kind: "city" | "county" | "community";
  lat?: number;
  lng?: number;
  hub?: boolean;
  note?: string;
  href?: string;
};

export type ContactSubmissionMode = "demo" | "endpoint";

export type SiteConfig = {

  brand: {
    name: string;
    shortName: string;
    logo: string;
    logoLight: string;
    region: string;
  };

  theme: {
    style: ThemeStyle;
    colors: ThemeColors;
  };

  header: {
    navServices: string;
    navAreas: string;
    navContact: string;
    helpLabel: string;
    ctaLabel: string;
    mobileEyebrow: string;
    mobileCallLabel: string;
  };

  opening: {
    enabled: boolean;
    /** Total screen time including the final one-sheet lift reveal. */
    durationMs: number;
    eyebrow: string;
    line1: string;
    line2: string;
    detail: string;
    location: string;
    skipLabel: string;
  };

  hero: {
    /** The Climate Chamber is the new signature, with photo-based legacy layouts retained. */
    layout: "service-craft" | "climate-chamber" | "open-door" | "picture-window" | "keepsake";
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    locationLabel: string;
    locationValue: string;
    edgeLabel: string;
    bottomStatement: string;
    sillLabel: string;
    serviceLabels: [string, string, string];
    discoverLabel: string;
    motion: {
      /** Turn off when capturing zero-animation QA screenshots or when desired for a prospect. */
      enabled: boolean;
      /** Balanced is more cinematic; gentle has the same choreography at a slower pace. */
      pace: "balanced" | "gentle";
      /** Very slight hovering of the inset media after the one-time entrance. */
      ambient: boolean;
      /** Small image-depth shift on scroll, disabled automatically for reduced motion. */
    };
    system?: {
      eyebrow: string;
      modes: [
        { id: "cool"; label: string; detail: string },
        { id: "warm"; label: string; detail: string },
        { id: "pure"; label: string; detail: string },
      ];
    };
    media: {
      primarySrc: string;
      primaryAlt: string;
      primaryPosition: string;
      /** For picture-window/keepsake only. Open-door always displays the entire image without cropping. */
      fit: "contain" | "cover";
      /** Backdrop for the alternate fixed-window layouts only. */
      backdrop: "matte" | "blur";
      aspectRatio?: string;
    };
  };

  seo: {
    title: string;
    description: string;
  };

  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    address: string;
    contactUrl: string;
    servicesUrl: string;
  };

  brandStandard: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    bodyTitle: string;
    body: string;
    callLabel: string;
    availabilityLabel: string;
    panelEyebrow: string;
    panelTitle: string;
    panelFooter: string;
    handoff: string;
    items: Array<{
      icon: StandardIcon;
      label: string;
      detail: string;
    }>;
  };

  services: {
    eyebrow: string;
    introLine1: string;
    introLine2: string;
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: string;
    summaryCta: string;
    items: [
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
    ];
  };

  coverage: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    featuredLocation: string;
    locationDetail: string;
    ctaLabel: string;
    networkLabel: string;
    regionLabel: string;
    metrics: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    locations: CoverageLocation[];
  };

  contactSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    submissionMode: ContactSubmissionMode;
    formEndpoint: string;
    successMessage: string;
  };
};

export type ServiceConfig = {
  name: string;
  shortName: string;
  image: string;
  description?: string;
};

export const siteConfig: SiteConfig = {

  brand: {
    name: "Gulf States Air",
    shortName: "Gulf States",
    logo: "/brand/company-logo.png",
    logoLight: "/brand/company-logo.png",
    region: "Mobile · Gulf Coast"
  },

  theme: {
    style: "clean",
    colors: {
      brandPrimary: "#1464A5",
      brandSecondary: "#E87B32",
      brandAccent: "#45A7D1",
      page: "#101B24",
      surfaceDark: "#0A141C",
      surfaceDarkAlt: "#132633",
      surfaceElevated: "#1C3542",
      surfaceSoft: "#F3F6F4",
      textPrimary: "#F8FAF9",
      textSecondary: "#DAE3E4",
      textMuted: "#93A7AA",
      textOnBrand: "#FFFFFF",
      borderSubtle: "#31454C",
      borderStrong: "#567079",
      glowPrimary: "#1464A5",
      glowSecondary: "#E87B32",
      networkLine: "#45A7D1",
      success: "#70A982",
      service1: "#1464A5",
      service2: "#45A7D1",
      service3: "#E87B32",
      service4: "#E87B32",
      service5: "#1464A5"
    }
  },

  header: {
    navServices: "Services",
    navAreas: "Service areas",
    navContact: "Contact",
    helpLabel: "Call 251-404-8454",
    ctaLabel: "Request service",
    mobileEyebrow: "LANETT · AUBURN · OPELIKA · VALLEY · WEST POINT",
    mobileCallLabel: "Call now"
  },

  opening: {
    enabled: false,
    durationMs: 1400,
    eyebrow: "MOBILE · GULF COAST",
    line1: "Gulf States",
    line2: "Local comfort.",
    detail: "Gulf States Air provides residential and light commercial heating and cooling installation, repair, and maintenance in the Mobile area. The company reports more than 30 years of experience and lists Alabama and Mississippi HVAC licenses.",
    location: "30+ years · licensed · bonded · insured",
    skipLabel: "Skip intro"
  },

  hero: {
    layout: "service-craft",
    eyebrow: "MOBILE · GULF COAST · LOCAL HVAC",
    headlineLine1: "Comfort for Mobile.",
    headlineLine2: "made local.",
    description: "Heating and air conditioning installation, repairs, and maintenance for Mobile area homes, backed by more than 30 years of experience.",
    primaryCta: "Request service",
    secondaryCta: "Call Gulf States",
    locationLabel: "MOBILE \u00b7 GULF COAST",
    locationValue: "Mobile \u00b7 Gulf Coast",
    edgeLabel: "Serving Mobile \u00b7 Gulf Coast",
    bottomStatement: "COOLING · HEATING · REPAIR",
    sillLabel: "30+ years · licensed · bonded · insured",
    serviceLabels: ["AC installation", "AC repair", "Heating systems"],
    discoverLabel: "Explore services",
    motion: {
      enabled: true,
      pace: "gentle",
      ambient: false
    },
    system: {
      eyebrow: "LOCAL COMFORT / IN MOTION",
      modes: [
        {
          id: "cool",
          label: "Cooling",
          detail: "A considered path from warm intake to balanced, conditioned air."
        },
        {
          id: "warm",
          label: "Heating",
          detail: "Steady circulation, carefully controlled for colder days."
        },
        {
          id: "pure",
          label: "Air quality",
          detail: "A focus on filtration and the air moving through every room."
        }
      ]
    },
    media: {
      primarySrc: "/hero/client-hero.jpg",
      primaryAlt: "Outdoor air conditioning unit at a Mobile home",
      primaryPosition: "center center",
      fit: "contain",
      backdrop: "matte",
      aspectRatio: "1060 / 733"
    }
  },

  seo: {
    title: "Gulf States Air | Heating & Cooling in Mobile",
    description: "Gulf States Air provides residential and light commercial heating and cooling installation, repair, and maintenance in the Mobile area. The company reports more than 30 years of experience and lists Alabama and Mississippi HVAC licenses."
  },

  contact: {
    phoneDisplay: "251-404-8454",
    phoneHref: "tel:+12514048454",
    email: "",
    address: "Mobile, AL",
    contactUrl: "#contact",
    servicesUrl: "#services"
  },

  brandStandard: {
    eyebrow: "30+ years · licensed · bonded · insured",
    titleLine1: "Comfort, handled locally.",
    titleLine2: "Heating and cooling for the Gulf Coast.",
    bodyTitle: "30+ years · licensed · bonded · insured",
    body: "Gulf States Air provides residential and light commercial heating and cooling installation, repair, and maintenance in the Mobile area. The company reports more than 30 years of experience and lists Alabama and Mississippi HVAC licenses.",
    callLabel: "Call now",
    availabilityLabel: "Mobile · Gulf Coast",
    panelEyebrow: "GULF STATES AIR",
    panelTitle: "Gulf States Air provides residential and light commercial heating and cooling installation, repair, and maintenance in the Mobile area. The company reports more than 30 years of experience and lists Alabama and Mississippi HVAC licenses.",
    panelFooter: "Mobile · Gulf Coast",
    handoff: "Explore Gulf States Air services.",
    items: [
      {
        icon: "cooling",
        label: "Air conditioning",
        detail: "Air conditioning repair, replacement, and system installation."
      },
      {
        icon: "heating",
        label: "Heating systems",
        detail: "Heating equipment service and new system installation."
      },
      {
        icon: "maintenance",
        label: "Preventive maintenance",
        detail: "Seasonal tune-ups and service agreements to help keep systems working efficiently."
      }
    ]
  },

  services: {
    eyebrow: "GULF STATES AIR · SERVICES",
    introLine1: "All season",
    introLine2: "comfort care.",
    summaryEyebrow: "MOBILE · GULF COAST",
    summaryTitle: "Gulf States Air provides residential and light commercial heating and cooling installation, repair, and maintenance in the Mobile area. The company reports more than 30 years of experience and lists Alabama and Mississippi HVAC licenses.",
    summaryBody: "Gulf States Air provides residential and light commercial heating and cooling installation, repair, and maintenance in the Mobile area. The company reports more than 30 years of experience and lists Alabama and Mississippi HVAC licenses.",
    summaryCta: "Talk to the team",
    items: [
      {
        name: "AC installation",
        shortName: "AC installation",
        image: "/services/01.svg",
        description: "New cooling systems planned for Mobile homes and light commercial properties."
      },
      {
        name: "AC repair",
        shortName: "AC repair",
        image: "/services/02.svg",
        description: "Diagnosis and repair for air conditioning problems."
      },
      {
        name: "Heating systems",
        shortName: "Heating systems",
        image: "/services/03.svg",
        description: "Heating service and equipment installation for cooler days."
      },
      {
        name: "System maintenance",
        shortName: "System maintenance",
        image: "/services/04.svg",
        description: "Routine HVAC maintenance to keep systems working well."
      },
      {
        name: "Light commercial HVAC",
        shortName: "Light commercial H",
        image: "/services/05.svg",
        description: "HVAC installation, repair, and maintenance for light commercial spaces."
      }
    ]
  },

  coverage: {
    eyebrow: "LOCAL SERVICE AREA",
    titleLine1: "Comfort close",
    titleLine2: "to home.",
    description: "Mobile · Gulf Coast.",
    featuredLocation: "Mobile, AL",
    locationDetail: "Serving Mobile · Gulf Coast.",
    ctaLabel: "Contact the team",
    networkLabel: "LOCAL SERVICE NETWORK",
    regionLabel: "Mobile · Gulf Coast",
    metrics: [
      {
        value: "4 communities",
        label: "Coverage shown"
      },
      {
        value: "30+ years · licensed · bonded · insured",
        label: "Service commitment"
      },
      {
        value: "Local team",
        label: "Mobile · Gulf Coast"
      }
    ],
    locations: [
      { name: "Mobile, AL", kind: "city", lat: 30.6954, lng: -88.0399, hub: true },
      { name: "Daphne, AL", kind: "city", lat: 30.6035, lng: -87.9036, hub: false },
      { name: "Fairhope, AL", kind: "city", lat: 30.5229, lng: -87.9033, hub: false },
      { name: "Saraland, AL", kind: "city", lat: 30.8207, lng: -88.0706, hub: false }
    ]
  },

  contactSection: {
    eyebrow: "LET’S TALK COMFORT",
    titleLine1: "Tell us what",
    titleLine2: "you need.",
    body: "Contact Gulf States Air about heating, cooling, or service for your home or business.",
    primaryCta: "Request service",
    secondaryCta: "Call Gulf States Air",
    submissionMode: "demo",
    formEndpoint: "",
    successMessage: "Thanks for reaching out. This concept form is a preview and is not connected yet; call 251-404-8454 to contact Gulf States Air."
  }
};
