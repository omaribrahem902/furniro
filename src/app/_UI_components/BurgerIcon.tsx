import { useState } from 'react';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative p-4 bg-black min-h-screen">
      {/* Burger/X Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
      >
        <div
          className={`h-0.5 w-8 bg-white transition-all ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <div
          className={`h-0.5 w-8 bg-white transition-all ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <div
          className={`h-0.5 w-8 bg-white transition-all ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Links */}
      {isOpen && (
        <div className="absolute top-16 left-4 bg-gray-800 rounded-lg p-4 space-y-4">
          <a href="#" className="text-white block">
            Home
          </a>
          <a href="#" className="text-white block">
            About
          </a>
          <a href="#" className="text-white block">
            Services
          </a>
          <a href="#" className="text-white block">
            Contact
          </a>
        </div>
      )}
    </div>
  );
}
