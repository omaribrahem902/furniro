import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
const CartModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div>
      {/* Cart Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-fit h-fit cursor-pointer bg-white shadow rounded-full z-50"
        aria-label="Open cart"
      >
        <ShoppingCart />
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
        <div className="relative p-6 flex flex-col h-full">
          
           <X onClick={()=>setIsOpen(false)} className='md:hidden mr-4 absolute top-3 right-0' size={24} strokeWidth={1.5} />
            <h2 className="text-xl font-semibold  pb-2">
              Shopping Cart
            </h2>
            
         

          <div className="flex-1 overflow-y-auto mt-4">
            {/* Item 1 */}
            <CartItem
              title="Asgaard sofa"
              price={250000}
              imgUrl="/imgs/Products_imgs/lolito.png"
            />
            {/* Item 2 */}
            <CartItem
              title="Casaliving Wood"
              price={270000}
              imgUrl="/imgs/Products_imgs/lolito.png"
            />
                        <CartItem
              title="Casaliving Wood"
              price={270000}
              imgUrl="/imgs/Products_imgs/lolito.png"
            />
                        <CartItem
              title="Casaliving Wood"
              price={270000}
              imgUrl="/imgs/Products_imgs/lolito.png"
            />
                        <CartItem
              title="Casaliving Wood"
              price={270000}
              imgUrl="/imgs/Products_imgs/lolito.png"
            />
                        <CartItem
              title="Casaliving Wood"
              price={270000}
              imgUrl="/imgs/Products_imgs/lolito.png"
            />
          </div>

          {/* Subtotal and Actions */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-lg">Subtotal</span>
              <span className="text-(--primary) font-semibold">
                Rs. 520,000.00
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
  title: string;
  price: number;
  imgUrl: string;
};

const CartItem: React.FC<CartItemProps> = ({ title, price, imgUrl }) => (
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center">
      <Image src={imgUrl} alt={title} width={108} height={105} className="s rounded mr-4" />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">
          1 x <span className="text-(--primary)">EP. {price}</span>
        </p>
      </div>
    </div>
    <button className="text-white bg-gray-400 p-0.5 rounded-full cursor-pointer"><X size={16} strokeWidth={1.5} /></button>
  </div>
);

export default CartModal;
