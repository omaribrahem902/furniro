import Post from "@/app/_UI_components/Post"
import "./blog.css"
import HeroSection from "@/app/_UI_components/HeroSection"
import RecentPosts from "@/app/_UI_components/RecentPosts"

const Blog = () => {
  return (
    <>
      <HeroSection pageName="Blog"/>
      <section className="flex mx-[.5rem] my-[1rem] md:mx-[5rem] md:mt-[4rem] lg:mx-[6.25rem] lg:mt-[6.63rem]">
        <div className="flex flex-col gap-[2rem] md:gap-[4rem] lg:gap-[5rem]">
        <Post/>
        <Post/>
        </div>
        <div>
          <div className="mt-[3rem] px-[4.44rem] py-[3.81rem]">
            <h2 className="text-[1.5rem] font-semibold">Categories</h2>
            <div className="flex flex-col pt-[2.06rem] gap-[2.56rem] ">
              <div className="flex gap-[11.94rem] text-(--paragraphColor)"><span>chairs</span><span>5</span></div>
              <div className="flex justify-between text-(--paragraphColor) "><span>lamp</span><span>5</span></div>
              <div className="flex justify-between text-(--paragraphColor)"><span>outdoor_furniture</span><span>5</span></div>
              <div className="flex justify-between text-(--paragraphColor)"><span>luxury_sofas</span><span>5</span></div>
            </div>
          </div>
        <RecentPosts/>
        </div>
   
      </section>
    </>
  )
}

export default Blog;