import { PersonalData, Education, Project, Organization } from '../types';

export const personalData: PersonalData = {
  name: "Moratua Putra Pardede",
  title: "Full Stack Developer & UI/UX Enthusiast",
  image: "/images/mora.jpg", 
  bio: "Passionate developer crafting elegant digital solutions with clean code and thoughtful design.",
  contact: {
    email: "moratuaputra@gmail.com",
    phone: "+62 821-7553-0365",
    github: "kazuhikoakiraa",
    linkedin: "moratua-putra-pardede-23102a223",
    location: "Bandar Lampung, Indonesia"
  }
};

export const educationData: Education[] = [
  {
    id: "1",
    institution: "Institut Teknologi Sumatera",
    degree: "S1 Teknik Informatika",
    period: "2021 - Present",
    gpa: "3.22",
    description: "Focused on web development and UI/UX design."
  }
];

export const projectData: Project[] = [
  {
    id: "1",
    name: "Way Kalam Tourism Website",
    description: "A tourism website for Way Kalam village to promote local tourism potential and provide comprehensive information for visitors.",
    technologies: ["Javascript","Tailwind CSS", "MySQL"],
    period: "Jan 2024",
    status: "completed",
    link: "https://github.com/Tematik-Way-Kalam/Website-Wisata-WayKalam"
  },
  {
    id: "2",
    name: "PT. Sumber Indah Perkasa Inventory System",
    description: "An inventory management system for PT. Sumber Indah Perkasa to streamline machinery and spare parts data management.",
    technologies: ["Laravel", "Tailwind CSS", "MySQL"],
    period: "Jul - Aug 2024",
    status: "completed",
    link: "https://github.com/kazuhikoakiraa/SIP"
  },
  {
    id: "3",
    name: "Kopi Hitado POS System",
    description: "A Point of Sales system for Kopi Hitado to facilitate sales transactions and transaction data management.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS"],
    period: "Feb - Jun 2024",
    status: "completed",
    link: "https://github.com/kazuhikoakiraa/webhitado"
  },
  {
    id: "4",
    name: "PT. Sentra Alam Anandana Financial System",
    description: "A financial bookkeeping system for PT. Sentra Alam Anandana to streamline company financial data management.",
    technologies: ["Laravel", "Filament", "MySQL"],
    period: "Apr 2025 - Ongoing",
    status: "ongoing",
    link: "https://github.com/kazuhikoakiraa/sistem-po"
  },
  {
    id: "5",
    name: "Personal Portfolio Website",
    description: "A personal portfolio website showcasing various projects and experiences as a developer.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    period: "May 2025 - Ongoing",
    status: "ongoing",
    link: "https://github.com/kazuhikoakiraa/portofolio"
  }
];

export const organizationData: Organization[] = [
  {
    id: "1",
    name: "Himpunan Mahasiswa Teknik Informatika",
    position: "Coordinator of Member Representative Council (DPA)",
    period: "2024 - 2025",
    description: "Leading the member representative council to voice computer science students' aspirations and oversee the association's operations."
  },
  {
    id: "2",
    name: "Himpunan Mahasiswa Teknik Informatika",
    position: "Supervision Staff",
    period: "2023 - 2024",
    description: "Actively supervising the implementation of Computer Science Student Association's work programs, ensuring all activities run according to plan."
  }
];