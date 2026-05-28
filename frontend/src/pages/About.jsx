export default function About() {
  return (
    <div>
      {/* Banner */}
      <div className="relative h-56 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=1400&q=80"
          alt="About Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-md text-gray-700 leading-relaxed">
              WATCH (Women's Association for Liberation Transformation and Community Health) is a registered NGO under the Indian Society Act working in Chittoor and adjoining districts of Andhra Pradesh, India. WATCH has been working for upliftment of women & children since last 25 years in the rural blocks and remote villages. (WATCH) Women's Association for liberation, transformation, and community health is a registered charitable Organisation involved in the noble cause of helping the suffering and the needy people of our state. Our aim is to cater to the overall empowerment and development of the poorest of the poor and other most marginalised society with a special focus on Dalit, Tribal women and children in crisis through education, organising, community health, self help groups, Strengthening democratic process, campaign against child prostitution, child labour, Child marriage, child trafficking etc and ensure child rights, safe place and child protection.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80"
              alt="WATCH Award"
              className="w-full h-64 object-cover shadow-md"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary text-white p-6">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span>👁️</span> OUR VISION
            </h2>
            <p className="text-md leading-relaxed text-gray-100">
              A world where all children, youth, women and men enjoy equal human rights, live in just and peaceful societies, and have the means to determine the course of their lives.
            </p>
          </div>
          <div className="bg-[#1a7fa0] text-white p-6">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span>🎯</span> OUR MISSION
            </h2>
            <p className="text-md leading-relaxed text-gray-100">
              To empower and mobilize vulnerable children, women and communities in Andhra Pradesh to overcome poverty and injustice by promoting child rights, women empowerment, health, education and livelihood opportunities.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <span className="inline-block bg-orange-500 text-white text-md font-bold uppercase tracking-widest px-8 py-2">CORE VALUES</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Dignity', 'Equity', 'Justice', 'Solidarity', 'Transparency', 'Accountability', 'Diversity', 'Excellence'].map(v => (
              <div key={v} className="border-2 border-primary text-primary text-center py-4 px-2 font-semibold hover:bg-primary hover:text-white transition-colors cursor-default">
                {v}
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <span className="inline-block bg-orange-500 text-white text-md font-bold uppercase tracking-widest px-8 py-2">PRESIDENT DESK</span>
          </div>
          <div className="bg-gray-50 p-6 flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" alt="President" className="w-full h-full object-cover"/>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary mb-1">Ms. P. Sree Latha</h3>
              <p className="text-md text-orange-500 font-medium mb-3">Founder & President</p>
              <p className="text-md text-gray-600 leading-relaxed">
                WATCH was initiated in 1993 under the able leadership of Ms. P. Sree Latha who suffered all forms of deprivation, discrimination and exploitation. She was a lecturer in nursing who resigned her job and dedicated her life towards women's liberation and education, working tirelessly for the communities of Chittoor District, Andhra Pradesh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
