import SectionContainer from "../components/SectionContainer";
import SkillsCanvas from "../components/skills/SkillsCanvas";
import SkillsDescription from "../components/skills/SkillsDescription";

function Skills() {
  return (
    <SectionContainer mdCols={"md:col-start-1 md:col-end-3"}>
      <div id="skills">
        <SkillsDescription />
        <SkillsCanvas />
      </div>
    </SectionContainer>
  );
}

export default Skills;
