"use client"
import Link from "next/link"
import { navLinks } from "../../../public/assets"

const Footer = () => {
  return (
    <>
      <section className="flex flex-col px-[100px] py-[40px] ">
        <div className="flex gap-[180px]">
          <div>
            <h2 className="font-bold text-[24px] w-fit mb-[40px]">Furniro</h2>
            <p className="text-(--paragraphColor) max-w-[285px]">400 University Drive Suite 200 Coral Gables,</p>
            <span className="text-(--paragraphColor)">FL 33134 USA</span>
          </div>
          <div className="flex flex-col gap-14">
            <h3 className="font-[16px] text-(--paragraphColor)">Links</h3>
            <div className="flex flex-col gap-10">
              {navLinks.map((link,index)=>(
                <span className="cursor-pointer" key={index}><Link className="font-[16px]" href={`/${link}`}/>{link}</span>
              ))}
            </div >
          </div>
          <div className="flex flex-col gap-14">
            <h3 className="font-[16px] text-(--paragraphColor)">Help</h3>
            <ul className="flex flex-col gap-10">
              <li className="font-[16px]">Payment Options</li>
              <li className="font-[16px]">Returns</li>
              <li className="font-[16px]">Privacy Policies</li>
            </ul>
          </div>
          <div className="flex flex-col gap-14">
          <h3 className="font-[16px] text-(--paragraphColor)">Newsletter</h3>
          <div className="flex gap-2">
          <input placeholder="Enter Your Email Address" className="text-(--paragraphColor) border-b-[1px]" type="text" />
          <span className="font-[14px] cursor-pointer border-b-[1px]">SUBSCRIBE</span>
          </div>
          </div>
        </div>
        <hr className="my-[40px]"/>
        <p className="font-[16px]">2023 furino. All rights reverved</p>
      </section>
    </>
  )
}

export default Footer;