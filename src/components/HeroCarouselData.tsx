// HERO CAROUSEL DATA - COMPLETELY INDEPENDENT
// DO NOT USE THIS IN ANY OTHER COMPONENT

// Import hero portrait images - UPDATED WITH CONFIRMED PATHS
import heroPortrait1 from '../assets/8f59f71c5b051872ab803dd6433d5e3e32b814c3.png';
import heroPortrait2 from '../assets/c6d3f61d765126f6c9120bc5b95bed2ae653b446.png';
import heroPortrait3 from '../assets/db6354578bb104fd2b90528298606ef59be69029.png';
// Placeholders for remaining 3 images - awaiting upload
import heroPortrait4 from '../assets/8f59f71c5b051872ab803dd6433d5e3e32b814c3.png';
import heroPortrait5 from '../assets/c6d3f61d765126f6c9120bc5b95bed2ae653b446.png';
import heroPortrait6 from '../assets/db6354578bb104fd2b90528298606ef59be69029.png';

export interface HeroCarouselImage {
  heroId: string;
  heroSrc: string;
  heroAlt: string;
}

export const HERO_ROTATION_IMAGES: HeroCarouselImage[] = [
  {
    heroId: 'portrait-1',
    heroSrc: heroPortrait1,
    heroAlt: 'Hemanth Portrait 1'
  },
  {
    heroId: 'portrait-2',
    heroSrc: heroPortrait2,
    heroAlt: 'Hemanth Portrait 2'
  },
  {
    heroId: 'portrait-3',
    heroSrc: heroPortrait3,
    heroAlt: 'Hemanth Portrait 3'
  },
  {
    heroId: 'portrait-4',
    heroSrc: heroPortrait4,
    heroAlt: 'Hemanth Portrait 4'
  },
  {
    heroId: 'portrait-5',
    heroSrc: heroPortrait5,
    heroAlt: 'Hemanth Portrait 5'
  },
  {
    heroId: 'portrait-6',
    heroSrc: heroPortrait6,
    heroAlt: 'Hemanth Portrait 6'
  }
];

export const HERO_TRANSITION_DURATION = 1200; // 1.2 seconds
