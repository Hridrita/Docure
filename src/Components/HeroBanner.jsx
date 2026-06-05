"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";

const slides = [
  {
    title: "Your Health, Our Priority",
    subtitle: "Book appointments with top doctors effortlessly.",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1400&q=80",
  },
  {
    title: "Expert Care at Your Doorstep",
    subtitle: "Consult with specialists from home.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1400&q=80",
  },
  {
    title: "Always There When You Need Us",
    subtitle:
      "Round-the-clock doctor availability for urgent and routine care.",
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1400&q=80",
  },
];

const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-[520px] md:h-[600px] relative overflow-hidden bg-[#0f2027]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="absolute inset-0 w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10 z-10" />

      
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="px-8 md:px-16 lg:px-24 max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                {slides[activeIndex].title}
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                {slides[activeIndex].subtitle}
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href={"/appointments"}>
                  <button className="px-7 py-3 bg-[#a8d5ba] text-[#0f2027] font-bold rounded-full hover:scale-105 transition-transform">
                    Get your appointment
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className="px-7 py-3 border border-white text-white font-bold rounded-full hover:bg-white/10 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2 mt-8">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === activeIndex ? "w-8 bg-[#a8d5ba]" : "w-3 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
