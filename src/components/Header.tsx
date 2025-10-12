import logoImage from '../assets/1dbff237529283eed46fb228a58366a5dde0bb78.png';

interface HeaderProps {
  isProfessional: boolean;
  onThemeToggle: () => void;
}

export default function Header({ isProfessional, onThemeToggle }: HeaderProps) {
  return (
    <header className="w-full py-4 px-6 md:px-12 bg-white">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logoImage} 
            alt="HX Logo" 
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center bg-gray-100 rounded-full p-1">
          <button
            onClick={onThemeToggle}
            data-theme-toggle
            className={`px-6 py-2 text-sm rounded-full transition-all duration-300 ${
              isProfessional
                ? 'bg-white text-[#243E89] shadow-sm font-bold'
                : 'text-gray-600 hover:text-gray-800 font-medium'
            }`}
          >
            Work
          </button>
          <button
            onClick={onThemeToggle}
            data-theme-toggle
            className={`px-6 py-2 text-sm rounded-full transition-all duration-300 ${
              !isProfessional
                ? 'bg-white text-[#243E89] shadow-sm font-bold'
                : 'text-gray-600 hover:text-gray-800 font-medium'
            }`}
          >
            Life
          </button>
        </div>
      </div>
    </header>
  );
}