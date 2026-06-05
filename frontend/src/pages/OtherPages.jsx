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

// Resources / Gallery Page
import g1 from '../assets/images/02.jpg';
import g2 from '../assets/images/03.jpg';
import g3 from '../assets/images/04.jpg';
import g4 from '../assets/images/05.jpg';
import g5 from '../assets/images/06.jpg';
import g6 from '../assets/images/07.jpg';
import g7 from '../assets/images/08.jpg';
import g8 from '../assets/images/09.jpg';
import g9 from '../assets/images/ap.jpg';
import g10 from '../assets/images/march.jpg';
import g11 from '../assets/images/childerns.jpg';
import g12 from '../assets/images/our-mission.jpg';

const galleryImgs = [g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12];

export function Resources() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <span className="bg-secondary text-white text-sm font-bold uppercase tracking-widest px-10 py-2.5 rounded-full shadow">GALLERY</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {galleryImgs.map((img, i) => (
          <div key={i} className="overflow-hidden aspect-square cursor-pointer group">
            <img src={img} alt={`Gallery ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
          </div>
        ))}
      </div>
    </div>
  );
}

// GetInvolved / Donate Now Page
export function GetInvolved() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-5">DONATE NOW</h1>

      {/* Intro */}
      <p className="text-sm text-gray-600 leading-relaxed text-center italic mb-4">
        WATCH is involved in ensuring rights of the women and child, particularly from the vulnerable section of the community. We are implementing various activities that help address education and health issues and facilitate access to mainstream services (schools and community health centers) and also promote community action and stakeholders involvement to ensure accountability.
      </p>
      <p className="text-sm text-gray-600 text-center italic mb-10">
        Be part of the societal transformation! We invite you to graciously donate to our organization and help fund various projects and activities.
      </p>

      {/* Two column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left — Sponsor */}
        <div>
          <h2 className="text-base font-bold text-gray-800 text-center mb-4">Sponsor a child/ activity at Karunya Children's Home</h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-3">
            The cost for one child to be housed and educated in Karunya is Rs.5000 per month. This cover teachers'-cum-caretakers' salaries, stationery, and books. It also covers boarding and lodging including 3 healthy meals a day for a child. You could also make a one-time financial donation.
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>A nutritious mid-day meal for the day for the 50+ children: Rs.2500</li>
            <li>Clothes, stationery, books and study materials for the 50+ children: Rs.2000 per child</li>
          </ul>
        </div>

        {/* Right — How to Donate */}
        <div>
          <h2 className="text-base font-bold text-gray-800 text-center mb-4">How to Donate</h2>
          <p className="text-sm text-gray-600 mb-2">Donation through cheque/DD:<br />The cheque/DD to be drawn in favor of "WATCH" payable at Bangarupalayam and sent to our office address.</p>
          <p className="text-sm text-gray-600 mb-3">Online Wire transfer: Transfer your donation amount to the following WATCH's bank account directly.</p>

          <div className="text-sm text-gray-700 space-y-1 mb-4">
            <p className="font-bold underline text-secondary">WATCH FOREIGN FUNDS:</p>
            <p>A/c name: <span className="text-secondary">WATCH</span></p>
            <p>Bank: Canara Bank</p>
            <p>Savings Bank A/c No: 0852101018543</p>
            <p>IFSC Code: CNRB0000852</p>
            <p>SWIFT Code: CNRBINBBHFD</p>
            <p>Branch: Canara Bank, Dorai Swamy Iyengar Street,<br />Chittoor-517001, Andhra Pradesh, India.</p>
          </div>

          <div className="text-sm text-gray-700 space-y-1 mb-4">
            <p className="font-bold underline text-secondary">WATCH LOCAL FUNDS:</p>
            <p>A/c name: <span className="text-secondary">WATCH LOCAL FUNDS</span></p>
            <p>Bank: Canara Bank</p>
            <p>Savings Bank A/c No: 0852101036064</p>
            <p>IFSC Code: CNRB0000852</p>
            <p>SWIFT Code: CNRBINBBHFD</p>
            <p>Branch: Canara Bank, Dorai Swamy Iyengar Street,<br />Chittoor-517001, Andhra Pradesh, India.</p>
          </div>

          <p className="text-sm text-gray-600 mb-3">WATCH is 12A and 80G registered which grants income tax exemption to both donors and WATCH. Our Organisation is also FCRA registered which enables us to accept foreign currency donation.</p>
          <p className="text-sm text-gray-600 italic mb-3">If you would like to talk to us, do send us a mail. We hope to hear from or see you in the near future!</p>
          <div className="text-sm text-gray-600 space-y-0.5">
            <p>Women's Association for Liberation, Transformation and Community Health (WATCH)</p>
            <p>No: 1-52, B.C. Colony, Bangarupalayam,</p>
            <p>Chittoor District - 517 416, Andhra Pradesh, India.</p>
            <p>Mobile: +91 94402 77631</p>
            <p>E-mail: <a href="mailto:watch_india2003@yahoo.co.in" className="text-secondary hover:underline">watch_india2003@yahoo.co.in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

// AuditReport Page

import audit2024 from '../assets/pdf/audit-24-25.pdf';
import audit2023 from '../assets/pdf/audit-23-24.pdf';
import audit2022 from '../assets/pdf/Audit-2022-2023.pdf';

export function AuditReport() {
  const reports = [
    { year: '2024-25', status: 'Available', pdf: audit2024 },
    { year: '2023-24', status: 'Available', pdf: audit2023 },
    { year: '2022-23', status: 'Available', pdf: audit2022 },
  
  ];

  const handleView = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  const handleDownload = (pdfUrl, fileName) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            <div className="flex gap-2">
              <button 
                onClick={() => handleView(r.pdf)}
                className="bg-secondary text-white text-xs font-bold px-4 py-2 hover:bg-teal transition-colors flex items-center gap-2 rounded"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                VIEW
              </button>
              <button 
                onClick={() => handleDownload(r.pdf, `Audit-Report-${r.year}.pdf`)}
                className="bg-primary text-white text-xs font-bold px-4 py-2 hover:bg-primary-dark transition-colors flex items-center gap-2 rounded"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                DOWNLOAD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// AnnualReport Page

import pdf2024 from '../assets/pdf/annual-report-24-25.pdf';  
import pdf2023 from '../assets/pdf/annual-report-23-24.pdf'; 
import pdf2022 from '../assets/pdf/annual-report-22-23.pdf'; 

export function AnnualReport() {
  const reports = [
    { year: '2024-25', pages: '48 pages', status: 'Available' , pdf: pdf2024 },
    { year: '2023-24', pages: '42 pages', status: 'Available' ,pdf: pdf2023},
    { year: '2022-23', pages: '36 pages', status: 'Available', pdf: pdf2022 },
    
  ];

  const handleView = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  const handleDownload = (pdfUrl, fileName) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <span className="inline-block bg-orange-500 text-white text-md font-bold uppercase tracking-widest px-8 py-2">ANNUAL REPORTS</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {reports.map(r => (
          <div key={r.year} className="bg-gray-50 border border-gray-200 p-6 flex items-center gap-4">
            <div className="bg-primary text-white p-4 flex-shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-md">Annual Report {r.year}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{r.status}</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => handleView(r.pdf)}
                className="bg-secondary text-white text-xs font-bold px-3 py-2 hover:bg-teal transition-colors flex items-center gap-1 rounded"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                VIEW
              </button>
              <button 
                onClick={() => handleDownload(r.pdf, `Annual-Report-${r.year}.pdf`)}
                className="bg-[#671700] text-white text-xs font-bold px-3 py-2 hover:bg-orange-600 transition-colors flex items-center gap-1 rounded"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                DOWNLOAD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Blog Page

import img1 from '../assets/images/lasya.jpg';
import img2 from '../assets/images/ap.jpg';
import img3 from '../assets/images/117.jpg';
import img4 from '../assets/images/63.jpg';

export function Blog() {
  const posts = [
    { title: 'The inspiring story of Lasya and Revathi showcases their unwavering determination and refusal to give up despite the formidable challenges they faced', date: 'March 15, 2024', excerpt: 'Lasya, a 14-year-old from Tambuganipalli, faced immense hardship despite being the top student in her 9th-grade class at Government High School. As a Dalit....', img: img1 },
    { title: 'East and West Godavari Emergency Flood Relief 2019', date: 'February 20, 2024', excerpt: 'In 2019, Andhra Pradesh experienced some of its worst floods, severely affecting the East and West Godavari districts....', img: img2 },
    { title: 'WATCH organized a Special coaching program for the youth that focused on English language skills and gender equality', date: 'January 10, 2024', excerpt: 'WATCH organized a Special coaching program for the youth that focused on English language skills and gender equality. The program focused on improving the quality of life for the underserved....', img: img3 },
    { title: '30 free wheelchairs were distributed to Differently Abled Dalit and Tribal poor children and Adults', date: 'December 5, 2023', excerpt: 'Under the leadership of Indian Christian Ministries, the charitable organization WATCH orchestrated a heartwarming initiative to distribute 30 free wheelchairs to Differently Abled Dalit and Tribal poor children and Adults in Bangarupalayam, Palamaner and Chittoor rural mandals of Chittoor District of Andhra Pradesh....', img: img4 },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <span className="inline-block bg-orange-500 text-white text-md font-bold uppercase tracking-widest px-8 py-2">BLOG</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(post => (
          <div key={post.title} className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={post.img} alt={post.title} className="w-full h-60 object-contain"/>
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
