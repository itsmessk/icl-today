import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EY from '../../../assets/companyimages/EYglobal.png';
import Flipkart from '../../../assets/companyimages/Flipkart.png';
import Intel from '../../../assets/companyimages/intel.png';
import Uber from '../../../assets/companyimages/Uber.png';
import Walmart from '../../../assets/companyimages/Walmart.jpg';
import Atlassian from '../../../assets/companyimages/Atlassian.png';
import BNYMelon from '../../../assets/companyimages/BNY Melon.jpg';
import TexasInstruments from '../../../assets/companyimages/Texas Instruments.jpg';
import TechMahindra from '../../../assets/companyimages/Tech Mahindra.png';
import BirlaSoft from '../../../assets/companyimages/Birla soft.jpeg';
import FirstSource from '../../../assets/companyimages/First source.png';
import Spinny from '../../../assets/companyimages/Spinny.jpg';
import Synopsys from '../../../assets/companyimages/Synopsys.png';
import Milliman from '../../../assets/companyimages/Milliman.jpg';
import Juspay from '../../../assets/companyimages/Jus pay.png';
import Hackerearth from '../../../assets/companyimages/Hackerearth.png';
import Unstop from '../../../assets/companyimages/Unstop.png';
import Guidewire from '../../../assets/companyimages/Guidewire.png';
import TEMSTech from '../../../assets/companyimages/TEMS tech.jpeg';
import Recynergy from '../../../assets/companyimages/Recynergy.jpeg';

const images = [
  EY, Flipkart, Intel, Uber, Walmart, Atlassian, BNYMelon, TexasInstruments,
  TechMahindra, BirlaSoft, FirstSource, Spinny, Synopsys, Milliman,
  Juspay, Hackerearth, Unstop, Guidewire, TEMSTech, Recynergy,
];

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const CompaniesEngaged = ({ heading, description }) => {
  const sliderRef = useRef(null);
  const logoChunks = chunkArray(images, 4); // 2x2 grid for larger screens

  const settings = {
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Blinking Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-200 opacity-20 animate-blink"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gray-200 text-gray-700 text-xs sm:text-sm font-medium mb-4">
            Trusted By
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">{heading}</h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">{description}</p>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {logoChunks.map((chunk, i) => (
            <div key={i} className="p-2 sm:p-4 flex justify-center">
              <div className="bg-gray-100 rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 w-full max-w-sm sm:max-w-md min-h-[300px] sm:min-h-[350px]">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6">
                  {chunk.map((src, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow"
                    >
                      <img
                        src={src}
                        alt={`Partner ${i * 4 + index + 1}`}
                        className="h-20 sm:h-28 max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CompaniesEngaged;
