import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import designerIllustration from '../assets/df5165bdd31dcd38e39e8e46d087b5e9343059f7.png';

interface HeroProps {
  isProfessional: boolean;
}

export default function Hero({ isProfessional: _isProfessional }: HeroProps) {
  // TODO: Use isProfessional prop for theme-based styling
  return (
    <section className="relative h-[calc(100vh-72px)] min-h-[600px] bg-white px-6 md:px-12 flex items-center">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Main Heading */}
            <div>
              <h1 
                className="mb-2"
                style={{
                  fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                  fontWeight: 700,
                  color: '#243E89',
                  lineHeight: 1.1,
                  whiteSpace: 'nowrap'
                }}
              >
                Heyy, I'm Hexman
              </h1>
              <p 
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.875rem)',
                  fontWeight: 500,
                  color: '#64748B',
                  lineHeight: 1.3
                }}
              >
                Product & UI UX Designer
              </p>
            </div>
            
            {/* Description */}
            <p 
              className="max-w-2xl"
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                fontWeight: 400,
                color: '#334155',
                lineHeight: 1.6
              }}
            >
              I design Exceptional web, app, and SaaS experiences that users love and enterprises trust
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                onClick={() => {
                  const getInTouchSection = document.querySelector('section[data-contact-section]');
                  if (getInTouchSection) {
                    getInTouchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="bg-[#243E89] hover:bg-[#1B2F6B] text-white px-7 py-5 rounded-lg transition-all w-full sm:w-auto"
                style={{
                  fontSize: '1rem',
                  fontWeight: 600
                }}
              >
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://drive.google.com/file/d/1VdSka7vn863Hz-3OBxdfN_khATtOEUui/view?usp=sharing', '_blank')}
                className="border-2 border-[#243E89] text-[#243E89] hover:bg-[#243E89] hover:text-white hover:shadow-lg hover:-translate-y-0.5 px-7 py-5 rounded-lg transition-all duration-300 w-full sm:w-auto"
                style={{
                  fontSize: '1rem',
                  fontWeight: 600
                }}
              >
                View Resume
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <img 
              src={designerIllustration} 
              alt="Hexman - Product Designer Illustration" 
              className="w-full max-w-[260px] md:max-w-[320px] lg:max-w-[380px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <ChevronDown 
            className="text-gray-400 animate-bounce" 
            size={36}
            strokeWidth={2}
          />
        </div>
      </div>
    </section>
  );
}