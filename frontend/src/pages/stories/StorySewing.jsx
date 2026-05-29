import img from '../../assets/images/116.jpg';

export default function StorySewing() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <div className="flex justify-start mb-6">
        <img src={img} alt="Sewing Success" className="w-full md:w-[480px] h-auto object-cover shadow" />
      </div>
      <div className="text-sm text-gray-700 leading-relaxed space-y-4 text-justify">
        <p>
          In Gowrinarayanapuram, a rural village in Andhra Pradesh, India, Manjula lives with her husband, a daily laborer, and their two daughters. The village, largely a Tribal colony, faces economic hardships, with many women struggling to support their families. To address these challenges, WATCH launched an Income Generation program to empower women through entrepreneurship.
        </p>
        <p>
          Manjula, eager to contribute to her family's income, enrolled in the program. She received training in tailoring, which proved to be a transformative experience. With the skills she acquired, Manjula started her own tailoring business from home, taking orders from neighbors and local community members. Her ability to earn independently has not only provided financial stability for her family but also boosted her confidence and social standing within the community.
        </p>
        <p>
          Manjula's story is a testament to the power of skill development and community support in empowering women. Through WATCH's Income Generation program, she has been able to craft a better future for herself and her family, demonstrating the profound impact of sustainable livelihood initiatives.
        </p>
      </div>
    </div>
  );
}
