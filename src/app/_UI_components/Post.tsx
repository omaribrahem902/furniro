import { Calendar, Tag, User } from "lucide-react";
import Image from "next/image";

export default function Post(){
    return(
        <>  
            <div className="w-[51.25rem]">
                <div className="relative w-[28rem] h-[18rem] md:w-[40rem] md:h-[24rem] lg:w-[51.06rem] lg:h-[31.25rem]">
                    <Image src={"/imgs/Blog_imgs/labtop.png"}alt="grifo" fill className="rounded-[0.63rem]"/>
                </div>
                <div className="flex gap-[2.19rem] mt-[.67rem] md:mt-[1.06rem]">
                    <span className="flex gap-[0.44rem] items-center"><User strokeWidth={1.25} className="w-[1rem] h-[1rem] md:w-[1.25rem] md:h-[1.25rem]"/> <span  className="text-(--paragraphColor) text-[.75rem] md:text-[1rem]">Admin</span></span>
                    <span className="flex gap-[0.44rem] items-center"> <Calendar strokeWidth={1.25}  className="w-[1rem] h-[1rem] md:w-[1.25rem] md:h-[1.25rem]"/><span  className="text-(--paragraphColor) text-[.75rem] md:text-[1rem]">11/5</span></span>
                    <span className="flex gap-[0.44rem] items-center"><Tag strokeWidth={1.25}  className="w-[1rem] h-[1rem] md:w-[1.25rem] md:h-[1.25rem]"/><span  className="text-(--paragraphColor) text-[.75rem] md:text-[1rem]">wood</span></span>
                </div>
                <h2 className="text-[1rem] md:text-[1.88rem] mt-[0.94rem] font-semibold">Going all-in with millennial design</h2>
                <p className="max-w-[400px] text-wrap lg:max-w-fit mt-[.75rem] text-[.67rem] md:text-[0.94rem] leading-3 md:leading-[1.5rem] text-(--paragraphColor)"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            </div>
        </>
    )
}