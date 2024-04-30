import { useTranslations } from "next-intl";

function SkillsDescription() {
  const t = useTranslations("skills");
  return (
    <div className="text-center grid gap-4 mx-auto">
      <h3 className="text-2xl">{t("title")}</h3>
      <p>{t("content")}</p>
    </div>
  );
}

export default SkillsDescription;
