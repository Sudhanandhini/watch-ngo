import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Hero Slider
const heroSlides = [
  {
    bg: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=80',
    alt: 'Children holding books'
  },
  {
    bg: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1400&q=80',
    alt: 'Community children'
  },
  {
    bg: 'https://images.unsplash.com/photo-1602526429747-ac387a91d43b?w=1400&q=80',
    alt: 'Women empowerment'
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % heroSlides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[350px] md:h-[480px] overflow-hidden">
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.bg} alt={slide.alt} className="w-full h-full object-cover"/>
        </div>
      ))}
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-orange-500' : 'bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
}

// Quick action icons
const actions = [
  { icon: '👥', label: 'VOLUNTEER', link: '/get-involved' },
  { icon: '💝', label: 'DONATE NOW', link: '/get-involved', active: true },
  { icon: '🧒', label: 'SPONSOR A CHILD', link: '/get-involved' },
  { icon: '🌟', label: 'OTHER INITIATIVES', link: '/what-we-do' },
  { icon: '🏆', label: 'AWARDS', link: '/awards' },
];

// Programs
const programs = [
  {
    title: 'Child Rights Protection',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80',
    desc: 'The diverse texture of the communities where we serve has very high instances of child labor, child marriage, child trafficking, child abuse, migrants children...',
    link: '/program',
  },
  {
    title: "Children's Education",
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
    desc: 'WATCH believes that education is the primary driver to a society that is ideal in all aspects. We engage in refining the quality of education and facilitating improvisation of the process...',
    link: '/program',
  },
  {
    title: 'Women & Child Health',
    img: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&q=80',
    desc: 'Developing a healthy community with much needed emphasis on malnourished and vulnerable children is another primary focus area that WATCH is committed to...',
    link: '/program',
  },
];

// Reasons to care
const reasons = [
  { icon: '👩', label: "Women's\nEmpowerment" },
  { icon: '🍽️', label: 'World Hunger' },
  { icon: '📚', label: "Girl's\nEducation" },
  { icon: '🎗️', label: 'HIV & AIDS' },
  { icon: '💧', label: 'Clean Water' },
  { icon: '⚖️', label: 'Poverty &\nSocial Justice' },
  { icon: '🤱', label: 'Maternal\nHealth' },
  { icon: '💍', label: 'Child Marriage' },
  { icon: '💰', label: 'Economic\nDevelopment' },
  { icon: '🌱', label: 'Youth\nEmpowerment' },
  { icon: '✊', label: 'Violence\nAgainst Women' },
  { icon: '🌍', label: 'Climate\nChange' },
];

// Gallery images
const galleryImages = [
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
  'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80',
  'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80',
  'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&q=80',
];

function GallerySlider() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % galleryImages.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-[350px] overflow-hidden">
      {galleryImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={img} alt={`Gallery ${i+1}`} className="w-full h-full object-cover"/>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {galleryImages.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} className={`w-2.5 h-2.5 rounded-full ${i === idx ? 'bg-orange-500' : 'bg-white/60'}`}/>
        ))}
      </div>
    </div>
  );
}

