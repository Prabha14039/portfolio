import {
  tensorflow,
  pytorch,
  dart,
  mobile,
  backend,
creator,
  web,
  javascript,
  Python,
  C++,
  C,
  nodejs,
  postgres,
  tailwind,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "AI programmer",
    icon: Ai,
  },

  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Flutter Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "C++",
    icon: C++,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "Dart",
    icon: Dart,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Postgress",
    icon: Postgress,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: " tensor flow",
    icon: tensorflow,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Microsoft",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2024- Present",
    points: [
      "Developed high-performance mobile applications using Flutter",
      "Collaborated with cross-functional teams to translate requirements into functional app features.",
      "Implemented modern UI/UX designs and optimized app performance through thorough testing and debugging.",
      "Integrated various APIs and backend services.",
    ],
  },
  {
    title: "AI Specialist",
    company_name: "NOT@MRP Innovations Private Limited",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sept 2023 – June 2024",
    points: [
      "Leveraged advanced artificial intelligence technologies to drive innovation and solve complex problems.",
      "Expertise in machine learning, natural language processing, and deep learning",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Delivered impactful solutions aligned with organizational goals",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IoT & Web Specialist",
    company_name: "Experiential Learning, Thapar Institute of Engineering and Technology (Internship)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sept 2023 – Present",
    points: [
      "Focused on integrating Internet of Things (IoT) solutions and web technologies",
      "Developed and optimized IoT devices and web applications, ensuring seamless connectivity and usercentric experiences",
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

const projects = [
  {
    name: "Crowd Source Disaster Management Application using Flutter",
    description:
      "Developed a crowd-sourced disaster management app using Flutter. Designed and implemented key features 
to enable real-time reporting and resource coordination. Collaborated with designers and other developers 
to create an intuitive UI/UX. Integrated APIs for live updates and notifications.",
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
    name: "Sentimental Analysis using LSTM for Emotional Insights",
    description:
      "Implemented LSTM-based Sentiment Analysis, leveraging deep learning to decode emotional nuances in 
textual data. Achieved high accuracy, contributing to a nuanced understanding of sentiments expressed in 
diverse datasets for applications in customer feedback and social media analysis and used flask for user 
interactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Landscape and Cloud Burst Detection Research Work",
    description:
      "Conducting groundbreaking research in landscape and cloud burst detection, employing advanced image 
processing and machine learning techniques. Pioneering efforts to enhance early warning systems for natural 
disasters through innovative data analysis and algorithm development.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
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
