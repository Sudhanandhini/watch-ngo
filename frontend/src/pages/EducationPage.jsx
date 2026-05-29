import img2 from '../assets/images/2.png';
import banner from '../assets/images/childern-education-1.jpg';

export default function EducationPage() {
  return (
    <div>
      <div className="w-full h-auto overflow-hidden">
        <img src={banner} alt="Education Banner" className="w-full h-full object-cover" />
      </div>

{/* Orange description bar */}
      <div className="bg-secondary/60 py-5 px-6 text-center">
        <p className="text-white text-sm md:text-base italic leading-relaxed max-w-4xl mx-auto">
         Education is a gift for life. The vulnerable children from tribal, Dalit and most backward communities are not given proper guidance, encouragement, and support to pursue their education. Moreover, their poor and illiterate parents do not know the importance of education.
As an extension of WATCH’s child rights-based interventions, we help the most vulnerable children from Dalit, tribal, gypsies and most vulnerable communities to continue their education. We strongly believe that every child is special and can go higher if they are provided needed opportunities and help them to ensure child rights.
Education is one of the good opportunity through which they can mold their character, quality of life and to become a good and useful citizen to his/ her family, society as well as the country.
        </p>
      </div>



      <div className="max-w-5xl mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-secondary shadow-lg">
              <img src={img2} alt="Education" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center md:text-left">Education</h2>
            <p className="text-md text-gray-600 leading-relaxed text-justify">
              WATCH believes that education is the primary driver of a society that is ideal in all aspects. We engage in refining the quality of education and facilitating improvisation of the process of imparting education at multi-tier level so that children remain engaged leading to an educated society. We work to ensure children are educated for life through collective efforts in improving the quality of education and learning outcomes at different levels through environment-friendly infrastructure support (like smart school/solarisation/green zone etc), remedial education programmes and strengthening of school management committees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
