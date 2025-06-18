"use client"
import { products } from "../../../../public/assets";
import ProductCard from "../../_UI_components/ProductCard";
import Bagination from "../../_UI_components/Bagination";
import HeroSection from "@/app/_UI_components/HeroSection";
import { AddingItemAlert } from "@/app/_UI_components/AddingItemAlert";
import { useAlertStore } from "@/app/_Stores/Cart_Store";
import { usePersistCartItems } from "@/app/hooks/usePersistCartItems ";

const Page = () => {
  const {showAlert}= useAlertStore();
  usePersistCartItems();
  return (
    <>
        <HeroSection pageName="Shop"/>
        {showAlert && <AddingItemAlert/>}
        <div className="mx-auto mt-12 px-2 lg:px-32">
          <section className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-[40px]">
            {products.length > 0 ? products.map((product)=>(
              <ProductCard key={product.id} {...product}/>
            )): (<p>No products found.</p>)}
          </section>
            <Bagination/>
        </div>
    </>
  )
}

export default Page