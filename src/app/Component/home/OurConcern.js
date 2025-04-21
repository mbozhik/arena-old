'use client'
import Image from "next/image";
import img from "@/app/Images/Concern/ict.png";
import img1 from "@/app/Images/Concern/sena_kalyan.png";
import img2 from "@/app/Images/Concern/porzotok.png";
import img3 from "@/app/Images/Concern/polli_Academy.png";
import img4 from "@/app/Images/Concern/henan.png";
import img5 from "@/app/Images/Concern/defense.png";
import img6 from "@/app/Images/Concern/c.png";
import img7 from "@/app/Images/Concern/buet.png";
import img8 from "@/app/Images/Concern/bpplastic.png";
import img9 from "@/app/Images/Concern/airForce.png";
import img10 from "@/app/Images/Concern/s.png";
// At the top of your file
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const OurConcern = () => {
  return (
    <div className=" lg:mt-12 mt-12 container relative   xl:pb-16 pb-10">
      <div className="">
   <h5 className="text-center md:text-[24px] xl:text-[26px] font-bold text-[#0b6481]  mb-2">          Our Valued Clients & Partners
        </h5>
        <h6 className="text-center text-gray-600  text-[10px] md:text-sm mb-16">
        Shaping Digital Security Across Government, Military, Education, and Enterprise Sectors. Proudly protecting Bangladesh since 2012.

        </h6>
      </div>
      <div className="xl:mt-20 mt-5">
  <Swiper
    breakpoints={{
      320: { slidesPerView: 4 },   // Small screens
      640: { slidesPerView: 4 },   // Tablets
      768: { slidesPerView: 5 },   // Medium devices
      1024: { slidesPerView: 6 },  // Laptops
      1280: { slidesPerView: 6 },  // Desktops and up
    }}
    spaceBetween={20}
    loop={true}
    autoplay={{ delay: 2000, disableOnInteraction: false }}
    modules={[Autoplay]}
    className="mySwiper"
  >
    {[img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map(
      (image, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          <Image
            sizes="100vw"
            src={image}
            className="rounded-md 2xl:h-24 2xl:w-28 xl:h-20 xl:w-24 md:h-16 md:w-20 w-16 h-14"
            alt={`ict-${index}`}
            width="auto"
            height="auto"
          />
        </SwiperSlide>
      )
    )}
  </Swiper>
</div>

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0"
      >
        <path
          fill="#EBE7F8"
          fillOpacity="1"
          d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,186.7C672,171,768,149,864,133.3C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> */}
    </div>
  );
};
export default OurConcern;
