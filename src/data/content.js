// All portfolio content lives here so it's easy to update without touching component code.
// Items marked TODO are placeholders — replace with your real info/links.

export const profile = {
  name: "Maria Fae Escobin",
  location: "Lipa City, Philippines",
  role: "Computer Science",
  tagline:
    "I build mobile apps and websites, and I'm always learning something new.",
  email: "faeescobin42@gmail.com",
  // Where the "Contact me" form delivers messages (via FormSubmit.co).
  // After the first submission, FormSubmit emails you an activation link — click it once.
  contactFormEmail: "escobinfae42@gmail.com",
  phoneDisplay: "0976 533 3824",
  whatsappLink: "https://wa.me/639765333824",
  linkedin: "https://www.linkedin.com/in/maria-fae-escobin-92a0b6373/",
  github: "https://github.com/Payiee ", // TODO: replace with your real GitHub profile URL
};

export const aboutMe = `I'm a Computer Science student at De La Salle Lipa, focused on mobile and web development. I've built cross-platform apps using React Native and Expo Go — including LipaAction and Budgy — and I'm comfortable working across the stack with JavaScript, Node.js, and REST APIs. I'm organized, detail-oriented, and a fast learner who enjoys picking up new tools and turning ideas into working products.`;

export const projects = [
  {
    name: "LipaAction",
    period: "2025 – 2026",
    description:
      "LipaAction is a thesis project: a mobile app where residents report incidents and a web console where barangay officials and city administrators review, route, and oversee those reports, with privacy and accountability built into every layer.",
    tech: ["React Native", "Expo Go"],
    mock: "report",
    screenshots: [1, 2, 3, 4, 5, 6, 7].map((n) => `/projects/lipaaction/${n}.jpg`),
    link: "#", // TODO: add live link or repo
  },
  {
    name: "Budgy (Expense Tracker)",
    period: "2025 – 2026",
    description:
      "An expense tracker mobile app that helps users monitor their daily expenses and manage their budget efficiently.",
    tech: ["React Native", "Expo Go"],
    mock: "budget",
    // App screenshots: put the files in public/projects/budgy/ and list them here,
    // e.g. "/projects/budgy/home.jpg". While this is empty, the drawn mock-up shows instead.
    screenshots: [
      "/projects/budgy/1.jpg",
      "/projects/budgy/2.jpg",
      "/projects/budgy/3.jpg",
      "/projects/budgy/4.jpg",
    ],
    link: "#", // TODO: add live link or repo
  },
];

// Grouped view of techSkills used by the Skills section.
export const skillGroups = [
  { name: "Languages", items: ["JavaScript", "Python", "C++"] },
  { name: "Mobile & web", items: ["React Native", "Expo Go", "React", "Vite", "HTML5", "CSS"] },
  { name: "Backend", items: ["Node.js", "REST API", "Node-RED"] },
  { name: "Tools & design", items: ["Git", "GitHub", "UI/UX"] },
];

export const techSkills = [
  "C++",
  "Python",
  "JavaScript",
  "React Native",
  "React",
  "Vite",
  "HTML5",
  "CSS",
  "Node.js",
  "REST API",
  "Node-RED",
  "Git",
  "GitHub",
  "UI/UX",
  "Expo Go",
];

export const softSkills = [
  "Strong Organizational Skills",
  "Attention to Details",
  "Fast Learner",
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "De La Salle Lipa",
  period: "2023 – 2027",
};

// Certificates: put the image files in public/certificates/ and set `certificate`
// to "/certificates/<file name>" (e.g. "/certificates/calabarzon.jpg").
// Leave it as null to show an empty placeholder.
export const seminars = [
  {
    title: "CaLaBarZon Young Innovators' Challenge",
    date: "April 14, 2026",
    location: "De La Salle Lipa, MB Building",
    certificate: "/certificates/CLR.jpg",
  },
  {
    title: "Innovative Research Horizons",
    date: "February 3, 2026",
    location: "De La Salle Lipa, CBEAM Function Hall",
    certificate: "/certificates/IRH.jpg",
  },
  {
    title:
      "Bridging Ethical Hacking and Data Analytics: Building Smarter and Safer Systems",
    date: "January 13, 2026",
    location: "De La Salle Lipa, Amphitheater",
    certificate: "/certificates/Hacking.jpg",
  },
];
