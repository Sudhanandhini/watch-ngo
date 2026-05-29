import img from '../../assets/images/ap.jpg';

export default function StoryFloodRelief() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="flex justify-start mb-6">
        <img src={img} alt="East and West Godavari Emergency Flood Relief" className="w-full md:w-[480px] h-auto object-cover shadow" />
      </div>
      <div className="text-sm text-gray-700 leading-relaxed space-y-4 text-justify">
        <p>
          In 2019, Andhra Pradesh experienced some of its worst floods, severely affecting the East and West Godavari districts. In response, WATCH, with generous support from Sign of Hope, Germany, provided essential relief to 2,000 community members, with a focus on children and women. Relief efforts included distributing food items like rice, dal (pulses), sugar, oil, as well as non-food essentials such as bed sheets, sarees, vetti, towels, sweaters, lunch boxes, and sanitary napkins to 500 families most impacted by the floods.
        </p>
        <p>
          Local contributions covered the costs of transporting the relief materials and other miscellaneous expenses. Despite the lack of electricity in the affected villages, distribution continued through the night. The recipients expressed immense joy and gratitude, their smiles reflecting the relief and happiness brought by the aid.
        </p>
        <p>
          We, the board members, team, and volunteers of WATCH, extend our heartfelt thanks to Sign of Hope, Germany, for their generous financial support and cooperation during this critical time. Their assistance played a crucial role in helping flood-affected families in their time of severe crisis.
        </p>
      </div>
    </div>
  );
}
