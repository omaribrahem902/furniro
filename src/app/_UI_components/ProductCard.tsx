"use client"
import Image from "next/image"
import { Products } from "../../../public/assets"
import Badge from "./Badge";
import { useRouter } from "next/navigation";
import {useAlertStore, useCartItemStore, useCartStoreCounter} from "../_Stores/Cart_Store";

const ProductCard = ({id,image,title,subtitle,category,price,quantity,beforeSalePrice,badgeText}: Products) => {
  
  
  const {toggleShowAlert} = useAlertStore()
  const {cartItems,addToCart,updateQuantity} = useCartItemStore()
  const {incrementCartItemCount} = useCartStoreCounter()
  const router = useRouter();
  
  const handelAddToCart = (id:string)=>{
    const product = cartItems.find((p)=> p.id === id);
    if(!product){
      addToCart({id,image,title,subtitle,category,price,quantity,beforeSalePrice,badgeText})
    }else{
      updateQuantity(id);
    }
    incrementCartItemCount()
    toggleShowAlert()
  };

  const handleClick = ()=>{
    router.push(`/products/${id}`);
  };

  return (
    <div  className="relative max-w-[285px] overflow-hidden group hover:shadow-xl hover:transition-shadow cursor-pointer">
      
      {/* Product Image */}
      <Image src={`/imgs/Products_imgs/${image}`} alt={title} width={285} height={301} />

      {/* Badge */}
      {badgeText && <Badge badgeText={badgeText} />}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-0 bg-(--overlayColor) bg-opacity-60 opacity-60 flex flex-col items-center justify-center gap-4 overflow-hidden group-hover:h-full transition-all duration-300 ease-in-out z-10">
        <button onClick={()=>handelAddToCart(id)} className="bg-white text-(--primary) font-semibold px-6 py-2 cursor-pointer">Add to cart</button>
        <div className="flex gap-4 text-white text-sm">
          <span className="cursor-pointer">↗ Share</span>
          <span className="cursor-pointer">↔ Compare</span>
          <span className="cursor-pointer">♡ Like</span>
        </div>
      </div>

      {/* Info Section */}
      <div onClick={handleClick}  className="w-[285px] px-[12px] md:px-[18px] py-[18px] md:py-[23px] bg-[#F4F5F7] z-20 relative">
        <h2 className="text-[14px] md:text-[24px] font-semibold max-w-fit">{title}</h2>
        <p className="text-[10px] md:text-[16px] font-medium text-gray-500 max-w-fit">{subtitle}</p>
        <span className="text-[12px] md:text-[20px] font-semibold">{price} EP</span>
        {beforeSalePrice && (
          <span className="text-[12px] md:text-[16px] font-normal ml-[40px] line-through text-gray-400">
            {beforeSalePrice} EP
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;