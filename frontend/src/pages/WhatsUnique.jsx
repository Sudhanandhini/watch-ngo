import photo1 from '../assets/images/computer.jpg';
import photo2 from '../assets/images/basket.jpg';
import photo3 from '../assets/images/tailoring.jpg';

const uniquePoints = [
  {
    title: 'LONG-TERM COMMITMENT',
    desc: 'We stay with beneficiaries for long-term enabling a sustainable change',
  },
  {
    title: 'INTEGRATED PROGRAMS',
    desc: 'We invest in multiple scalable solutions to achieve maximum impact.',
  },
  {
    title: 'COLLECTIVE DEVELOPMENT',
    desc: 'We partner with other stakeholders who understand the communities we work in.',
  },
  {
    title: 'LEVERAGED FUNDING',
    desc: 'We supplement investments through parallel funding models to amplify and accelerate impact.',
  },
];

export default function WhatsUnique() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">WHAT'S UNIQUE</h1>

      {/* Four unique points */}
      <div className="space-y-4 mb-10">
        {uniquePoints.map((p) => (
          <div key={p.title}>
            <h2 className="text-base font-bold text-secondary mb-1">{p.title}</h2>
            <p className="text-sm text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Prevention of Child Marriage */}
      <div className="mb-8">
        <h2 className="text-base font-bold text-secondary mb-3">Prevention of Child Marriage:</h2>
        <p className="text-sm text-gray-600 leading-relaxed text-justify mb-3">
          A girl child aged only 15 years, belonging to a poor family was off to be married after Completion of her 10th standard. Our team got to know of the marriage plans through local level networking. Successfully, we prevented this child marriage with the active support of other stakeholders including local police.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed text-justify">
          Thereafter, earnest and effective counseling of the parties let to the agreement to re-enroll the children on to studies and agreed not to opt for child marriage. At present, she is happily doing Intermediate with the support from WATCH. This is just one heartwarming story of such many lives. Our timely intervention does give back meaning to childhood.
        </p>
      </div>

      {/* Photos grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <img src={photo1} alt="WATCH Activity" className="w-full h-auto object-cover shadow" />
        <div className="flex flex-col gap-4">
          <img src={photo2} alt="WATCH Activity" className="w-full h-auto object-cover shadow" />
          <img src={photo3} alt="WATCH Activity" className="w-full h-auto object-cover shadow" />
        </div>
      </div>

      <p className="text-sm text-gray-600 text-center mt-4">
        Computer, Tailoring, Wire Bag making training are given to the girls in WATCH center to make them more empowered.
      </p>
    </div>
  );
}
