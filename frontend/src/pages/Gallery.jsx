import { useState, useEffect, useCallback } from 'react';
import i02 from '../assets/images/42.jpg';
import i03 from '../assets/images/43.jpg';
import i04 from '../assets/images/41.jpg';
import i5 from '../assets/images/44.jpg';

import i05 from '../assets/images/51.jpg';
import i06 from '../assets/images/56.jpg';
import i07 from '../assets/images/57.jpg';
import i08 from '../assets/images/58.jpg';
import i09 from '../assets/images/59.jpg';
import ap from '../assets/images/52.jpg';
import march from '../assets/images/53.jpg';
import childerns from '../assets/images/54.jpg';
import i10 from '../assets/images/55.jpg';
import i11 from '../assets/images/60.jpg';
import i12 from '../assets/images/45.jpg';




import computer from '../assets/images/84.jpg';
import basket from '../assets/images/82.jpg';
import tailoring from '../assets/images/81.jpg';
import i27 from '../assets/images/82.jpg';


import i21 from '../assets/images/61.jpg';
import i22 from '../assets/images/62.jpg';
import i23 from '../assets/images/63.jpg';
import i24 from '../assets/images/64.jpg';
import i025 from '../assets/images/65.jpg';

import i25 from '../assets/images/75.jpg';
import i26 from '../assets/images/76.jpg';
import mission from '../assets/images/77.jpg';
import lasya from '../assets/images/71.jpg';
import i0025 from '../assets/images/72.jpg';
import i026 from '../assets/images/73.jpg';
import i027 from '../assets/images/71.jpg';



import i28 from '../assets/images/88.jpg';


import i31 from '../assets/images/92.jpg';
import i32 from '../assets/images/91.jpg';
import i33 from '../assets/images/93.jpg';


import i34 from '../assets/images/87.jpg';



import i021 from '../assets/images/96.jpg';
import i35 from '../assets/images/97.jpg';
import i36 from '../assets/images/95.jpg';
import i37 from '../assets/images/99.jpg';
import i38 from '../assets/images/98.jpg';

import i100 from '../assets/images/38.jpg';
import i101 from '../assets/images/23.jpg';
import i102 from '../assets/images/36.jpg';
import i103 from '../assets/images/04.jpg';
import i104 from '../assets/images/05.jpg';
import i105 from '../assets/images/06.jpg';
import i106 from '../assets/images/07.jpg';
import i107 from '../assets/images/08.jpg';
import i108 from '../assets/images/09.jpg';
import i109 from '../assets/images/24.jpg';


const sections = [
  {
    title: 'East and West Godavari',
    subtitle: 'Emergency Flood Relief 2019',
    images: [ap, i02, i03, i04, i5],
  },
  {
    title: 'WATCH organized a Special coaching program',
    subtitle: 'for the youth that focused on English language skills and gender equality',
    images: [i05, i06, i07, i08, i09, march, childerns, computer, i10, i11, i12 ],
  },
  {
    title: '30 free wheelchairs',
    subtitle: 'were distributed to Differently Abled Dalit and Tribal poor children and Adults',
    images: [i21, i22, i23, i24, i025],
  },
  {
    title: 'Kerala cyclone relief in 2018',
    subtitle: 'was done supported by Sign Of Hope Germany',
    images: [i25, i26, mission, lasya, i0025, i026, i027],
  },
  {
    title: 'Women are given tailoring and embroidery classes',
    subtitle: 'for their sustainable development',
    images: [tailoring, basket, computer, i27],
  },
  {
    title: 'Donors from Germany',
    subtitle: 'Emergency Flood Relief for Tamil Nadu following the Michaung Cyclone',
    images: [i100, i101, i102, i103, i104, i105, i106, i107, i108, i109],
  },
  {
    title: 'Donors from Germany',
    subtitle: 'Karunya, Rev. Christoph Haas and their team from EBM',
    images: [i35, i36, i37, i38, i021,],
  },
  {
    title: 'Donors from Korea',
    subtitle: '',
    images: [i31, i32, i33],
  },
];

// Flatten all images for lightbox navigation
const allImages = sections.flatMap(s => s.images);

function Lightbox({ src, index, total, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
      onClick={onClose}
    >
      {/* Prev */}
      <button
        onClick={e => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 text-white text-4xl font-bold w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-secondary rounded-full transition-colors"
      >
        &#8249;
      </button>

      {/* Image */}
      <div className="max-w-4xl max-h-[85vh] px-16" onClick={e => e.stopPropagation()}>
        <img src={src} alt="" className="max-w-full max-h-[85vh] object-contain shadow-2xl" />
        <p className="text-white/60 text-xs text-center mt-2">{index + 1} / {total}</p>
      </div>

      {/* Next */}
      <button
        onClick={e => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 text-white text-4xl font-bold w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-secondary rounded-full transition-colors"
      >
        &#8250;
      </button>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-secondary rounded-full transition-colors"
      >
        &#x2715;
      </button>
    </div>
  );
}

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const openLightbox = useCallback((img) => {
    const idx = allImages.indexOf(img);
    setLightboxIdx(idx >= 0 ? idx : 0);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prevImage = useCallback(() => setLightboxIdx(i => (i - 1 + allImages.length) % allImages.length), []);
  const nextImage = useCallback(() => setLightboxIdx(i => (i + 1) % allImages.length), []);

  return (
    <>
      {lightboxIdx !== null && (
        <Lightbox
          src={allImages[lightboxIdx]}
          index={lightboxIdx}
          total={allImages.length}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

    <div className="max-w-5xl mx-auto py-10 px-6 space-y-12">
      {sections.map((section, i) => (
        <div key={i}>
          {/* Section title */}
          <div className="text-center mb-4">
            <h2 className="text-base font-bold text-gray-800">{section.title}</h2>
            {section.subtitle && (
              <p className="text-xs text-gray-500 italic mt-0.5">{section.subtitle}</p>
            )}
          </div>
          {/* Photos */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1.5">
            {section.images.map((img, j) => (
              <div
                key={j}
                className="overflow-hidden aspect-square group cursor-pointer"
                onClick={() => openLightbox(img)}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          {/* Divider */}
          {i < sections.length - 1 && <hr className="mt-12 border-gray-200" />}
        </div>
      ))}
    </div>
    </>
  );
}
