import { PersonalData } from '../types';

interface FooterProps {
  personalData: PersonalData;
}

export default function Footer({ personalData }: FooterProps) {
  return (
    <footer className="relative z-20 py-10 bg-gray-900 border-t border-white/10 mt-12">
      <div className="text-gray-400 text-sm text-center md:text-center">
        &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
      </div>
    </footer>
  );
}