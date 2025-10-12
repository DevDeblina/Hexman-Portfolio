import { Mail, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  isProfessional: boolean;
}

export default function Footer({ isProfessional }: FooterProps) {
  const themeStyles = isProfessional
    ? {
        bg: 'bg-gray-50',
        accent: '#B7C9E8',
        iconBg: 'bg-[#B7C9E8] hover:bg-[#9AB8D8]'
      }
    : {
        bg: 'bg-gradient-to-br from-[#243E89]/10 via-[#F472B6]/5 to-white',
        accent: '#243E89',
        iconBg: 'bg-[#243E89] hover:bg-[#1B2F6B]'
      };

  return (
    <footer className={`py-16 ${themeStyles.bg} border-t border-gray-200`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-black mb-4">
            Let's Create Something Amazing
          </h3>
          <p className="text-xl text-gray-600">
            Ready to transform complex systems into seamless experiences?
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
          <a 
            href="mailto:hemanth@example.com" 
            className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors duration-300"
          >
            <div className={`p-3 rounded-full ${themeStyles.iconBg} text-white transition-all duration-300`}>
              <Mail size={20} />
            </div>
            <span className="font-medium">hemanth@example.com</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a 
            href="https://linkedin.com/in/hexman" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-4 rounded-full ${themeStyles.iconBg} text-white transition-all duration-300 hover:scale-110`}
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://instagram.com/hexman" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-4 rounded-full ${themeStyles.iconBg} text-white transition-all duration-300 hover:scale-110`}
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-500">
            © 2025 Hexman (Hemanth Kumar). Crafted with passion for great design.
          </p>
        </div>
      </div>
    </footer>
  );
}