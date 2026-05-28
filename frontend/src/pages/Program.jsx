const programs = [
  {
    title: 'Child Protection',
    icon: '👨‍👩‍👧‍👦',
    img: null,
    text: `The diverse texture of the communities where we serve has very high instances of child labor, child marriage, child trafficking, child abuse, migrants children, children moved to harmful work, children from broken and alcoholic parents, child abuse etc. WATCH works closely with Tribal, Dalit, Lambadi, gypsies and most backward communities, who have multiple problems that need to be tackled to contain the manifestation of these Child Protection Issues. WATCH believes in Rescue → Restoration → Rehabilitation of exploited children and vulnerable children while it actively promotes awareness and facilitative environment that can keep children safe from harm and provide them a happy childhood. WATCH provide opportunities and spaces for children to participate on issues which affect their lives. Child-friendly accountability initiatives enable vulnerable children, youth, and their communities to hold duty bearers accountable to their obligation. Children's club in the villages plays a pivotal role in spreading awareness & preventing a case of abuse. WATCH has a short-stay home program for abused children subsequent to their rescue for needed restoration and rehabilitation.`,
    side: 'right',
  },
  {
    title: 'Education:',
    icon: '🎓',
    img: null,
    text: `WATCH believes that education is the primary driver of a society that is ideal in all aspects. We engage in refining the quality of education and facilitating improvisation of the process of imparting education at multi-tier level so that children remain engaged leading to an educated. We work to ensure children are educated for life through collective efforts in improving the quality of education and learning outcomes at different levels through environment-friendly infrastructure support (like smart school/solarisation/green zone etc), remedial education programmes and strengthening of school management committees.`,
    side: 'left',
  },
  {
    title: 'Health & Nutrition',
    icon: '🏥',
    img: null,
    text: `Developing a healthy community with much-needed emphasis on malnourished and vulnerable children is another primary focus area that WATCH is committed to. WATCH works to address the causes of malnutrition with a special focus on children below 5 years, pregnant women and mothers through effective counseling, establishing networks, emergency feeding programmes, nutritious kitchen gardens, investing on health worker training, infrastructure development of Child Care Centres and working closely with government bodies at different levels.`,
    side: 'right',
  },
  {
    title: 'Gender and Development',
    icon: '👩‍👧',
    img: null,
    text: `Our core focus area is to establish a society that is just & fair to all Women & Children. That pursuit keeps us proactively take leadership lead to eradicate negative sociocultural beliefs and fortify the role of both family and community in improving the position of the girl child. WATCH believes that these reforms best works when families and communities own it up to eliminate negative cultural attitudes and strengthen their roles in improving the status of the girl child. Therefore WATCH works closely with all stakeholders and takes extra efforts to ensure Girl child education is encouraged through tuition centers, provision of cycles and construction of toilets in schools to name a few interventions directed towards this overall objective.`,
    side: 'left',
  },
];

const ProgramIcon = ({ icon, size = 'large' }) => (
  <div className={`${size === 'large' ? 'w-48 h-48' : 'w-32 h-32'} rounded-full bg-orange-500 flex items-center justify-center mx-auto flex-shrink-0`}>
    <span className={`${size === 'large' ? 'text-7xl' : 'text-5xl'}`}>{icon}</span>
  </div>
);

export default function Program() {
  return (
    <div>
      <div className="max-w-5xl mx-auto py-12 px-4 space-y-16">
        {programs.map((p, i) => (
          <div
            key={p.title}
            className={`flex flex-col ${p.side === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <ProgramIcon icon={p.icon} />
            </div>
            {/* Text */}
            <div className={`text-${p.side === 'right' ? 'left' : 'right'} md:text-left`}>
              <h2 className="text-lg font-bold text-gray-800 mb-3 text-center md:text-left">{p.title}</h2>
              <p className="text-md text-gray-600 leading-relaxed text-justify">{p.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
