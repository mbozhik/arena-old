'use client'
import Image from "next/image";
import img from "@/app/Images/Concern/ict.svg";
import img1 from "@/app/Images/Concern/sena_kalyan.svg";
import img2 from "@/app/Images/Concern/porzotok.svg";
import img3 from "@/app/Images/Concern/polli_Academy.svg";
import img4 from "@/app/Images/Concern/henan.svg";
import img5 from "@/app/Images/Concern/defense.svg";
import img6 from "@/app/Images/Concern/cyber71.svg";
import img7 from "@/app/Images/Concern/buet.svg";
import img8 from "@/app/Images/Concern/bpplastic.svg";
import img9 from "@/app/Images/Concern/airForce.svg";
import img10 from "@/app/Images/Concern/s.svg";
// At the top of your file
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const OurConcern = () => {
  return (
    <div className=" lg:mt-12 mt-12 container relative   xl:pb-16 md:pb-10 pb-5">
      <div className="">
   <h5 className="text-center text-[18px] md:text-[24px] xl:text-[26px] font-bold text-[#0b6481]  mb-2">          Our Valued Clients & Partners
        </h5>
        <h6 className="text-center text-gray-600  text-[11px] md:text-sm md:mb-16 mb-10">
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

   
    </div>
  );
};
export default OurConcern;
