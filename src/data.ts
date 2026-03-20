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
    thumbnail: "/Tatso Tsa Afrika Cover Pic(34).png",
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
    thumbnail: "/Bait Cover Pic(34).png",
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
    thumbnail: "/Shawn Woodman Cover Pic(34).png",
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
    thumbnail: "/Kuishi Cover Pic(34).png",
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
    thumbnail: "/Mongale Wedding Cover Pic(34).png",
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
    thumbnail: "/NKP Cover Pic(34).png",
    images: [
     "/NKP Flyer Projects.png",
    ]
  }
];

export interface DevWork {
  id: string;
  title: string;
  category: string;
  githubUrl: string;
  image: string;
}

export const DevWorks: DevWork[] = [
  {
    id: "ThaboMongale",
    title: "Thabo Mongale Portfolio",
    category: "Portfolio Coding",
    githubUrl: "https://github.com/NeoM84/thabomongale-portfolio",
    image: "/Thabo Mongale Portfolio.png"
  },
  {
    id: "csscatpainting",
    title: "CSS Cat Painting",
    category: "CSS Learning",
    githubUrl: "https://github.com/NeoM84/cat-css-painting",
    image: "/CSS Cat Painting.png"
  },
  {
    id: "caloriecounter",
    title: "Calorie Counter",
    category: "Java Learning",
    githubUrl: "https://github.com/NeoM84/freecodecampCalorieCounter",
    image: "/Calorie Counter.png"
  },
  {
    id: "jobtracker",
    title: "Job Tracker App",
    category: "Full Stack App",
    githubUrl: "https://github.com/NeoM84/jobtracker",
    image: "/Job Tracker App.png"
  },
  {
    id: "rentalrate",
    title: "Rental Rate Vibe Coding",
    category: "Ai Vibe Coding",
    githubUrl: "https://github.com/NeoM84/Vibe-Project-Rental-Rate",
    image: "/Rental Rate Vibe Coding.png"
  }
];