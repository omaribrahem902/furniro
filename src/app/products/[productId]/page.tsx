import Breadcrumbs from "@/app/_UI_components/Breadcrumbs";
import { products} from "../../../../public/assets";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/app/_UI_components/CustomButton";
import ProductCard from "@/app/_UI_components/ProductCard";
import DetailsSubComponent from "../../_UI_components/DetailsSubComponent";


export default async function ProductDetails({params}: {params: Promise<{productId:string}>}) {
    
    const productId = (await params).productId;
    const product = products.find((p)=> p.id === productId);
    if(product === undefined){
        return(<><h1>no products</h1></>)
    }
    const samecategoryProducts = products.filter(pro => (pro.category === product.category && pro.id !== product.id ));
    console.log(samecategoryProducts);
    return(
        <>
        <Breadcrumbs page1={"Home"} page2={"Shop"} page3={product.title} productId={product.id}/>
        <div className="container">
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-16 mt-6">
                <div className="relative mx-auto md:mx-0 w-[300px] h-[400px] lg:w-[425px] lg:h-[500px]">
                    <Image className="rounded-xl" src={`/imgs/Products_imgs/${product.image}`} alt={product.title} fill priority/>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-[28px] lg:text-[42px]">{product.title}</h1>
                    <p className="text-[16px]">
                        <span>{product.price} EP</span>
                        {product.beforeSalePrice && <span className="line-through text-(--paragraphColor) ml-3">{product.beforeSalePrice} EP</span>}
                    </p>
                    <p className=" text-wrap text-[13px] mt-3">{product.description}</p>
                    <DetailsSubComponent {...product}/>
                    <hr  className="mt-10 mb-6 text-(--paragraphColor)"/>
                    <div className="flex gap-2 text-(--paragraphColor)">
                        <div className="flex flex-col gap-3">
                            <span>Product ID</span>
                            <span>category</span>
                            <span>share</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span>: {product.id.slice(0,3)}...</span>
                            <span>: {product.category}</span>
                            <div className="flex gap-2">
                                : 
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start of Related Products section */}
            <h1 className="text-2xl lg:text-[40px] font-bold text-center mt-[50px] mb-[25px]">Related Products</h1>
            <section className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-32">
                {samecategoryProducts.length > 0 ? (
                samecategoryProducts.map(product => (
                    <ProductCard key={product.id} {...product} />
                 ))
                ) : (
                <p>No chairs found.</p>
                )}
            </section>
            <div className="w-full flex justify-center items-center mt-[35px] mb-[40px] lg:mb-[100px]">
                <Link href={"/shop"}><CustomButton variant="secondary" size="lg">Show More</CustomButton></Link>
            </div>
            <hr />
            {/* end of Related Products section */}
        </div>
        </>
    )
    
}

