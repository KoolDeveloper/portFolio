import Image from "next/image";
import Typewriter from "typewriter-effect";
import { useTranslations } from "next-intl";

import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

function Photo({ setIsHidden, isHidden }) {
  const t = useTranslations("presentation");

  return (
    <div
      className={`absolute top-0 ${
        isHidden ? "" : "-translate-y-[5vh] md:-translate-x-[30vw]"
      } transition-transform duration-1000`}
    >
      <button
        id="about"
        className="mt-8 group relative w-[60vw] md:w-[30vw] h-[60vw] md:h-[30vw] flex justify-center items-center bg-[#e63b1a] hover:bg-[#ab0603] mx-auto rounded-full border-[5px] border-black shadow-3xl"
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        <div
          className={`${dancingScript.className} font-bold text-lg  text-white absolute z-10 top-2 lg:text-3xl lg:top-4 group-hover:text-yellow-200`}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(t("im"))
                .pasteString("<br>")
                .typeString("James Ruiz")
                .start();
            }}
          />
        </div>
        <div
          className={`${dancingScript.className} font-bold text-lg text-white absolute z-10 bottom-8 lg:text-3xl lg:bottom-14 group-hover:text-yellow-200`}
        >
          <Typewriter
            options={{
              strings: [t("sd"), t("ux")],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="relative rounded-full w-[88%] h-[88%] shadow-dentro flex justify-center items-center">
          <div className="relative rounded-full w-[90%] h-[90%] shadow-dentro flex justify-center items-center">
            <div className="relative rounded-full w-[92%] h-[92%] shadow-dentro flex justify-center items-center">
              <div className="relative rounded-full w-[90%] h-[90%] shadow-dentro flex justify-center items-center">
                <div className="relative rounded-full w-[90%] h-[90%] shadow-dentro flex justify-center items-center">
                  <div className="relative rounded-full w-[92%] h-[92%] shadow-dentro flex justify-center items-center">
                    <div className="relative w-[90%] h-[90%] bg-[#3e0001] rounded-full overflow-hidden group-hover:bg-blue-dianne-700">
                      <Image
                        width={420}
                        height={594}
                        alt="My photo"
                        src={"/yomerito.png"}
                        className="absolute bottom-0 w-full h-full"
                        priority={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Photo;
