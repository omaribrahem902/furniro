"use client"
import Image from "next/image";
import { products } from "../../public/assets";
import ProductCard from "./_UI_components/ProductCard";
import CustomButton from "./_UI_components/CustomButton";
import dynamic from "next/dynamic";
import Link from "next/link";
import { AddingItemAlert } from "./_UI_components/AddingItemAlert";
import { useAlertStore } from "./_Stores/Cart_Store";
import { useEffect } from "react";
import { usePersistCartItems } from "./hooks/usePersistCartItems ";

const Carousel = dynamic(()=> import("./_UI_components/Carousel"),{
  ssr: false,
  loading: ()=> <h1>carosel</h1>
})

const GridImgs = dynamic(()=> import("./_UI_components/GridImgs"),{
  ssr:false,
  loading: ()=> <h1>loading</h1>,
});



export default function Home() {
  const {showAlert} = useAlertStore();
useEffect(()=>{
  const session = localStorage.getItem("cartItems");
  if(!session){
    localStorage.setItem("cartItems", JSON.stringify([]));
  }
},[])

usePersistCartItems();

  return (
    <>
    {/* start of Discover our new collection */}
    <section className="relative">
    <div className="md:bg-[url('/imgs/Home_img.png')] md:bg-cover bg-center w-full h-[30vh] md:h-[50vh] lg:h-[100vh]">
      <div className="w-full h-fit lg:h-20vh md:w-[520px] md:h-[250px] lg:w-[643px] lg:h-[443px] bg-[#FFF3E3] px-[41px] py-3 lg:py-[50px] md:absolute top-[25%] right-[40px] ">
        <p className="text-[18px] font-semibold">New Arrival</p>
        <h1 className="text-wrap font-extrabold text-3xl lg:text-[52px] text-(--primary)">Discover Our New Collection</h1>
        <p className="mt-4">Minimalist room with a rattan chair, white cabinet, plants, and cozy decor in a bright setting.</p>
        <Link href={"/shop"}> <button className="text-[10px] lg:text-[16px] font-bold text-white px-8 py-2.5 lg:px-[72px] lg:py-[25px] bg-(--primary) mt-3 lg:mt-10 cursor-pointer">BUY NOW</button> </Link>
      </div>
    </div>
    {showAlert && <AddingItemAlert/>}

    </section>
    {/* end of Discover our new collection */}

    {/* container */}
    <section className="container">

      {/* start of Browse the range section */}
      <section className="flex justify-center items-center my-3 lg:my-[40px]">
        <div className="flex flex-col justify-center items-center w-fit ">
          <h1 className="text-2xl lg:text-[32px] font-bold">Browse The Range</h1>
          <p className="text-[12px] lg:text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-[52px] mx-auto p-3">
        <div >
        <Image src="/imgs/Home_imgs/Dining_img.png" alt="dining img" width={381} height={480} loading="lazy"/>
        <h2 className="text-center mt-2 lg:mt-[24px] font-semibold  text-[24px]">Dining</h2>
        </div>
        <div>
        <Image src="/imgs/Home_imgs/living_img.png" alt="living img" width={381} height={480}/>
        <h2 className="text-center  mt-2 lg:mt-[24px] font-semibold text-[24px]">Living</h2>
        </div>
        <div>
        <Image src="/imgs/Home_imgs/Bedroom_img.png" alt="bedroom img" width={381} height={480}/>
        <h2 className="text-center mt-2 lg:mt-[24px] font-semibold  text-[24px]">Bedroom</h2>
        </div>
      </section>
      {/* end of Browse the range section */}

      {/* start of Our Products section */}
        <h1 className="text-2xl lg:text-[40px] font-bold text-center mt-[50px] mb-[25px]">Our Products</h1>
        <section className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-32">
          {products.length > 0 ? products.map((product)=>(
            <ProductCard key={product.id} {...product}/>
          )): (<p>No products found.</p>)}
        </section>
      {/* end of Our Products section */}

        <div className="w-full flex justify-center items-center mt-[35px]">
          <Link href={"/shop"}><CustomButton variant="secondary" size="lg">Show More</CustomButton></Link>
        </div>
    </section>

    {/* start of beautiful rooms inspiration section  */}
        <section className="w-full flex flex-col lg:flex-row lg:justify-center items-center gap-4 lg:gap-[50px] h-[730px] mt-6 lg:mt-[70px] p-2 lg:py-[44px] px-2 lg:px-[50px]  bg-[#FCF8F3]">
          <div className="flex flex-col justify-center items-center lg:items-start">
            <h1 className="font-bold text-2xl text-center lg:text-left lg:text-[40px] w-[422px] text-wrap leading-[1.2]">50+ Beautiful rooms inspiration</h1>
            <p className="text-[12px] lg:text-[16px] text-center lg:text-left font-semibold mt-[10px] mb-3 lg:mb-[30px] text-[#616161] w-[386px] text-wrap">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <Link href={"/shop"}><CustomButton variant="primary" size="md">Explore More</CustomButton></Link>
          </div>
          <Carousel/>
        </section>
      {/* end of beautiful rooms inspiration section  */}

      {/* start of share your setup with section */}
        <GridImgs/>
        <hr />
      {/* end of share your setup with section */}
    </>
  );
}
