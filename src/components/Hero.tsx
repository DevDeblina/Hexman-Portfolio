import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import heroImg from '../assets/hero_img.png';

interface HeroProps {
  isProfessional: boolean;
}

export default function Hero({ isProfessional: _isProfessional }: HeroProps) {
  // TODO: Use isProfessional prop for theme-based styling
  return (
    <section className="relative h-[calc(100vh-72px)] min-h-[500px] sm:min-h-[600px] bg-white px-4 sm:px-6 md:px-12 flex items-center py-8 sm:py-0">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1 w-full">
            {/* Heading and Description Group */}
            <div className="space-y-3 sm:space-y-3">
              <h1 
                style={{
                  fontSize: 'clamp(1.25rem, 4vw, 2.13rem)',
                  color: '#64748B',
                  lineHeight: 1.2,
                }}
              >
                Hey, I'm Hexman - Product & UI UX Designer
              </h1>
              
              <p 
                className="max-w-2xl"
                style={{
                  fontSize: 'clamp(1.7rem, 5vw, 2.7rem)',
                  fontWeight: 700,
                  color: '#000000',
                  lineHeight: 1.4,
                }}
              >
                I Design Exceptional SaaS, App & Web Experience That Users Love & Enterprises Trust
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Button 
                onClick={() => {
                  const getInTouchSection = document.querySelector('section[data-contact-section]');
                  if (getInTouchSection) {
                    getInTouchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="bg-[#243E89] hover:bg-[#1B2F6B] text-white px-6 sm:px-7 py-4 sm:py-5 rounded-lg transition-all w-full sm:w-auto h-10"
                style={{
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  fontWeight: 600
                }}
              >
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://drive.google.com/file/d/1VdSka7vn863Hz-3OBxdfN_khATtOEUui/view?usp=sharing', '_blank')}
                className="border-2 border-[#243E89] text-[#243E89] hover:bg-[#243E89] hover:text-white hover:shadow-lg hover:-translate-y-0.5 px-6 sm:px-7 py-4 sm:py-5 rounded-lg transition-all duration-300 w-full sm:w-auto h-10"
                style={{
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  fontWeight: 600
                }}
              >
                View Resume
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 w-full">
            <img 
              src={heroImg} 
              alt="Hexman - Product Designer Illustration" 
              className="w-full max-w-[200px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[380px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <ChevronDown 
            className="text-gray-400 animate-bounce" 
            strokeWidth={2}
            style={{
              width: 'clamp(24px, 6vw, 36px)',
              height: 'clamp(24px, 6vw, 36px)'
            }}
          />
        </div>
      </div>
    </section>
  );
}