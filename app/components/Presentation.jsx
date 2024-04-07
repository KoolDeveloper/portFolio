"use client";

import Photo from "./Photo";

export default function Presentation() {
  return (
    <section className={`mt-20`}>
      <div className="text-4xl text-center">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Photo />
          </div>
          <div className="grid gap-12 p-8 bg-">
            <h1>About Me</h1>
            <p className="text-justify">
              I&apos;m a software developer focused on web development, I&apos;m
              proficient in Front as in Back-end development, my background
              starts on 2019 pandemics when I decided to start learning python
              by my own, I quickly realized that I was going to need some
              guidance if I wanted to grow so I&apos;ve joined Platzi, there
              I&apos;ve leanerd the OOP principles and built my first portfolio
              in vanilla javascript. I kept learning untill I got my first React
              project with node.js as backend server achieved. 
              <br/>
              <br/>
              Since that point I&apos;ve been applying for bacants and never stopped learning but it
              has been hard without a title, so what you&apos;ll see added on my
              works are all personal projects, I hope you enjoy them!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
