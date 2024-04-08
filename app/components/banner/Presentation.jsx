"use client";
import { useState } from "react";

import Photo from "./Photo";
import Description from "./Description";

export default function Presentation() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <section className={`mt-20`}>
      <div className="text-xl text-center">
        <div className="relative flex justify-center items-center">
          <Photo isHidden={isHidden} setIsHidden={setIsHidden} />
          <Description isHidden={isHidden} />
        </div>
      </div>
    </section>
  );
}
