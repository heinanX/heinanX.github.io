import Image from "next/image";

const TextImageSection = ({image, alt, component: Component}) => {
console.log('im in textImage');

  return (
    <article className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
      <section className="md:order-2">
        <Image src={image} alt={alt} className="max-w-[550px]" />
      </section>
      <section className="relative md:order-1">
    <Component />
        </section>
    </article>
  );
};

export default TextImageSection;
