import img from '../../assets/images/117.jpg';
import img2 from '../../assets/images/118.jpg';

export default function StoryCyclone() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 text-sm text-gray-700 leading-relaxed">

      {/* Banner image */}
      <div className="flex justify-start mb-6">
        <img src={img} alt="Emergency Flood Relief Tamil Nadu" className="w-full md:w-[480px] h-auto object-cover shadow" />
      </div>

      {/* Intro */}
      <p className="text-justify mb-6">
        In December 2023, the Michaung Cyclone struck Sholinganallur-Chemmancherry, in Chennai in the state of Tamil Nadu, devastating thousands of lives, livelihoods, and homes. The disaster caused widespread flooding, submerging entire neighborhoods and leaving residents stranded without basic necessities. In response, WATCH (Women's Association for Liberation Transformation and Community Health) supported by Sign of Hope, Germany, provided tailored relief materials to support victims and impoverished families affected by the cyclone.
      </p>

      <hr className="border-gray-200 mb-8" />

      {/* Story 1 — Ms. Meenakshi */}
      <div className="space-y-4 mb-10">
        <h2 className="font-bold text-gray-800 text-base">
          Ms. Meenakshi's Family: Their Challenges and Recovery Amidst the Michaung Cyclone and Flood in Chennai, Tamil Nadu
        </h2>
        <p className="text-justify">
          <strong>Story 1:</strong> In December 2023, the Michaung Cyclone struck Chennai, Tamil Nadu, with relentless force. Torrential rains led to extensive flooding, creating a dire situation for many families, including Ms. Meenakshi's. Living in the low-lying area of Chemmancherry with her husband, M. Suresh Kumar, and their three young children, the family's life was abruptly turned upside down.
        </p>
        <p className="text-justify">
          As the cyclone's heavy rains persisted, the situation deteriorated rapidly when Chembarambakkam Lake released excess water. The sudden surge in floodwaters forced Ms. Meenakshi and her family to evacuate their home. With no time to gather essentials, they fled to higher ground, enduring a cold and uncomfortable night in the open.
        </p>
        <p className="text-justify">
          The following morning, compassionate neighbors provided some food, but the family received no official aid. Desperate and displaced, they eventually sought refuge in a government school in Sholinganallur. The floodwaters had wreaked havoc on their home, destroying their possessions and vital documents.
        </p>
        <p className="text-justify">
          When relief workers assessed their situation, they found the family in urgent need. The children were suffering from malnutrition, requiring immediate nutritional support. Suresh Kumar, the family's primary breadwinner, was unable to work because his auto-rickshaw had been severely damaged in the flood.
        </p>
        <p className="text-justify">
          In response to their plight, WATCH, with support from Sign of Hope, Germany, delivered essential relief supplies. They provided dry rations, including rice, dal, oil, and sugar, as well as stationery, hygiene kits, mats, and new clothes for the children. This aid significantly improved the family's nutrition, hygiene, and overall comfort, alleviating some of the psychological stress caused by the disaster.
        </p>
        <p className="text-justify">
          Ms. Meenakshi's story highlights the critical importance of targeted relief efforts in times of crisis. The support they received was instrumental in helping the family navigate their challenges and begin their journey toward recovery amidst the devastation caused by the Michaung Cyclone and flood.
        </p>
      </div>

      {/* Story 2 image */}
      <div className="flex justify-center mb-6">
        <img src={img2} alt="Abirami's Family" className="w-full md:w-[360px] h-auto object-cover shadow" />
      </div>

      {/* Story 2 — Abirami */}
      <div className="space-y-4">
        <h2 className="font-bold text-gray-800 text-base">
          Abirami's family's journey through the Michaung cyclone and flood exemplified resilience in the face of disaster
        </h2>
        <p className="text-justify">
          <strong>Story 2:</strong> Mrs. Abirami, 30 years old, lives with her husband M. Suresh Kumar, an auto-rickshaw driver, and their three young children in Chemmancherry. In December 2023, the Michaung Cyclone unleashed torrential rains that caused extensive flooding. The situation worsened significantly when Chembarambakkam Lake released excess water, rapidly increasing the floodwaters. Amid this crisis, Suresh Kumar, Abirami, and their children fled their home and spent a cold and uncomfortable night on higher ground. The next morning, compassionate neighbors provided them with some food, but official aid was lacking. They eventually found refuge in a government school in Sholinganallur. The flood had devastated their home, destroying their possessions and vital documents.
        </p>
        <p className="text-justify">
          When our staff assessed their situation, we found the family in urgent need. The children were suffering from malnutrition, requiring immediate nutritional support. Additionally, Suresh Kumar was unable to work because his auto-rickshaw was severely damaged, leaving the family without their primary source of income. In response to their dire circumstances, WATCH, with the support of Sign of Hope, Germany, delivered essential relief: dry rations (rice, dal, oil, sugar), stationery, hygiene kits, mats, and new clothes for the children. This support was instrumental in improving their nutrition, hygiene, and overall comfort, alleviating some of the psychological stress caused by the disaster, and underscoring the critical importance of targeted relief efforts in crisis situations.
        </p>
      </div>
    </div>
  );
}
