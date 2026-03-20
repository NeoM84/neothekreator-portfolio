export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  thumbnail: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "tatso-tsa-afrika",
    title: "TATSO TSA AFRIKA",
    category: "Brand Identity",
    year: "2022",
    description: "Tatso Tsa Africa is a street food brand based in Kimberley, South Africa. The goal of this project was to create a bold and recognisable brand identity that reflects African flavour while standing out in busy street environments where visibility and quick recognition are essential..",
    thumbnail: "/Tatso Logo With Background.png",
    images: [
      "/Tatso Logo With Background.png",
      "/Tatso Main Logo.png",
      "/Tatso Kota Picture.png",
      "/Tatso Packaging and App.png",
      "/Tatso Bag MockUp.png"
    ]
  },
  {
    id: "2",
    slug: "bait-by-jubilee",
    title: "Bait By Jubilee",
    category: "Brand Identity",
    year: "2020",
    description: "Bait By Jubilee is a fashion brand positioned in the high-fashion and lifestyle space, based in Kimberley and Johannesburg. The objective of this project was to create a visual identity that feels premium, stylish, and contemporary while remaining versatile across digital and physical brand touchpoints.",
    thumbnail: "/Bait Logo With Background.png",
    images: [
      "/Bait Logo With Background.png",
      "/Bait Main Logo.png",
      "/Bait Branding MockUp.png",
      "/Bait Display Ads.png",
      "/Bait Website UI.png"
    ]
  },
  {
    id: "3",
    slug: "shawn-woodman",
    title: "SHAWN WOODMAN",
    category: "Brand Identity",
    year: "2019",
    description: "Shawn Woodman's Carpentry is a craft-focused carpentry business based in Kimberley, South Africa. The aim of this project was to create a visual identity that reflects craftsmanship, reliability, and quality while appealing to both residential and commercial clients.",
    thumbnail: "/Shawn Woodmans Logo With Background.png",
    images: [
      "/Shawn Woodmans Logo With Background.png",
      "/Shawn Woodman Main Logo.png",
      "/Shawn Woodman Car Branding.png",
      "/Shawn Woodman Business Card.png",
      "/Shawn Woodman Insta Posts.png"
    ]
  },
  {
    id: "4",
    slug: "kuishi-creatives",
    title: "Kuishi Creatives",
    category: "Web Design",
    year: "2023",
    description: "Kuishi Creatives required a modern and professional website design to present its creative services online. The project focused on creating a clean and responsive website that highlights the studio's work while maintaining strong usability and visual clarity..",
    thumbnail: "/Kuishi Mid-Fi Landing Page.png",
    images: [
      "/Kuishi Mid-Fi Landing Page.png",
    ]
  },
  {
    id: "5",
    slug: "mongale-wedding-wedsite",
    title: "Mongale Wedding",
    category: "Web Design",
    year: "2024",
    description: "The Mongale Wedding Website was designed as a modern digital invitation platform for guests. The project focused on creating a simple, elegant website where guests could easily access event details, location information, and RSVP functionality.",
    thumbnail: "/Mongale Wedding Website.png",
    images: [
      "/Mongale Wedding Website.png",
    ]
  },
  {
    id: "6",
    slug: "nkp-flyer-projects",
    title: "NKP Flyer Projects",
    category: "Graphic Design",
    year: "2024",
    description: "A set of marketing flyers designed to promote NKP Energy's renewable energy solutions. The layouts focus on clear communication, structured information, and strong brand consistency across print and digital materials.",
    thumbnail: "/NKP Flyer Projects.png",
    images: [
      "/NKP Flyer Projects.png",
    ]
  }
];

export interface OtherWork {
  id: string;
  title: string;
  category: string;
  githubUrl: string;
  image: string;
}

export const otherWorks: OtherWork[] = [
  {
    id: "ow1",
    title: "GLSL SHADER LAB",
    category: "Creative Coding",
    githubUrl: "https://github.com/neothekreator/shader-lab",
    image: "https://picsum.photos/seed/shader/800/600"
  },
  {
    id: "ow2",
    title: "REACT MOTION UI",
    category: "Library / Tools",
    githubUrl: "https://github.com/neothekreator/react-motion-ui",
    image: "https://picsum.photos/seed/motion/800/600"
  },
  {
    id: "ow3",
    title: "BRUTALIST CMS",
    category: "Fullstack / App",
    githubUrl: "https://github.com/neothekreator/brutalist-cms",
    image: "https://picsum.photos/seed/cms/800/600"
  },
  {
    id: "ow4",
    title: "AI ART GENERATOR",
    category: "Machine Learning",
    githubUrl: "https://github.com/neothekreator/ai-art",
    image: "https://picsum.photos/seed/ai/800/600"
  }
];