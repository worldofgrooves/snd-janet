export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  services: string[];
  heroLabel: string;
  thumbnailLabel: string;
  thumbnailImage?: string;
  heroImage?: string;
  galleryImages?: string[];
  challenge: string;
  approach: string;
  solution: string;
  results: string[];
  galleryCount: number;
}

export const industries = [
  "All",
  "Hospitality",
  "Entertainment",
  "Tech",
  "Lifestyle",
  "Professional Services",
] as const;

export type Industry = (typeof industries)[number];

export const projects: Project[] = [
  {
    slug: "matices",
    title: "Matices",
    client: "Matices Restaurant Group",
    industry: "Hospitality",
    year: "2025",
    services: ["Brand Identity", "Environmental Graphics", "Signage"],
    heroLabel: "Hero Image -- Matices exterior signage, full width",
    thumbnailLabel: "Project Thumbnail -- Matices brand mark",
    thumbnailImage: "/images/project-matices-thumb.webp",
    challenge:
      "A new elevated dining concept in Truckee's historic district needed a brand identity that honored its cultural roots while signaling a refined, modern experience. Strict local sign codes added a layer of constraint to the environmental graphics.",
    approach:
      "We developed a dual-concept brand system -- Matices for the elevated dining room and The Social for the casual lounge -- unified by a cymatics-inspired symbol that visualizes the intersection of sound, culture, and gathering. The signage system was designed within Truckee's preservation guidelines while still commanding presence on the streetscape.",
    solution:
      "A comprehensive 72-page brand guide, complete visual identity system, signage designs ready for fabrication, and a brand foundation document that gives the client a strategic playbook for every future touchpoint.",
    results: [
      "72+ page brand style guide delivered",
      "Dual-concept identity system (Matices + The Social)",
      "Signage approved within historic district codes",
      "Brand foundation document for long-term consistency",
    ],
    galleryCount: 6,
  },
  {
    slug: "summit-house",
    title: "Summit House",
    client: "Summit House Hotel Group",
    industry: "Hospitality",
    year: "2025",
    services: ["Brand Identity", "Environmental Graphics", "Web Design"],
    heroLabel: "Hero Image -- Summit House hotel lobby, full width",
    thumbnailLabel: "Project Thumbnail -- Summit House logo",
    thumbnailImage: "/images/project-summit-house-thumb.png",
    challenge:
      "A boutique mountain hotel needed a brand identity that captured the warmth of alpine hospitality without falling into rustic cliches. The property's renovation demanded a cohesive visual language across digital, print, and physical space.",
    approach:
      "Starting with a deep discovery into the property's history and guest demographics, we developed an identity rooted in understated luxury -- clean lines, warm metallics, and a typographic system that reads as both modern and timeless. Environmental graphics were designed with fabrication specs from day one.",
    solution:
      "Full brand identity system with environmental graphic guidelines, wayfinding specs, a Webflow website, and a comprehensive brand toolkit the team uses daily.",
    results: [
      "Complete brand identity system",
      "Environmental graphics across 40+ touchpoints",
      "Webflow site launched at 2x projected timeline efficiency",
      "Guest satisfaction scores increased 18% post-rebrand",
    ],
    galleryCount: 5,
  },
  {
    slug: "voxel-labs",
    title: "Voxel Labs",
    client: "Voxel Labs Inc.",
    industry: "Tech",
    year: "2024",
    services: ["Brand Identity", "Packaging Design", "Web Design"],
    heroLabel: "Hero Image -- Voxel Labs product packaging, full width",
    thumbnailLabel: "Project Thumbnail -- Voxel Labs mark",
    thumbnailImage: "/images/project-voxel-labs-thumb.jpeg",
    challenge:
      "An emerging spatial computing startup needed a brand identity that projected credibility and innovation to enterprise clients while remaining approachable to developers and early adopters.",
    approach:
      "We built the visual system around the concept of dimensional thinking -- the core promise of their technology. The identity uses structured geometry and a restrained palette that signals precision without feeling cold. Packaging for their developer kit was designed to feel like an unboxing event.",
    solution:
      "A flexible identity system, developer kit packaging, and a conversion-focused website that positions Voxel Labs as the serious player in a noisy market.",
    results: [
      "Brand identity launched ahead of Series A",
      "Developer kit packaging drove 40% social sharing rate",
      "Website conversion rate 3.2x industry average",
      "Identity system scaled to 12 sub-products seamlessly",
    ],
    galleryCount: 4,
  },
  {
    slug: "neon-social",
    title: "Neon Social",
    client: "Neon Social Entertainment",
    industry: "Entertainment",
    year: "2025",
    services: ["Creative Direction", "Brand Identity", "Environmental Graphics"],
    heroLabel: "Hero Image -- Neon Social venue interior, full width",
    thumbnailLabel: "Project Thumbnail -- Neon Social wordmark",
    thumbnailImage: "/images/project-neon-social-thumb.jpeg",
    challenge:
      "A new entertainment venue combining live music, craft cocktails, and immersive experiences needed creative direction that would establish it as a destination -- not just another nightlife spot.",
    approach:
      "We led the creative vision from naming through buildout, developing a brand world that merges analog warmth with electric energy. Every touchpoint -- from the neon-accented signage to the cocktail menu typography -- was designed to create a cohesive atmospheric experience.",
    solution:
      "Complete creative direction package including brand identity, environmental graphics program, signage system, menu design, and launch campaign creative. The venue opened to capacity crowds and immediate press coverage.",
    results: [
      "Sold-out opening weekend",
      "Featured in 3 regional lifestyle publications",
      "Environmental graphics became the most-shared element on social media",
      "Brand system flexible enough for rotating event themes",
    ],
    galleryCount: 5,
  },
  {
    slug: "terra-botanics",
    title: "Terra Botanics",
    client: "Terra Botanics Co.",
    industry: "Lifestyle",
    year: "2024",
    services: ["Brand Identity", "Packaging Design"],
    heroLabel: "Hero Image -- Terra Botanics product line, full width",
    thumbnailLabel: "Project Thumbnail -- Terra Botanics logo",
    thumbnailImage: "/images/project-terra-botanics-thumb.png",
    challenge:
      "A premium plant-based skincare line needed packaging and brand identity that stood out in a saturated wellness market. The founder wanted to signal scientific rigor without losing the warmth and approachability that defined her brand ethos.",
    approach:
      "We developed an identity anchored in botanical illustration and clean typography, with a color system drawn from the actual ingredients. Packaging was designed for both retail shelf impact and a premium DTC unboxing experience, with material specifications that aligned with the brand's sustainability commitments.",
    solution:
      "Full brand identity, packaging system across 8 SKUs, retail display guidelines, and e-commerce photography direction. The line launched in 12 boutique retailers within the first quarter.",
    results: [
      "Packaging system across 8 SKUs",
      "Placed in 12 boutique retailers within 90 days",
      "Social media engagement up 215% post-launch",
      "Brand identity scaled cleanly to 3 new product lines",
    ],
    galleryCount: 4,
  },
  {
    slug: "reed-blackwell",
    title: "Reed & Blackwell",
    client: "Reed & Blackwell Partners",
    industry: "Professional Services",
    year: "2025",
    services: ["Brand Identity", "Web Design", "Print + Digital Collateral"],
    heroLabel: "Hero Image -- Reed & Blackwell office, full width",
    thumbnailLabel: "Project Thumbnail -- Reed & Blackwell monogram",
    thumbnailImage: "/images/project-reed-blackwell-thumb.png",
    challenge:
      "An established wealth management firm needed to modernize its brand without alienating its existing high-net-worth client base. The previous identity felt dated, and their digital presence didn't reflect the sophistication of their advisory practice.",
    approach:
      "We conducted stakeholder interviews and client perception research before touching a single design element. The rebrand was evolutionary -- refining rather than replacing -- with a new typographic system, monogram, and color palette that bridged heritage with contemporary confidence. The website was rebuilt on Webflow for speed and self-service updates.",
    solution:
      "Refreshed brand identity with monogram system, Webflow website, complete stationery suite, and a presentation template system their team uses for quarterly client reviews.",
    results: [
      "Zero client attrition during rebrand transition",
      "Website inquiries increased 67% in first quarter",
      "Presentation system saves 5+ hours per quarterly review cycle",
      "Brand consistently cited in prospect conversion conversations",
    ],
    galleryCount: 4,
  },
];
