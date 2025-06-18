import { Products } from "../../../public/assets";

export const loadCartItemsFromLocalStorage = (): Products[] => {
  try {
    const stored = localStorage.getItem('cartItems');
    if (!stored) return [];
    return JSON.parse(stored);
  } catch (err) {
    console.error("Failed to load cartItems from localStorage", err);
    return [];
  }
};