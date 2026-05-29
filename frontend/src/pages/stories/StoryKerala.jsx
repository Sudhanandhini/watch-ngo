import img from '../../assets/images/march.jpg';

export default function StoryKerala() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="flex justify-start mb-6">
        <img src={img} alt="Kerala Flood Relief Response" className="w-full md:w-[480px] h-auto object-cover shadow" />
      </div>
      <div className="text-sm text-gray-700 leading-relaxed space-y-4 text-justify">
        <p>
          In response to the 2018 cyclones in Kerala, WATCH NGO played a pivotal role in the relief and rehabilitation efforts. Collaborating with 18 volunteers and supported by Sign of Hope, Germany, the WATCH team provided essential relief materials to those affected by the floods. They distributed aid to approximately 500 families across various communities, ensuring they received food, safe drinking water, and crucial supplies.
        </p>
        <p>
          The relief kits included rice, sugar, dal, oil, bed sheets, sarees, towels, tiffin carriers for children, and sanitary napkins for women and girls. A total of 500 kits were packed and delivered, with a focus on the most severely impacted Dalit and Tribal communities. The initiative was a significant success and received high praise from both locals and flood survivors.
        </p>
        <p>
          Beyond immediate relief, WATCH NGO also provided psychological support to help individuals cope with the aftermath of the disaster.
        </p>
      </div>
    </div>
  );
}
