import { Mail, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import ScrollReveal from './ScrollReveal';

interface GetInTouchProps {
  isProfessional: boolean;
}

export default function GetInTouch({ isProfessional }: GetInTouchProps) {
  const allSocialLinks = {
    email: {
      name: 'Email',
      icon: Mail,
      url: 'mailto:hemxnth434@gmail.com',
      color: '#243E89',
      hoverColor: '#1B2F6B'
    },
    linkedin: {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/hexman/',
      color: '#243E89',
      hoverColor: '#1B2F6B'
    },
    instagram: {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/hemxnth.04/',
      color: '#243E89',
      hoverColor: '#1B2F6B'
    },
    behance: {
      name: 'Behance',
      icon: ({ size, className }: { size?: number; className?: string }) => (
        <svg 
          width={size || 24} 
          height={size || 24} 
          viewBox="0 0 24 24" 
          fill="none" 
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M6.5 4C4.567 4 3 5.567 3 7.5V16.5C3 18.433 4.567 20 6.5 20H17.5C19.433 20 21 18.433 21 16.5V7.5C21 5.567 19.433 4 17.5 4H6.5ZM9.5 7.5C10.163 7.5 10.75 7.663 11.25 8C11.75 8.337 12.087 8.837 12.25 9.5C12.413 10.163 12.413 10.837 12.25 11.5C12.087 12.163 11.75 12.663 11.25 13C11.75 13.337 12.087 13.837 12.25 14.5C12.413 15.163 12.413 15.837 12.25 16.5C12.087 17.163 11.75 17.663 11.25 18C10.75 18.337 10.163 18.5 9.5 18.5H6V7.5H9.5ZM15 8H19V9H15V8ZM7.5 9V11.5H9.5C9.8 11.5 10 11.4 10.2 11.2C10.4 11 10.5 10.8 10.5 10.5C10.5 10.2 10.4 10 10.2 9.8C10 9.6 9.8 9.5 9.5 9.5H7.5V9ZM16.5 10C17.163 10 17.75 10.163 18.25 10.5C18.75 10.837 19.087 11.337 19.25 12C19.413 12.663 19.413 13.337 19.25 14C19.087 14.663 18.75 15.163 18.25 15.5C17.75 15.837 17.163 16 16.5 16C15.837 16 15.25 15.837 14.75 15.5C14.25 15.163 13.913 14.663 13.75 14H15.5C15.6 14.3 15.8 14.5 16.5 14.5C16.8 14.5 17 14.4 17.2 14.2C17.4 14 17.5 13.8 17.5 13.5H13.5C13.5 12.837 13.663 12.25 14 11.75C14.337 11.25 14.837 10.913 15.5 10.5C15.837 10.337 16.163 10 16.5 10ZM16.5 11.5C16.2 11.5 16 11.6 15.8 11.8C15.6 12 15.5 12.2 15.5 12.5H17.5C17.5 12.2 17.4 12 17.2 11.8C17 11.6 16.8 11.5 16.5 11.5ZM7.5 13V16.5H9.5C9.8 16.5 10 16.4 10.2 16.2C10.4 16 10.5 15.8 10.5 15.5C10.5 15.2 10.4 15 10.2 14.8C10 14.6 9.8 14.5 9.5 14.5H7.5V13Z" 
            fill="currentColor"
          />
        </svg>
      ),
      url: 'https://www.behance.net/hexman04',
      color: '#243E89',
      hoverColor: '#1B2F6B'
    }
  };

  // Different order for Work vs Life
  // Work: Email, LinkedIn, Behance, Instagram
  // Life: Instagram, LinkedIn, Behance, Email
  const socialLinks = isProfessional 
    ? [allSocialLinks.email, allSocialLinks.linkedin, allSocialLinks.behance, allSocialLinks.instagram]
    : [allSocialLinks.instagram, allSocialLinks.linkedin, allSocialLinks.behance, allSocialLinks.email];

  return (
    <>
    <section data-contact-section className="relative py-12 md:py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal animation="scaleUp">
          <div className="text-center mb-12">
            <h2 
              className="mb-4"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
                fontWeight: 700,
                color: '#000000',
                lineHeight: 1.2
              }}
            >
              {isProfessional ? "Let's Build, Talk, or Just Create Something Cool" : "Let's Talk Design, Stories, or Gym Routines"}
            </h2>
            <p 
              className="max-w-4xl mx-auto"
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                fontWeight: 400,
                color: '#64748B',
                lineHeight: 1.6
              }}
            >
              {isProfessional 
                ? (
                  <>
                    Whether it's a product, an interface, or just a spark of an idea, I'm always up for
                    <br />
                    conversations that turn design thinking into something real.
                  </>
                )
                : "Whether it's workouts, anime debates, or a great movie recommendation, I'm always up for good conversations."}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-10">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#243E89] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div 
                      className="w-14 h-14 rounded-xl bg-gray-50 group-hover:bg-[#243E89] flex items-center justify-center transition-all duration-300"
                    >
                      <Icon 
                        size={28} 
                        className="text-[#243E89] group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <span 
                      className="group-hover:text-[#243E89] transition-colors duration-300"
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#334155'
                      }}
                    >
                      {social.name}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </ScrollReveal>

        {isProfessional ? (
          // Work Page - Remove primary CTA, only show tertiary CTA to Life page
          <div className="text-center">
            <p 
              className="mb-4"
              style={{
                fontSize: '1.125rem',
                fontWeight: 500,
                color: '#64748B'
              }}
            >
              Curious about the person behind Hexman?
            </p>
            <a
              href="#life"
              onClick={(e) => {
                e.preventDefault();
                // Switch to Life page and scroll to top
                const themeToggle = document.querySelector('[data-theme-toggle]') as HTMLElement;
                if (themeToggle) {
                  themeToggle.click();
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="inline-flex items-center gap-2 text-[#243E89] hover:text-[#243E89] transition-colors duration-300 group"
              style={{
                fontSize: '1.125rem',
                fontWeight: 600
              }}
            >
              Explore my Life Page
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </a>
          </div>
        ) : (
          // Life Page - Show footer text and tertiary CTA to Work page
          <div className="text-center">
            <p 
              className="mb-4"
              style={{
                fontSize: '1.125rem',
                fontWeight: 500,
                color: '#64748B'
              }}
            >
              Get to know my professional life
            </p>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                // Switch to Work page and scroll to top
                const themeToggle = document.querySelector('[data-theme-toggle]') as HTMLElement;
                if (themeToggle) {
                  themeToggle.click();
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="inline-flex items-center gap-2 text-[#243E89] hover:text-[#243E89] transition-colors duration-300 group"
              style={{
                fontSize: '1.125rem',
                fontWeight: 600
              }}
            >
              Go to Work Page
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </a>
          </div>
        )}
      </div>
    </section>

    {/* Footer Border Section */}
    <div className="w-full bg-[#243E89] py-2.5 px-6">
      <p 
        className="text-center text-white"
        style={{
          fontSize: '0.875rem',
          fontWeight: 400,
          lineHeight: 1.5
        }}
      >
        Not your average template build, designed and built from scratch
      </p>
    </div>
    </>
  );
}