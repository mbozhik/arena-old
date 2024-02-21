import Image from "next/image";
import Logo from "@/app/Images/mainLogo.png";
import ABoutH1 from "../Component/Utility/ABoutH1";
import Pdf from "../../../public/Pdf";
import CourseStatistic from "../Component/home/CourseStatistic";
import OurConcern from "../Component/home/OurConcern";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-auto relative overflow-hidden ">
      <div className="relative md:h-[90vh]">
        <div className="h-3/5 flex justify-center items-center flex-col container mx-auto px-6 md:px-0  ">
          <div className="md:mt-20 lg:mt-10 mt-10">
            <Image
              alt="Arena Web and Security"
              src={Logo}
              width="0"
              height="0"
              sizes="100vw"
              className="h-20 w-52"
            />
            <p className="lg:w-42 bg-[#ffd321] h-[3px] mt-2 "></p>
          </div>

          <div className="mt-5 text-justify relative">
            <ABoutH1 />

            <p className="text-justify pt-5">
              Arena Web Security, a distinguished subsidiary of Arena Web
              Technology, stands as a leading IT security firm in Bangladesh,
              making its mark since its inception in 2012. Over the years, Arena
              Web Security has earned acclaim for delivering robust Cyber
              Security Services and cutting-edge training programs to a global
              clientele. Our journey has been marked by strategic collaborations
              with government entities such as the ICT Ministry, Academy for
              Rural Development, and the University of Engineering and
              Technology since 2012. With a strong presence in the corporate
              sector, particularly in the outsourcing market, Arena Web Security
              has been a trusted name providing cyber security support. Our
              expertise has empowered numerous individuals worldwide, with 45
              batches successfully completing our comprehensive training
              programs. Graduates of our training have not only acquired
              valuable skills but have also embarked on successful careers in
              both online and corporate environments. In alignment with the
              ever-evolving landscape of Cyber Security, Arena Web Security
              remains dedicated to staying at the forefront of technological
              advancements, ensuring the highest level of protection for
              individuals and organizations alike. Join us on this journey as we
              continue to fortify the digital realm against emerging threats,
              securing a safer online space for everyone.
            </p>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="md:absolute md:bottom-0"
        >
          <path
            fill="#EBE7F8"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,186.7C672,171,768,149,864,133.3C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="flex w-full md:gap-4 gap-2 px-2 justify-center  left-1/2 transform -translate-x-1/2 absolute md:bottom-5 bottom-2">
          <Link href="/contact">
            <botton className="md:bg-white bg-[#76599E] px-10 py-2 rounded-full text-[#ffd321] hover:text-green-500 cursor-pointer ">
              Contact Us
            </botton>
          </Link>
          <Link href="https://www.facebook.com/ArenaBangladesh/">
            <botton className="bg-[#76599E] hover:text-[#ffd321] md:px-10 px-5 py-1 md:py-2 rounded-full text-[white] ">
              Join US Facebook
            </botton>
          </Link>
        </div>
      </div>
      {/* <iframe className="" src={`${AWTBrochure}#view=fitH`} frameBorder="0"
                                            height="1000px" width="100%"/> */}
      <div className="px-20 container mx-auto my-5 hidden 2xl:block">
        <Pdf />
      </div>
      <CourseStatistic />
      <OurConcern />
    </div>
  );
};

export default page;
