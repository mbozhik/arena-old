import Image from "next/image";
import ceo from "@/app/Images/HomeAbout/ceo.png";
import sng from "@/app/Images/HomeAbout/ta.png";

const About = () => {
  return (
    <div className="container mx-auto bg-[#F3F6FA] lg:px-10 py-5 -mt-10 z-50 relative rounded-md">
      <h1 className="text-2xl font-semibold text-[#4aabff]">About US</h1>
      <h3 className="text-3xl font-bold pt-3 ">
        World Best Virtual Learnig Network Arena Web Security
      </h3>
      <p className="justify-center pt-10">
        Arena Web Security is a sister concern of Arena Web Technology. Arena
        Web Security is a renowned IT security company in Bangladesh since its
        establishment in 2012. During these years, Arena Web Security has
        provided Cyber Security Services and Trainings to many around the world.
        Involved with Government entities in 2012 like ICT Ministry, Academy for
        Rural Development, University of Engineering and Technology. Experienced
        with cyber security support in corporate area linked with outsourcing
        market. Already 45 batches received this training and have started to
        earn through online and corporate job.
      </p>
      <div className="flex items-center gap-x-4 mt-5">
        <Image
          src={ceo}
          alt="Tanjim AL Fahim"
          className="border-2 border-white h-32 w-32 rounded-full  "
        />
        <div>
        <Image
          src={sng}
          alt="Tanjim AL Fahim"
          className="border-2 w-40 h-10 border-white   "
        />
        <p className="font-semibold mt-2 lg:text-1xl">Ceo & Founder of Arena</p>
        </div>
      </div>
    </div>
  );
};

export default About;
