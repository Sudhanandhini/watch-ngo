import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../assets/images/bannernew1.jpg';
import banner2 from '../assets/images/bannernew2.jpg';
import banner3 from '../assets/images/ban3.jpg';
import banner4 from '../assets/images/ban4.jpg';
import imgVolunteer from '../assets/images/vol-300x192.jpg';
import imgDonate from '../assets/images/donate.jpg';
import imgSponsor from '../assets/images/spouncer-300x192.jpg';
import imgOthers from '../assets/images/others-300x192.jpg';
import imgAwards from '../assets/images/awards-300x192.jpg';
import imgMission from '../assets/images/our-mission.jpg';
import watGif from '../assets/images/wat1.gif';
import imgProgram1 from '../assets/images/march.jpg';
import imgProgram2 from '../assets/images/09.jpg';
import imgProgram3 from '../assets/images/childerns.jpg';

import img1 from '../assets/images/02.jpg'; 
import img2 from '../assets/images/03.jpg';
import img3 from '../assets/images/04.jpg';
import img4 from '../assets/images/05.jpg';
import img5 from '../assets/images/06.jpg';
import img6 from '../assets/images/07.jpg';
import img7 from '../assets/images/08.jpg';
import img8 from '../assets/images/09.jpg';



// Hero Slider
const heroSlides = [
  { bg: banner1, alt: 'Banner 1' },
  { bg: banner2, alt: 'Banner 2' },
  { bg: banner3, alt: 'Banner 3' },
  { bg: banner4, alt: 'Banner 4' },
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
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-secondary' : 'bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
}

// Quick action icons
const actions = [
  { img: imgVolunteer, label: 'VOLUNTEER', link: '/get-involved' },
  { img: imgDonate, label: 'DONATE NOW', link: '/get-involved', active: true },
  { img: imgSponsor, label: 'SPONSOR A CHILD', link: '/get-involved' },
  { img: imgOthers, label: 'OTHER INITIATIVES', link: '/what-we-do' },
  { img: imgAwards, label: 'AWARDS', link: '/awards' },
];

