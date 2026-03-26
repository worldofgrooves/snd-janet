export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  industryTag: string;
  year: string;
  services: string[];
  tagline: string;
  thumbnailImage?: string;
  heroImage?: string;
  galleryImages?: string[];
  // Art of Transformation framework
  vision: string;
  canvas: string;
  approach: string;
  work: string;
  details: string;
  impact: string;
  credits: { role: string; name: string }[];
  type: "case-study";
}

export interface GalleryProject {
  slug: string;
  title: string;
  industry: string;
  industryTag: string;
  description: string;
  thumbnailImage?: string;
  type: "gallery";
}

export type Project = CaseStudy | GalleryProject;

export const industries = [
  "All",
  "Hospitality",
  "Entertainment",
  "Confection",
  "Cannabis",
  "Food & Beverage",
] as const;

export type Industry = (typeof industries)[number];

export const caseStudies: CaseStudy[] = [
  {
    slug: "matices",
    title: "Matices",
    client: "Matices Restaurant Group",
    industry: "Hospitality",
    industryTag: "Hospitality \u2022 Restaurant \u2022 Truckee, CA",
    year: "2025",
    services: ["Brand Identity", "Environmental Graphics", "Signage"],
    tagline: "Where Mexican culinary tradition meets mountain-town sophistication.",
    thumbnailImage: "/images/project-matices-thumb.webp",
    vision:
      "Ami\u00e9 Fitzhugh envisioned Matices as more than a restaurant. She wanted to create a cultural experience that honored the depth and nuance of contemporary Mexican cuisine in a mountain town better known for ski lodges than mole. The name itself -- Matices, meaning shades or nuances -- demanded a brand that could hold that complexity with elegance.",
    canvas:
      "Truckee's Historic Preservation District presented unique constraints: strict signage regulations, a built environment dominated by rustic Western aesthetics, and a competitive dining scene that defaulted to casual mountain charm. Matices needed to stand apart without standing out for the wrong reasons. The brand had to feel rooted in its cultural heritage while being accessible to a mountain-town audience encountering this cuisine for the first time.",
    approach:
      "We began with the concept of 'Flora & Flow' -- a creative territory inspired by the organic geometry found in traditional Mexican folk art, reinterpreted through a contemporary lens. The rosa symbol became the anchor mark: a stylized rose motif referencing the layered petals of Mexican textile traditions while functioning as a modern brand icon. Typography was carefully selected to balance cultural warmth with editorial sophistication. The color system drew from earth tones and natural pigments, avoiding the red-and-green clich\u00e9s that plague Mexican restaurant branding.",
    work:
      "Full brand identity system including primary logotype, icon mark, brand pattern library, color system, typography hierarchy, and brand guidelines. Environmental signage designed for compliance with Town of Truckee Community Development standards. Menu system, business cards, and digital templates extending the identity across all touchpoints.",
    details:
      "The exterior signage required particular craft attention. Working within the Historic Preservation District's requirements -- no illumination, natural material finishes, strict dimensional limits -- we designed a system that repositions existing sign panels with new inserts and a refinished steel frame. Material selection prioritized durability against Truckee's harsh mountain weather while maintaining the warmth of the brand's visual language.",
    impact:
      "Matices opened to immediate community enthusiasm and strong reservations. The brand identity has become a reference point for elevated dining in the Truckee-Tahoe corridor, demonstrating that cultural authenticity and premium positioning are not mutually exclusive.",
    credits: [
      { role: "Creative Direction", name: "Denver Miller" },
      { role: "Brand Strategy", name: "Denver Miller" },
      { role: "Signage Design", name: "Denver Miller" },
    ],
    type: "case-study",
  },
  {
    slug: "sunseeker-resort",
    title: "Sunseeker Resort",
    client: "Sunseeker Resort",
    industry: "Hospitality",
    industryTag: "Luxury Hospitality \u2022 Resort \u2022 Brand Identity",
    year: "2024",
    services: ["Brand Identity", "Design Systems", "Collateral"],
    tagline: "A luxury escape designed to feel as curated as it is coastal.",
    vision:
      "Sunseeker Resort sought to establish a brand identity that encapsulated its aspirational coastal lifestyle, sophisticated amenities, and commitment to unparalleled guest experiences. Their goal was to create a visual and emotional connection with a discerning clientele, positioning the resort as a premier escape where elegance meets tranquility.",
    canvas:
      "The luxury resort market is saturated with predictable visual conventions: soft blues, serif typefaces, and generic palm tree motifs. Sunseeker needed to transcend these category defaults and establish a visual language as distinctive as its property. The challenge was creating a brand system that would feel premium across dozens of touchpoints -- from arrival signage to in-room amenities to digital booking experiences.",
    approach:
      "We developed a brand identity rooted in the concept of 'curated serenity' -- the idea that every element of the guest experience should feel intentionally composed, like a well-edited collection rather than a generic catalog. The logo system uses refined geometric forms that reference the horizon line and coastal architecture. A flexible brand pattern system allows each touchpoint to feel cohesive while maintaining visual interest across applications.",
    work:
      "Complete brand identity system including primary logotype, secondary marks, full color palette, typography system, pattern library, brand guidelines, and application templates for property collateral. The system was designed to scale across current and future properties while maintaining a consistent luxury standard.",
    details:
      "The identity system includes over a dozen application mockups demonstrating real-world use: key cards, property signage, digital interfaces, stationery, and amenity branding. Each application was designed to show how the brand system maintains integrity at every scale, from a 2-inch key card to a 20-foot arrival sign.",
    impact:
      "The brand identity established Sunseeker as a visually distinctive presence in the luxury resort category. The scalable system provided the property team with a comprehensive toolkit for maintaining brand consistency across all guest touchpoints, reducing the need for ad-hoc design decisions and ensuring a cohesive premium experience.",
    credits: [
      { role: "Creative Direction", name: "Denver Miller" },
      { role: "Brand Identity", name: "Denver Miller" },
    ],
    type: "case-study",
  },
  {
    slug: "ocean-resort",
    title: "Ocean Resort",
    client: "Ocean Resort",
    industry: "Hospitality",
    industryTag: "Hospitality \u2022 Casino Resort \u2022 Collateral System",
    year: "2024",
    services: ["Creative Direction", "Design Systems", "Packaging"],
    tagline: "Designing the details guests feel but can't name.",
    vision:
      "Ocean Resort had an established brand, but its on-property experience lacked the cohesive visual detail that distinguishes a truly premium resort from a merely adequate one. The goal was to develop a texture and pattern system that would extend the existing brand into every guest touchpoint -- from the key card in their hand to the laundry bag in their closet.",
    canvas:
      "Casino resorts face a unique branding challenge: the property itself is the product. Every physical touchpoint either reinforces or undermines the brand promise. Ocean Resort's existing collateral was functional but generic -- it didn't tell a story, and it didn't create the kind of subtle, layered experience that makes a stay memorable.",
    approach:
      "Rather than simply applying the existing logo to more surfaces, we developed a proprietary pattern and texture system that expanded the brand's visual vocabulary. These patterns draw from oceanic geometry -- wave forms, tidal rhythms, coastal topography -- abstracted into sophisticated repeating motifs that work at any scale. The system was designed to feel luxurious without being ostentatious, adding richness to every touchpoint without competing with the property's architecture.",
    work:
      "Custom pattern library, texture system, and application guidelines. Collateral designs for hotel room key cards, laundry bags, water bottles, room service menus, in-room directories, and amenity packaging. Each piece was designed as part of a cohesive family rather than a standalone item.",
    details:
      "The pattern system was developed with production realities in mind: every design was tested against actual substrate limitations, print processes, and material costs. The patterns scale from embossed foil on a key card to screen-printed fabric on a laundry bag without losing their integrity. This is where design craft meets operational pragmatism.",
    impact:
      "The collateral system transformed the guest experience from functional to immersive, creating a consistent brand narrative that guests encounter from check-in to checkout. The pattern library provided the property's internal team with a flexible toolkit for future applications without requiring external design support for every new touchpoint.",
    credits: [
      { role: "Creative Direction", name: "Denver Miller" },
      { role: "Pattern Design", name: "Denver Miller" },
    ],
    type: "case-study",
  },
  {
    slug: "paradise-candy",
    title: "Paradise Candy",
    client: "Paradise Candy",
    industry: "Confection",
    industryTag: "Confection \u2022 Brand Development",
    year: "2024",
    services: ["Brand Identity", "Packaging Design"],
    tagline: "Where confection becomes craft and every detail is a treat.",
    vision:
      "Paradise Candy wanted to be more than another confection brand on a crowded shelf. They envisioned a brand that would make people feel something before they even tasted the product -- a sense of delight, quality, and playful sophistication that elevated the entire candy-buying experience.",
    canvas:
      "The confection market defaults to two extremes: mass-market bright colors and cartoon mascots, or ultra-minimalist premium packaging that strips away all the fun. Paradise Candy needed to find the sweet spot -- a brand identity that felt premium enough for gift shops and boutiques while retaining the joy and playfulness inherent in candy.",
    approach:
      "We developed a brand identity built around the idea of 'crafted indulgence' -- where every visual element signals that these aren't just candies, they're small moments of craftsmanship. The color palette balances warm, inviting tones with unexpected pops that catch the eye on shelf. Typography pairs a confident display face with clean, modern type for a personality that's sophisticated but never stuffy.",
    work:
      "Complete brand identity system including primary logotype, color palette, typography hierarchy, packaging system, and brand guidelines. The packaging was designed to work across multiple product lines while maintaining cohesive shelf presence.",
    details:
      "Packaging structure was considered from the start -- die-line engineering, material specifications, and production files were delivered alongside the creative. The system accounts for various product formats while maintaining consistent brand expression at every size.",
    impact:
      "The rebrand positioned Paradise Candy as a premium player in the artisanal confection space, opening doors to boutique retail environments and gift market channels that weren't accessible with the previous identity.",
    credits: [
      { role: "Creative Direction", name: "Denver Miller" },
      { role: "Brand Identity", name: "Denver Miller" },
    ],
    type: "case-study",
  },
  {
    slug: "full-house-resort",
    title: "Full House Resort",
    client: "Full House Resort",
    industry: "Hospitality",
    industryTag: "Hospitality \u2022 Resort \u2022 Brand Identity",
    year: "2023",
    services: ["Brand Identity"],
    tagline: "A resort brand built to match the scale of its ambition.",
    vision:
      "Full House Resort needed a brand identity that could carry the weight of a multi-amenity resort property -- one that communicated sophistication and excitement in equal measure, appealing to both leisure travelers and gaming enthusiasts seeking a premium experience.",
    canvas:
      "Resort properties that combine hospitality with entertainment face a perpetual tension: how to signal fun without sacrificing premium perception. Most default to generic luxury tropes or lean too heavily into gaming aesthetics. Full House needed a brand that could bridge both worlds authentically.",
    approach:
      "We developed an identity rooted in confident, bold geometry -- a visual language that feels at home on both a poolside cabana and a high-stakes gaming floor. The mark draws from architectural forms found in the property itself, creating an immediate visual connection between the brand and the physical experience. The color system balances rich, warm tones with clean neutrals to maintain versatility across environments.",
    work:
      "Brand identity system including primary logotype, secondary marks, color palette, typography hierarchy, and brand guidelines. The system was designed to flex across the resort's diverse touchpoints while maintaining a unified premium standard.",
    details:
      "The logo system was developed to perform at every scale -- from embroidered uniforms to building signage. Mark variations ensure clear reproduction across substrates and production methods, from embossed foil to digital screens.",
    impact:
      "The new identity unified Full House Resort's diverse offerings under a single, coherent brand story, strengthening guest recognition and providing the property team with a scalable system for ongoing brand expression.",
    credits: [
      { role: "Creative Direction", name: "Denver Miller" },
      { role: "Brand Identity", name: "Denver Miller" },
    ],
    type: "case-study",
  },
];

