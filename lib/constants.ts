export const projects = [
  {
    name: 'Soul Fitness',
    type: 'Gym website',
    number: '01',
    description: 'Soul Fitness is a modern, fully responsive gym website designed to showcase gym facilities, equipment, and workout experiences. It features an interactive gym setup gallery, video gallery, FAQ section, and client testimonials, providing visitors with an engaging overview of the fitness center.',
    liveDemo: 'https://soul-fitness-seven.vercel.app/',
    show_live: true,
    workin_progress: false,
    accent: 'bg-[#d9f99d]',
    mainPhoto: 'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794153292/Screenshot_From_2026-11-08_21-17-52_gj3sp0.png',
    subPhotos: [
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794153292/Screenshot_From_2026-11-08_21-16-38_mhl3cx.png',
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794153294/Screenshot_From_2026-11-08_21-16-45_wd153c.png',
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794153292/Screenshot_From_2026-11-08_21-17-41_efem3j.png',
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794153290/Screenshot_From_2026-11-08_21-17-36_sm0xee.png',
    ],
  },
  {
    name: 'Yuno',
    type: 'Multi-Tenant Project Management SaaS',
    number: '02',
    description: 'Yuno is a multi-tenant project management platform designed to manage multiple organizations, departments, and projects in one place. It provides role-based access control, employee management, task tracking, Kanban boards, and email notifications, helping teams collaborate, organize workflows, and monitor project progress efficiently.',
    liveDemo: 'https://baazaaar.netlify.app',
    show_live: false,
    workin_progress: false,
    accent: 'bg-[#fbcfe8]',
    mainPhoto: 'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794147823/Screenshot_From_2026-11-08_18-56-37_qywfzr.png',
    subPhotos: [
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794152550/Screenshot_From_2026-11-08_21-10-27_uwsg2g.png',
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794152550/Screenshot_From_2026-11-08_21-10-18_dyl8ad.png',
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794152550/Screenshot_From_2026-11-08_21-10-11_phuraf.png',
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794152550/Screenshot_From_2026-11-08_21-10-45_dxu62t.png',
    ],
  },
  {
    name: 'Zenvy Admin Dashboard',
    type: 'Fullstack E-commerce Admin Panel',
    number: '03',
    description: 'A centralized e-commerce administration platform built to streamline store operations. It enables efficient management of products, categories, inventory, customers, and orders, with sales analytics, promotional campaigns, and push notifications — all through a clean, responsive dashboard with light and dark mode support.',
    show_live: false,
    workin_progress: false,
    accent: 'bg-[#bfdbfe]',
    mainPhoto: 'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794150138/Screenshot_From_2026-11-08_20-27-24_ciqzfu.png',
    subPhotos: [
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794150138/Screenshot_From_2026-11-08_20-27-32_oknifu.png',
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794150138/Screenshot_From_2026-11-08_20-29-29_dkxc9l.png',
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794150138/Screenshot_From_2026-11-08_20-29-50_gqugxy.png',
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794150138/Screenshot_From_2026-11-08_20-29-40_ka4fyi.png',
    ],
  },
  {
    name: 'Zenvy',
    type: 'Full-Stack E-Commerce Application',
    number: '04',
    description: 'Zenvy is a full-stack e-commerce platform offering seamless online shopping, product and inventory management, secure authentication, and order processing. Built with Next.js, Node.js, Express.js, and PostgreSQL, it features a responsive storefront and a dedicated admin dashboard.',
    show_live: false,
    workin_progress: true,
    accent: 'bg-[#fed7aa]',
    mainPhoto: 'https://ik.imagekit.io/nslkabdza/portfolio/zenvy/Screenshot%20From%202026-10-28%2023-48-32.png',
    subPhotos: [
      'https://ik.imagekit.io/nslkabdza/portfolio/zenvy/Screenshot%20From%202026-10-28%2023-48-32.png',
      "https://ik.imagekit.io/nslkabdza/portfolio/zenvy/Screenshot%20From%202026-10-29%2000-09-58.png",
      "https://ik.imagekit.io/nslkabdza/portfolio/zenvy/Screenshot%20From%202026-10-28%2023-50-23.png",
      "https://ik.imagekit.io/nslkabdza/portfolio/zenvy/Screenshot%20From%202026-10-28%2023-50-55.png",
      "https://ik.imagekit.io/nslkabdza/portfolio/zenvy/Screenshot%20From%202026-10-29%2000-08-34.png"
    ],
  },
]

export const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Redux'],
  Backend: ['Node.js', 'Express.js', 'REST APIs'],
  Mobile: ['React Native', 'TypeScript'],
  Databases: ['PostgreSQL', 'MongoDB', 'SQL'],
  'Tools & Integrations': ['Git', 'GitHub', 'Stripe', 'Firebase', 'Supabase'],
}

export const technologyImages: Record<string, string> = {
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  Redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  Stripe: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg',
  Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  Supabase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
}

export const gmailWebUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=tuhinroyand@gmail.com&su=Hello%20Tuhin%20Roy'
export const gmailAppUrl = 'googlegmail://co?to=tuhinroyand@gmail.com&subject=Hello%20Tuhin%20Roy'

export type Project = (typeof projects)[number]
