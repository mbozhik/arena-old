'use client'

import {useState, useEffect} from 'react'
import Image from 'next/image'
import BannerImage from '@/app/AllDataFatchingFunction/BannerImage'

export default function BannerComponent() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const tanjimImage = await BannerImage()
      setData(tanjimImage)
    }

    fetchData()
  }, [])

  return (
    <div className="lg:w-[50%] w-full h-full mt-3 md:mt-0">
      {data ? (
        // <Image
        //   alt="Tanjim Al Fahim"
        //   src={data}
        //   // src='d'
        //   height={1000}
        //   width={1000}
        //   className="object-contain"
        // />
        <img src={data} className="w-full h-full" />
      ) : (
        <p>Image not available</p>
      )}
    </div>
  )
}