export const galleryProjects: GalleryProject[] = [
  {
    slug: "cbd-nationwide",
    title: "CBD Nationwide",
    industry: "Cannabis",
    industryTag: "Cannabis \u2022 Logo Design",
    description: "Brand identity for a national CBD product line focused on quality and accessibility.",
    type: "gallery",
  },
  {
    slug: "kingchain",
    title: "KINGCHAIN",
    industry: "Entertainment",
    industryTag: "Entertainment \u2022 Artist Identity",
    description: "Bold identity system for a DJ and producer brand in the electronic music space.",
    type: "gallery",
  },
  {
    slug: "top-secret-recipes",
    title: "Top Secret Recipes",
    industry: "Food & Beverage",
    industryTag: "Food & Beverage \u2022 Package Design",
    description: "Packaging system for a specialty food brand with a playful, secretive personality.",
    type: "gallery",
  },
  {
    slug: "sugar-and-salt",
    title: "Sugar & Salt",
    industry: "Food & Beverage",
    industryTag: "Food & Beverage \u2022 Logo Design",
    description: "Brand mark for a confection and snack company balancing sweet and savory product lines.",
    type: "gallery",
  },
  {
    slug: "zhen-bang-noodle",
    title: "Zhen Bang Noodle",
    industry: "Food & Beverage",
    industryTag: "Restaurant \u2022 Logo Design",
    description: "Identity for a noodle restaurant celebrating authentic Chinese culinary tradition.",
    type: "gallery",
  },
  {
    slug: "ring-master",
    title: "Ring Master",
    industry: "Entertainment",
    industryTag: "Entertainment \u2022 Game Design",
    description: "Visual identity and game design for an immersive tabletop gaming experience.",
    type: "gallery",
  },
];

export const allProjects: Project[] = [...caseStudies, ...galleryProjects];
