"use client";
import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    id: 1,
    image: "/imgs/Home_imgs/bed.png",
    title: "Inner Peace",
    subtitle: "Bed Room",
    number: "01",
  },
  {
    id: 2,
    image: "/imgs/Carosel_imgs/carosel_2.png",
    title: "White Harmony",
    subtitle: "Dining Room",
    number: "02",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePre = () =>{
    setCurrent((pre) => (pre - 1 + slides.length) % slides.length);
  }

  return (
    <div className="relative w-full max-w-[500px] m-0 overflow-hidden">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative">
            <Image
              src={slide.image}
              alt={slide.title}
              width={404}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 left-10 bg-white/90 px-6 py-4 flex items-center gap-4">
              <div>
                <p className="text-sm tracking-wider text-gray-600">{slide.number} — {slide.subtitle}</p>
                <h2 className="text-xl font-bold text-gray-900">{slide.title}</h2>
              </div>
              <button className="bg-[#B88E2F] text-white w-10 h-10  rounded-full flex items-center justify-center text-xl font-bold">→</button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-4 rounded-full border-4 m-2 cursor-pointer ${idx === current ? "bg-[#B88E2F] border-white outline-1 outline-[#B88E2F]" : "border-gray-400"}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>

      {/* Arrow Right Button */}
      <button
        onClick={handleNext}
        className="absolute right-1 top-1/2 cursor-pointer -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-2xl"
      >
        ❯
      </button>
      <button
        onClick={handlePre}
        className="absolute left-1 top-1/2 cursor-pointer -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-2xl"
      >
        ❮
      </button>
    </div>
  );
}
