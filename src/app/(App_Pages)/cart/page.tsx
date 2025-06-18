"use client"
import HeroSection from "../../_UI_components/HeroSection"
import CartTable from "@/app/_UI_components/CartTable";
import {useCartItemStore} from "../../_Stores/Cart_Store";

export default function Cart() {
    const {totalCost} = useCartItemStore();
    return(
        <>
            <HeroSection pageName="Cart"/>
            <div className="container flex md:justify-center mt-1 lg:my-8">
                <div className="w-full lg:w-fit flex flex-col md:flex-row gap-3">
                    <CartTable/>
                    <div className="flex flex-col items-center px-10 py-2 bg-(--secondary)">
                        <h1 className="mb-10 text-[32px] font-semibold">Cart Totals</h1>
                        <div className="mb-5"><span className="mr-5">Total</span><span className="text-(--primary)">{totalCost}</span></div>
                        <button className="text-[20px] px-14 py-3 border-2 rounded-2xl mb-10 hover:bg-(--primary) hover:text-white transition-colors cursor-pointer">Check Out</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}