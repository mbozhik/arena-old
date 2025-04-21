// Import Swiper styles
"use client";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// import reviews1 from '@/app/Images/Student_reviews/fiveer1.svg'
import Reviews0 from "@/app/Images/Student_reviews/Azhar.svg";
import Reviews1 from "@/app/Images/Student_reviews/Nuruzzaman.svg";
import Reviews2 from "@/app/Images/Student_reviews/rana.svg";
import Reviews3 from "@/app/Images/Student_reviews/rejon.svg";
import Reviews4 from "@/app/Images/Student_reviews/riaz.svg";
import Reviews5 from "@/app/Images/Student_reviews/rubel.svg";
import Reviews6 from "@/app/Images/Student_reviews/sifat.svg";
import Reviews7 from "@/app/Images/Student_reviews/sifat2.svg";
import Reviews8 from "@/app/Images/Student_reviews/success1.svg";
import Reviews9 from "@/app/Images/Student_reviews/success2.svg";
import Reviews10 from "@/app/Images/Student_reviews/success3.svg";
import Reviews11 from "@/app/Images/Student_reviews/success4.svg";
import Reviews12 from "@/app/Images/Student_reviews/success5.svg";
import Reviews13 from "@/app/Images/Student_reviews/success6.svg";
import Reviews14 from "@/app/Images/Student_reviews/upwork1.svg";
import Reviews15 from "@/app/Images/Student_reviews/upwork2.svg";

const Review2= () => {
  return (
    <div className=" flex gap-x-5 relative  h-full w-full  ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper "
      >
     
        <SwiperSlide className="h-full">
          <div className="h-full  relative ">
          <Image src={Reviews0} alt="review"  />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="h-full relative">
          <Image src={Reviews1} alt="review"  />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="h-full relative">
          <Image src={Reviews2} alt="review"  />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="h-full relative">
          <Image src={Reviews3} alt="review"  />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="h-full relative">
          <Image src={Reviews4} alt="review"  />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="h-full relative">
          <Image src={Reviews5} alt="review"  />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="h-full relative">
          <Image src={Reviews6} alt="review"  />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="h-full relative">
          <Image src={Reviews7} alt="review"  />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="h-full relative">
          <Image src={Reviews8} alt="review"  />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="h-full relative">
          <Image src={Reviews9} alt="review"  />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="h-full relative">
          <Image src={Reviews10} alt="review"  />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="h-full relative">
          <Image src={Reviews11} alt="review"  />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="h-full relative">
          <Image src={Reviews12} alt="review"  />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="h-full relative">
          <Image src={Reviews13} alt="review"  />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="h-full relative">
          <Image src={Reviews14} alt="review"  />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="h-full relative">
          <Image src={Reviews15} alt="review"  />
          </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
};

export default Review2;
