import SectionContainer from "../components/SectionContainer";
import SkillsCanvas from "../components/skills/SkillsCanvas";
import SkillsDescription from "../components/skills/SkillsDescription";

function Skills() {
  return (
    <SectionContainer>
      <div id="skills">
        <SkillsDescription />
        <SkillsCanvas />
      </div>
    </SectionContainer>
  );
}

export default Skills;
