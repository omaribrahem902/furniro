import Image from "next/image";
import { products } from "../../public/assets";
import ProductCard from "./UI_components/ProductCard";
import CustomButton from "./UI_components/CustomButton";
import Carousel from "./UI_components/Carousel";
import Footer from "./UI_components/Footer";
export default function Home() {
  return (
    <>
    {/* start of Discover our new collection */}
    <section className="relative">
      <Image src="/imgs/Home_img.png" alt="Home img" width={1560} height={717}/>
      <div className="w-[643px] h-[443px] bg-[#FFF3E3] px-[41px] py-[50px] absolute top-[25%] right-[40px] ">
        <p className="text-[18px] font-semibold">New Arrival</p>
        <h1 className="h-[65px] font-extrabold text-[52px] text-(--primary)">Discover Our</h1>
        <h1 className="h-fit font-extrabold text-[52px] text-(--primary)">New Collection</h1>
        <p className="mt-4">Minimalist room with a rattan chair, white cabinet, plants, and cozy decor in a bright setting.</p>
        <button className="text-[16px] font-bold text-white px-[72px] py-[25px] bg-(--primary) mt-[40px] cursor-pointer">BUY NOW</button>
      </div>
    </section>
    {/* end of Discover our new collection */}

    {/* container */}
    <section className="mx-[129px]">

      {/* start of Browse the range section */}
      <section className="flex justify-center items-center my-[40px]">
        <div className="flex flex-col justify-center items-center w-fit ">
          <h1 className="text-[32px] font-bold">Browse The Range</h1>
          <p className="text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </section>

      <section className="flex gap-[52px]">
        <div >
        <Image src="/imgs/Home_imgs/Dining_img.png" alt="dining img" width={381} height={480}/>
        <h2 className="text-center mt-[24px] font-semibold  text-[24px]">Dining</h2>
        </div>
        <div>
        <Image src="/imgs/Home_imgs/living_img.png" alt="living img" width={381} height={480}/>
        <h2 className="text-center mt-[24px] font-semibold text-[24px]">Living</h2>
        </div>
        <div>
        <Image src="/imgs/Home_imgs/Bedroom_img.png" alt="bedroom img" width={381} height={480}/>
        <h2 className="text-center mt-[24px] font-semibold  text-[24px]">Bedroom</h2>
        </div>
      </section>
      {/* end of Browse the range section */}

      {/* start of Our Products section */}
        <h1 className="text-[40px] font-bold text-center mt-[50px] mb-[25px]">Our Products</h1>
        <section className="grid grid-cols-4 gap-[32px]">
          {products.length > 0 ? products.map((product)=>(
            <ProductCard key={product.id} {...product}/>
          )): (<p>No products found.</p>)}
        </section>
      {/* end of Our Products section */}

        <div className="w-full flex justify-center items-center mt-[35px]">
          <CustomButton variant="secondary" size="lg">Show More</CustomButton>
        </div>
    </section>

    {/* start of beautiful rooms inspiration section  */}
        <section className="w-full flex justify-center items-center gap-[50px] h-[730px] mt-[70px] py-[44px] px-[50px]  bg-[#FCF8F3]">
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-[40px] w-[422px] text-wrap leading-[1.2]">50+ Beautiful rooms inspiration</h1>
            <p className="text-[16px] font-semibold mt-[10px] mb-[30px] text-[#616161] w-[386px] text-wrap">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <CustomButton variant="primary" size="md">Explore More</CustomButton>
          </div>
          <Carousel/>
        </section>
      {/* end of beautiful rooms inspiration section  */}

      {/* start of share your setup with section */}
        <section className="pt-[30px] pb-[20px] h-[120vh]">
          <div className="flex flex-col justify-center items-center">
           <p className="text-[20px] font-semibold text-[#616161]"> Share your setup with</p>
            <h1 className="text-[40px] font-bold ">#FuniroFurniture</h1>
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
        <hr />
      {/* end of share your setup with section */}
      <Footer />
    </>
  );
}
