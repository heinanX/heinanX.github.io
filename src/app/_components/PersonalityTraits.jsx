const traits = [
  {
    item: "Creative",
    example: "I am Creative blah blah",
  },
  {
    item: "Communicative",
    example: "I love communication blah blah",
  },
  {
    item: "Curious",
    example: "I am Curious by nature blah blah",
  },
  {
    item: "Diligent",
    example: "I am diligent in my work blah blah",
  },
  {
    item: "Eager-learner",
    example: "I am an Eager learner blah blah",
  },
  {
    item: "Can-do attitude",
    example: "I have a can do attitude blah blah",
  },
];

const PersonalityTraits = ({ mouseAction }) => {
  return (
    <ul className="grid grid-cols-1 text-xl tracking-wider uppercase xl:text-2xl md:grid-cols-2 gap-y-10">
      {traits.map((trait, index) => (
        <li
          key={index}
          onClick={() => mouseAction(trait.example, true)}
          onMouseOut={() => mouseAction("", false)}
          className="pl-4 hover:cursor-pointer hover:text-custBackground"
        >
          <span className="text-md">+ </span>
          {trait.item}
        </li>
      ))}
    </ul>
  );
};

export default PersonalityTraits;
