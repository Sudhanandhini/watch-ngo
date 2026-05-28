const initiatives = [
  {
    title: 'Karunya Childrens Home',
    desc: 'A short-stay home program for abused, trafficked and vulnerable children. Provides rescue, restoration and rehabilitation services with education, counseling and care.',
    icon: '🏠',
  },
  {
    title: 'Self Help Groups',
    desc: 'WATCH has facilitated formation of hundreds of Self Help Groups (SHGs) for women to promote savings, credit access and income-generating activities at the grassroots level.',
    icon: '👥',
  },
  {
    title: 'Child Clubs',
    desc: "Children's clubs in villages play a pivotal role in spreading awareness and preventing child abuse cases. They empower children to speak up and hold duty bearers accountable.",
    icon: '🎭',
  },
  {
    title: 'School Support Programme',
    desc: 'Remedial education, school infrastructure improvements, smart classrooms, and strengthening school management committees to improve education quality.',
    icon: '📚',
  },
  {
    title: 'Emergency Relief',
    desc: 'WATCH responds to natural disasters and emergencies with food, medical aid and rehabilitation support for affected families in Andhra Pradesh.',
    icon: '🚑',
  },
  {
    title: 'Legal Aid & Advocacy',
    desc: 'Working with District Legal Services Authority and Police Department to ensure legal protection for children and women victims of violence and trafficking.',
    icon: '⚖️',
  },
];

export default function WhatWeDo() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <span className="inline-block bg-orange-500 text-white text-md font-bold uppercase tracking-widest px-8 py-2">WHAT WE DO</span>
      </div>

      <p className="text-md text-gray-600 leading-relaxed text-center max-w-3xl mx-auto mb-10">
        WATCH implements a range of programmes and initiatives focused on child protection, women empowerment, education, health, and community development across Chittoor and adjoining districts of Andhra Pradesh.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initiatives.map(item => (
          <div key={item.title} className="border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-base font-bold text-primary mb-2">{item.title}</h3>
            <p className="text-md text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
