import Drawer from "../../../Drawer";

const abilities = [
  {
    title: "Creative",
    description:
      "I have a very creative mindset that always challenges me to try new things. That's why I have an overload of hobbies, such as writing short novels, creating artwork, exploring the outdoors and much more",
  },
  {
    title: "Communicative",
    description:
      "Communication is key to me. Having worked retail for years, I've learned that effective communication is essential for a healthy work environment and project success",
  },
  {
    title: "Curious",
    description:
      "My inherent curiosity drives me to naturally seek out new features and explore things from different perspectives. It also helps me to stay up to date with the code community and what's happening in it",
  },
  {
    title: "Diligent",
    description:
      "I always give my all to every project I do, and I'm proud of the work I produce. This dedication helps me keep a high standard in my code and finish tasks on time",
  },
  {
    title: "Eager learner",
    description:
      "Creativity and Curiousity makes an Eager learner. This ability has enabled me to advance in ranks and take on more professional responsibilities in previous work places",
  },
  {
    title: "Can-do attitude",
    description:
      "If Creativity and Curiosity make an Eager learner, they are also fueled by a can-do attitude. If I fail, I always get back up and try again until I succeed",
  },
  {
    title: "Team Player",
    description:
      "I'm used to working towards a common goal, and working together just makes things more fun. I always end up learning something new when working together",
  },
];

const AbilityList = ({ abilityHandler }) => {
  return (
    <>
      {/* Only visible screens < 1024px */}
      <ul className="hidden grid-cols-1 text-xl tracking-wider uppercase lg:grid xl:text-2xl md:grid-cols-2 gap-y-10">
        {abilities.map((ability, index) => (
          <li
            key={index}
            onClick={() => abilityHandler(ability.description, true)}
            // onMouseOut={() => abilityHandler("", false)}
            className="pl-4 hover:cursor-pointer hover:text-custBackground"
          >
            <span className="text-md">+ </span>
            {ability.title}
          </li>
        ))}
      </ul>

      {/* Only visible screens >1024px */}
      <div className="grid w-full grid-cols-1 lg:hidden gap-y-8">
        {abilities.map((ability, i) => (
          <Drawer
            key={i}
            title={ability.title}
            body={ability.description}
          />
        ))}
      </div>
    </>
  );
};

export default AbilityList;
