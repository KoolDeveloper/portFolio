import SocialLinks from "./SocialLinks";

function Description({ isHidden }) {
  return (
    <div
      className={`absolute top-0 ${
        isHidden
          ? "-translate-x-[100%] opacity-0"
          : "translate-x-0 translate-y-[30vh] md:translate-y-0 md:translate-x-[18vw] opacity-100"
      } grid gap-12 p-8 bg-[#e63b1a] w-[90vw] md:w-[60%] rounded-3xl shadow-dentro transition-[opacity, transform] duration-1000 z-0`}
    >
      <h1>About Me</h1>
      <p className="text-justify">
        I&apos;m proficient in Front as in Back-end development, my background
        starts on 2019 pandemics when I decided to start learning python by my
        own, I quickly realized that I was going to need some guidance if I
        wanted to grow so I decided to join Platzi, there I&apos;ve learned the
        OOP principles and git repositories management to finally built my first
        portfolio in vanilla javascript. I kept learning untill I got my first
        React project with node.js as backend server achieved.
        <br />
        <br />
        Since that point I&apos;ve been applying for bacants and never stopped
        learning but it has been hard without a title, so what you&apos;ll see
        added on my works are all personal projects, I hope you enjoy them!
      </p>
      <SocialLinks />
    </div>
  );
}

export default Description;
