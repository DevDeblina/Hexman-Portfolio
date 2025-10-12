import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { HERO_ROTATION_IMAGES, HERO_TRANSITION_DURATION } from './HeroCarouselData';

interface LifeHeroProps {
  isProfessional: boolean;
}

export default function LifeHero({ isProfessional: _isProfessional }: LifeHeroProps) {
  // TODO: Use isProfessional prop for theme-based styling
  const [currentRotationIndex, setCurrentRotationIndex] = useState(0);

  useEffect(() => {
    const rotationTimer = setInterval(() => {
      setCurrentRotationIndex((prevIdx) => (prevIdx + 1) % HERO_ROTATION_IMAGES.length);
    }, HERO_TRANSITION_DURATION);

    return () => clearInterval(rotationTimer);
  }, []);

  return (
    <section className="relative h-[calc(100vh-72px)] min-h-[600px] bg-white px-6 md:px-12 flex items-center">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
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
                Heyy, I'm Hemanth
              </h1>
            </div>
            
            <p 
              className="max-w-2xl"
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                fontWeight: 400,
                color: '#334155',
                lineHeight: 1.6
              }}
            >
              I love doing things that give me real dopamine. Hitting the gym regularly, reading books often, watching anime, and getting lost in movies or shows that treat direction like art are my kind of therapy.
              <br /><br />
              Before design, I spent years in competitive gaming, where I learned focus, teamwork, and strategy.
            </p>
          </div>

          {/* Right Photo Carousel - HERO ROTATION ONLY */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 w-full">
            <div 
              className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[400px] bg-gray-100 rounded-3xl" 
              style={{ aspectRatio: '1/1' }}
            >
              {HERO_ROTATION_IMAGES.map((heroPortrait, position) => (
                <div
                  key={heroPortrait.heroId}
                  className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                  style={{
                    opacity: position === currentRotationIndex ? 1 : 0,
                    zIndex: position === currentRotationIndex ? 10 : 1
                  }}
                >
                  <img
                    src={heroPortrait.heroSrc} 
                    alt={heroPortrait.heroAlt} 
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

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
