import { Link } from 'react-router-dom';
import imgLasya from '../assets/images/lasya.jpg';
import imgFlood from '../assets/images/ap.jpg';
import imgCoaching from '../assets/images/09.jpg';
import imgWheelchair from '../assets/images/childerns.jpg';
import imgKerala from '../assets/images/march.jpg';
import imgTailoring from '../assets/images/tailoring.jpg';
import imgCyclone from '../assets/images/our-mission.jpg';

const stories = [
  {
    img: imgLasya,
    title: 'The inspiring story of Lasya and Revathi showcases their unwavering determination and refusal to give up despite the formidable challenges they faced',
    desc: 'Lasya, a 14-year-old from Tambuganipalli, faced immense hardship despite being the top student in her 9th-grade class at Government High School. As a Dalit.',
  },
  {
    img: imgFlood,
    title: 'East and West Godavari Emergency Flood Relief 2019',
    desc: 'In 2019, Andhra Pradesh experienced some of its worst floods, severely affecting the East and West Godavari districts.',
  },
  {
    img: imgCoaching,
    title: 'WATCH organized a Special coaching program for the youth that focused on English language skills and gender equality',
    desc: 'WATCH organized a Special coaching program for the youth that focused on English language skills and gender equality. The program focused on improving the quality of life for the underserved.',
  },
  {
    img: imgWheelchair,
    title: '30 free wheelchairs were distributed to Differently Abled Dalit and Tribal poor children and Adults',
    desc: 'Under the leadership of Indian Christian Ministries, the charitable organization WATCH orchestrated a heartwarming initiative to distribute 30 free wheelchairs to Differently Abled Dalit and Tribal poor children and Adults in Bangarupalayam, Palamaner and Chittoor rural mandals of Chittoor District of Andhra Pradesh.',
  },
  {
    img: imgKerala,
    title: 'Kerala cyclone relief in 2018 was done supported by Sign Of Hope Germany',
    desc: 'In response to the 2018 cyclones in Kerala, WATCH NGO played a pivotal role in the relief and rehabilitation efforts. Collaborating with 18 volunteers and supported by Sign of Hope, Germany, the WATCH team provided essential relief materials to those affected by the floods.',
  },
  {
    img: imgTailoring,
    title: '"Sewing Success" tells the story of a Tribal woman crafting futures through tailoring ventures.',
    desc: 'In Gowrinarayanapuram, a rural village in Andhra Pradesh, India, Manjula lives with her husband, a daily laborer, and their two daughters. The village, largely a Tribal colony, faces economic hardships, with many women struggling to support their families. To address these challenges, WATCH launched an Income Generation program to empower women through entrepreneurship.',
  },
  {
    img: imgCyclone,
    title: 'Emergency Flood Relief for Tamil Nadu Following the Michaung Cyclone.',
    desc: 'In December 2023, the Michaung Cyclone struck Sholinganallur-Chennamcherry, in Chennai in the state of Tamil Nadu, devastating thousands of lives, livelihoods, and homes. WATCH (Women\'s Association for Liberation Transformation and Community Health) supported by Sign of Hope, Germany, provided tailored relief materials to support victims and impoverished families affected by the cyclone.',
  },
];

export default function SuccessStories() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 space-y-10">
      {stories.map((story, i) => (
        <div key={i} className="flex flex-col md:flex-row gap-6 items-start border-b border-gray-100 pb-10">
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-72">
            <img src={story.img} alt={story.title} className="w-full h-auto object-cover shadow" />
          </div>
          {/* Content */}
          <div className="flex-1">
            <h2 className="text-base font-bold text-gray-800 leading-snug mb-3 text-justify">{story.title}</h2>
            <p className="text-md text-gray-600 leading-relaxed text-justify mb-3">{story.desc}</p>
            <a href="#" className="text-teal text-sm font-medium hover:underline">Read More</a>
          </div>
        </div>
      ))}
    </div>
  );
}
