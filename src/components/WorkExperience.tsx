import { Calendar } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import digiiLogo from '../assets/6621065bfb8c7c3d90499782bf90034a1ec52dee.png';
import baseelLogo from '../assets/53a824125df3bbafd654172414b135569cf1cdff.png';
import phoenixLogo from '../assets/428fb9fbdfd8694adc1c9100cbd1439eb341565f.png';


const experiences = [
  {
    id: 1,
    company: 'Digii',
    companyLogo: digiiLogo,
    role: 'Product Designer',
    duration: 'Mar 2025 - Present',
    type: 'Full-time',
    description: 'Revolutionizing Education by Transforming Higher Education\'s hardest systems into effortless digital journeys.\nI work on core modules like Finance, Admissions, HRMS, User Management and also PhD Management making them simple, usable, and impactful for lakhs of users.',
    current: true
  },
  {
    id: 2,
    company: 'Baseel',
    companyLogo: baseelLogo,
    role: 'UI / UX Designer',
    duration: 'Jan 2025 - Mar 2025',
    type: 'Internship',
    description: 'Designed flows for a Cybersecurity SaaS, Survey tools, and LMS using Figma. Created dark/light themes with variables for faster design. Collaborated closely with developers and managers to meet tight deadlines and keep product development on track.',
    current: false
  },
  {
    id: 3,
    company: 'PHOENIX',
    companyLogo: phoenixLogo,
    role: 'Technical Associate',
    duration: 'July 2023 - Mar 2024',
    type: 'Internship',
    description: 'Designed high-converting landing pages and creatives. Improved the company website on WordPress, implemented SEO and growth strategies, and worked closely with developers to ensure everything looked great and worked smoothly.',
    current: false
  }
];

interface WorkExperienceProps {
  isProfessional: boolean;
}

export default function WorkExperience({ isProfessional: _isProfessional }: WorkExperienceProps) {
  // TODO: Use isProfessional prop for theme-based styling
  const accentColor = '#243E89';
  const timelineColor = '#243E89';

  return (
    <section className="py-12 md:py-20 px-6 md:px-12 bg-gray-50">
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
              Work Experience
            </h2>
            <p 
              className="max-w-3xl"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                color: '#64748B',
                lineHeight: 1.6
              }}
            >
              My journey as a self-taught designer
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - starts at first dot center, ends at last dot center */}
          <div 
            className="absolute left-[11px] w-[2px] hidden md:block"
            style={{ 
              backgroundColor: '#E2E8F0',
              top: '36px', // Start at first dot center (24px mt-6 + 12px half of dot)
              height: `calc(100% - 72px)` // End at last dot center
            }}
          />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.id} animation="fadeUp" delay={index * 0.1}>
                <div className="relative flex gap-6">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex flex-shrink-0 mt-6">
                    <div 
                      className={`w-6 h-6 rounded-full border-4 border-white shadow-md z-10 ${exp.current ? 'animate-pulse' : ''}`}
                      style={{ backgroundColor: timelineColor }}
                    />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 
                            style={{
                              fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                              fontWeight: 700,
                              color: '#1E293B'
                            }}
                          >
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span 
                              className="px-3 py-1 rounded-full"
                              style={{
                                fontSize: '0.875rem',
                                backgroundColor: '#DBEAFE',
                                color: '#243E89',
                                fontWeight: 600
                              }}
                            >
                              Current
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          {/* Company Logo */}
                          <img 
                            src={exp.companyLogo} 
                            alt={exp.company}
                            className="h-6 w-auto object-contain"
                          />
                          <span className="text-gray-400">•</span>
                          <span 
                            className="text-gray-500"
                            style={{ fontSize: 'clamp(0.875rem, 1vw, 0.9375rem)' }}
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <div 
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 self-start"
                        style={{
                          fontSize: 'clamp(0.875rem, 1vw, 0.9375rem)',
                          color: '#64748B'
                        }}
                      >
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p 
                      className="text-gray-600 whitespace-pre-line"
                      style={{
                        fontSize: 'clamp(0.9375rem, 1.1vw, 1rem)',
                        lineHeight: 1.7
                      }}
                    >
                      {exp.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
