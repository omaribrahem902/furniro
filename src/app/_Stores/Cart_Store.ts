import {create} from "zustand"
import { Products } from "../../../public/assets"

interface cartStoreCounter{
    cartItemCount: number,  
    incrementCartItemCount: (quantity?:number)=>void,
    decrementCartItemCount: (quantity:number)=>void,
    zeroCount:()=>void,
}

interface cartItemStore{
    cartItems: Products[],
    totalCost: number,
    setCartItems: (items: Products[])=> void,
    addToCart: (product:Products,quantity?:number)=>void,
    updateQuantity:(id:string,quantity?:number)=>void,
    deleteCartItem: (id:string)=>void,
    deleteAll: ()=> void
    calcTotalCost: ()=>void,
}

interface alertStore{
    showAlert: boolean,
    alertMessage: string,
    setAlertMessage: (text:string)=>void
    toggleShowAlert: ()=>void
}


export const saveCartItemsToLocalStorage = (cartItems: Products[] | Products) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};


export const loadCartItemsCountFromLocalStorage = (): string => {
  const cartItemCount = localStorage.getItem('cartItemCount');
  if (cartItemCount === null) {
    localStorage.setItem('cartItemsCount',JSON.stringify(0));
  }else{
    return JSON.stringify(cartItemCount);
  }
  return '';
};

export const saveCartItemsCountToLocalStorage = (cartItemCount:number) => {
  localStorage.setItem('cartItemCount', JSON.stringify(cartItemCount));
};


export const useCartStoreCounter = create<cartStoreCounter>((set)=>({ // to increment or decrement cart items counter
    cartItemCount : 0,
    incrementCartItemCount : (quantity=1) => set((state)=>({cartItemCount: state.cartItemCount + quantity })),
    decrementCartItemCount : (quantity) => set((state)=>({cartItemCount: state.cartItemCount - quantity })),
    zeroCount: () => set(({cartItemCount: 0}))
}))

export const useCartItemStore = create<cartItemStore>((set)=>({
    cartItems: [],
    totalCost: 0,
    setCartItems: (items) => set({cartItems: items}),
    addToCart: (product) => set((state)=>{
     const updated = [...state.cartItems,product];
     return { cartItems: updated };
    }),
    updateQuantity: (id,quantity=1)=> set((state)=>({
        cartItems: state.cartItems.map((item)=> item.id === id ? {...item, quantity: item.quantity + quantity}:item,),
    })),
    deleteCartItem: (id)=> set((state)=> ({cartItems: state.cartItems.filter((item)=> item.id !== id)})),
    deleteAll: ()=> set(({cartItems: []})),
    calcTotalCost: ()=> set((state)=>({totalCost: state.cartItems.reduce((acc,item)=> acc + item.price * item.quantity,0)})),
}))

export const useAlertStore = create<alertStore>((set)=>({
    showAlert: false,
    alertMessage:"",
    setAlertMessage: (text)=> set({alertMessage: text}),
    toggleShowAlert: ()=> set((state)=>({showAlert: !state.showAlert}))
}))