"use client"
// import { v4 as uuidv4 } from 'uuid';
import Image from "next/image"
import { Products } from "../../../public/assets"
import Badge from "./Badge";
import { useRouter } from "next/navigation";
import { useRef } from "react";
type ProductCardProps = Products;

const ProductCard = ({ id,image, title, subtitle, price, beforeSalePrice, badgeText }: ProductCardProps) => {
  const idRef = useRef(id);
  console.log(idRef);
  const router = useRouter();
  const handleClick = ()=>{
    router.push(`/products/${idRef.current}`);
  }
  return (
    <div onClick={handleClick} className="relative max-w-[285px] overflow-hidden group hover:shadow-xl hover:transition-shadow cursor-pointer">
      
      {/* Product Image */}
      <Image src={`/imgs/Products_imgs/${image}`} alt={title} width={285} height={301} />

      {/* Badge */}
      {badgeText && <Badge badgeText={badgeText} />}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-0 bg-(--overlayColor) bg-opacity-60 opacity-60 flex flex-col items-center justify-center gap-4 overflow-hidden group-hover:h-full transition-all duration-300 ease-in-out z-10">
        <button className="bg-white text-(--primary) font-semibold px-6 py-2 cursor-pointer">Add to cart</button>
        <div className="flex gap-4 text-white text-sm">
          <span className="cursor-pointer">↗ Share</span>
          <span className="cursor-pointer">↔ Compare</span>
          <span className="cursor-pointer">♡ Like</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="w-[285px] px-[12px] md:px-[18px] py-[18px] md:py-[23px] bg-[#F4F5F7] z-20 relative">
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