import { CAMERA_MOMENTS } from './CameraRollData';

interface PhotoGalleryProps {
  isProfessional: boolean;
}

export default function PhotoGallery({ isProfessional: _isProfessional }: PhotoGalleryProps) {
  // TODO: Use isProfessional prop for theme-based styling
  return (
    <section className="py-12 md:py-20 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
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
            From My Camera Roll
          </h2>
          <p 
            className="max-w-3xl"
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              color: '#64748B',
              lineHeight: 1.6
            }}
          >
            A mix of moments, memories, and random frames that tell my story.
          </p>
        </div>

        {/* Photo Grid - CAMERA ROLL STATIC GALLERY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAMERA_MOMENTS.map((rollPhoto) => (
            <div 
              key={rollPhoto.rollId} 
              className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100"
            >
              <img 
                src={rollPhoto.rollImagePath} 
                alt={rollPhoto.rollCaption}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
