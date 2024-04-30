import MiniPage from "../components/myservices/MiniPage";
import DesertCity from "../components/myservices/walkerAnimation/DesertCity";
import { useTranslations } from "next-intl";

function Services() {
  const t = useTranslations("services");
  return (
    <section
      className="relative bg-blue-dianne-400 grid gap-2 p-6 w-[92vw] md:w-1/2 m-auto z-10 rounded-md shadow-dentro"
      id="services"
    >
      <h3 className="text-center text-2xl">{t("title")}</h3>
      <div className="mt-5 grid lg:grid-cols-2 items-center justify-items-center gap-4">
        <h2 className="mt-6 text-xl mb-6">{t("html")}</h2>
        <MiniPage />
        <h2 className="text-xl mb-6">{t("css")}</h2>
        <div className="mx-auto">
          <DesertCity />
        </div>
      </div>
    </section>
  );
}

export default Services;
