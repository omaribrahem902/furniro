import Image from "next/image";
const benefits = [{
    "image": "/imgs/Shop_imgs/trophy.png",
    "name": "High Quality",
    "subtitle": "crafted from top materials",
  },
  {
    "image": "/imgs/Shop_imgs/guarantee.png",
    "name": "Warranty Protection",
    "subtitle": "Over 2 years",
  },
  {
    "image": "/imgs/Shop_imgs/shipping.png",
    "name": "Free Shipping",
    "subtitle": "Order over 150 $",
  },
  {
    "image": "/imgs/Shop_imgs/customer-support.png",
    "name": "24 / 7 Support",
    "subtitle": "Dedicated support",
  }];

export default function Benefits(){
    return(
        <>
        <div className="grid grid-cols-2 gap-3 md:flex justify-between items-center px-7 lg:px-14 py-[30px] lg:py-[100px] bg-(--secondary) mt-10 lg:mt-20">
            {benefits.map((item,index)=>(
              <div key={index} className="flex gap-1.5">
                <div className="relative w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]"><Image src={item.image} alt={item.name} fill/></div>
                <div>
                  <h1 className="text-[14px] lg:text-[25px] font-semibold">{item.name}</h1>
                  <p className="text-[12px] lg:text-[20px] text-(--subtitle)">{item.subtitle}</p>
                </div>
              </div>
            ))}
        </div>
        </>
    )
}