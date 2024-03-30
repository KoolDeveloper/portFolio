import Photo from "../components/Photo";
import Presentation from "../components/Presentation";

export default function Banner() {
  return (
    <div className="w-full flex flex-col">
      <Presentation />
      <Photo></Photo>
    </div>
  );
}
