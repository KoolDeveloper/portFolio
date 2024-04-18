import Walker from "./Walker";

function Lake() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative bg-[url(/layers/lake/sky.png)] bg-repeat-x h-[300px] w-[300px] animate-move4">
        <div className="relative top-[180px] bg-[url(/layers/lake/sea.png)] bg-repeat-x animate-move6">
          <Walker speed={1} />
        </div>
      </div>
    </div>
  );
}

export default Lake;
