import ScrollReveal from './ScrollReveal';
import onePieceImage from '../assets/8470c639c02dfc5feda8f094b1aea5d80cbd94ec.png';
import narutoImage from '../assets/8efa0e1ac90a2dd149a03c8103f2619c6bad6b59.png';
import vinlandSagaImage from '../assets/065c071d99100c6030d463e5b5e4557e8b713489.png';


const animeList = [
  {
    rank: 2,
    emoji: '🥈',
    title: 'Naruto',
    genre: 'Perseverance, Friendship & Rivalry',
    image: narutoImage
  },
  {
    rank: 1,
    emoji: '🥇',
    title: 'One Piece',
    genre: 'Adventure, Freedom & Dreams, Values',
    image: onePieceImage
  },
  {
    rank: 3,
    emoji: '🥉',
    title: 'Vinland Saga',
    genre: 'Philosophy of Strength, War & Peace',
    image: vinlandSagaImage
  }
];

interface TopAnimeProps {
  isProfessional: boolean;
}

export default function TopAnime({ isProfessional: _isProfessional }: TopAnimeProps) {
  // TODO: Use isProfessional prop for theme-based styling
  // Sort anime by rank for mobile display (1, 2, 3 order)
  const sortedAnime = [...animeList].sort((a, b) => a.rank - b.rank);
  
  return (
    <section className="py-12 md:py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <ScrollReveal animation="fadeUp">
          <div className="mb-12">
            <h2 
              className="mb-2"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                color: '#243E89',
                lineHeight: 1.2
              }}
            >
              My Top 3 Anime
            </h2>
            <p 
              className="max-w-3xl"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                color: '#64748B',
                lineHeight: 1.6
              }}
            >
              Anime I'll Never Get Over
            </p>
          </div>
        </ScrollReveal>

        {/* Anime Grid - Mobile (sorted by rank 1,2,3) */}
        <div className="flex flex-col gap-6 md:hidden">
          {sortedAnime.map((anime, index) => (
            <ScrollReveal 
              key={anime.rank} 
              animation="fadeUp" 
              delay={index * 0.15}
            >
              <div 
                className="group relative bg-white rounded-xl overflow-hidden border-2 border-gray-100 hover:border-[#243E89] transition-all duration-500 hover:shadow-2xl"
              >
                {/* Rank Badge with white background and black outline */}
                <div 
                  className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: 'white',
                    boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <span 
                    style={{
                      fontSize: '1.5rem'
                    }}
                  >
                    {anime.emoji}
                  </span>
                </div>

                {/* Anime Image - Takes most of the space */}
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img 
                    src={anime.image} 
                    alt={anime.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Anime Info - Compact */}
                <div className="p-5">
                  <h3 
                    className="mb-1 group-hover:text-[#243E89] transition-colors duration-300"
                    style={{
                      fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)',
                      fontWeight: 700,
                      color: '#1E293B',
                      lineHeight: 1.3
                    }}
                  >
                    {anime.title}
                  </h3>
                  
                  <p 
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: '#64748B',
                      lineHeight: 1.4
                    }}
                  >
                    {anime.genre}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Anime Grid - Desktop (original order with #1 centered) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:items-end">
          {animeList.map((anime, index) => (
            <ScrollReveal 
              key={anime.rank} 
              animation="fadeUp" 
              delay={index * 0.15}
            >
              <div 
                className={`group relative bg-white rounded-xl overflow-hidden border-2 border-gray-100 hover:border-[#243E89] transition-all duration-500 hover:shadow-2xl ${
                  anime.rank === 1 ? 'md:-translate-y-6' : ''
                }`}
              >
                {/* Rank Badge with white background and black outline */}
                <div 
                  className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: 'white',
                    boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <span 
                    style={{
                      fontSize: '1.5rem'
                    }}
                  >
                    {anime.emoji}
                  </span>
                </div>

                {/* Anime Image - Takes most of the space */}
                <div className={`aspect-[3/4] ${anime.rank === 1 ? 'md:aspect-[3/4.5]' : ''} overflow-hidden bg-gray-100`}>
                  <img 
                    src={anime.image} 
                    alt={anime.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Anime Info - Compact */}
                <div className="p-5">
                  <h3 
                    className="mb-1 group-hover:text-[#243E89] transition-colors duration-300"
                    style={{
                      fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)',
                      fontWeight: 700,
                      color: '#1E293B',
                      lineHeight: 1.3
                    }}
                  >
                    {anime.title}
                  </h3>
                  
                  <p 
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: '#64748B',
                      lineHeight: 1.4
                    }}
                  >
                    {anime.genre}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
