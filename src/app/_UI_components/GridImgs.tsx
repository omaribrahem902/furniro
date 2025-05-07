import Image from "next/image";
const GridImgs = () => {
  return (
    <>
                <section className="hidden lg:block  pt-[30px] pb-[20px] h-[120vh]">
          <div className="flex flex-col justify-center items-center">
           <p className="text-[14px] lg:text-[20px] font-semibold text-[#616161]"> Share your setup with</p>
            <h1 className="text-2xl lg:text-[40px] font-bold ">#FuniroFurniture</h1>
          </div>
          <div className="relative">
            <div className="absolute top-[-90px] left-0">
              <Image src={"/imgs/Home_imgs/left_top_rec.png"} alt="left_top_rec" width={100} height={300}/>
            </div>
            <div className="absolute left-[110px] top-[50px]">
              <Image src={"/imgs/Home_imgs/labtop.png"} alt="labtop" width={451} height={312}/>
            </div>
            <div className="absolute top-[130px] left-[570px]">
              <Image src={"/imgs/Home_imgs/sofra.png"} alt="sofra" width={295} height={392}/>
            </div>
            <div className="absolute left-[875px] top-[70px]">
              <Image src={"/imgs/Home_imgs/bed.png"} alt="bed" width={290} height={348}/>
            </div>
            <div className="absolute left-[1175px] top-[-78px]">
              <Image src={"/imgs/Home_imgs/eating_table.png"} alt="eating_table" width={300} height={433}/>
            </div>
            <div className="absolute left-0 top-[392px]">
              <Image src={"/imgs/Home_imgs/brown_chair.png"} alt="brown_chair" width={190} height={323}/>
            </div>
            <div className="absolute left-[200px] top-[372px]">
              <Image src={"/imgs/Home_imgs/vasa.png"} alt="vasa" width={344} height={242}/>
            </div>
            <div className="absolute  left-[875px] top-[428px]">
              <Image src={"/imgs/Home_imgs/frame.png"} alt="frame" width={178} height={242}/>
            </div>
            <div className="absolute left-[1063px] top-[428px]">
              <Image src={"/imgs/Home_imgs/kitchen_eqiupment.png"} alt="kitchen_equipment" width={258} height={196}/>
            </div>
          </div>
        </section>
    </>
  )
}

export default GridImgs