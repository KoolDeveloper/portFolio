function SkillsBars() {
  const skills = {
    Python: 70,
    JavaScript: 90,
    ReactJs: 75,
    NodeJs: 70,
    SQL: 100,
    MongoDB: 90,
  };
  return (
    <div className="grid gap-2">
      {Object.entries(skills).map(([skill, value]) => (
        <div
          key={skill}
          className="relative text-center grid gap-3 w-full m-auto md:w-[40vw]"
        >
          <p>{skill}</p>
          <div className="bg-gray-500 rounded-xl w-full border-2 border-black">
            <div
              className="bg-bright-red h-full shadow-dentro rounded-xl text-center text-white border-2 border-transparent"
              style={{
                width: `${value}%`,
              }}
            >{`${value} %`}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsBars;
