"use client";

import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

import Typewriter from "typewriter-effect";
import Photo from "./Photo";

export default function Presentation() {
  return (
    <section className={`mt-20 ${dancingScript.className}`}>
      <div className="text-4xl text-center">
        <div className="font-bold text-blumine-600 dark:text-rope-500">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("I'm")
                .pasteString("<br>")
                .typeString("James Ruiz")
                .start();
            }}
          />
        </div>
        <div className="flex items-center justify-center relative">
          <div className="photoHolder"></div>
        </div>
        <Photo />
        <div className="font-bold text-blumine-500 dark:text-rope-300">
          <Typewriter
            options={{
              strings: ["Software Developer", "UI/UX Designer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </section>
  );
}
