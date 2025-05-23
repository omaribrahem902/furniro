import Image from "next/image";
export default function RecentPosts(){
    return(
    <>
        <div className="px-[4.44rem] py-[3.81rem]">
            <h2 className="text-[1.5rem] font-semibold">Recent Posts</h2>
            <div className="flex flex-col gap-[2.44rem] mt-[1.63rem]">
                <div className="max-w-[15.63rem] flex">
                <div className="relative w-[5rem] h-[5rem]"><Image src={"/imgs/Blog_imgs/labtop.png"} alt="labtop" className="rounded-[0.63rem]" fill/></div>
                <div className="flex flex-col justify-center ml-[.75rem]">
                    <h3 className="text-[.88rem]">fownvwgsv gggwgwg vweewgwegwe</h3>
                    <p className="mt-[.31rem] text-[.75rem] text-(--paragraphColor)">vwvwefvw</p>
                </div>
                </div>
            </div>
        </div>
    </>
    )
}