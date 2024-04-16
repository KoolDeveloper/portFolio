import { DotGothic16 } from "next/font/google";
import About from "../ui/About";
import Skills from "../ui/Skills";


const dotGothic16 = DotGothic16({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {

  return (
    <main className={`grid gap-4 md:gap-8 ${dotGothic16.className}`}>
      <About />
      <Skills />
    </main>
  );
}
