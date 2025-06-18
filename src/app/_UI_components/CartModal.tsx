"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import { useCartItemStore,useCartStoreCounter} from "../_Stores/Cart_Store";
import { useDeleteFromCart } from '../hooks/useDeleteFromCart';
import { useHydrateCart } from '../hooks/useHydrateCart';

const CartModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const {cartItems,deleteAll,totalCost,calcTotalCost} = useCartItemStore();
  const {cartItemCount,zeroCount} = useCartStoreCounter();


  useHydrateCart();
  
  const handleClearBtn =()=>{
    deleteAll();
    zeroCount();
  }

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(()=>{
    calcTotalCost();
  },[calcTotalCost, cartItems])

  return (
    <div>
      {/* Cart Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative w-fit h-fit cursor-pointer bg-white shadow rounded-full z-50"
        aria-label="Open cart"
      >
        <ShoppingCart />
        {cartItemCount > 0 && (<span className='flex justify-center items-center absolute top-3 -left-2 w-5 h-5 rounded-full bg-red-600 text-[11px] text-white'>{cartItemCount}</span>)}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-30 z-40"></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] overflow-y-auto bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="relative md:p-6 p-6 pt-8  flex flex-col h-full">
          
           <X onClick={()=>setIsOpen(false)} className='md:hidden mr-2 absolute top-3 right-0' size={24} strokeWidth={1.5} />
            <div className='flex justify-between items-center'>
              <h2 className="text-xl font-semibold ">
                Shopping Cart 
              </h2> 
              <button disabled={!Boolean(cartItems.length)} onClick={handleClearBtn} className={` bg-red-300  text-white border-2 rounded-3xl px-4 py-2 ${cartItems.length === 0? " cursor-not-allowed": "hover:bg-red-600 cursor-pointer" }`}>
                  Clear
              </button>
            </div>
             
          {cartItems? 
            ( <div className="flex-1 overflow-y-auto mt-4">
            {cartItems.map((item)=>(
              <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              imgUrl={`/imgs/Products_imgs/${item.image}`}
            />
            ))}
          </div>):
          (<div>Cart is empty</div>)
          }
         

          {/* Subtotal and Actions */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-lg">Subtotal</span>
              <span className="text-(--primary) font-semibold">
                {totalCost}
              </span>
            </div>
            <div className="flex gap-2">
                <Link href={'/cart'} className="flex-1 text-center border border-gray-400 px-4 py-2 rounded-3xl hover:bg-(--secondary) cursor-pointer">
                  Cart
                </Link> 
              
              <button className="flex-1 bg-(--primary) text-white rounded-3xl px-4 py-2 cursor-pointer">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type CartItemProps = {
  id:string;
  title: string;
  price: number;
  quantity:number;
  imgUrl: string;
};

const CartItem: React.FC<CartItemProps> = ({ id, title, price, quantity,imgUrl }) => {
  const {handleDeleteItem} = useDeleteFromCart();
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <Image src={imgUrl} alt={title} width={108} height={105} className="s rounded mr-4" />
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500">
            {quantity} x <span className="text-(--primary)">EP. {price}</span>
          </p>
        </div>
      </div>
      <button onClick={() => handleDeleteItem(id,quantity)} className="text-white bg-gray-400 p-0.5 rounded-full cursor-pointer">
        <X size={16} strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default CartModal;
