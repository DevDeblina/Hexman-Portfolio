interface AboutProps {
  isProfessional: boolean;
}

export default function About({ isProfessional }: AboutProps) {
  const themeStyles = isProfessional
    ? {
        accent: 'border-[#B7C9E8] bg-[#B7C9E8]/10',
        text: 'text-gray-700'
      }
    : {
        accent: 'border-[#243E89] bg-gradient-to-r from-[#243E89]/10 to-[#F472B6]/10',
        text: 'text-gray-700'
      };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-40 h-40 border border-gray-200/40 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-gray-200/40 rounded-full"></div>
        {/* Grid pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-black mb-6">
            Simplifying Complexity
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I craft and optimize core modules like Finance, Admissions, HRMS, and User Management, 
            making them simple, usable, and impactful for lakhs of users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Core Expertise */}
          <div className={`p-8 rounded-2xl border-2 ${themeStyles.accent} transition-all duration-300 hover:shadow-lg`}>
            <h3 className="text-3xl font-semibold text-black mb-6">
              Core Expertise
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${isProfessional ? 'bg-[#B7C9E8]' : 'bg-[#243E89]'} mr-4`}></div>
                <span className={`${themeStyles.text} text-lg`}>Complex workflow simplification</span>
              </li>
              <li className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${isProfessional ? 'bg-[#B7C9E8]' : 'bg-[#243E89]'} mr-4`}></div>
                <span className={`${themeStyles.text} text-lg`}>User-centered design thinking</span>
              </li>
              <li className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${isProfessional ? 'bg-[#B7C9E8]' : 'bg-[#243E89]'} mr-4`}></div>
                <span className={`${themeStyles.text} text-lg`}>Scalable system architecture</span>
              </li>
              <li className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${isProfessional ? 'bg-[#B7C9E8]' : 'bg-[#243E89]'} mr-4`}></div>
                <span className={`${themeStyles.text} text-lg`}>Cross-platform consistency</span>
              </li>
            </ul>
          </div>

          {/* Impact */}
          <div className={`p-8 rounded-2xl border-2 ${themeStyles.accent} transition-all duration-300 hover:shadow-lg`}>
            <h3 className="text-3xl font-semibold text-black mb-6">
              Impact & Scale
            </h3>
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-black">100K+</div>
                <div className={`text-lg ${themeStyles.text}`}>Active users across platforms</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-black">4</div>
                <div className={`text-lg ${themeStyles.text}`}>Core modules redesigned</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-black">50%</div>
                <div className={`text-lg ${themeStyles.text}`}>Reduction in task completion time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}