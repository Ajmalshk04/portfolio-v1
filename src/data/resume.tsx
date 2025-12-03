import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ajmal Shaikh",
  initials: "AS",
  url: "https://ajmalshaikh.dev",
  location: "Mumbai, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "Full Stack Developer specializing in MERN stack. I love building scalable web applications and solving complex problems. Passionate about creating seamless user experiences.",
  summary:
    "I'm a dedicated Full Stack Developer with expertise in the MERN stack, having built multiple production-ready applications including e-commerce platforms and B2B solutions. I've successfully developed and deployed scalable web applications serving 1+ lakh products and integrated various payment gateways. My journey includes working with startups and building comprehensive CRM systems, always focusing on performance optimization and user experience.",
  avatarUrl: "me.jpg",
   skills: [
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "React.js", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "express" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "MySQL", icon: "mysql" },
    { name: "Redux", icon: "redux" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Material-UI", icon: "mui" },
    { name: "Python", icon: "python" },
    { name: "Git", icon: "git" },
    { name: "AWS", icon: "aws" },
    { name: "Docker", icon: "docker" },
    { name: "Nginx", icon: "nginx" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "shaikhajmal50@gmail.com",
    tel: "+91 9004323098",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ajmalshaikh04",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ajmalshaikh04",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ajmalshaikh04",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:shaikhajmal50@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "NumberWale.com",
      href: "https://numberwale-dev.netlify.app/",
      badges: ["Solo Developer", "E-commerce"],
      location: "Mumbai, India",
      title: "Full Stack Developer",
      logoUrl: "numberwale.png",
      start: "July 2024",
      end: "Present",
      description:
        "Developed complete e-commerce platform for premium telecom numbers using MERN stack with 1+ lakh products listings. Built responsive React.js application with Redux state management, custom hooks, and TanStack Query for data fetching. Integrated Razorpay and PhonePe payment gateways with webhook handling and automated refund processing. Created comprehensive admin CRM dashboard with real-time analytics, order tracking, and inventory management.",
    },
    {
      company: "Adiya Business Solutions",
      badges: ["Remote", "MERN Stack"],
      href: "#",
      location: "Remote",
      title: "MERN Stack Junior Developer",
      logoUrl: "/adiya.png",
      start: "February 2024",
      end: "June 2024",
      description:
        "Developed full-stack applications using MERN stack with MongoDB databases, proper indexing, relationships, and data validation schemas. Built RESTful APIs with Express.js implementing middleware, error handling, and rate limiting. Implemented React.js components with hooks, context API, and responsive design principles. Built real-time features using Socket.io for live updates and notifications.",
    },
    {
      company: "QuickMobile",
      href: "#",
      badges: ["Full Stack"],
      location: "Mumbai, India",
      title: "Full Stack Developer",
      logoUrl: "/quickmobile.png",
      start: "August 2022",
      end: "March 2023",
      description:
        "Developed responsive web applications using React.js, HTML5, CSS3, and modern JavaScript (ES6+). Built interactive and reusable UI components with React hooks and component lifecycle management. Designed and implemented RESTful APIs using Node.js, Express.js with MySQL and MongoDB databases. Implemented user authentication systems with session management and secure password hashing.",
    },
  ],

  education: [
    {
      school: "Jamia Institute of Engineering and Management Studies",
      href: "https://jiems.ac.in/",
      degree: "Bachelor of Engineering in Computer Engineering",
      logoUrl: "/jiems.png",
      start: "2019",
      end: "2023",
    },
    {
      school: "Pravin Patil Polytechnic College of Engineering",
      href: "#",
      degree: "Diploma in Computer Technologies",
      logoUrl: "/pravin-patil.png",
      start: "2016",
      end: "2019",
    },
  ],

  projects: [
    {
      title: "NumberWale E-commerce Platform",
      href: "https://numberwale-dev.netlify.app/",
      dates: "July 2024 - Present",
      active: true,
      description:
        "Complete e-commerce platform for premium telecom numbers with 1+ lakh products listings. Features include advanced filtering, payment gateway integration (Razorpay, PhonePe), comprehensive admin CRM dashboard, and real-time analytics.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux",
        "TanStack Query",
        "Razorpay",
        "PhonePe",
        "Nginx",
        "VPS",
      ],
      links: [
        {
          type: "Website",
          href: "https://numberwale-dev.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Admin Dashboard",
          href: "https://crm-numberwale.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "numberwale-preview.png",
      video: "",
    },
    {
      title: "Xofah Fastener Platform",
      href: "https://xofah-dev.netlify.app/",
      dates: "2024",
      active: true,
      description:
        "Comprehensive fastener B2B platform connecting clients with suppliers for custom project quotes and management. Features multi-role system with separate dashboards for users, admins, and suppliers with real-time project updates.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux",
        "Material-UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://xofah-dev.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/xofah-preview.png",
      video: "",
    },
    {
      title: "E-Store MERN Stack",
      href: "https://github.com/Ajmalshaikh04/estore",
      dates: "2023",
      active: true,
      description:
        "Fully functional e-commerce web application using the MERN stack, implementing RESTful APIs with Node.js and Express.js. Built user and admin panels and leveraged dependencies like Axios, Redux, JWT, and Material-UI to create a user-friendly interface.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux",
        "Material-UI",
        "JWT",
        "Axios",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ajmalshaikh04/estore",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "estore-preview.png",
      video: "",
    },
    {
      title: "T-Shirt Store Backend",
      href: "https://github.com/Ajmalshaikh04/tshirtstore",
      dates: "2023",
      active: true,
      description:
        "Feature-rich t-shirt store backend with secure authentication system, user and admin panels. Integrated payment systems with Stripe and Razorpay, implemented file upload with Cloudinary, and documented APIs with Swagger.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Stripe",
        "Razorpay",
        "Cloudinary",
        "Swagger",
        "Nodemailer",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ajmalshaikh04/tshirtstore",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "tshirtstore-preview.png",
      video: "",
    },
  ],

  certifications: [
    {
      title: "The Creative JavaScript Course",
      dates: "2022",
      location: "Online",
      description:
        "Advanced JavaScript concepts and modern ES6+ features including async/await, promises, closures, and design patterns.",
      image: "/js-cert.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/drive/folders/1Rgj4jYjDv7fqQTtWwEMRddUmkZFdHJdt",
        },
      ],
    },
    {
      title: "Full Stack MERN Bootcamp",
      dates: "2022-2023",
      location: "Online",
      description:
        "Complete development lifecycle from database design to deployment including React.js, Node.js, Express.js, and MongoDB.",
      image: "/mern-cert.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/drive/folders/1Rgj4jYjDv7fqQTtWwEMRddUmkZFdHJdt",
        },
      ],
    },
    {
      title: "React.js Developer Bootcamp",
      dates: "2023",
      location: "Online",
      description:
        "Advanced React patterns, hooks, state management with Redux, and modern development practices.",
      image: "/react-cert.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/drive/folders/1Rgj4jYjDv7fqQTtWwEMRddUmkZFdHJdt",
        },
      ],
    },
    {
      title: "Pro Backend Developer Course",
      dates: "2023",
      location: "Online",
      description:
        "Scalable system design, API development, database optimization, and DevOps practices.",
      image: "/backend-cert.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/drive/folders/1Rgj4jYjDv7fqQTtWwEMRddUmkZFdHJdt",
        },
      ],
    },
  ],
} as const;