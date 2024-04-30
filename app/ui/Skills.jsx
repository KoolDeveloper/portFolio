import SkillsBars from "../components/skills/SkillsBars";
import SkillsCanvas from "../components/skills/SkillsCanvas";
import SkillsDescription from "../components/skills/SkillsDescription";

function Skills() {
  return (
    <section className="relative bg-blue-dianne-400 grid gap-2 p-6 w-[92vw] md:w-1/2 m-auto z-10 rounded-md shadow-dentro" id="skills">
      <SkillsDescription />
      <SkillsCanvas />
    </section>
  );
}

export default Skills;
