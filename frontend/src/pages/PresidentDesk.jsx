import lasya from '../assets/images/President.jpg';

export default function PresidentDesk() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Circular profile image */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <img
            src={lasya}
            alt="P. Sree Latha"
            className="w-48 h-48  object-cover " />
        </div>

        {/* Content */}
        <div className="text-gray-700 text-sm leading-relaxed space-y-4 text-justify">
          <p>
            At WATCH we have built a comprehensive care program that reflects our vision for society, a society for children and
            woman that advances their rights in all areas of their lives, education, health, nutrition, safety, employability and more.
            The presence and intervention of WATCH have transformed the lives of many, especially the Dalit and Tribal families.
          </p>
          <p>From our experiential learning we find that:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>When given equal chances to gain skills, the marginalized and poor children are closing the gap between their achievements and from those of the better-off peers.</li>
            <li>Empowered parents are taking action for better services for children and adopting new ideas that promise healthier social environments for children's development.</li>
            <li>Youth are proving that they can be effective leaders of change when equipped with opportunity and support.</li>
          </ul>
          <p>
            We have come a long way with our accomplishments. But still, we see that our accomplishments are just a start,
            laying the foundation for our future endeavors that we focus on - our strategy.
          </p>
          <p>
            Our belief in the power of our supporters has brought us this far. Transforming the lives of children, women, and families
            especially from Dalit & Tribal communities, we have together showcased our best. This transformation is not to the lives of
            the children alone, it's a transformation to our donors as well.
          </p>
          <p>
            I must appreciate the commitment of our team. The passion of our staff, the excitement that has stayed committed throughout
            by our supporters has brought us this far. It is because of the investment of time, treasure, and talents we see
            life-transforming work. As an organization, we are enthusiastic about our co-working in bringing disruptive positive
            changes to ease living of children & women.
          </p>

          <div className="pt-2">
            <p className="font-semibold text-gray-800">P. Sree Latha</p>
            <p className="text-gray-600">President</p>
          </div>
        </div>
      </div>
    </div>
  );
}
