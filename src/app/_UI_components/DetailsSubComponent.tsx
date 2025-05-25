"use client"
import React from 'react'
import { Products } from '../../../public/assets';
import CustomButton from './CustomButton';
import {useAlertStore, useCartItemStore, useCartStoreCounter} from "../_Stores/Cart_Store";


const DetailsSubComponent = ({id,image,title,subtitle,category,price,quantity,beforeSalePrice,badgeText}: Products) => {
    const {toggleShowAlert} = useAlertStore()
    const {cartItems,addToCart,updateQuantity} = useCartItemStore()
    const {incrementCartItemCount} = useCartStoreCounter()
    
    const handelAddToCart = (id:string)=>{
        const product = cartItems.find((p)=> p.id === id);
        if(!product){
            addToCart({id,image,title,subtitle,category,price,quantity,beforeSalePrice,badgeText})
        }else{
            updateQuantity(id);
        }
        incrementCartItemCount()
        toggleShowAlert()
  }

  return (
     <>
        <div className="flex gap-4 mt-4">
            <div className="border-[1px] border-[#ccc] w-fit px-4 py-3 text-[16px] flex gap-8 rounded-md">
                <button className="cursor-pointer">-</button>
                    <span>1</span>
                <button className="cursor-pointer">+</button>
            </div>
            <CustomButton onClick={()=>handelAddToCart(id)}  variant="secondary" size="md" rounded="rounded-lg"> Add To Cart </CustomButton>
        </div>
    </>
  )
}

export default DetailsSubComponent