// Programs
const programs = [
  {
    title: 'Child Rights Protection',
    img: imgProgram1,
    desc: 'The diverse texture of the communities where we serve has very high instances of child labor, child marriage, child trafficking, child abuse, migrants children...',
    link: '/program',
  },
  {
    title: "Children's Education",
    img: imgProgram2,
    desc: 'WATCH believes that education is the primary driver to a society that is ideal in all aspects. We engage in refining the quality of education and facilitating improvisation of the process...',
    link: '/program',
  },
  {
    title: 'Women & Child Health',
    img: imgProgram3,
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
  img1, img2, img3, img4, img5, img6, img7, img8, 
];

function GallerySlider() {
  const pairs = [];
  for (let i = 0; i < galleryImages.length; i += 2) pairs.push([galleryImages[i], galleryImages[i + 1]].filter(Boolean));
  const total = pairs.length;
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % total), 4000);
    return () => clearInterval(t);
  }, [total]);
  const prev = () => setIdx(p => (p - 1 + total) % total);
  const next = () => setIdx(p => (p + 1) % total);

  return (
    <div className="relative">
      {/* Images pair */}
      <div className="flex gap-4 items-stretch">
        {/* Left arrow */}
        <button onClick={prev} className="flex-shrink-0 self-center w-10 h-10 bg-white/80 hover:bg-secondary hover:text-white text-gray-700 flex items-center justify-center shadow transition-colors text-xl font-bold rounded-sm">
          &#8249;
        </button>
        <div className="flex gap-4 flex-1 overflow-hidden">
          {pairs[idx]?.map((img, i) => (
            <div key={i} className="flex-1 overflow-hidden">
              <img src={img} alt={`Gallery ${idx * 2 + i + 1}`} className="w-full h-[370px] object-cover" />
            </div>
          ))}
        </div>
        {/* Right arrow */}
        <button onClick={next} className="flex-shrink-0 self-center w-10 h-10 bg-white/80 hover:bg-secondary hover:text-white text-gray-700 flex items-center justify-center shadow transition-colors text-xl font-bold rounded-sm">
          &#8250;
        </button>
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {pairs.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} className={`w-4 h-4 rounded-full border-2 border-gray-400 transition-colors ${i === idx ? 'bg-secondary border-secondary' : 'bg-white'}`} />
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
      <div className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {actions.map((a) => (
            <Link
              key={a.label}
              to={a.link}
              className={`flex flex-col items-center justify-center text-white text-center gap-2 `}
            >
              <img src={a.img} alt={a.label} className="w-full h-auto object-cover rounded" />
             
            </Link>
          ))}
        </div>
      </div>

      {/* Mission + Events + Success */}
      <div className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* OUR MISSION — teal rounded card, full height */}
          <div className="relative mt-5 flex flex-col">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
              <span className="bg-secondary text-white text-sm font-bold uppercase tracking-widest px-10 py-2.5 rounded-full whitespace-nowrap shadow">OUR MISSION</span>
            </div>
            <div className="bg-teal rounded-xl overflow-hidden flex flex-col flex-1 pt-6">
              <img src={imgMission} alt="Our Mission" className="w-full h-60 object-cover" />
              <p className="text-sm leading-relaxed p-5 text-white text-justify flex-1">
                WATCH was initiated in 1993 and registered under the Society's Registration Act of 1860 by a group of dedicated, educated and experienced like-minded women under the able leadership of Ms. P. Sree Latha. She suffered all forms of deprivation, discrimination and exploitation. She was a lecturer in nursing. She resigned her job and dedicated her life towards women's liberation and empowerment. The programme now operated by strengthening Dalit & Tribal women's status and Child Rights Protection in these communities of Bangarupalayam, Palamaner, Gangavaram and Pedda Panjani Mandals of Chittoor District, Andhra Pradesh.
              </p>
            </div>
          </div>

          {/* Right column — FEATURED EVENTS + SUCCESS STORIES, same total height as left */}
          <div className="flex flex-col gap-5 mt-5">

            {/* FEATURED EVENTS — teal rounded card */}
            <div className="relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-secondary text-white text-sm font-bold uppercase tracking-widest px-10 py-2.5 rounded-full whitespace-nowrap shadow">FEATURED EVENTS</span>
              </div>
              <div className="bg-teal rounded-xl overflow-hidden pt-6 pb-5 px-4">
                <div className="flex items-center gap-4">
                  <div className="bg-pink-600 w-28 h-24 flex-shrink-0 flex flex-col items-center justify-center p-2 text-center rounded">
                    <p className="text-white text-[10px] font-bold uppercase leading-tight mb-2">WOMAN AND CHILD RIGHT</p>
                    <svg className="w-9 h-9 fill-white" viewBox="0 0 64 64">
                      <path d="M32 4C20 4 16 14 16 22c0 6 3 11 8 14v4H24v4h4v4h8v-4h4v-4h-4v-4c5-3 8-8 8-14 0-8-4-18-12-18zm0 4c5 0 8 7 8 14 0 5-3 9-8 11-5-2-8-6-8-11 0-7 3-14 8-14z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-lg text-white">Women &amp; child Right</p>
                    <p className="text-sm text-white/70 mt-1">Venue</p>
                  </div>
                  <button className="bg-secondary hover:bg-secondary-dark text-white text-sm font-bold px-6 py-2.5 uppercase flex-shrink-0 transition-colors rounded-sm">JOIN NOW</button>
                </div>
              </div>
            </div>

            {/* SUCCESS STORIES — teal rounded card, fills remaining height */}
            <div className="relative flex flex-col flex-1">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-secondary text-white text-sm font-bold uppercase tracking-widest px-10 py-2.5 rounded-full whitespace-nowrap shadow">SUCCESS STORIES</span>
              </div>
              <div className="bg-teal rounded-xl overflow-hidden flex flex-col flex-1 pt-6 pb-4 px-4">
                <div className="flex items-center justify-end mb-3">
                  <div className="flex gap-1">
                    <button className="w-7 h-7 bg-white/20 hover:bg-secondary text-white flex items-center justify-center transition-colors rounded-sm font-bold text-base">&#8249;</button>
                    <button className="w-7 h-7 bg-white/20 hover:bg-secondary text-white flex items-center justify-center transition-colors rounded-sm font-bold text-base">&#8250;</button>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 flex-1">
                  {[
                    { img: img1, cap: 'East and West Godavari Emergency Flood Relief 2019' },
                    { img: img2, cap: 'WATCH organized a Special coaching program focused on English language skills and gender equality' },
                    { img: img3, cap: '30 free Vocational Training for Different communities' },
                  ].map((s, i) => (
                    <div key={i} className="cursor-pointer group overflow-hidden rounded-lg">
                      <img src={s.img} alt={s.cap} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg" />
                      <p className="text-xs text-white/90 mt-2 leading-tight text-center px-1">{s.cap}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Our Programs */}
      <div className="py-12 px-4" style={{ backgroundColor: '#7B7C6D' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="bg-secondary text-white text-sm font-bold uppercase tracking-widest px-10 py-2.5 rounded-full shadow">OUR PROGRAMS</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.title} className="bg-white overflow-hidden flex flex-col shadow-lg program-card border-t-[6px] border-secondary">
                {/* Title on white */}
                <div className="px-4 py-3 text-center bg-white">
                  <h3 className="text-gray-800 text-base font-semibold">{p.title}</h3>
                </div>
                {/* Image */}
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
                {/* Description */}
                <div className="p-4 flex flex-col flex-1 items-center">
                  <p className="text-sm text-gray-600 leading-relaxed text-justify flex-1">{p.desc}</p>
                  <Link to={p.link} className="mt-4 bg-secondary hover:bg-secondary-dark text-white text-xs font-bold uppercase px-6 py-2 transition-colors">
                    READ MORE
                  </Link>
                </div>
                {/* Orange bottom bar */}
                <div className="bg-secondary h-[6px]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* wat1.gif arch decoration */}
      <div className="w-full overflow-hidden" style={{ backgroundColor: '#7B7C6D' }}>
        <img src={watGif} alt="" className="w-full h-auto object-cover" />
      </div>


      {/* Gallery */}
      <div className="bg-[#f5e6d3] py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <Link to="/resources" className="inline-block bg-secondary hover:bg-secondary-dark text-white text-sm font-bold uppercase tracking-widest px-10 py-2.5 rounded-full shadow transition-colors">
              GALLERY
            </Link>
          </div>
          <GallerySlider />
        </div>
      </div>
    </div>
  );
}
