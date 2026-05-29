import d1 from '../assets/images/31.jpg';
import d2 from '../assets/images/32.jpg';
import d3 from '../assets/images/33.jpg';
import d4 from '../assets/images/34.jpg';
import d5 from '../assets/images/35.jpg';
import d6 from '../assets/images/36.jpg';
import d7 from '../assets/images/37.jpg';
import d8 from '../assets/images/38.jpg';

const row1 = [d1, d2, d3];
const row2 = [d4, d5];
const row3 = [d6, d7, d8];

export default function Donors() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h2 className="text-base font-bold text-secondary mb-3">
        Sponsor a Child/ Activity at Karunya Children's Home
      </h2>
      <p className="text-sm text-gray-700 leading-relaxed text-justify mb-2">
        Your act of kindness can transform lives of children who are in desperate need of your support. The cost for one child to be housed and educated in Karunya is Rs.5000/- per month. (This cover teachers'-cum-caretakers' salaries, stationery, and books. It also covers boarding and lodging including 3 healthy meals a day for a child.)
      </p>
      <p className="text-sm text-gray-700 leading-relaxed text-justify mb-6">
        A nutritious mid-day meal for the day for the 50+ children: Rs.2500/- Clothes, stationery, books and study materials for the 50+ children: Rs.2000/- per child You could also make a one-time financial donation and we assure you that the worth of it will be much more for these souls in need.
      </p>

      {/* Row 1 — 3 photos */}
      <div className="grid grid-cols-3 gap-3 mb-3">
        {row1.map((img, i) => (
          <img key={i} src={img} alt={`Donor ${i + 1}`} className="w-full h-auto object-cover shadow" />
        ))}
      </div>

      {/* Row 2 — 2 photos */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {row2.map((img, i) => (
          <img key={i} src={img} alt={`Donor ${i + 4}`} className="w-full h-auto object-cover shadow" />
        ))}
      </div>

      {/* Row 3 — 3 photos */}
      <div className="grid grid-cols-3 gap-3">
        {row3.map((img, i) => (
          <img key={i} src={img} alt={`Donor ${i + 6}`} className="w-full h-auto object-cover shadow" />
        ))}
      </div>
    </div>
  );
}
