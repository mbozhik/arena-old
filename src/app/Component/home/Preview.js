// import Image from "next/image";
// import event from "@/app/Images/Reviews/Event.jpg";
import Review from '../Utility/Reviews'
import OrderImage from '../../../../public/statitic/reveiw.jpg'
import Image from 'next/image'
import Review2 from '../Utility/Review2'
const Preview = () => {
  return (
    <div className="container px-3 mx-auto mt-10  lg:mt-10">
      <div className="">
        {/* <div className="relative hidden h-full md:col-span-2 md:block">
          <Image src={event} alt="Events" className="" fill={true} sizes="1000vh" />
        </div> */}
        <div className="">
          <article className="py-2 ">
            <h5 className="text-center text-[18px] md:text-[24px] xl:text-[26px] font-bold text-[#0b6481]  mb-2"> Preview of Your Future</h5>
            <p className="text-center text-gray-500 text-[11px] md:text-sm md:mb-3 mb-2">Your Skill. Your Career. Your Global Path.</p>
            <h6 className="text-center text-gray-600 text-[11px] md:text-sm mb-4">
              Arena Web Security is not just about learning. It is about transforming your skill into real income,
              <br className="hidden md:block" /> global opportunities, and a future-proof career.
            </h6>
            <h6 className="text-center text-gray-600 text-[11px] md:text-sm md:mb-8 mb-6">
              From Upwork to Fiverr, from international cybersecurity firms to freelance consultancy. Our <br className="hidden md:block" /> students are earning, growing, and succeeding across the world.
            </h6>
          </article>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 ">
            <Review />
            <div>
              <div className="h-[220px] hidden lg:block ">
                <Review2 />
              </div>
              {/* <Image src={OrderImage } alt="review" className="w-full" /> */}
              <div className="pt-8 md:pt-2">
                <h3 className="mt-5 mb-2 text-base font-semibold">Impact in Numbers – By Our Students</h3>
                <div className="space-y-1 text-sm">
                  <p>
                    💡 <strong>Total Students earning online:</strong> 4,000+
                  </p>
                  <p>
                    💵 <strong>Highest single project earning:</strong> $10,200
                  </p>
                  <p>
                    📈 <strong>Highest monthly earning:</strong> $13,780
                  </p>
                  <p>
                    🌍 <strong>Countries served:</strong> 28+
                  </p>
                </div>
              </div>
            </div>
            {/* <Review /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview
