import { IonIcon } from "@ionic/react";
import { logoLinkedin, logoGithub } from "ionicons/icons";
import Link from "next/link";

function SocialLinks() {
  return (
    <div className="w-full flex justify-evenly text-3xl">
      <Link
        href={"https://www.linkedin.com/in/koolxtreme/"}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full w-10 h-10 flex items-center justify-center hover:text-[#0a66c2] hover:bg-white transition-colors"
      >
        <IonIcon icon={logoLinkedin} aria-label="LinkedIn Profile"></IonIcon>
      </Link>
      <Link
        href={"https://github.com/KoolDeveloper"}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full w-10 h-10 flex items-center justify-center hover:text-white hover:bg-black transition-colors"
      >
        <IonIcon icon={logoGithub} aria-label="GitHub Profile"></IonIcon>
      </Link>
    </div>
  );
}

export default SocialLinks;
