"use client"
import {motion} from "framer-motion";
import Image from "next/image";
import { navLinks } from "../../../public/assets";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import Link from "next/link";
import { Heart, Search } from "lucide-react";
import CartModal from "./CartModal";
import { useRouter } from "next/navigation";
import { FavoriteDropDown } from "./FavoriteDropDown";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleClick = ()=>{
    router.replace("/");
  }
  return (
    <div className="sticky top-0 z-50 w-full bg-white flex justify-between items-center px-5 md:px-7 lg:px-[77px] sm:py-4 md:py-5 lg:py-[30px] shadow-md">
      <div onClick={handleClick} className="flex gap-1 items-center cursor-pointer">
        <div className="relative w-8 h-6 md:w-12 md:h-8">
        <Image priority className="h-fit" src="/imgs/Furniro_logo.png" alt="logo" fill sizes="(max-width: 768px) 34px, 24px"/>
        </div>
        <h1 className="text-2xl md:text-[34px] h-[41px] flex items-center font-bold">Furniro</h1>
      </div>
      <div className="hidden lg:block">
        <SlideTabs/>
      </div>
      <div className="flex gap-6 md:gap-9 lg:gap-[50px]">
        <span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-7 lg:h-7"  viewBox="0 0 24 24"><path fill="currentColor" d="M20 12V7h2v6h-2m0 4h2v-2h-2m-10-2c2.67 0 8 1.34 8 4v3H2v-3c0-2.66 5.33-4 8-4m0-9a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1m0-9A2.1 2.1 0 0 0 7.9 8a2.1 2.1 0 0 0 2.1 2.1A2.1 2.1 0 0 0 12.1 8A2.1 2.1 0 0 0 10 5.9"></path></svg></span>
        <span><Search /></span>
        <span ><Heart /><FavoriteDropDown/></span>
        <span><CartModal /></span>
      </div>

      <div className="lg:hidden relative p-4 bg-white h-fit ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 cursor-pointer"
      >
        <div
          className={`h-0.5 w-8 bg-black transition-all ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <div
          className={`h-0.5 w-8 bg-black transition-all ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <div
          className={`h-0.5 w-8 bg-black transition-all ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute flex flex-col top-15 -right-2 z-10 bg-white rounded-lg p-4 space-y-4">
           {navLinks.map((item,index)=>(
            <span key={index}><Link href={item.link} className="text-[16px]">{item.name}</Link></span>
          ))}
        </div>
      )}
    </div>
    
    </div>
  )
}

export default Navbar;

const SlideTabs = ()=>{
  const [position,setPosition] = useState({
    left:0,
    width:0,
    opacity:0,
  });
  return(
      <ul
      onMouseLeave={()=>{
        setPosition((pv)=>({
          ...pv,
          opacity:0,
        }));
      }}
       className="relative flex gap-[25px]">
        {navLinks.map((item,index)=>(
          <Tab key={index} navItem={item} setPosition={setPosition}/>
        ))}
        <Cursor position={position}/>
    </ul>
  )
}

type TabProps={
  navItem:{ name: string; link: string; },
  setPosition: Dispatch<SetStateAction<{
    left: number;
    width: number;
    opacity: number;
}>>

}

const Tab = ({navItem,setPosition}:TabProps)=>{
  const ref = useRef(null);
  return(
    <Link
    href={navItem.link}
    ref={ref}
    onMouseEnter={()=>{
      if(!ref.current) return;

      const {width} = ref.current.getBoundingClientRect();

      setPosition({
        width,
        opacity:1,
        left: ref.current.offsetLeft,
      })
     
    }
      
    }
     className="relative z-10 block uppercase text-white mix-blend-difference text-[16px] cursor-pointer px-3 py-1.5">
      {navItem.name}
     </Link>
  )
}


type CursorProps ={
  position:{ 
    left: number;
    width: number;
    opacity: number;
  }
}
const Cursor = ({position}:CursorProps)=>{
  return(
    <motion.div animate={position} className="absolute z-0 h-[36px] w-[100px] bg-black"> </motion.div>
  )
}