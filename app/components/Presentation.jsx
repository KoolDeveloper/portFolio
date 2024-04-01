"use client";

import Typewriter from "typewriter-effect";

export default function Presentation() {
  return (
    <section className="mt-4">
      <div className="text-4xl text-center">
        <p className="text-blumine-600 dark:text-rope-500">I&apos;m</p>
        <p className="font-bold text-blumine-600 dark:text-rope-500">
          James Ruiz
        </p>
        <div className="font-bold text-blumine-500 dark:text-rope-300">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Software Developer")
                .start();
            }}
          />
        </div>
      </div>
    </section>
  );
}
