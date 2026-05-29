import img from '../../assets/images/114.jpg';

export default function StoryWheelchairs() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <div className="flex justify-start mb-6">
        <img src={img} alt="30 free wheelchairs" className="w-full md:w-[480px] h-auto object-cover shadow" />
      </div>
      <p className="text-sm text-gray-700 leading-relaxed text-justify">
        Under the leadership of Indian Christian Ministries, the charitable organization WATCH orchestrated a heartwarming initiative to distribute 30 free wheelchairs to Differently Abled Dalit and Tribal poor children and Adults in Bangarupalayam, Palamaner and Chittoor rural mandals of Chittoor District of Andhra Pradesh. This generous act of service aimed to enhance mobility and independence for individuals with physical disabilities, reflecting a deep commitment to improving the quality of life for the underserved. The distribution not only provided essential support but also uplifted the spirits of recipients, demonstrating the profound impact of compassionate outreach and community-driven efforts.
      </p>
    </div>
  );
}
