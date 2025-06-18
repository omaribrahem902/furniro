import { Products } from "../../../public/assets";
import {
  useAlertStore,
  useCartItemStore,
  useCartStoreCounter,
} from "../_Stores/Cart_Store";

export const useAddToCart = () => {
  const { toggleShowAlert,setAlertMessage } = useAlertStore();
  const { cartItems, addToCart, updateQuantity } = useCartItemStore();
  const { incrementCartItemCount } = useCartStoreCounter();
  const {showAlert} = useAlertStore();

  const handelAddToCart = (product: Products,quantity?:number) => {
    const productFound = cartItems.find((p) => p.id === product.id);
    if(showAlert){
      toggleShowAlert()
    }
    if (!productFound) {
      addToCart(product);
      updateQuantity(product.id,quantity)
    } else {
      updateQuantity(productFound.id,quantity);
    }
    
    incrementCartItemCount(quantity);
    setAlertMessage(product.title);
    
    toggleShowAlert();
  };
  return { handelAddToCart };
};
