"use client"
import Image from "next/image"
import { Products } from "../../../public/assets"
import Badge from "./Badge";
import { useRouter } from "next/navigation";
import { useAddToCart } from "../hooks/useAddToCart";

const ProductCard = (product: Products) => {
  
  const {handelAddToCart} = useAddToCart();
  const router = useRouter();

  const handleClick = ()=>{
    router.push(`/products/${product.id}`);
  };

  return (
    <div  className="relative max-w-[285px] overflow-hidden group hover:shadow-xl hover:transition-shadow cursor-pointer">
      <Image src={`/imgs/Products_imgs/${product.image}`} alt={product.title} width={285} height={301} />
      {product.badgeText && <Badge badgeText={product.badgeText} />}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-0 bg-(--overlayColor) bg-opacity-60 opacity-60 flex flex-col items-center justify-center gap-4 overflow-hidden group-hover:h-full transition-all duration-300 ease-in-out z-10">
        <button onClick={()=>handelAddToCart(product)} className="bg-white text-(--primary) font-semibold px-6 py-2 cursor-pointer">Add to cart</button>
        <div className="flex gap-4 text-white text-sm">
          <span className="cursor-pointer">↗ Share</span>
          <span className="cursor-pointer">↔ Compare</span>
          <span className="cursor-pointer">♡ Like</span>
        </div>
      </div>

      {/* Info Section */}
      <div onClick={handleClick} className="w-[285px] px-[12px] md:px-[18px] py-[18px] md:py-[23px] bg-[#F4F5F7] z-20 relative">
        <h2 className="text-[14px] md:text-[24px] font-semibold max-w-fit">{product.title}</h2>
        <p className="text-[10px] md:text-[16px] font-medium text-gray-500 max-w-fit">{product.subtitle}</p>
        <span className="text-[12px] md:text-[20px] font-semibold">{product.price} EP</span>
        {product.beforeSalePrice && (
          <span className="text-[12px] md:text-[16px] font-normal ml-[40px] line-through text-gray-400">
            {product.beforeSalePrice} EP
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;