import img3 from '../assets/images/3.png';
import banner from '../assets/images/woman-and-child-health.jpg';

export default function WomenChildHealth() {
  return (
    <div>
      <div className="w-full h-auto overflow-hidden">
        <img src={banner} alt="Women & Child Health" className="w-full h-full object-cover grayscale" />
      </div>
      <div className="max-w-5xl mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-secondary shadow-lg">
              <img src={img3} alt="Health & Nutrition" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center md:text-left">Health &amp; Nutrition</h2>
            <p className="text-md text-gray-600 leading-relaxed text-justify">
              Developing a healthy community with much-needed emphasis on malnourished and vulnerable children is another primary focus area that WATCH is committed to. WATCH works to address the causes of malnutrition with a special focus on children below 5 years, pregnant women and mothers through effective counseling, establishing networks, emergency feeding programmes, nutritious kitchen gardens, investing on health worker training, infrastructure development of Child Care Centres and working closely with government bodies at different levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
