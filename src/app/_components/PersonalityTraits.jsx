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
    <div className="px-6">
      <ul className="relative grid grid-cols-2 text-2xl tracking-wider uppercase gap-y-10">
        {traits.map((trait, index) => (
          <li
            key={index}
            onClick={() => mouseAction(trait.example, true)}
            onMouseOut={() => mouseAction('', false)}
            className="hover:cursor-pointer hover:dark:text-custBackground"
          >
            <span className="text-md">+ </span>
            {trait.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalityTraits;
