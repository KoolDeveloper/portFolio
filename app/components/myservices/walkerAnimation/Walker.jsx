function Walker({speed}) {
  return (
    <div className={`relative bottom-[34px] bg-[url(/layers/walker.png)] bg-repeat-x bg-left h-[156px] w-[112px] ${speed == 1 ? 'animate-walk1' : 'animate-walk2'} mx-auto`}></div>
  );
}

export default Walker;
