# Portfolio Website

A modern, interactive portfolio website built with Next.js 15, featuring smooth animations, magnetic effects, and a responsive design. This portfolio showcases my projects, education, and professional experience as a Full Stack Developer.

## ✨ Features

- **Modern Design**: Clean, minimalist design with glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion for buttery smooth interactions
- **Magnetic Effects**: Interactive elements with magnetic hover effects
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Navigation**: Smooth scrolling navigation with active section indicators
- **Dynamic Content**: Easy to update personal information, projects, and experience
- **Performance Optimized**: Built with Next.js 15 for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js 18+ installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kazuhikoakiraa/portofolio.git
cd portofolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── images/
│       └── mora.jpg
├── components/
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎨 Customization

### Personal Information

Update your personal information in the `personalData` object in `app/page.tsx`:

```typescript
const personalData: PersonalData = {
  name: "Your Name",
  title: "Your Title",
  image: "/images/your-photo.jpg",
  bio: "Your bio description...",
  contact: {
    email: "your.email@example.com",
    phone: "+your-phone-number",
    github: "your-github-username",
    linkedin: "your-linkedin-username",
    location: "Your Location"
  }
};
```

### Projects

Add or modify projects in the `projectData` array:

```typescript
const projectData: Project[] = [
  {
    id: "1",
    name: "Project Name",
    description: "Project description...",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    period: "Jan 2024",
    status: "completed",
    link: "https://github.com/username/project"
  },
  // Add more projects...
];
```

### Education

Update your educational background in the `educationData` array:

```typescript
const educationData: Education[] = [
  {
    id: "1",
    institution: "Your University",
    degree: "Your Degree",
    period: "2021 - Present",
    gpa: "3.22",
    description: "Your focus area..."
  }
];
```

### Organizations

Add your organizational experience in the `organizationData` array:

```typescript
const organizationData: Organization[] = [
  {
    id: "1",
    name: "Organization Name",
    position: "Your Position",
    period: "2024 - 2025",
    description: "Description of your role and responsibilities..."
  }
];
```

## 🎯 Key Components

### Magnetic Effect Hook
The portfolio includes a custom `useMagneticEffect` hook that creates interactive magnetic hover effects on elements.

### Smooth Animations
All animations are powered by Framer Motion, including:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Loading animations

### Responsive Navigation
- Desktop: Horizontal navigation bar
- Mobile: Hamburger menu with smooth transitions

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy automatically

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Upload the `out` folder to Netlify

### Deploy to Other Platforms

The portfolio can be deployed to any platform that supports static hosting:
- GitHub Pages
- Firebase Hosting
- AWS S3
- DigitalOcean App Platform

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/kazuhikoakiraa/portofolio/issues).

## 📞 Contact

- **Email**: moratuaputra@gmail.com
- **GitHub**: [@kazuhikoakiraa](https://github.com/kazuhikoakiraa)
- **LinkedIn**: [moratua-putra-pardede](https://linkedin.com/in/moratua-putra-pardede-23102a223)

---

⭐ Star this repo if you find it helpful!