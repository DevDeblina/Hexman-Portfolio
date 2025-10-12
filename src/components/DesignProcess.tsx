interface DesignProcessProps {
  isProfessional: boolean;
}

export default function DesignProcess({ isProfessional }: DesignProcessProps) {
  const steps = [
    {
      title: "Discover",
      description: "Understanding user needs, business goals, and technical constraints through research and stakeholder interviews."
    },
    {
      title: "Define",
      description: "Synthesizing insights to create clear problem statements and design requirements that guide the solution."
    },
    {
      title: "Design",
      description: "Iterative prototyping and testing, from low-fidelity wireframes to high-fidelity interactive designs."
    },
    {
      title: "Deliver",
      description: "Collaborating with development teams to ensure seamless implementation and measuring success metrics."
    }
  ];

  const themeStyles = isProfessional
    ? {
        accent: '#B7C9E8',
        line: 'bg-[#B7C9E8]',
        dot: 'bg-[#B7C9E8] border-white'
      }
    : {
        accent: '#243E89',
        line: 'bg-gradient-to-r from-[#243E89] to-[#F472B6]',
        dot: 'bg-gradient-to-r from-[#243E89] to-[#F472B6] border-white'
      };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        {/* Diagonal lines pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                rgba(0,0,0,0.02) 20px,
                rgba(0,0,0,0.02) 21px
              )
            `
          }}
        ></div>
        <div className="absolute top-10 left-10 w-24 h-24 border border-gray-200/50 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-gray-200/50 rotate-12"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-black mb-6">
            Design Process
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to solving complex design challenges with clarity and purpose.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${themeStyles.line} rounded-full`}></div>

          {steps.map((step, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 ${themeStyles.dot} rounded-full border-4 z-10`}></div>

              {/* Content */}
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 px-8">
                  <div className={`p-8 rounded-2xl bg-gray-50 border-2 border-gray-100 transition-all duration-300 hover:shadow-lg ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <h3 className="text-3xl font-semibold text-black mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}