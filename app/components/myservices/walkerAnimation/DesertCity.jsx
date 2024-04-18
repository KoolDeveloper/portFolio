import Walker from "./Walker";

function DesertCity() {
  return (
    <div className="flex justify-center items-center overflow-clip">
        <div className="relative bg-[url(/layers/desert_city/layer_08.png)] bg-repeat-x h-[300px] w-[300px] z-0">
            <div className="relative top-[10px] bg-[url(/layers/desert_city/layer_07.png)] bg-repeat-x bg-cover bg-left-top animate-move1">
                <div className="relative top-[20px] bg-[url(/layers/desert_city/layer_06.png)] bg-repeat-x bg-cover bg-left-bottom animate-move2">
                    <div className="relative top-20px] bg-[url(/layers/desert_city/layer_05.png)] bg-repeat-x bg-cover bg-left-bottom animate-move3">
                        <div className="relative top-[20px] bg-[url(/layers/desert_city/layer_04.png)] bg-repeat-x bg-cover bg-left-bottom animate-move4">
                            <div className="relative top-[20px] bg-[url(/layers/desert_city/layer_03.png)] bg-repeat-x bg-cover bg-left-bottom animate-move5">
                                <div className="relative top-[50px] bg-[url(/layers/desert_city/layer_02.png)] bg-repeat-x bg-cover bg-left-bottom animate-move6">
                                    <div className="relative top-[30px] bg-[url(/layers/desert_city/layer_01.png)] bg-repeat-x bg-cover bg-left-bottom animate-move6">
                                        <Walker speed={2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default DesertCity;
