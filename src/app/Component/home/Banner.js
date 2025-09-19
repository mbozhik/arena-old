'use client'
import {useState, useEffect} from 'react'
// import banner1 from "";
// import banner2 from ";

const banners = [
  {
    src: '/banner/aws-banner1.png',
    title: 'Arena Web Security',
    subtitle: 'New window of World Wide Web',
    description: 'Arena Web Security is the first and most trusted cyber security company in Bangladesh, established in 2012. Over the years, Arena has provided advanced Cyber Security Services and Professional Training to clients across the globe - including the Government and Ministries of Bangladesh, Military, Banking Sector, Educational Institutions, and Private Organizations.',
  },
  {
    src: '/banner/aws-banner2.webp',
    title: 'Arena Web Security',
    subtitle: 'Hacking was passion, Security is our profession',
    description: 'Arena Web Security is the first and most trusted cyber security company in Bangladesh, established in 2012. Over the years, Arena has provided advanced Cyber Security Services and Professional Training to clients across the globe - including the Government and Ministries of Bangladesh, Military, Banking Sector, Educational Institutions, and Private Organizations.',
  },
]

export default function CarouselComponent() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden xl:h-[60vh] md:h-[30vh] h-[36vh] ">
      {banners.map((banner, index) => (
        <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <img src={banner.src} alt="slide" className="object-cover w-full h-full TopBanner" />
          <div className="container absolute inset-0 flex flex-col items-center justify-center p-4 mx-auto text-center md:px-10 xl:px-0">
            <h4 className="text-[28px] md:text-[42px] xl:text-[44px] md:leading-[50px] xl:leading-[53px] font-bold">{banner.title}</h4>
            <p className="text-[18px] md:text-[26px] xl:text-[20px] leading-7 mt-1">{banner.subtitle}</p>
            <p className=" text-[11px] md:text-[16px] text-gray-800 mt-4">{banner.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
