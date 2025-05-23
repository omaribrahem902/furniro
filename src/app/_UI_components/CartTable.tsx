import { Trash2 } from "lucide-react"
import Image from "next/image"

export default function CartTable(){
    return(<>
        
<div className="relative w-full  md:w-[60vw]  overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-[16px] capitalize  bg-(--secondary) dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 text-center">
                    Product
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                    Subtotal
                </th>
                <th scope="col" className="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="flex flex-col lg:flex-row gap-2 lg:gap-7 items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <Image src={"/imgs/Products_imgs/grifo.png"} alt="grifo" width={108} height={105}/>
                    <span>voinveve</span>
                </th>
                <td className=" px-2 md:px-6 py-2 md:py-4">
                    399
                </td>
                <td className="px-2 md:px-6 py-2 md:py-4">
                    <span className="py-1.5 px-2 border rounded-md">2</span>
                </td>
                <td className="px-2 md:px-6 py-2 md:py-4 text-black">
                    2999
                </td>
                <td className="px-2 md:px-6 py-2 md:py-4 text-black">
                <Trash2 className="cursor-pointer" size={20} color="#B88E2F" strokeWidth={1.5} />
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

    </>)
}