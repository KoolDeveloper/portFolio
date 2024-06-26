function MiniPage() {
  return (
    <div className="bg-harvest-gold-500 h-[240px] w-[240px] md:h-[300px] md:w-[300px] text-xl text-center grid grid-cols-9 grid-rows-9 gap-2 p-2">
      <div className="row-start-1 row-end-10 col-start-1 col-end-3 bg-blumine-200 flex justify-center items-center text-clip overflow-hidden animate-miniNav"></div>
      <div className="row-start-1 row-end-5 col-start-8 col-end-10 bg-blumine-300 flex justify-center items-center overflow-hidden animate-miniSidebar1"></div>
      <div className="row-start-5 row-end-10 col-start-8 col-end-10 bg-blumine-400 flex justify-center items-center overflow-hidden animate-miniSidebar2"></div>
      <div className="row-start-1 row-end-8 col-start-3 col-end-8 bg-blumine-500 flex justify-center items-center animate-miniMain"></div>
      <div className="row-start-8 row-end-10 col-start-3 col-end-8 bg-blumine-600 flex justify-center items-center animate-miniFooter"></div>
    </div>
  );
}

export default MiniPage;
