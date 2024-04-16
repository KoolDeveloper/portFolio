import SkillsBars from "../components/skills/SkillsBars";
import SkillsDescription from "../components/skills/SkillsDescription";

function Skills() {
  return (
    <section className="relative bg-blue-dianne-400 grid gap-2 p-6 w-[95vw] md:w-1/2 m-auto z-10 rounded-md shadow-dentro">
      <SkillsDescription />
      <SkillsBars />
    </section>
  );
}

export default Skills;
