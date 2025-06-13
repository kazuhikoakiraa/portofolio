export interface PersonalData {
  name: string;
  title: string;
  bio: string;
  image: string;
  contact: {
    email: string;
    phone: string;
    github?: string;
    linkedin?: string;
    location: string;
  };
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  description?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  period: string;
  link?: string;
  status: 'completed' | 'ongoing' | 'planned';
}

export interface Organization {
  id: string;
  name: string;
  position: string;
  period: string;
  description: string;
  achievements?: string[];
}