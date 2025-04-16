
'use client'
import { useState, useEffect } from "react";
// import banner1 from "";
// import banner2 from ";

const banners = [
  {
    src: '/banner/aws-banner1.png',
    title: "Arena Web Security",
    subtitle: "New window of World Wide Web",
    description:
      "Arena Web Security is a renowned & first level IT security company in Bangladesh since its establishment in 2012. During these years, Arena Web Security has provided Cyber Security Services and Trainings to many around the world.",
  },
  {
    src: '/banner/aws-banner2.webp',
    title: "Arena Web Security",
    subtitle: "Hacking was passion, Security is our profession",
    description:
      "Arena Web Security is a renowned & first level IT security company in Bangladesh since its establishment in 2012. During these years, Arena has provided Cyber Security Services and Trainings to many around the world.",
  },
];

export default function CarouselComponent() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden xl:h-[60vh] md:h-[30vh] h-[33vh] ">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img src={banner.src} alt="slide" className="w-full h-full object-cover TopBanner" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 container mx-auto md:px-10 xl:px-0">
            <h4 className="text-[28px] md:text-[42px] xl:text-[44px] md:leading-[50px] xl:leading-[53px] font-bold">{banner.title}</h4>
            <p className="text-[18px] md:text-[26px] xl:text-[20px] leading-7 mt-1">{banner.subtitle}</p>
            <p className=" text-[10px] md:text-[14px] text-gray-800 mt-4">{banner.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
