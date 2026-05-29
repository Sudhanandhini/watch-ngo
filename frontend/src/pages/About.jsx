import bannerAbout from '../assets/images/about-us.jpg';
import imgAward from '../assets/images/our-mission.jpg';
import lasya from '../assets/images/President.jpg';

export default function About() {
  return (
    <div>
      {/* Full-width banner */}
      <div className="w-full overflow-hidden" style={{ height: '280px' }}>
        <img
          src={bannerAbout}
          alt="About Banner"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* About content */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            WATCH (Women's Association for Liberation Transformation and Community Health) is a registered NGO under the Indian Society Act working in Chittoor and adjoining districts of Andhra Pradesh, India. WATCH has been working for upliftment of women & children since last 25 years in the rural blocks and remote villages. (WATCH) Women's Association for liberation, transformation, and community health is a registered charitable Organisation involved in the noble cause of helping the suffering and the needy people of our state. Our aim is to cater to the overall empowerment and development of the poorest of the poor and other most marginalised society with a special focus on Dalit, Tribal women and children in crisis through education, organising, community health, self help groups, Strengthening democratic process, campaign against child prostitution, child labour, Child marriage, child trafficking etc and ensure child rights, safe place and child protection.
          </p>
          <img
            src={imgAward}
            alt="WATCH Award"
            className="w-full h-64 object-cover shadow-md"
          />
        </div>

        {/* Vision & Mission */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary text-white p-6">
            <h2 className="text-xl font-bold mb-3">OUR VISION</h2>
            <p className="text-sm leading-relaxed text-gray-100">
              A world where all children, youth, women and men enjoy equal human rights, live in just and peaceful societies, and have the means to determine the course of their lives.
            </p>
          </div>
          <div className="bg-teal text-white p-6">
            <h2 className="text-xl font-bold mb-3">OUR MISSION</h2>
            <p className="text-sm leading-relaxed text-gray-100">
              To empower and mobilize vulnerable children, women and communities in Andhra Pradesh to overcome poverty and injustice by promoting child rights, women empowerment, health, education and livelihood opportunities.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <span className="bg-secondary text-white text-sm font-bold uppercase tracking-widest px-10 py-2.5 rounded-full shadow">CORE VALUES</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Dignity', 'Equity', 'Justice', 'Solidarity', 'Transparency', 'Accountability', 'Diversity', 'Excellence'].map(v => (
              <div key={v} className="border-2 border-primary text-primary text-center py-4 px-2 font-semibold hover:bg-primary hover:text-white transition-colors cursor-default">
                {v}
              </div>
            ))}
          </div>
        </div>

        {/* President Desk */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <span className="bg-secondary text-white text-sm font-bold uppercase tracking-widest px-10 py-2.5 rounded-full shadow">PRESIDENT DESK</span>
          </div>
          <div className="bg-gray-50 p-6 flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <img
                src={lasya}
                alt="Ms. P. Sree Latha"
                className="w-36 h-36 object-cover shadow"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary mb-1">Ms. P. Sree Latha</h3>
              <p className="text-sm text-secondary font-medium mb-3">Founder & President</p>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                WATCH was initiated in 1993 under the able leadership of Ms. P. Sree Latha who suffered all forms of deprivation, discrimination and exploitation. She was a lecturer in nursing who resigned her job and dedicated her life towards women's liberation and education, working tirelessly for the communities of Chittoor District, Andhra Pradesh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
