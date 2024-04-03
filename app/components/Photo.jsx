import Image from "next/image";

function Photo() {
  return (
    <div className="mt-8 relative w-[60vw] md:w-[30vw] h-[60vw] md:h-[30vw] flex justify-center items-center bg-[#e63b1a] mx-auto rounded-full border-[5px] border-black shadow-3xl">
      <div className="relative rounded-full w-[88%] h-[88%] shadow-dentro flex justify-center items-center">
        <div className="relative rounded-full w-[90%] h-[90%] shadow-dentro flex justify-center items-center">
          <div className="relative rounded-full w-[92%] h-[92%] shadow-dentro flex justify-center items-center">
            <div className="relative rounded-full w-[90%] h-[90%] shadow-dentro flex justify-center items-center">
              <div className="relative rounded-full w-[90%] h-[90%] shadow-dentro flex justify-center items-center">
                <div className="relative rounded-full w-[92%] h-[92%] shadow-dentro flex justify-center items-center">
                  <div className="relative w-[90%] h-[90%] bg-[#3e0001] rounded-full overflow-hidden">
                    <Image
                      width={1080}
                      height={720}
                      alt="My photo"
                      src={"/yomerito.png"}
                      className="absolute bottom-0 w-full h-full"
                    />
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

export default Photo;