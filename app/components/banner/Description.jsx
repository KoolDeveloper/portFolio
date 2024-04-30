import SocialLinks from "./SocialLinks";
import { useTranslations } from "next-intl";
import Typewriter from "typewriter-effect";

function Description({ isHidden }) {
  const t = useTranslations("presentation");
  return (
    <div
      className={`absolute top-0 z-10 ${
        isHidden
          ? "-translate-x-[100%] opacity-0"
          : "translate-x-0 translate-y-[35vh] md:translate-y-0 md:translate-x-[18vw] opacity-100"
      } grid gap-12 p-8 bg-portafino dark:bg-blue-dianne-600 w-[90vw] md:w-[60%] rounded-3xl shadow-dentro dark:shadow-dentroDark transition-[opacity, transform] duration-1000`}
    >
      <h1>{t("about")}</h1>
      <div className="text-justify">
        {!isHidden && (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
              .changeDelay(40)
                .typeString(t("description"))
                .start();
            }}
          />
        )}
      </div>
      <SocialLinks />
    </div>
  );
}

export default Description;