import SectionContainer from "../components/SectionContainer";
import SkillsCanvas from "../components/skills/SkillsCanvas";
import SkillsDescription from "../components/skills/SkillsDescription";

function Skills() {
  return (
    <SectionContainer mdCols={"md:col-start-1 md:col-end-3"} mdRows={"md:row-start-1 md:row-end-6"}>
      <div id="skills">
        <SkillsDescription />
        <SkillsCanvas />
      </div>
    </SectionContainer>
  );
}

export default Skills;
