import {
  useCartItemStore,
  useCartStoreCounter,
} from "../_Stores/Cart_Store";


export const useDeleteFromCart = ()=>{
    const {deleteCartItem} = useCartItemStore();
    const {decrementCartItemCount} = useCartStoreCounter();
    const handleDeleteItem = (id:string,quantity:number)=>{
    deleteCartItem(id);
    decrementCartItemCount(quantity);
  }
  return {handleDeleteItem};
}