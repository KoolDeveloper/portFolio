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
      <div className="mt-5 grid md:grid-cols-2 items-center justify-items-center">
        <h2 className="text-xl mb-6">{t("css")}</h2>
        <div className="mx-auto">
          <DesertCity />
        </div>
        <h2 className="mt-6 text-xl mb-6">Enmaquetado HTML</h2>
        <div className="bg-harvest-gold-500 h-[300px] w-[300px] text-xl text-center grid grid-cols-9 grid-rows-9 gap-2 pb-2">
            
          <div className="row-start-1 row-end-10 col-start-1 col-end-3 bg-blumine-200 flex justify-center items-center text-clip overflow-hidden animate-miniNav">
            Mini Navigation
          </div>
          <div className="row-start-1 row-end-5 col-start-8 col-end-10 bg-blumine-300 flex justify-center items-center animate-miniSidebar1">
            Mini Sidebar 1
          </div>
          <div className="row-start-5 row-end-10 col-start-8 col-end-10 bg-blumine-400 flex justify-center items-center animate-miniSidebar2">
            Mini sidebar 2
          </div>
          <div className="row-start-1 row-end-8 col-start-3 col-end-8 bg-blumine-500 flex justify-center items-center animate-miniMain">
            Mini Main
          </div>
          <div className="row-start-8 row-end-10 col-start-3 col-end-8 bg-blumine-600 flex justify-center items-center animate-miniFooter">
            Mini Footer
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
