import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import image1 from "../../../assets/Companylogos/1.png";
import image2 from "../../../assets/Companylogos/2.png";
import image3 from "../../../assets/Companylogos/3.png";
import image4 from "../../../assets/Companylogos/4.png";
import image5 from "../../../assets/Companylogos/5.png";
import image6 from "../../../assets/Companylogos/6.png";
import image7 from "../../../assets/Companylogos/7.png";
import image8 from "../../../assets/Companylogos/8.png";
import image9 from "../../../assets/Companylogos/9.png";
import image10 from "../../../assets/Companylogos/10.png";
import image11 from "../../../assets/Companylogos/11.png";
import image12 from "../../../assets/Companylogos/12.png";
import image13 from "../../../assets/Companylogos/13.png";
import image14 from "../../../assets/Companylogos/14.png";
import image15 from "../../../assets/Companylogos/15.png";
import image16 from "../../../assets/Companylogos/16.png";
import image17 from "../../../assets/Companylogos/17.png";
import image18 from "../../../assets/Companylogos/18.png";
import image19 from "../../../assets/Companylogos/19.png";
import image20 from "../../../assets/Companylogos/20.png";
import image21 from "../../../assets/Companylogos/21.png";
import image22 from "../../../assets/Companylogos/22.png";
// import image23 from "../../../assets/Companylogos/23.png";
import image24 from "../../../assets/Companylogos/24.png";
import image25 from "../../../assets/Companylogos/25.png";
import image26 from "../../../assets/Companylogos/26.png";
import image27 from "../../../assets/Companylogos/27.png";
import image28 from "../../../assets/Companylogos/28.png";
import image29 from "../../../assets/Companylogos/29.png";
import image30 from "../../../assets/Companylogos/30.png";
import image31 from "../../../assets/Companylogos/31.png";
import image32 from "../../../assets/Companylogos/32.png";
import image33 from "../../../assets/Companylogos/33.png";
import image34 from "../../../assets/Companylogos/34.png";
import image35 from "../../../assets/Companylogos/35.png";
import image36 from "../../../assets/Companylogos/36.png";
import image37 from "../../../assets/Companylogos/37.png";
import image38 from "../../../assets/Companylogos/38.png";
import image39 from "../../../assets/Companylogos/39.png";
// import image40 from "../../../assets/Companylogos/40.png";
// import image41 from "../../../assets/Companylogos/41.png";
import image42 from "../../../assets/Companylogos/42.png";
// import image43 from "../../../assets/Companylogos/43.png";
import image44 from "../../../assets/Companylogos/44.png";
import image45 from "../../../assets/Companylogos/45.png";
import image46 from "../../../assets/Companylogos/46.png";
import image47 from "../../../assets/Companylogos/47.png";
import image48 from "../../../assets/Companylogos/48.png";
import image49 from "../../../assets/Companylogos/49.png";
import image50 from "../../../assets/Companylogos/50.png";
import image51 from "../../../assets/Companylogos/51.png";
import image52 from "../../../assets/Companylogos/52.png";
import image53 from "../../../assets/Companylogos/53.png";
import image54 from "../../../assets/Companylogos/54.png";
import image55 from "../../../assets/Companylogos/55.png";
import image56 from "../../../assets/Companylogos/56.png";
import image57 from "../../../assets/Companylogos/57.png";
import image58 from "../../../assets/Companylogos/58.png";
import image59 from "../../../assets/Companylogos/59.png";
import image60 from "../../../assets/Companylogos/60.png";
import image61 from "../../../assets/Companylogos/61.png";
import image62 from "../../../assets/Companylogos/62.png";
import image63 from "../../../assets/Companylogos/63.png";
import image64 from "../../../assets/Companylogos/64.png";
import image65 from "../../../assets/Companylogos/65.png";
import image66 from "../../../assets/Companylogos/66.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  image42,
  image44,
  image45,
  image46,
  image47,
  image48,
  image49,
  image50,
  image51,
  image52,
  image53,
  image54,
  image55,
  image56,
  image57,
  image58,
  image59,
  image60,
  image61,
  image62,
  image63,
  image64,
  image65,
  image66,
];

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const logoChunks = chunkArray(images, 4); // 2x2 grid per card

const AUTOPLAY_DELAY = 2000;

const PlacementCarousel = ({ heading, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const checkIsMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const totalSlides = logoChunks.length;

  const goToSlide = (index) => {
    setCurrentIndex((index + totalSlides) % totalSlides);
  };

  // Autoplay logic
  useEffect(() => {
    if (isPaused || totalSlides === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  // Which slides to show at once
  const getVisibleSlides = () => {
    if (totalSlides === 0) return [];
    if (isMobile) {
      return [currentIndex];
    }
    const secondIndex = (currentIndex + 1) % totalSlides;
    return [currentIndex, secondIndex];
  };

  const visibleSlides = getVisibleSlides();

  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.98 },
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Circle with Blinking Effect (unchanged) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-200 opacity-20 animate-blink"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gray-200 text-gray-700 text-xs sm:text-sm font-medium mb-4">
            Trusted By
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {heading}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Slider wrapper */}
        <div
          ref={sliderRef}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex justify-center gap-4 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {visibleSlides.map((slideIndex, slot) => (
                <motion.div
                  key={`${slideIndex}-${slot}-${isMobile ? "m" : "d"}`}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`p-2 sm:p-4 flex justify-center ${
                    isMobile ? "w-full" : "w-1/2"
                  }`}
                >
                  <div className="bg-gray-100 rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 w-full max-w-sm sm:max-w-md min-h-[300px] sm:min-h-[350px]">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6">
                      {logoChunks[slideIndex].map((src, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow"
                        >
                          <img
                            src={src}
                            alt={`Partner ${slideIndex * 4 + index + 1}`}
                            className="h-20 sm:h-28 max-w-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Dots (similar to react-slick dots) */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    isActive
                      ? "bg-blue-500 w-4"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementCarousel;
