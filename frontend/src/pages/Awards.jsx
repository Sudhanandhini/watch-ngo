import p1 from '../assets/images/21.jpg';
import p2 from '../assets/images/22.jpg';
import p3 from '../assets/images/23.jpg';
import p4 from '../assets/images/24.jpg';
import p5 from '../assets/images/25.jpg';
import p6 from '../assets/images/26.jpg';
import p7 from '../assets/images/27.jpg';
import p8 from '../assets/images/28.jpg';

const awardSections = [
  {
    images: [p1, p2],
    layout: 'two',
    desc: 'HACKATHON 2018 Memento was given to P.Sree latha by State Ministers Smt. Nanapaneni Rajakumari, Sri. Amarnatha Reddy, Sri. Raja Sekar Babu - Superintendent of Police, Chittoor for rendering out standing services for women and girl children safety held on 09.06.2018 at Gangavaram.',
  },
  {
    images: [p3, p4],
    layout: 'two',
    desc: 'On behalf of Chittoor District Police, Hackathon 18 award was given to P. Sree Latha on 8th March 2018 in Chittoor Nagaiah Kala Ksheithram, Chittoor on the eve of International women\'s day and focused more on women safety. She was felicitated by The District Collector, The District Superintendent of Police, Chittoor Mayor, Ms. Sunitha, play back singer and other leaders.',
  },
  {
    images: [p5],
    layout: 'one',
    desc: 'On the eve of Teacher\'s day 2018, Mr. Siddarth Jain, the District Collector, Chittoor given away Award to Mr. K. Dhana Sekaran, Chairman and Ms. P. Sree Latha, President, WATCH for recognizing exceptional service in the field of education rendering to the rural poor and needy children and also taken great efforts to stop child labour and child marriage in Chittoor District. Mr. Gopalakrishna Reddy, the state minister appreciated the commendable services of WATCH.',
  },
  {
    images: [p6],
    layout: 'one',
    desc: 'P. Sree Latha President of WATCH was honoured by Telugu Sahithya Samirithika Samithi at Palamaner as a Best mothers along with other 5 mothers on the eve of Mother\'s day for rendering outstanding and dedicated services for thousands of orphan, semi orphan and the most poor and needy children in western parts of Chittoor district through the organisation WATCH for the last 28 years. Mr. Thulasiram Naidu, president presided over the event and writers, professors, lawyers, teachers spoke on the event.',
  },
  {
    images: [p7, p8],
    layout: 'two',
    desc: 'Some of the achievements of the children\'s of Karunya Home academically and in other sports activities.',
  },
];

export default function Awards() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 space-y-12">
      {awardSections.map((section, i) => (
        <div key={i}>
          {/* Images */}
          {section.layout === 'two' ? (
            <div className="grid grid-cols-2 gap-3 mb-4">
              {section.images.map((img, j) => (
                <img key={j} src={img} alt={`Award ${i + 1}`} className="w-full h-auto object-cover shadow" />
              ))}
            </div>
          ) : (
            <div className="flex justify-center mb-4">
              <img src={section.images[0]} alt={`Award ${i + 1}`} className="w-full h-auto object-cover shadow" />
            </div>
          )}
          {/* Description */}
          <p className="text-md text-gray-600 leading-relaxed text-justify">{section.desc}</p>
        </div>
      ))}
    </div>
  );
}
