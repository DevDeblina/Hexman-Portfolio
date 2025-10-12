import ScrollReveal from './ScrollReveal';
import superiorManImage from '../assets/eb79eb1902a3c1d73718f7907c79ec36efb1b6db.png';
import navalImage from '../assets/adc7a71ee46c21ddea16e27987037a7baa9bfbdf.png';
import carnegieImage from '../assets/c56dc808819ac6d8f4b80527c5f76c9bfe1ddd05.png';


const books = [
  {
    rank: 2,
    emoji: '🥈',
    title: 'The Almanack of Naval Ravikant',
    author: 'Eric Jorgenson',
    image: navalImage
  },
  {
    rank: 1,
    emoji: '🥇',
    title: 'The Way of The Superior Man',
    author: 'David Deida',
    image: superiorManImage
  },
  {
    rank: 3,
    emoji: '🥉',
    title: 'How to Win Friends and Influence People',
    author: 'Dale Carnegie',
    image: carnegieImage
  }
];

interface TopBooksProps {
  isProfessional: boolean;
}

export default function TopBooks({ isProfessional }: TopBooksProps) {
  // Sort books by rank for mobile display (1, 2, 3 order)
  const sortedBooks = [...books].sort((a, b) => a.rank - b.rank);
  
  return (
    <section className="py-12 md:py-20 px-6 md:px-12 bg-white">
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
              My Top 3 Books
            </h2>
            <p 
              className="max-w-3xl"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                color: '#64748B',
                lineHeight: 1.6
              }}
            >
              Books I Keep Going Back To
            </p>
          </div>
        </ScrollReveal>

        {/* Books Grid - Mobile (sorted by rank 1,2,3) */}
        <div className="flex flex-col gap-6 md:hidden">
          {sortedBooks.map((book, index) => (
            <ScrollReveal 
              key={book.rank} 
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
                    {book.emoji}
                  </span>
                </div>

                {/* Book Image - Takes most of the space */}
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Book Info - Compact */}
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
                    {book.title}
                  </h3>
                  
                  <p 
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: '#64748B',
                      lineHeight: 1.4
                    }}
                  >
                    {book.author}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Books Grid - Desktop (original order with #1 centered) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:items-end">
          {books.map((book, index) => (
            <ScrollReveal 
              key={book.rank} 
              animation="fadeUp" 
              delay={index * 0.15}
            >
              <div 
                className={`group relative bg-white rounded-xl overflow-hidden border-2 border-gray-100 hover:border-[#243E89] transition-all duration-500 hover:shadow-2xl ${
                  book.rank === 1 ? 'md:-translate-y-6' : ''
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
                    {book.emoji}
                  </span>
                </div>

                {/* Book Image - Takes most of the space */}
                <div className={`aspect-[3/4] ${book.rank === 1 ? 'md:aspect-[3/4.5]' : ''} overflow-hidden bg-gray-100`}>
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Book Info - Compact */}
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
                    {book.title}
                  </h3>
                  
                  <p 
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: '#64748B',
                      lineHeight: 1.4
                    }}
                  >
                    {book.author}
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
