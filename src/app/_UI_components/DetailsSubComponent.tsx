"use client"
import React, { useState } from 'react'
import { Products } from '../../../public/assets';
import CustomButton from './CustomButton';
import { useAddToCart } from '../hooks/useAddToCart';
import { useAlertStore } from '../_Stores/Cart_Store';
import { AddingItemAlert } from './AddingItemAlert';
import { usePersistCartItems } from '../hooks/usePersistCartItems ';

const DetailsSubComponent = (product: Products) => {
    const {handelAddToCart} = useAddToCart();
    const {showAlert} = useAlertStore();
    const [counter,setCounter] = useState(0);
    usePersistCartItems();
    return (
        <>
            {showAlert && <AddingItemAlert/>}
            <div className="flex gap-4 mt-4">
                <div className="border-[1px] border-[#ccc] w-fit px-4 py-3 text-[16px] flex gap-8 rounded-md">
                    <button onClick={()=>{if(counter>0) setCounter(counter-1)}} className="cursor-pointer">-</button>
                        <span>{counter}</span>
                    <button onClick={()=>setCounter(counter+1)} className="cursor-pointer">+</button>
                </div>
                <CustomButton onClick={()=>{if(counter>0) handelAddToCart(product,counter)}}  variant="secondary" size="md" rounded="rounded-lg"> Add To Cart </CustomButton>
            </div>
        </>
    )
}

export default DetailsSubComponent