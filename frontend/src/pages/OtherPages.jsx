// Awards Page
export function Awards() {
  const awards = [
    { year: '2022', title: 'Best NGO Award', org: 'State Government, Andhra Pradesh', icon: '🏆' },
    { year: '2020', title: 'Child Rights Champion Award', org: 'UNICEF India', icon: '🥇' },
    { year: '2018', title: 'Women Empowerment Recognition', org: 'National Commission for Women', icon: '🌟' },
    { year: '2016', title: 'Community Health Excellence Award', org: 'Ministry of Health & Family Welfare', icon: '🏅' },
    { year: '2014', title: 'Best Practices in Education Award', org: 'State Education Department', icon: '📜' },
    { year: '2012', title: '25 Years of Service Recognition', org: 'Government of Andhra Pradesh', icon: '🎖️' },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <span className="inline-block bg-orange-500 text-white text-md font-bold uppercase tracking-widest px-8 py-2">AWARDS & RECOGNITION</span>
      </div>
      <div className="space-y-4">
        {awards.map(a => (
          <div key={a.title} className="flex items-center gap-5 bg-gray-50 p-5 hover:bg-orange-50 transition-colors">
            <span className="text-4xl flex-shrink-0">{a.icon}</span>
            <div>
              <div className="text-xs text-orange-500 font-bold">{a.year}</div>
              <h3 className="text-md font-bold text-gray-800">{a.title}</h3>
              <p className="text-xs text-gray-500">{a.org}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Resources Page
export function Resources() {
  const gallery = Array.from({length: 12}).map((_, i) => ({
    url: `https://images.unsplash.com/photo-${['1488521787991-ed7bbaae773c','1509099836639-18ba1795216d','1503676260728-1c00da094a0b','1609220136736-443140cffec6','1544717305-2782549b5136','1542810634-71277d95dcbb','1524503033411-c9566986fc8f','1602526429747-ac387a91d43b','1529156069898-49953e39b3ac','1488521787991-ed7bbaae773c','1509099836639-18ba1795216d','1503676260728-1c00da094a0b'][i % 12]}?w=300&q=80`,
    alt: `Gallery Image ${i+1}`
  }));

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <span className="inline-block bg-orange-500 text-white text-md font-bold uppercase tracking-widest px-8 py-2">GALLERY</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {gallery.map((img, i) => (
          <div key={i} className="overflow-hidden aspect-square cursor-pointer group">
            <img src={img.url} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
          </div>
        ))}
      </div>
    </div>
  );
}

// GetInvolved Page
export function GetInvolved() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <span className="inline-block bg-orange-500 text-white text-md font-bold uppercase tracking-widest px-8 py-2">GET INVOLVED</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { title: 'VOLUNTEER', icon: '👥', desc: 'Join our team of dedicated volunteers. Your time and skills can transform lives in vulnerable communities across Andhra Pradesh.' },
          { title: 'DONATE NOW', icon: '💝', desc: 'Your generous donation directly supports our programs for child protection, education, health and women empowerment.' },
          { title: 'SPONSOR A CHILD', icon: '🧒', desc: 'Sponsor a child\'s education, nutrition and health care. Help break the cycle of poverty and give a child a brighter future.' },
        ].map(item => (
          <div key={item.title} className="bg-primary text-white p-6 text-center hover:bg-primary-dark transition-colors">
            <div className="text-5xl mb-3">{item.icon}</div>
            <h3 className="text-base font-bold mb-2">{item.title}</h3>
            <p className="text-xs text-gray-200 leading-relaxed">{item.desc}</p>
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase px-6 py-2 transition-colors">
              {item.title === 'DONATE NOW' ? 'DONATE NOW' : 'JOIN US'}
            </button>
          </div>
        ))}
      </div>
      <div className="bg-gray-50 p-6">
        <h3 className="text-base font-bold text-primary mb-3">Contact to Volunteer</h3>
        <p className="text-md text-gray-600">Email: watchindiajc@gmail.com | Mobile: +91 94402 77631</p>
      </div>
    </div>
  );
}

// AuditReport Page
export function AuditReport() {
  const reports = [
    { year: '2022-23', status: 'Available' },
    { year: '2021-22', status: 'Available' },
    { year: '2020-21', status: 'Available' },
    { year: '2019-20', status: 'Available' },
    { year: '2018-19', status: 'Available' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <span className="inline-block bg-orange-500 text-white text-md font-bold uppercase tracking-widest px-8 py-2">AUDIT REPORTS</span>
      </div>
      <div className="space-y-3">
        {reports.map(r => (
          <div key={r.year} className="flex items-center justify-between bg-gray-50 p-4 border border-gray-200">
            <div>
              <span className="text-md font-bold text-gray-800">Audit Report {r.year}</span>
              <span className="ml-3 text-xs text-green-600 font-medium">{r.status}</span>
            </div>
            <button className="bg-primary text-white text-xs font-bold px-4 py-2 hover:bg-primary-dark transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              DOWNLOAD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// AnnualReport Page
export function AnnualReport() {
  const reports = [
    { year: '2022-23', pages: '48 pages' },
    { year: '2021-22', pages: '42 pages' },
    { year: '2020-21', pages: '36 pages' },
    { year: '2019-20', pages: '40 pages' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <span className="inline-block bg-orange-500 text-white text-md font-bold uppercase tracking-widest px-8 py-2">ANNUAL REPORTS</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reports.map(r => (
          <div key={r.year} className="bg-gray-50 border border-gray-200 p-6 flex items-center gap-4">
            <div className="bg-primary text-white p-4 flex-shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-md">Annual Report {r.year}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{r.pages}</p>
            </div>
            <button className="bg-orange-500 text-white text-xs font-bold px-4 py-2 hover:bg-orange-600 transition-colors">
              DOWNLOAD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Blog Page
export function Blog() {
  const posts = [
    { title: 'Protecting Children in Rural Communities', date: 'March 15, 2024', excerpt: 'Our ongoing work in Bangarupalayam and surrounding villages has helped hundreds of children get access to safe spaces and education...', img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80' },
    { title: 'Women Empowerment Through Self Help Groups', date: 'February 20, 2024', excerpt: 'WATCH has been instrumental in forming and nurturing Self Help Groups across Chittoor district, transforming the lives of thousands of women...', img: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&q=80' },
    { title: 'Flood Relief Efforts in East Godavari', date: 'January 10, 2024', excerpt: 'When floods devastated parts of Andhra Pradesh, WATCH mobilized quickly to provide emergency relief to affected families...', img: 'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?w=400&q=80' },
    { title: 'Breaking the Cycle: Education for All', date: 'December 5, 2023', excerpt: 'Through our school support programme, we have helped hundreds of children stay in school and achieve academic success despite adversities...', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <span className="inline-block bg-orange-500 text-white text-md font-bold uppercase tracking-widest px-8 py-2">BLOG</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(post => (
          <div key={post.title} className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={post.img} alt={post.title} className="w-full h-48 object-cover"/>
            <div className="p-5">
              <p className="text-xs text-orange-500 font-medium mb-1">{post.date}</p>
              <h3 className="text-base font-bold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-md text-gray-600 leading-relaxed">{post.excerpt}</p>
              <button className="mt-3 text-primary text-xs font-bold uppercase hover:text-orange-500 transition-colors">
                READ MORE →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
