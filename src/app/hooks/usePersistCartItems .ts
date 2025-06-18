import { useEffect } from "react";
import { saveCartItemsCountToLocalStorage,saveCartItemsToLocalStorage, useCartItemStore, useCartStoreCounter } from "../_Stores/Cart_Store";

export const usePersistCartItems = () => {
  const {cartItems} = useCartItemStore();
  const {cartItemCount} = useCartStoreCounter();

  useEffect(() => {
    saveCartItemsToLocalStorage(cartItems);
    saveCartItemsCountToLocalStorage(cartItemCount);
  }, [cartItems]);
};