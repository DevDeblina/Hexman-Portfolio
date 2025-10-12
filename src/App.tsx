import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LifeHero from './components/LifeHero';
import CaseStudies from './components/CaseStudies';
import DesignStack from './components/DesignStack';
import WorkExperience from './components/WorkExperience';
import TopBooks from './components/TopBooks';
import TopAnime from './components/TopAnime';
import PhotoGallery from './components/PhotoGallery';
import GetInTouch from './components/GetInTouch';

export default function App() {
  const [isProfessional, setIsProfessional] = useState(true);

  const handleThemeToggle = () => {
    setIsProfessional(!isProfessional);
  };

  return (
    <div className="min-h-screen bg-white font-['Satoshi',sans-serif]">
      {/* Custom CSS for Satoshi font */}
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,800,900&display=swap');
        
        * {
          font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
      `}</style>

      <Header isProfessional={isProfessional} onThemeToggle={handleThemeToggle} />
      
      <main>
        {isProfessional ? (
          // Work Page
          <>
            <Hero isProfessional={isProfessional} />
            <CaseStudies isProfessional={isProfessional} />
            <DesignStack isProfessional={isProfessional} />
            <WorkExperience isProfessional={isProfessional} />
            <GetInTouch isProfessional={isProfessional} />
          </>
        ) : (
          // Life Page
          <>
            <LifeHero isProfessional={isProfessional} />
            <TopBooks isProfessional={isProfessional} />
            <TopAnime isProfessional={isProfessional} />
            <PhotoGallery isProfessional={isProfessional} />
            <GetInTouch isProfessional={isProfessional} />
          </>
        )}
        {/* <About isProfessional={isProfessional} />
        <FeaturedProjects isProfessional={isProfessional} />
        <DesignProcess isProfessional={isProfessional} /> */}
      </main>
      
      {/* <Footer isProfessional={isProfessional} /> */}
    </div>
  );
}