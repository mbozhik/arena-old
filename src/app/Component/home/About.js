import Image from 'next/image'
// import ceo from "@/app/Images/HomeAbout/ceo.png";
// import sng from "@/app/Images/HomeAbout/ta.png";

export const metadata = {
  title: 'Arena Web Security | Master Ethical Hacking in Bangladesh',
  description: 'Arena Web Security is  first level IT security company in Bangladesh since its establishment in 2012. Arena Web Security has provided Cyber Security Services',
}
const About = () => {
  return (
    <div className="container mx-auto bg-[#F3F6FA] md:px-10 py-5 -mt-10 z-10 hidden md:block relative rounded-md px-6 ">
      <h1 className="text-2xl font-semibold text-[#ff1361]">About US</h1>
      <h3 className="pt-3 text-3xl font-bold ">World Best Virtual Learnig Network Arena Web Security</h3>
      <p className="justify-center pt-10">Arena Web Security is a sister concern of Arena Web Technology. Arena Web Security is a renowned IT security company in Bangladesh since its establishment in 2012. During these years, Arena Web Security has provided Cyber Security Services and Trainings to many around the world. Involved with Government entities in 2012 like ICT Ministry, Academy for Rural Development, University of Engineering and Technology. Experienced with cyber security support in corporate area linked with outsourcing market. Already 45 batches received this training and have started to earn through online and corporate job.</p>
      {/* <div className="flex items-center mt-5 gap-x-4">
        <Image
          src={ceo}
          alt="Tanjim AL Fahim"
          width="0"
          height="0"
          sizes="100vw"
          className="w-32 h-32 rounded-full "
        />
        <div>
        <Image
          src={sng}
          width="0"
    height="0"
    sizes="100vw"
          alt="Tanjim AL Fahim"
          className="w-40 h-10 "
        />
        <p className="mt-2 font-semibold lg:text-1xl">Ceo & Founder of Arena</p>
        </div>
      </div> */}
    </div>
  )
}

export default About