function Counter({ target, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 30);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-primary">{count.toLocaleString()}+</div>
      <div className="text-md text-gray-600 mt-1">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <HeroSlider />

      {/* Quick Action Boxes */}
      <div className="bg-primary">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          {actions.map((a) => (
            <Link
              key={a.label}
              to={a.link}
              className={`flex flex-col items-center justify-center py-5 px-2 text-white text-center gap-2 hover:bg-orange-500 transition-colors ${a.active ? 'bg-orange-500' : ''}`}
            >
              <span className="text-2xl">{a.icon}</span>
              <span className="text-xs font-bold uppercase tracking-wide leading-tight">{a.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mission + Events + Success */}
      <div className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Our Mission */}
          <div>
            <div className="text-center mb-5">
              <span className="inline-block bg-orange-500 text-white text-md font-bold uppercase tracking-widest px-6 py-2">OUR MISSION</span>
            </div>
            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&q=80"
                alt="Mission"
                className="w-36 h-36 object-cover flex-shrink-0"
              />
              <p className="text-md text-gray-700 leading-relaxed">
                WATCH was initiated in 1993 and registered under the Society's Registration Act of 1860 by a group of dedicated, educated and experienced like-minded women under the able leadership of Ms. P. Sree Latha. She suffered all forms of deprivation, discrimination and exploitation. She was a lecturer in nursing. She resigned her job and dedicated her life towards women's liberation and education. The programme now operated by strengthening Dalit & Tribal women's status and Child Protection in these communities of Bangarupalayam, Valamanor, Gangavarami and Peddal Panjam Mandals of Chittoor District, Andhra Pradesh.
              </p>
            </div>
          </div>

          {/* Featured Events + Success Stories */}
          <div className="space-y-4">
            <div>
              <div className="text-center mb-3">
                <span className="inline-block bg-orange-500 text-white text-md font-bold uppercase tracking-widest px-6 py-2">FEATURED EVENTS</span>
              </div>
              <div className="bg-[#1a7fa0] text-white p-4 flex items-center gap-4">
                <div className="bg-orange-500 p-3 flex-shrink-0">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-md">Women & child Right</p>
                  <p className="text-xs text-gray-200">Venue</p>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 uppercase">JOIN NOW</button>
              </div>
            </div>

            <div>
              <div className="text-center mb-3">
                <span className="inline-block bg-orange-500 text-white text-md font-bold uppercase tracking-widest px-6 py-2">SUCCESS STORIES</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=200&q=80', cap: 'Inspiring story of Leena and Rewathi' },
                  { img: 'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?w=200&q=80', cap: 'East and West Godavari Emergency Flood Relief 2019' },
                  { img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=200&q=80', cap: 'WATCH program English for...' },
                ].map((s, i) => (
                  <div key={i} className="relative group cursor-pointer overflow-hidden">
                    <img src={s.img} alt={s.cap} className="w-full h-20 object-cover group-hover:scale-105 transition-transform"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-1">
                      <p className="text-white text-[9px] leading-tight">{s.cap}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Programs */}
      <div className="py-12 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block bg-orange-500 text-white text-md font-bold uppercase tracking-widest px-8 py-2">OUR PROGRAMS</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.title} className="bg-white shadow-md overflow-hidden program-card">
                <div className="relative">
                  <img src={p.img} alt={p.title} className="w-full h-48 object-cover"/>
                  <div className="absolute top-0 left-0 right-0 bg-primary/80 py-2 px-3">
                    <h3 className="text-white text-md font-semibold text-center">{p.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
                  <Link to={p.link} className="inline-block mt-3 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase px-4 py-1.5 transition-colors">
                    READ MORE
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* So Many Reasons To Care */}
      <div className="py-14 px-4 bg-[#1a5fb4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-orange-400 mb-10 uppercase tracking-wider">
            SO MANY REASONS TO CARE
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
            {reasons.map((r) => (
              <div key={r.label} className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-16 h-16 hex-icon bg-transparent border-2 border-white flex items-center justify-center group-hover:bg-orange-500 transition-colors"
                  style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
                  <span className="text-2xl">{r.icon}</span>
                </div>
                <p className="text-white text-xs text-center font-medium leading-tight whitespace-pre-line">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-[#f5e6d3]">
        <div className="max-w-5xl mx-auto py-6 px-4">
          <div className="text-center mb-4">
            <Link to="/resources" className="inline-block border-2 border-orange-500 text-orange-500 text-md font-bold uppercase tracking-widest px-8 py-2 hover:bg-orange-500 hover:text-white transition-colors">
              GALLERY
            </Link>
          </div>
          <GallerySlider />
        </div>
      </div>
    </div>
  );
}
