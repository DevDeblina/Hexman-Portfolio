import ScrollReveal from './ScrollReveal';
import figmaLogo from '../assets/864b2b20145693fb1d67f53882e1425764f1c10d.png';
import chatgptLogo from '../assets/bf6932b1e8a0bca990079d98113e03f22573f4bc.png';
import lovableLogo from '../assets/e460077ee2c5de12e5eb188527983b5df5250c38.png';
import miroLogo from '../assets/eeacb2ebae0e5701f05bfb842feb627bd8f17d04.png';
import claudeLogo from '../assets/61435a7ed74cd20dc05d416138617d006dce7d8a.png';
import framerLogo from '../assets/2d68da35cdc694a1f30033a6b4c8add1ed73c7fe.png';


const tools = [
  {
    name: 'Figma',
    logo: figmaLogo,
    scale: 1,
  },
  {
    name: 'ChatGPT',
    logo: chatgptLogo,
    scale: 0.75, // Smaller to match others visually
  },
  {
    name: 'Claude',
    logo: claudeLogo,
    scale: 0.75, // Smaller to match others visually
  },
  {
    name: 'Lovable',
    logo: lovableLogo,
    scale: 0.75,
  },
  {
    name: 'Miro',
    logo: miroLogo,
    scale: 1,
  },
  {
    name: 'Framer',
    logo: framerLogo,
    scale: 1,
  },
];

interface DesignStackProps {
  isProfessional: boolean;
}

export default function DesignStack({ isProfessional }: DesignStackProps) {
  const accentColor = '#243E89';

  return (
    <section className="py-12 md:py-20 px-6 md:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header - Left Aligned */}
        <ScrollReveal animation="fadeUp">
          <div className="mb-12">
            <h2 
              className="mb-2"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                color: '#000000',
                lineHeight: 1.2
              }}
            >
              My Go-To Design Stack
            </h2>
            <p 
              className="max-w-3xl"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                color: '#64748B',
                lineHeight: 1.6
              }}
            >
              The tools I rely on to turn ideas into polished products
            </p>
          </div>
        </ScrollReveal>

        {/* Tools Grid */}
        <div className="flex flex-row flex-wrap justify-between items-center gap-8 md:gap-12">
          {tools.map((tool, index) => (
            <ScrollReveal 
              key={index} 
              animation="fadeUp" 
              delay={index * 0.1}
            >
              <div className="group flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2">
                {/* Logo Container */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className="object-contain drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                    style={{
                      width: `${tool.scale * 100}%`,
                      height: `${tool.scale * 100}%`,
                    }}
                  />
                </div>
                
                {/* Tool Name */}
                <span 
                  className="text-center transition-colors duration-300 group-hover:text-[#243E89]"
                  style={{
                    fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
                    fontWeight: 600,
                    color: '#334155',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {tool.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
