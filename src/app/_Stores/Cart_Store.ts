import {create} from "zustand"
import { Products } from "../../../public/assets"

interface cartStoreCounter{
    cartItemCount: number,  
    incrementCartItemCount: ()=>void,
    decrementCartItemCount: (quantity:number)=>void,
    zeroCount:()=>void,
}

interface cartItemStore{
    cartItems: Products[],
    totalCost: number,
    addToCart: (product:Products)=>void,
    updateQuantity:(id:string)=>void,
    deleteCartItem: (id:string)=>void,
    deleteAll: ()=> void
    calcTotalCost: ()=>void,
}

interface alertStore{
    showAlert: boolean,
    toggleShowAlert: ()=>void
}


export const useCartStoreCounter = create<cartStoreCounter>((set)=>({ // to increment or decrement cart items counter
    cartItemCount : 0,
    incrementCartItemCount : () => set((state)=>({cartItemCount: state.cartItemCount + 1 })),
    decrementCartItemCount : (quantity:number) => set((state)=>({cartItemCount: state.cartItemCount - quantity })),
    zeroCount: () => set(({cartItemCount: 0}))
}))

export const useCartItemStore = create<cartItemStore>((set)=>({
    cartItems: [],
    totalCost: 0,
    addToCart: (product) => set((state)=>({cartItems:  [...state.cartItems,product]})),
    updateQuantity: (id)=> set((state)=>({
        cartItems: state.cartItems.map((item)=> item.id === id ? {...item, quantity: item.quantity + 1}:item,),
    })),
    deleteCartItem: (id)=> set((state)=> ({cartItems: state.cartItems.filter((item)=> item.id !== id)})),
    deleteAll: ()=> set(({cartItems: []})),
    calcTotalCost: ()=> set((state)=>({totalCost: state.cartItems.reduce((acc,item)=> acc + item.price * item.quantity,0)})),
}))

export const useAlertStore = create<alertStore>((set)=>({
    showAlert: false,
    toggleShowAlert: ()=> set((state)=>({showAlert: !state.showAlert}))
}))