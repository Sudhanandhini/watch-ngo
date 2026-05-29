import impact from '../assets/images/impact.jpg';

export default function Impact() {
  return (
    <div>
      {/* Banner */}
      <div className="relative
       overflow-hidden">
        <img
          src={impact}
          alt="Impact Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <p className="text-md text-gray-700 mb-4 leading-relaxed">
          Research data evidence that with a strategic programming even the world's poorest of poor can gain ground.
        </p>
        <p className="text-md text-gray-700 mb-4 leading-relaxed">
          At WATCH, this good news renews our energy and revives our commitment to deepen and accelerate our efforts on behalf of vulnerable Dalit & Tribal children & Women we serve.
        </p>
        <p className="text-md text-gray-700 mb-6 leading-relaxed">
          Our work has now begun…
        </p>
        <p className="text-md text-gray-700 mb-4 leading-relaxed">
          • India is home to over 30% of almost 400 million children living in extreme poverty, the highest in South Asia, according to a new report by World Bank Group and Unicef, 'Ending Extreme Poverty: A Focus on Children'. According to data from the National Family Health Survey, 5 out of 100 children die before they reach age 5 due to many from preventable diseases and 1 in 6 children will not complete primary school. The figures do tell us as to how important it is to partner with civic organizations & Government to contain the same.
        </p>
        <p className="text-md text-gray-700 mb-4 leading-relaxed">
          • What is most shocking is that nearly 50% of all children around the world experience some form of violence, abuse, neglect or exploitation before they reach age 8. While these iniquities transcend nationality, race, sex, caste, region, religion and culture, children living in poverty are particularly vulnerable. In rural pockets abusing women is viewed as a common practice and does not offend the mindset of people.
        </p>
        <p className="text-md text-gray-700 mb-4 leading-relaxed">
          • Violence and abuse affect every aspect of a child or women's lives and can destroy the inherent potential, hinder development, weaken mental and physical health, and often challenge education and participation in social life. Both the violence and the consequences of it compel us to action. Children who lack protection endures the undue stress that disrupts brain development and can impact nervous and Immune systems. As they grow it ups the risk for behavioral, physical and mental health problems including depression and substance abuse.
        </p>
        <p className="text-md text-gray-700 mb-4 leading-relaxed">
          • While we stay focused on our core deliverables, we also understand the importance of working in the coalition as that multiplies the efforts put in. We are grateful to our partners as we journey together. For the last several years, the WATCH in alliance with EBM International, Germany, World Day of Prayer, Germany, Australian High Commission, CASA Chennai, Gilbert Society, S.Korea, Volkart foundation India Trust, ChildLine India Foundation, District Legal Services Authority, Police Department, Health & Education Departments and Other NGOs & INGOs has advocated to include ending violence against children on the priority agenda.
        </p>
        <p className="text-md text-gray-700 mb-4 leading-relaxed">
          This is in the line of the new United Nations Sustainable Development Goals that have a target to "End abuse, exploitation, trafficking and all norms of violence and torture against children". Children across the villages we serve to tell us they are counting on adults to stop the violence and that mandates WATCH to work collectively at all levels to amplify children's voices and work towards a world free from violence against women and children.
        </p>
        <p className="text-md text-gray-700 mb-6 leading-relaxed">
          Unless the instances of abuse, neglect, exploitation, and violence contained it will continue to erode our accomplishment in other areas. To build a world in which children live their rights and women live with their heads high women & child centric organizations like ours must prioritize to bring an end to such violence.
        </p>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[
            { num: '25+', label: 'Years of Service' },
            { num: '50,000+', label: 'Beneficiaries' },
            { num: '100+', label: 'Villages Covered' },
            { num: '15+', label: 'Partners & Funders' },
          ].map(s => (
            <div key={s.label} className="bg-primary text-white text-center py-6 px-2">
              <div className="text-3xl font-bold text-orange-400">{s.num}</div>
              <div className="text-xs mt-1 text-gray-200">{s.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
