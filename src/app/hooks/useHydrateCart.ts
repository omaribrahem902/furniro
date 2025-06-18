import { useEffect } from "react";
import { useCartItemStore } from "../_Stores/Cart_Store";
import { loadCartItemsFromLocalStorage } from "../_Stores/storage";

export const useHydrateCart = () => {
  const setCartItems = useCartItemStore((state) => state.setCartItems);

  useEffect(() => {
    const cartItems = loadCartItemsFromLocalStorage();
    setCartItems(cartItems);
    console.log("set cart items");
  }, [setCartItems]);
};