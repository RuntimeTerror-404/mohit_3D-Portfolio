import {
  mobile,
  fullstack,
  webcloud,
  citizensbank,
  bdilogo,
  frt,
  backend,
  s3,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  flask,
  python,
  jira,
  api,
  project1,
  project2,
  project3,
  project4,
  project5,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development (React.js)",
    icon: web,
  },
  {
    title: "Backend frameworks and services (Flask)",
    icon: backend,
  },
  {
    title: "Full-Stack development",
    icon: fullstack,
  },
  {
    title: "Web-based cloud engineering (Amazon S3, Docker)",
    icon: webcloud,
  }
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "RESTful APIs",
    icon: api,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Amazon S3",
    icon: s3,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Jira Software",
    icon: jira,
  }
];

const experiences = [
  {
    title: "Full-Stack Engineer",
    company_name: "BDIPlus Inc.",
    icon: bdilogo,
    iconBg: "white",
    date: "May 2022 -  Present",
    points: [
      "Played a pivotal role as a full-stack developer in the development of Afficiency Loans Provider, an end-to-end registration platform for loan applicants.",
      "Leveraged Flask for backend development and React.js for frontend development to create a dynamic and user-friendly interface across 10+ screens, with a focus on payment and confirmation screens crucial for user experience.",
      "Prioritized the development of user-friendly interfaces and streamlined workflows, particularly in payment and confirmation screens, to optimize the overall user experience and increase customer satisfaction.",
      "Collaborated closely with stakeholders to understand their business needs and translate them into tailored technical solutions, enhancing the platform's usability and effectiveness in the insurance sales process.",
    ],
  },
  {
    title: "Software Engineer Consultant",
    company_name: "Citizens bank : Client",
    icon: citizensbank,
    iconBg: "white",
    date: "May 2023 - June 2024",
    points: [
      "Developing and maintaining loan-review application using React.js and other related technologies.",
      "Spearheaded frontend development efforts for the R3P (Repurchase Review Resolution) project, an integral part of an internal application dedicated to loans analysis and management.",
      "Collaborated closely with cross-functional teams including managers, analysts, tech admins, and senior analysts to understand requirements and translate them into user-friendly frontend solutions.",
      "Implemented intuitive features within the application to streamline loan analysis, assignment, review request creation, and defect management processes, ultimately improving overall efficiency and productivity."
    ],
  },
  {
    title: "Open-Source Contributor",
    company_name: "Microsoft Future Ready Talent Internship Program",
    icon: frt,
    iconBg: "white",
    date: "December 2022 - March 2022",
    points: [
      "Collaborating with cross-functional teams and engage with top executives of Microsoft and AICTE",
      "Developed core competency in cloud services and built end-to-end project on microsoft-azure ",
      "Participating in code reviews and providing constructive feedback to other learners.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const githubLink = "https://github.com/RuntimeTerror-404/crypto-verse";

const projects = [
  {
    name: "Afficiency Whole Life",
    description:
      "Web-based platform that allows users to buy term-life policies digitally, it provides end-to-end process to book a policy and all kind of verifications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://www.afficiency.com/whole-life",
  },
  {
    name: "Repruchase Review Resolution",
    description:
      "A bespoke digital platform designed to facilitate loan management for Managers, Analysts, and Senior Analysts handling accounts from over 50 agencies nationwide. This internal application is specifically tailored for use within Citizens Bank.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "aws(s3, glue)",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://www.citizensbank.com/loans/home-mortgage.aspx",
  },
  {
    name: "Amazon Clone",
    githubLink : "https://github.com/RuntimeTerror-404/Amazonn-2.0",
    description:
      "Developed a fully functional clone of AMAZON using REACT and FIREBASE. SIGN UP, SIGN IN, ADD TO CART, andonline STRIPE payment methods are some main features of this app.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "green-text-gradient",
      },
      {
        name: "stripe api",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://amazonn-2-0.vercel.app/",
  },
  {
    name: "MOVIES PLUSS",
    githubLink : "https://github.com/RuntimeTerror-404/cinema-plus",
    description:
      "A web app that provides quick information about movies and tv shows. You'll find live hosted version of it on my github repository.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html-css",
        color: "green-text-gradient",
      },
      {
        name: "APIs",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://cinema-pluss.netlify.app/",
  },
  {
    name: "Crypto Verse",
    githubLink : "https://github.com/RuntimeTerror-404/crypto-verse",
    description:
      `Digital portal that provides information about cryptocurrencies and their related markets. visit my github repository for more information about this project`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html-css",
        color: "green-text-gradient",
      },
      {
        name: "APIs",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://crypto-verse-psi.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
