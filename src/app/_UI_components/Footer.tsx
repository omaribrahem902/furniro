"use client"
import Link from "next/link"
import { navLinks } from "../../../public/assets"

const Footer = () => {
  return (
    <>
      <section className="flex flex-col mx-auto mt-3 lg:mt-0 px-2 lg:px-[100px] py-5 lg:py-[40px] ">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-[24px] w-fit mb-4 lg:mb-[40px]">Furniro</h2>
            <p className="text-(--paragraphColor) text-[10px] lg:text-[12px]">Where Style Meets Comfort</p>
            <span className="text-(--paragraphColor) text-[10px] lg:text-[12px]">FL 33134 USA</span>
          </div>
          <div className="flex flex-col gap-4 lg:gap-14 text-[10px] lg:text-[16px]">
            <h3 className="text-(--paragraphColor)">Links</h3>
            <div className="flex flex-col gap-3 lg:gap-10">
              {navLinks.map((item,index)=>(
                <span className="cursor-pointer" key={index}><Link href={item.link}>{item.name}</Link></span>
              ))}
            </div >
          </div>
          <div className="flex flex-col gap-4 lg:gap-14 text-[10px] lg:text-[16px]">
            <h3 className="font-[16px] text-(--paragraphColor)">Help</h3>
            <ul className="flex flex-col gap-3 lg:gap-10">
              <li >Payment Options</li>
              <li >Returns</li>
              <li >Privacy Policies</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 lg:gap-14 text-[10px] lg:text-[16px]">
          <h3 className="font-[16px] text-(--paragraphColor)">Newsletter</h3>
          <div className="flex flex-col lg:flex-row gap-2">
          <input placeholder="Enter Your Email Address" className="text-(--paragraphColor) border-b-[1px]" type="text" />
          <span className="font-[14px] cursor-pointer border-b-[1px]">SUBSCRIBE</span>
          </div>
          </div>
        </div>
        <hr className="my-3 lg:my-[40px]"/>
        <p className="text-[10px] lg:text-[16px]">2023 furino. All rights reverved</p>
      </section>
    </>
  )
}

export default Footer;