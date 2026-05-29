import img1 from '../assets/images/1.png';
import bannerL from '../assets/images/child-impact-1.jpg';


export default function ChildRightsProtection() {
  return (
    <div>
      {/* Banner with two images and text in centre */}
      <div className="relative w-full h-auto md:h-auto overflow-hidden flex">
        <img src={bannerL} alt="" className="w-full h-full object-cover object-top" />
     
        {/* <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-tight drop-shadow-lg">
              CHILD RIGHTS<br />PROTECTION
            </h1>
          </div>
        </div> */}
      </div>

      {/* Orange description bar */}
      <div className="bg-secondary/60 py-5 px-6 text-center">
        <p className="text-white text-sm md:text-base italic leading-relaxed max-w-4xl mx-auto">
          There are many children in our area of Tribal, Dalit, Lambadi, gypsies and most backward communities, who are facing many problems like child labor, child marriage, child trafficking, child abuse, migrants children, children moved to harmful work, children from broken and alcoholic parents etc.<br />
          <em>The girl children are more prone to all sorts of abuse.</em>
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-secondary shadow-lg">
              <img src={img1} alt="Child Protection" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center md:text-left">Child Protection</h2>
            <p className="text-md text-gray-600 leading-relaxed text-justify">
              The diverse texture of the communities where we serve has very high instances of child labor, child marriage, child trafficking, child abuse, migrants children, children moved to harmful work, children from broken and alcoholic parents, child abuse etc. WATCH works closely with Tribal, Dalit, Lambadi, gypsies and most backward communities, who have multiple problems that need to be tackled to contain the manifestation of these Child Protection Issues. WATCH believes in Rescue → Restoration → Rehabilitation of exploited children and vulnerable children while it actively promotes awareness and facilitative environment that can keep children safe from harm and provide them a happy childhood. WATCH provide opportunities and spaces for children to participate on issues which affect their lives. <strong>Child-friendly accountability</strong> initiatives enable vulnerable children, youth, and their communities to hold duty bearers accountable to their obligation. <strong>Children's club</strong> in the villages plays a pivotal role in spreading awareness & preventing a case of abuse. WATCH has a short-stay home program for abused children subsequent to their rescue for needed restoration and rehabilitation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
