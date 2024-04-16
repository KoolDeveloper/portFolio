function Walker() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-[url(/sky.png)] bg-repeat-x h-[300px] w-[300px] animate-movesky">
        <div className="relative top-[145px] bg-[url(/sea.png)] bg-repeat-x animate-movesea">
          <div className="relative bottom-[34px] bg-[url(/walker.png)] bg-repeat-x bg-left h-[156px] w-[112px] animate-walk mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default Walker;
