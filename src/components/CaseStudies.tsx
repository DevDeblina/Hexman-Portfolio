import ScrollReveal from './ScrollReveal';
import phdManagementThumb from '../assets/aa0c16a2dcd00caa153d14d48b1752fc96fe0c7b.png';
import hotelMadhuvanThumb from '../assets/eac565850a57961eaaa2596efc078cde0af23999.png';
import happyHopThumb from '../assets/d59fb4add86cccc6e11cc43a120a25bcbd0351bd.png';
import digiicampusAppThumb from '../assets/2ba034fcf38827e379533fb785b3a93f17ec5aa6.png';

const caseStudies = [
  {
    id: 1,
    type: 'SaaS',
    context: 'Digiicampus',
    title: 'PhD Management',
    tagline: 'Complex & crucial project delivered on a tight deadline',
    description: 'I designed the PhD Management module for Digiicampus, bringing clarity to complex academic workflows. It enables scholars, supervisors, and committees to collaborate seamlessly across proposals, evaluations, and compliance processes.',
    thumbnail: phdManagementThumb,
    bgColor: '#F1F5F9',
    link: 'https://digiicampus.com/phd-management/'
  },
  {
    id: 2,
    type: 'Website',
    context: 'Freelance',
    title: 'Hotel Madhuvan Serai - Redesign',
    tagline: 'Crafted for effortless room booking and elegant experience',
    description: 'I reimagined the online experience for Hotel Madhuvan Serai, a design that feels as welcoming as the stay itself. Clear navigation, elegant visuals, and effortless booking now bring its hospitality to life online.',
    thumbnail: hotelMadhuvanThumb,
    bgColor: '#FEF3E2',
    link: 'https://www.behance.net/gallery/226559313/Hotel-Website-Redesign-Madhuvan-Serai'
  },
  {
    id: 3,
    type: 'Website',
    context: 'Freelance',
    title: 'Happy Hop - Kids Wear Ecommerce',
    tagline: 'Full-scale e-commerce design',
    description: 'I designed Happy Hop, an e-commerce platform for kids\' clothing that feels playful yet practical. Every part of the experience, from discovery to checkout, was crafted for trust, clarity, and smooth navigation.',
    thumbnail: happyHopThumb,
    bgColor: '#E0F2F1',
    link: 'https://www.behance.net/gallery/214599385/Happy-Hop-E-commerce-Website-Case-Study'
  },
  {
    id: 4,
    type: 'App',
    context: 'Personal Project',
    title: 'Digiicampus App - Redesign',
    tagline: 'The Project that got me job',
    description: 'What began as a cluttered academic app became one of my most defining projects. I redesigned the Digiicampus app to feel intuitive, cohesive, and responsive, helping students focus on learning instead of navigating chaos.',
    thumbnail: digiicampusAppThumb,
    bgColor: '#FEE2E2',
    link: 'https://www.behance.net/gallery/211133883/Digiicampus-app-redesign-UI-UX-case-Study'
  }
];

interface CaseStudiesProps {
  isProfessional: boolean;
}

export default function CaseStudies({ isProfessional: _isProfessional }: CaseStudiesProps) {
  // TODO: Use isProfessional prop for theme-based styling
  const accentColor = '#243E89';

  return (
    <section className="py-12 md:py-20 px-6 md:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <ScrollReveal animation="fadeUp">
          <div className="mb-12">
            <h2 
              className="mb-2"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                color: accentColor,
                lineHeight: 1.2
              }}
            >
              Featured Work
            </h2>
            <p 
              className="max-w-3xl"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                color: '#64748B',
                lineHeight: 1.6
              }}
            >
              Work that I can post publicly, taught me, and still makes me proud
            </p>
          </div>
        </ScrollReveal>

        {/* Projects List */}
        <div className="space-y-8">
          {caseStudies.map((project, index) => (
            <ScrollReveal key={project.id} animation="fadeUp" delay={index * 0.1}>
              <a
                href={project.link}
                className="group block bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#243E89] transition-all duration-300 hover:shadow-2xl"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(project.link, '_blank', 'noopener,noreferrer');
                }}
              >
                <div className="flex flex-col md:flex-row md:h-72">
                  {/* Project Thumbnail - Left Side */}
                  <div 
                    className="relative w-full md:w-2/5 lg:w-5/12 h-64 md:h-72 overflow-hidden"
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Project Details - Right Side */}
                  <div className="w-full md:w-3/5 lg:w-7/12 p-6 md:p-8 flex flex-col justify-center md:h-72">
                    {/* Type & Context */}
                    <div className="flex items-center gap-2 flex-wrap mb-3">
                      <span 
                        style={{
                          fontSize: 'clamp(0.875rem, 1vw, 0.9375rem)',
                          fontWeight: 600,
                          color: accentColor
                        }}
                      >
                        {project.type}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span 
                        style={{
                          fontSize: 'clamp(0.875rem, 1vw, 0.9375rem)',
                          color: '#64748B'
                        }}
                      >
                        {project.context}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 
                      className="mb-3 group-hover:text-[#243E89] transition-colors duration-300"
                      style={{
                        fontSize: 'clamp(1.375rem, 2vw, 1.75rem)',
                        fontWeight: 700,
                        color: '#1E293B',
                        lineHeight: 1.3
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Tagline Tag */}
                    <div className="mb-4">
                      <span 
                        className="inline-block px-3 py-1 rounded-md"
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: '#1E40AF',
                          backgroundColor: '#DBEAFE',
                          letterSpacing: '0.01em'
                        }}
                      >
                        {project.tagline}
                      </span>
                    </div>

                    {/* Description */}
                    <p 
                      className="text-gray-600"
                      style={{
                        fontSize: 'clamp(0.9375rem, 1.05vw, 1rem)',
                        lineHeight: 1.7
                      }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}