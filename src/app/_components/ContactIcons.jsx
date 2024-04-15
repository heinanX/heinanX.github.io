import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from 'next/link'

const ContactIcons = ({ textSize }) => {
  return (
    <article className={`flex flex-row justify-center gap-8 ${textSize}`}>
      <Link href={'https://github.com/heinanX'} className="cursor-pointer hover:text-custTurq">
        <FaGithub />
      </Link>
      <Link href={'mailto:eskilson.Linda@gmail.com'} className="cursor-pointer hover:text-custTurq">
        <FaLinkedin />
      </Link>
      <Link href={'mailto:eskilson.Linda@gmail.com'} className="cursor-pointer hover:text-custTurq">
        <FaEnvelope />
      </Link>
    </article>
  );
};

export default ContactIcons;
