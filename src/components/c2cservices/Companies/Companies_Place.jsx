import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../../assets/Companylogos/1.png';
import image2 from '../../../assets/Companylogos/2.png';
import image3 from '../../../assets/Companylogos/3.png';
import image4 from '../../../assets/Companylogos/4.png';
import image5 from '../../../assets/Companylogos/5.png';
import image6 from '../../../assets/Companylogos/6.png';
import image7 from '../../../assets/Companylogos/7.png';
import image8 from '../../../assets/Companylogos/8.png';
import image9 from '../../../assets/Companylogos/9.png';
import image10 from '../../../assets/Companylogos/10.png';
import image11 from '../../../assets/Companylogos/11.png';
import image12 from '../../../assets/Companylogos/12.png';     
import image13 from '../../../assets/Companylogos/13.png';
import image14 from '../../../assets/Companylogos/14.png';
import image15 from '../../../assets/Companylogos/15.png';
import image16 from '../../../assets/Companylogos/16.png';
import image17 from '../../../assets/Companylogos/17.png';
import image18 from '../../../assets/Companylogos/18.png';
import image19 from '../../../assets/Companylogos/19.png';
import image20 from '../../../assets/Companylogos/20.png';
import image21 from '../../../assets/Companylogos/21.png';
import image22 from '../../../assets/Companylogos/22.png';
// import image23 from '../../../assets/Companylogos/23.png';
import image24 from '../../../assets/Companylogos/24.png';
import image25 from '../../../assets/Companylogos/25.png';
import image26 from '../../../assets/Companylogos/26.png';
import image27 from '../../../assets/Companylogos/27.png';
import image28 from '../../../assets/Companylogos/28.png'; 
import image29 from '../../../assets/Companylogos/29.png';
import image30 from '../../../assets/Companylogos/30.png';
import image31 from '../../../assets/Companylogos/31.png';
import image32 from '../../../assets/Companylogos/32.png';
import image33 from '../../../assets/Companylogos/33.png';
import image34 from '../../../assets/Companylogos/34.png';   
import image35 from '../../../assets/Companylogos/35.png';
import image36 from '../../../assets/Companylogos/36.png';
import image37 from '../../../assets/Companylogos/37.png';
import image38 from '../../../assets/Companylogos/38.png';
import image39 from '../../../assets/Companylogos/39.png';
import image40 from '../../../assets/Companylogos/40.png';
import image41 from '../../../assets/Companylogos/41.png';
import image42 from '../../../assets/Companylogos/42.png';
import image43 from '../../../assets/Companylogos/43.png';
import image44 from '../../../assets/Companylogos/44.png';
import image45 from '../../../assets/Companylogos/45.png';   
import image46 from '../../../assets/Companylogos/46.png';
import image47 from '../../../assets/Companylogos/47.png'; 
import image48 from '../../../assets/Companylogos/48.png';
import image49 from '../../../assets/Companylogos/49.png';
import image50 from '../../../assets/Companylogos/50.png';
import image51 from '../../../assets/Companylogos/51.png';
import image52 from '../../../assets/Companylogos/52.png';
import image53 from '../../../assets/Companylogos/53.png';
import image54 from '../../../assets/Companylogos/54.png';     
import image55 from '../../../assets/Companylogos/55.png';
import image56 from '../../../assets/Companylogos/56.png';
import image57 from '../../../assets/Companylogos/57.png'; 
import image58 from '../../../assets/Companylogos/58.png';
import image59 from '../../../assets/Companylogos/59.png';
import image60 from '../../../assets/Companylogos/60.png';
import image61 from '../../../assets/Companylogos/61.png';
import image62 from '../../../assets/Companylogos/62.png';
import image63 from '../../../assets/Companylogos/63.png';
import image64 from '../../../assets/Companylogos/64.png';
import image65 from '../../../assets/Companylogos/65.png';
import image66 from '../../../assets/Companylogos/66.png';

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8,
  image9, image10, image11, image12, image13, image14, image15,
  image16, image17, image18, image19, image20, image21, image22,
  image23, image24, image25, image26, image27, image28, image29,
  image30, image31, image32, image33, image34, image35, image36,
  image37, image38, image39, image40, image41, image42, image43,
  image44, image45, image46, image47, image48, image49, image50,
  image51, image52, image53, image54, image55, image56, image57,
  image58, image59, image60, image61, image62, image63, image64,
  image65, image66,
];

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const CompaniesEngaged1 = ({ heading, description }) => {
  const sliderRef = useRef(null);
  const logoChunks = chunkArray(images, 4); // Using 4 logos per chunk (2x2 grid) like the reference code

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
      {/* Background Circle with Blinking Effect */}
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

export default CompaniesEngaged1;