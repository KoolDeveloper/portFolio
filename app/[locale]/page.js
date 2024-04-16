import About from "../ui/About";
import Skills from "../ui/Skills";

export default function Home() {

  return (
    <main className="grid gap-4 md:gap-8">
      <About />
      <Skills />
    </main>
  );
}
