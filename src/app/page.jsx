import Image from "next/image";
import silhouette from './_assets/silhouette.png';


const Home = () => {
  return (
    <main className="flex flex-col items-center min-h-screen gap-4 p-10 bg-white dark:bg-custBackground">
      <section className="py-10 text-center">
        <h1 className="inline px-1 text-5xl bg-custYellow text-custTurq">.hello thurr</h1>
      </section>

      <section className="pb-10">
        <Image src={silhouette} alt="Silhouette of me free falling" className="w-full" />
      </section>

      <section className="flex flex-col gap-2  text-custTurq selection:bg-transparent">
        <p className="text-lg">I&apos;m a <span className="text-3xl text-custHotpink selection:bg-custYellow">.bold</span> web developer</p>
        <ul className="list-[square] list-inside ml-6 flex flex-col gap-2">
          <li className="text-lg text-[#1e6564]">who thrives in the <span className="text-transparent hover:text-teal-100 hover:cursor-wait">unknown</span>,</li>
          <li className="text-base">finds solutions through <span className="underline px-[2px] bg-custYellow text-custTurq selection:bg-custHotpink selection:text-custYellow">.hardWork</span> and a <span className="text-xl underline">.quickUptake</span>,</li>
          <li className="text-base">and whose strength lies in <span className="text-teal-100"> <span className="text-nowrap">[ structured ]</span> and <span className="text-nowrap">{"<clean code>"}</span>.</span></li>
        </ul>
        <p className="inline px-2 mt-6 text-2xl text-white selection:bg-transparent bg-custTurq">I also have experience as a creative & graphic designer</p>
      </section>
    </main>
  );
}

export default Home