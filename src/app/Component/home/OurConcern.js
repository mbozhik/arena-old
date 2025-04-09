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
import Marquee from "react-fast-marquee";

const OurConcern = () => {
  return (
    <div className=" lg:mt-56 md:mt-8 container relative  bg-[#fbfcfd]">
      <div className="">
        <h5 className="text-center text-[26px] font-bold text-[#0b6481]  mb-2">
          Our Concerns
        </h5>
        <h6 className="text-center text-gray-600 text-sm mb-16">
          We starting a project by maturing of project plans and researching the
          business needs and setting a goal to develop the project accordingly.
          Prerequisite requirements are our designing thoughts to our concerns.
        </h6>
      </div>

      <div className="mt-20 ">
        <Marquee
          direction="right"
          gap="20px"
          // style={{ marginRight: '20px' }}
        >
          <Image
            sizes="100vw"
            src={img}
            style={{ marginRight: "20px" }}
            className="rounded-md 2xl:h-24 2xl:w-28 xl:h-20 xl:w-24 md:h-16 md:w-20 w-16 h-14 "
            alt="ict"
            width="auto"
            height="auto"
          />
          <Image
            sizes="100vw"
            src={img1}
            style={{ marginRight: "20px" }}
            className="rounded-md 2xl:h-24 2xl:w-28 xl:h-20 xl:w-24 md:h-16 md:w-20 w-16 h-14 "
            alt="ict"
            width="auto"
            height="auto"
          />
          <Image
            sizes="100vw"
            src={img2}
            style={{ marginRight: "20px" }}
            className="rounded-md 2xl:h-24 2xl:w-28 xl:h-20 xl:w-24 md:h-16 md:w-20 w-16 h-14 "
            alt="ict"
            width="auto"
            height="auto"
          />
          <Image
            sizes="100vw"
            src={img3}
            style={{ marginRight: "20px" }}
            className="rounded-md 2xl:h-24 2xl:w-28 xl:h-20 xl:w-24 md:h-16 md:w-20 w-16 h-14 "
            alt="ict"
            width="auto"
            height="auto"
          />
          <Image
            sizes="100vw"
            src={img4}
            style={{ marginRight: "20px" }}
            className="rounded-md 2xl:h-24 2xl:w-28 xl:h-20 xl:w-24 md:h-16 md:w-20 w-16 h-14 "
            alt="ict"
            width="auto"
            height="auto"
          />
          <Image
            sizes="100vw"
            src={img5}
            style={{ marginRight: "20px" }}
            className="rounded-md 2xl:h-24 2xl:w-28 xl:h-20 xl:w-24 md:h-16 md:w-20 w-16 h-14 "
            alt="ict"
            width="auto"
            height="auto"
          />
          <Image
            sizes="100vw"
            src={img6}
            style={{ marginRight: "20px" }}
            className="rounded-md 2xl:h-24 2xl:w-28 xl:h-20 xl:w-24 md:h-16 md:w-20 w-16 h-14 "
            alt="ict"
            width="auto"
            height="auto"
          />
          <Image
            sizes="100vw"
            src={img7}
            style={{ marginRight: "20px" }}
            className="rounded-md 2xl:h-24 2xl:w-28 xl:h-20 xl:w-24 md:h-16 md:w-20 w-16 h-14 "
            alt="ict"
            width="auto"
            height="auto"
          />
          <Image
            sizes="100vw"
            src={img8}
            style={{ marginRight: "20px" }}
            className="rounded-md 2xl:h-24 2xl:w-28 xl:h-20 xl:w-24 md:h-16 md:w-20 w-16 h-14 "
            alt="ict"
            width="auto"
            height="auto"
          />
          <Image
            sizes="100vw"
            src={img9}
            style={{ marginRight: "20px" }}
            className="rounded-md 2xl:h-24 2xl:w-28 xl:h-20 xl:w-24 md:h-16 md:w-20 w-16 h-14 "
            alt="ict"
            width="auto"
            height="auto"
          />
          <Image
            sizes="100vw"
            src={img10}
            style={{ marginRight: "20px" }}
            className="rounded-md 2xl:h-24 2xl:w-28 xl:h-20 xl:w-24 md:h-16 md:w-20 w-16 h-14 "
            alt="ict"
            width="auto"
            height="auto"
          />
        </Marquee>
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
