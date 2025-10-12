import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface FeaturedProjectsProps {
  isProfessional: boolean;
}

export default function FeaturedProjects({ isProfessional }: FeaturedProjectsProps) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Finance Management System",
      description: "Streamlined financial workflows for educational institutions, reducing processing time by 60%.",
      image: "https://images.unsplash.com/photo-1613442301287-4fa478efd9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc1NjIwODYyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Finance"
    },
    {
      id: 2,
      title: "Student Admissions Portal",
      description: "Intuitive admission process design that increased application completion rates by 45%.",
      image: "https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBwbGF0Zm9ybSUyMGRlc2lnbnxlbnwxfHx8fDE3NTYxMzI0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Admissions"
    },
    {
      id: 3,
      title: "HRMS Dashboard",
      description: "Comprehensive human resource management with improved user satisfaction scores.",
      image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MTA0OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "HRMS"
    },
    {
      id: 4,
      title: "User Management System",
      description: "Scalable user administration interface serving 100K+ active users daily.",
      image: "https://images.unsplash.com/photo-1642888621621-ff7d83f3fdcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwxfHx8fDE3NTYyMDg2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "User Management"
    },
    {
      id: 5,
      title: "Mobile Learning App",
      description: "Cross-platform educational mobile application with seamless user experience.",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSSUyMFVYJTIwZGVzaWduJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc1NjIwODYyMnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Mobile"
    },
    {
      id: 6,
      title: "Analytics Dashboard",
      description: "Data visualization platform providing actionable insights for decision makers.",
      image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIUk1TJTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1NjIwODYyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Analytics"
    }
  ];

  const themeStyles = isProfessional
    ? {
        bg: 'bg-gray-50',
        cardBg: 'bg-white',
        accent: '#B7C9E8',
        border: 'border-gray-200'
      }
    : {
        bg: 'bg-gradient-to-br from-[#243E89]/5 via-[#F472B6]/5 to-white',
        cardBg: 'bg-white',
        accent: '#243E89',
        border: 'border-gray-200'
      };

  return (
    <section className={`py-20 ${themeStyles.bg}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-black mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing impactful design solutions that transform complex systems into intuitive experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${themeStyles.cardBg} rounded-2xl overflow-hidden shadow-sm ${themeStyles.border} border transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredProject === project.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                  isProfessional 
                    ? 'bg-[#B7C9E8] text-black' 
                    : 'bg-[#243E89] text-white'
                }`}>
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}