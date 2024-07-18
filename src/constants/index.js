import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  /*  express, */
  tailwind,
  nodejs,
  mongodb,
  redux,
  git,
  figma,
  docker,
  /* sql, */
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  /* threejs, */
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphics Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
  /*  {
    name: "expressJS",
    icon: express,
  }, */
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  /* {
    name: "Three JS",
    icon: threejs,
  }, */
  {
    name: "git",
    icon: git,
  },
  /* {
    name: "figma",
    icon: figma,
  }, */
  /* {
    name: "MySQL",
    icon: sql,
  }, */
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "DirectEd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ReactJs Developer",
    company_name: "Fideys",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2024 - July 2024",
    points: [
      "Engaging in tech talks and best coding practices",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Starlets",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Litecode Hub",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with the blog app was very refreshing. I found it very user-friendly because of the ease of maneuvering around. ",
    name: "Patrick Muraya",
    designation: "Blogger",
    company: "Thigamura Blogs",
    image: redux,
  },
  {
    testimonial:
      "Working with Solace was a game-changer. His innovative solutions and commitment to our project's success were unparalleled.",
    name: "Sarah Adali",
    designation: "Web Developer",
    company: "Smiles Foundation",
    image: docker,
  },
  {
    testimonial:
      "Solace transformed our vision into reality with remarkable skill and creativity, increasing traffic to our business by 50%!",
    name: "Fidey Njeri",
    designation: "Business Owner",
    company: "Fidey's Closet",
    image: figma,
  },
];

const projects = [
  {
    name: "Food Restaurant",
    description:
      "Web-based platform that allows users to search, book, and manage restaurant reservations from various providers, providing a convenient and efficient solution for dining needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Blog App",
    description:
      "Web application that allows users to create, read, update, and delete blog posts. Users can also comment on posts, follow authors, and share content on social media.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Elderly Health App",
    description:
      "A comprehensive health management platform designed for the elderly, providing features such as medication reminders, health tracking, telehealth consultations, and personalized wellness recommendations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
