import { DotGothic16 } from "next/font/google";
import About from "../ui/About";
import Skills from "../ui/Skills";
import Services from "../ui/Services";

const dotGothic16 = DotGothic16({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${dotGothic16.className}`}>
      <About />
      <section className="w-full grid gap-8 md:gap-10 md:grid-cols-6 p-6">
        <Skills />
        <Services />
      </section>
    </main>
  );
}
