import imgLasya from '../../assets/images/lasya.jpg';
import imgRevathi from '../../assets/images/revathi.jpg';

export default function StoryLasya() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-xl font-bold text-gray-800 text-center mb-10 leading-snug">
        The inspiring story of <em>Lasya and Revathi</em> showcases their unwavering determination and refusal to give up despite the formidable challenges they faced
      </h1>

      {/* Lasya section */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
        <div className="flex-1 text-sm text-gray-700 leading-relaxed space-y-3 text-justify">
          <h2 className="text-base font-bold text-gray-800 mb-2">Lasya, A Fearless &amp; Strong Girl</h2>
          <p>Lasya, a 14-year-old from Tambuganipalli, faced immense hardship despite being the top student in her 9th-grade class at Government High School. As a Dalit, she grappled with severe societal and economic challenges, compounded by her mother's death. Her father, a daily laborer, turned to alcohol, neglecting his children and squandering his earnings. His remarriage only added to their struggles, as his new wife showed little care for Lasya and her older brother.</p>
          <p>Despite these adversities, Lasya thrived academically and excelled in Kabaddi, finding solace and joy in the sport. However, her responsibilities at home and the emotional strain began to affect her studies.</p>
          <p>Hope arrived when her compassionate aunt discovered Karunya Children's Home. At Karunya, Lasya found the care and stability she needed. The home provided nutritious food, proper clothing, and academic support, allowing her to focus on her studies and rekindle her love for Kabaddi. The nurturing environment helped her overcome depression and excel academically once more.</p>
          <p>Lasya is deeply thankful to Karunya Children's Home and its sponsor, EBMI from Germany, for transforming her life and helping her rediscover her potential and dreams.</p>
        </div>
        <div className="flex-shrink-0 w-full md:w-56">
          <img src={imgLasya} alt="Lasya" className="w-full h-auto object-cover shadow" />
        </div>
      </div>

      {/* Revathi section */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 text-sm text-gray-700 leading-relaxed space-y-3 text-justify">
          <h2 className="text-base font-bold text-gray-800 mb-2">A Resilient Revathi.</h2>
          <p>In a small village, Revathi, a bright 6th-grade student from the Dalit community, faced significant hardship. Orphaned young, she lived with her elderly grandfather, who, despite his love, struggled to provide for her due to age and poverty. Revathi's cheerful demeanor at school masked the grief and loneliness she felt from losing her parents. Her academic performance suffered under the weight of these challenges.</p>
          <p>Seeing her struggles, her grandfather sought help and discovered Karunya Children's Home, an organization dedicated to supporting children in need. With hope, he sent Revathi there, believing it was the best chance for her future.</p>
          <p>At Karunya, Revathi received the care and support she desperately needed. The home provided nutritious food, comfortable clothing, and a safe living environment. This stability allowed her to focus on her studies and rediscover her joy. Revathi's academic performance improved significantly as she regained confidence and participated eagerly in school competitions.</p>
          <p>Reflecting on her journey, Revathi felt immense gratitude. The support from Karunya Children's Home and its sponsor, EBMI from Germany, transformed her life, allowing her to rebuild and excel. She completed 6th grade with excellent results and was ready to advance to 7th grade with renewed hope and enthusiasm.</p>
        </div>
        <div className="flex-shrink-0 w-full md:w-56">
          <img src={imgRevathi} alt="Revathi" className="w-full h-auto object-cover shadow" />
        </div>
      </div>
    </div>
  );
}
