const traits = [
  {
    item: "Creative",
    example: "I have a very creative mindset that always challenges me to try new things. That's why I have an overload of hobbies, such as writing short novels, creating artwork, exploring the outdoors and much more",
  },
  {
    item: "Communicative",
    example: "Communication is key to me. Having worked retail for years, I've learned that effective communication is essential for a healthy work environment and project success",
  },
  {
    item: "Curious",
    example: "My inherent curiosity drives me to naturally seek out new features and explore things from different perspectives. It also helps me to stay up to date with the code community and what's happening in it",
  },
  {
    item: "Diligent",
    example: "I always give my all to every project I do, and I'm proud of the work I produce. This dedication helps me keep a high standard in my code and finish tasks on time",
  },
  {
    item: "Eager learner",
    example: "Creativity and Curiousity makes an Eager learner. This ability has enabled me to advance in ranks and take on more professional responsibilities in previous work places",
  },
  {
    item: "Can-do attitude",
    example: "If Creativity and Curiosity make an Eager learner, they are also fueled by a can-do attitude. If I fail, I always get back up and try again until I succeed",
  },
  {
    item: "Team Player",
    example: "I'm used to working towards a common goal, and working together just makes things more fun. I always end up learning something new when working together",
  }
];

const PersonalityTraits = ({ traitHandler }) => {
  return (
    <ul className="grid grid-cols-1 text-xl tracking-wider uppercase xl:text-2xl md:grid-cols-2 gap-y-10">
      {traits.map((trait, index) => (
        <li
          key={index}
          onClick={() => traitHandler(trait.example, true)}
          // onMouseOut={() => traitHandler("", false)}
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
