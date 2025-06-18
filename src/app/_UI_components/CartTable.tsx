"use client"
import { Trash2 } from "lucide-react"
import Image from "next/image"
import {useCartItemStore} from "../_Stores/Cart_Store"
import { useDeleteFromCart } from "../hooks/useDeleteFromCart";
import { useHydrateCart } from "../hooks/useHydrateCart";
import { usePersistCartItems } from "../hooks/usePersistCartItems ";
export default function CartTable(){
    const {cartItems} = useCartItemStore();
    const {handleDeleteItem} = useDeleteFromCart();
    useHydrateCart();
    usePersistCartItems();
return(
<>        
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
            {cartItems.map((item)=>(
                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="flex flex-col lg:flex-row gap-2 lg:gap-7 items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <Image src={`/imgs/Products_imgs/${item.image}`} alt="grifo" width={108} height={105}/>
                    <span>{item.title}</span>
                </th>
                <td className=" px-2 md:px-6 py-2 md:py-4">
                    {item.price}
                </td>
                <td className="px-2 md:px-6 py-2 md:py-4">
                    <span className="py-1.5 px-2 border rounded-md">{item.quantity}</span>
                </td>
                <td className="px-2 md:px-6 py-2 md:py-4 text-black">
                    {item.price * item.quantity}
                </td>
                <td className="px-2 md:px-6 py-2 md:py-4 text-black">
                 <button onClick={()=>handleDeleteItem(item.id,item.quantity)}><Trash2 className="cursor-pointer" size={20} color="#B88E2F" strokeWidth={1.5} /></button>
                </td>
            </tr>
            ))}
            
            
        </tbody>
    </table>
</div>

    </>)
}