import Image from "next/image"

type HeroSectionProps = {
    pageName: string,
}

export default function HeroSection({pageName}:HeroSectionProps){
    return(
        <>
        <div className="relative">
            <div className="absolute top-2/4 left-2/4 -translate-y-[60px] -translate-x-2/4  w-8 h-6 md:w-12 md:h-8">
            <Image priority className="h-fit" src="/imgs/Furniro_logo.png" alt="logo" fill sizes="(max-width: 768px) 34px, 24px"/>
            </div>
            <h1 className="absolute text-2xl md:text-4xl font-bold top-2/4 left-2/4 -translate-2/4">{pageName}</h1>
            <Image priority src={"/imgs/Hero.png"} alt="shop" width={1560} height={400} />
        </div>
        </>
    )
}