import About from "../ui/About";
import Skills from "../ui/Skills";
import Services from "../ui/Services";


export default function Home() {
  return (
    <main>
      <About />
      <section className="w-full grid gap-8 md:gap-10 md:grid-cols-6 md:grid-rows-6 p-6">
        <Skills />
        <Services />
      </section>
    </main>
  );
}
