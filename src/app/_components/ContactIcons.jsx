import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const icons = [
  { icon: <FaGithub />,
    link: "https://github.com/heinanX" },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/linda-eskilsson-72a70614a/",
  },
  { icon: <FaEnvelope />,
    link: "mailto:eskilson.linda@gmail.com"
  }
];

const ContactIcons = ({ textSize }) => {
  return (
    <article className={`flex flex-row justify-center gap-8 ${textSize}`}>
      {icons.map((item, i) => (
        <Link
          key={i}
          href={item.link}
          className="cursor-pointer hover:text-custTurq"
        >
          {item.icon}
        </Link>
      ))}
    </article>
  );
};

export default ContactIcons;
