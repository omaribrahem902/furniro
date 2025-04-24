import Image from "next/image";
import { navLinks } from "../../../public/assets";
const Navbar = () => {
  return (
    <div className="w-full bg-white flex justify-between items-center px-[77px] py-[30px] sticky">
      <div className="flex gap-1 items-center ">
        <Image className="h-fit" src="/imgs/Furniro_logo.png" alt="logo" width={50} height={32}/>
        <h1 className="text-[34px] h-[41px] flex items-center font-bold">Furniro</h1>
      </div>
      <div>
        <ul className="flex gap-[75px]">
          {navLinks.map((item,index)=>(
            <li key={index} className="text-[16px]">{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-[50px]">
        <span><svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24"><path fill="currentColor" d="M20 12V7h2v6h-2m0 4h2v-2h-2m-10-2c2.67 0 8 1.34 8 4v3H2v-3c0-2.66 5.33-4 8-4m0-9a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1m0-9A2.1 2.1 0 0 0 7.9 8a2.1 2.1 0 0 0 2.1 2.1A2.1 2.1 0 0 0 12.1 8A2.1 2.1 0 0 0 10 5.9"></path></svg></span>
        <span><svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0"></path></svg></span>
        <span><svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.75 3.5C5.127 3.5 3 5.76 3 8.547C3 14.125 12 20.5 12 20.5s9-6.375 9-11.953C21 5.094 18.873 3.5 16.25 3.5c-1.86 0-3.47 1.136-4.25 2.79c-.78-1.654-2.39-2.79-4.25-2.79"></path></svg></span>
        <span><svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 32 32"><g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M6 6h24l-3 13H9m18 4H10L5 2H2"></path><circle cx={25} cy={27} r={2}></circle><circle cx={12} cy={27} r={2}></circle></g></svg></span>
      </div>
    </div>
  )
}

export default Navbar;