import img from '../../assets/images/our-mission.jpg';

export default function StoryCyclone() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="flex justify-start mb-6">
        <img src={img} alt="Emergency Flood Relief Tamil Nadu" className="w-full md:w-[480px] h-auto object-cover shadow" />
      </div>
      <div className="text-sm text-gray-700 leading-relaxed space-y-4 text-justify">
        <p>
          In December 2023, the Michaung Cyclone struck Sholinganallur-Chennamcherry, in Chennai in the state of Tamil Nadu, devastating thousands of lives, livelihoods, and homes. The disaster caused widespread flooding, submerging entire neighborhoods and leaving residents stranded without basic necessities. In response, WATCH (Women's Association for Liberation Transformation and Community Health) supported by Sign of Hope, Germany, provided tailored relief materials to support victims and impoverished families affected by the cyclone.
        </p>
        <p>
          WATCH mobilized volunteers and relief teams to assess the impact and prioritize aid distribution to the most vulnerable communities. Relief packages included essential food items, clean drinking water, hygiene kits, and household supplies. Special attention was given to children, women, and elderly individuals who were most at risk during the disaster.
        </p>
        <p>
          The support from Sign of Hope, Germany, enabled WATCH to reach over 300 families affected by the cyclone. The organization's swift response and community-driven approach ensured that aid reached those who needed it most, providing both immediate relief and hope for recovery.
        </p>
      </div>
    </div>
  );
}
