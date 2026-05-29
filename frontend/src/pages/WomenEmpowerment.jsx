import img4 from '../assets/images/4.png';
import banner from '../assets/images/woman-and-child-health.jpg';

export default function WomenEmpowerment() {
  return (
 <div className="max-w-full mx-auto ">
     <div className="w-full h-auto overflow-hidden">
              <img src={banner} alt="Women & Child Health" className="w-full h-full object-cover grayscale" />
            </div>
    <div className="max-w-5xl mx-auto py-12 px-6">
      
      <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-secondary shadow-lg">
            <img src={img4} alt="Gender and Development" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center md:text-left">Gender and Development</h2>
          <p className="text-md text-gray-600 leading-relaxed text-justify">
            Our core focus area is to establish a society that is just & fair to all Women & Children. That pursuit keeps us proactively take leadership lead to eradicate negative sociocultural beliefs and fortify the role of both family and community in improving the position of the girl child. WATCH believes that these reforms best works when families and communities own it up to eliminate negative cultural attitudes and strengthen their roles in improving the status of the girl child. Therefore WATCH works closely with all stakeholders and takes extra efforts to ensure Girl child education is encouraged through tuition centers, provision of cycles and construction of toilets in schools to name a few interventions directed towards this overall objective.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
