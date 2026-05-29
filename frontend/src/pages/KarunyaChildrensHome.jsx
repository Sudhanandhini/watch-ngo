import photo1 from '../assets/images/02.jpg';
import photo2 from '../assets/images/03.jpg';
import banner from '../assets/images/woman-and-child-health.jpg';

export default function KarunyaChildrensHome() {
  return (
    <div className="max-w-full mx-auto ">
         <div className="w-full h-auto overflow-hidden">
                  <img src={banner} alt="Women & Child Health" className="w-full h-full object-cover grayscale" />
                </div>
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-1">Karunya Children's Home</h1>
      <h2 className="text-lg font-semibold text-secondary text-center mb-6">Genesis</h2>

      <p className="text-md text-gray-700 leading-relaxed text-justify mb-6">
        Karunya Children's Home was founded in 2006 under the auspices of WATCH in Bangarupalayam, Palamaner Block, Chittoor District of Andhra Pradesh, India. It all started when Mrs Eswari, a teacher at WATCH's Early Learning Centre noticed the pitiable plight of two children, sleeping without proper food, dress and blankets in front of an abandoned house in a street corner. Later these children confessed their helpless and miserable existence without parents. The children were thrown on the streets because of social stigma uncorroborated rumors of infection owing to HIV/AIDS.
      </p>
      <p className="text-md text-gray-700 leading-relaxed text-justify mb-6">
        When the teacher narrated the incident to the founder Mrs.Sree Latha, she requested them to be brought to her. Hearing their situation, she took both the children under her care. A large-scale household survey and health screening conducted by her team in the 5 blocks of the Chittoor district, showed that around 1500 households have either one or both parents infected/ deceased due to AIDS/ HIV. Realising that there are more children who lost their parent to HIV/ AIDS and are abandoned by their own families, Sree Latha decided to set up a home and care for such children. What was once a makeshift boarding home with 2 children, <strong>Karunya Children's Home</strong> is now home to 50 odd HIV affected children, children of sex workers, and orphans because of HIV or otherwise.
      </p>

      {/* Two photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <img src={photo1} alt="Karunya Children" className="w-full h-52 object-cover shadow" />
        <img src={photo2} alt="Karunya Children" className="w-full h-52 object-cover shadow" />
      </div>

      {/* Home for HIV-affected Children */}
      <div className="mb-8">
        <h3 className="text-base font-bold text-secondary mb-2">Home for HIV-affected Children</h3>
        <p className="text-md text-gray-700 leading-relaxed text-justify">
          'Karunya Children's Home' (Karunya Nilayam) is a residence that a child calls a home, where the child feels at home. Here the children are mentally, spiritually and physically free, and are provided with food and accommodation along with other support services. Each child is provided with safe shelter, clothing, bedding, soap, oil and breakfast, lunch during holidays, an evening snack after school and dinner. The children are provided with a well balanced and nutritious diet.
        </p>
      </div>

      {/* Facilities */}
      <div className="mb-8">
        <h3 className="text-base font-bold text-secondary mb-2">Facilities</h3>
        <p className="text-md text-gray-700 leading-relaxed text-justify mb-3">
          The last eight years saw significant growth and development in the annals of the Home in the realms of impressive addition in the strength of children from 2 inmates to fifty, infrastructure suitable for children, quality and nutritious menu and educational achievement of inmates. The home provides the children with basic facilities:
        </p>
        <ul className="text-md text-gray-700 list-none pl-4 space-y-0.5 mb-3">
          <li>(a) Food and Health care</li>
          <li>(b) Education</li>
          <li>(c) Skill Development</li>
        </ul>
        <p className="text-md text-gray-700 leading-relaxed text-justify">
          EBM Germany supported our home for installation of a new bore well that supplies regular water. Children at the age of 6 are enrolled in nearby government school/ colleges. The home only enrolls children age of above the age of 5 year-old girls. While there is no limitation to enroll boys more than 7 years. Due to lack of infrastructural and health facilities, the Home doesn't accommodate HIV infected children; usually they are referred to Home with better facilities in Chennai.
        </p>
      </div>

      {/* Achievements */}
      <div className="mb-8">
        <h3 className="text-base font-bold text-secondary mb-2">Achievements</h3>
        <p className="text-md text-gray-700 leading-relaxed text-justify mb-3">
          We ensure that the confidence of children is improved to confront the challenges of life and their outlook to seek career options received tremendous impact because of faith in the lord and regular church attendance with the local congregational members who developed great love and regard for the biblical knowledge shown by the children.
        </p>
        <p className="text-md text-gray-700 leading-relaxed text-justify mb-3">
          One of the first two special children, Prabhavathi is now studying BSc nursing course at Indira Priya Darshini College of Nursing, Kadappa. Her dream to become a graduate nurse and serve her community.
        </p>
        <ul className="text-md text-gray-700 list-disc pl-6 space-y-1 mb-4">
          <li>Prema, another child at the Home, got prize in Science, English, Math.</li>
          <li>2 children got prizes in English.</li>
          <li>3 children secured good scores in Telugu, Social and 2 more children secured good scores in Social science.</li>
          <li>Prema and two other children got 1st rank their respective classes.</li>
          <li>5 children stood second in their classes.</li>
          <li>5 children joined in NCC (National Cadet Corps) and went for training and wrote exam.</li>
          <li>21 children participated in district science exhibition and 5 children got prizes for their science experiments.</li>
        </ul>
        <p className="text-md text-gray-700 leading-relaxed text-justify mb-4">
          Karunya Children's Home has witnessed tremendous achievements in the lives of the children over the years. Despite the challenges posed by HIV/AIDS, the unwavering support and guidance from WATCH have instilled hope and dreams for their future. Here are some notable accomplishments and accolades of Karunya Children's Home for 2024:
        </p>
        <p className="text-md font-semibold text-gray-800 mb-2">Current Number of Children: 37</p>
        <ul className="text-md text-gray-700 list-disc pl-6 space-y-1">
          <li><strong>Six children</strong> have passed their 10th class public exams and are now pursuing their 1st year of intermediate studies.</li>
          <li><strong>Two children</strong> are studying at the IIT in Iduplapalya.</li>
          <li><strong>Two children</strong> are pursuing a B.Sc in Nursing.</li>
          <li><strong>Three children</strong> have completed General Nursing and are now employed.</li>
          <li><strong>Jyosha</strong> is pursuing a B.Sc in Microbiology.</li>
          <li><strong>Thirteen boys and sixteen girls</strong> have secured jobs and are leading stable lives.</li>
        </ul>
        <p className="text-md text-gray-700 leading-relaxed text-justify mt-4">
          These achievements highlight the resilience and potential of the children, demonstrating the impactful support provided by WATCH.
        </p>
      </div>
    </div>
    </div>
  );
}
