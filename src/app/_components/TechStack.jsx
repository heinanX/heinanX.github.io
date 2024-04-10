const TechStack = ({ arr }) => {
  return (
    <ul className="flex flex-row flex-wrap pt-10 text-lg uppercase gap-x-6 gap-y-3">
      {arr.map((item, index) => (
        <li key={index}>{item.tech}</li>
      ))}
    </ul>
  );
};

export default TechStack;
