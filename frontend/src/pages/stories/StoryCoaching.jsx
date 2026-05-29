import img from '../../assets/images/09.jpg';

export default function StoryCoaching() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="flex justify-start mb-6">
        <img src={img} alt="Special coaching program" className="w-full md:w-[480px] h-auto object-cover shadow" />
      </div>
      <div className="text-sm text-gray-700 leading-relaxed space-y-4">
        <p className="text-justify">
          WATCH organized a Special coaching program for the youth that focused on English language skills and gender equality. The program focused on:
        </p>

        <div>
          <h3 className="font-bold text-gray-800 mb-2">English Language Coaching</h3>
          <ol className="list-decimal list-inside space-y-1.5 pl-2">
            <li><strong>Skill Development:</strong> Emphasis on reading, writing, speaking, and listening skills.</li>
            <li><strong>Interactive Sessions:</strong> Use of engaging methods like debates, role-plays, and group discussions.</li>
            <li><strong>Practical Application:</strong> Encouraging usage of English in real-life scenarios such as day today communication and making sentences and short paragraph to understand the flow of talking in length.</li>
            <li><strong>Personalized Attention:</strong> Tailored coaching to address individual strengths and areas for improvement.</li>
          </ol>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-2">Gender Equality Education</h3>
          <ol className="list-decimal list-inside space-y-1.5 pl-2">
            <li><strong>Awareness Building:</strong> Educating youth about gender rights, stereotypes, and equality.</li>
            <li><strong>Interactive Workshops:</strong> Sessions that challenge existing biases and promote open discussions.</li>
            <li><strong>Role Models:</strong> Introducing inspiring figures and success stories related to gender equality.</li>
            <li><strong>Skill Building:</strong> Training on how to advocate for gender equality and address gender-based issues.</li>
          </ol>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-2">Program Structure</h3>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong>Workshops:</strong> Regular sessions that cover both English and gender equality topics.</li>
            <li><strong>Mentorship:</strong> Guidance from mentors who specialize in language education and gender equality advocacy.</li>
            <li><strong>Community Projects:</strong> Opportunities to apply what they've learned in real-world projects or campaigns.</li>
            <li><strong>Assessment and Feedback:</strong> Regular evaluation to track progress and areas for improvement.</li>
          </ul>
        </div>

        <p className="text-justify">
          WATCH NGO integrates these elements into their programs to empower youth, enhance their communication skills, and foster a deeper understanding of gender equality issues.
        </p>
      </div>
    </div>
  );
}
