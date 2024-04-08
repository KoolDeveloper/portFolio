"use client";
import { useState } from "react";

import Photo from "./Photo";

export default function Presentation() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <section className={`mt-20`}>
      <div className="text-xl text-center">
        <div className="relative flex justify-center items-center">
          <div className={`absolute top-0 ${isHidden ? "":"-translate-y-[5vh] md:-translate-x-[30vw]"} transition-transform duration-1000`}>
            <Photo isHidden={isHidden} setIsHidden={setIsHidden} />
          </div>
          <div
            className={`absolute top-0 ${
              isHidden
                ? "-translate-x-[100%] opacity-0"
                : "translate-x-0 translate-y-[30vh] md:translate-y-0 md:translate-x-[18vw] opacity-100"
            } grid gap-12 p-8 bg-[#e63b1a] w-[90vw] md:w-[60%] rounded-3xl shadow-dentro transition-[opacity, transform] duration-1000 z-0`}
          >
            <h1>About Me</h1>
            <p className="text-justify">
              I&apos;m a software developer focused on web development, I&apos;m
              proficient in Front as in Back-end development, my background
              starts on 2019 pandemics when I decided to start learning python
              by my own, I quickly realized that I was going to need some
              guidance if I wanted to grow so I joined to Platzi, there
              I&apos;ve leanerd the OOP principles and git repositories
              management to finally built my first portfolio in vanilla
              javascript. I kept learning untill I got my first React project
              with node.js as backend server achieved.
              <br />
              <br />
              Since that point I&apos;ve been applying for bacants and never
              stopped learning but it has been hard without a title, so what
              you&apos;ll see added on my works are all personal projects, I
              hope you enjoy them!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
