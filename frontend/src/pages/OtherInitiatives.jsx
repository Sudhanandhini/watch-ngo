import banner from '../assets/images/woman-and-child-health.jpg';
import img1 from '../assets/images/11.png';
import img2 from '../assets/images/12.png';
import img3 from '../assets/images/13.png';
import img4 from '../assets/images/14.png';
import img5 from '../assets/images/15.png';

const initiatives = [
  {
    title: 'Disability',
    side: 'left',
    img: img1,
    text: 'We are propelled by our vision to provide access to safe, inclusive, positive environment and public spaces, in particular for women and children living with disability in the villages we serve. WATCH addresses the challenges of children with disabilities at all levels of society by forming and strengthening associations, providing wheelchairs, facilitating better infrastructure for children with disabilities and creating forums for them to advocate for their rights.',
  },
  {
    title: 'Water, Sanitation and Hygiene',
    side: 'right',
    img: img2,
    text: 'Facilitating provision of safe drinking water, promoting good hygiene and sanitation practices for women, children and families have been one of our top priorities. WATCH focuses on providing children and families with access to clean, safe drinking water and promoting good hygiene and sanitation practices all throughout the communities we serve. We address the issue of open defecation in schools, homes, and communities as we remain committed to promote open-defecation-free communities, change behaviors and create healthy environments.',
  },
  {
    title: 'Humanitarian Emergency Assistance',
    side: 'left',
    img: img3,
    text: 'Respecting our obligation to society, we strive to meet the immediate needs of children and families in the areas hit by disaster while building-up community resilience. WATCH brings life-saving immediate support in times of disaster and is committed to long-term rehabilitation, helping communities affected by natural disasters or conflicts get back on their feet while shaping-up more resilient communities.',
  },
  {
    title: 'Livelihood',
    side: 'right',
    img: img4,
    text: 'We effectively intervene with Economic Development Assistance to equip families with means of sustainable income and economic empowerment. WATCH believes in empowering children & communities by economical women through specially designed livelihood interventions. This enables families to enhance their income and provide better for their children. Economic assistance is provided for small start-up businesses, better agriculture, livestock and self-employment through skill development. We also support market access for farmers and entrepreneurs and equip youths with employable skills with our varied skill development initiatives.',
  },
  {
    title: 'Advocacy',
    side: 'left',
    img: img5,
    text: 'WATCH is committed to positively influence decisions within political, economic, and social systems and institutions with respect to the most vulnerable communities by aiding them to understand their rights in the society. WATCH works in close coordination with the Government agencies and other stakeholders aimed at strengthening the government advocacy campaigns aimed at building a nation fit for children. Our advocacy initiatives are directed towards creating an environment that supports children reach their fullest potential and where children and families have unbiased and rightful access to services available to them.',
  },
];

export default function OtherInitiatives() {
  return (
    <div className="max-w-full mx-auto">
      {/* Banner */}
      <div className="w-full overflow-hidden">
        <img src={banner} alt="Other Initiatives" className="w-full h-auto object-cover grayscale" />
      </div>

      <div className="max-w-5xl mx-auto py-12 px-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-10">Other Initiatives</h1>
        <div className="space-y-12">
          {initiatives.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col ${item.side === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image in orange circle */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40  overflow-hidden flex items-center justify-center ">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-base font-bold text-gray-800 mb-2">{item.title}</h2>
                <p className="text-md text-gray-600 leading-relaxed text-justify">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
