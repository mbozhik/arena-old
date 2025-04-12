
import Image from "next/image";
import Logo from '@/app/admission/Logo.png'
import right from "@/app/admission/right.svg"
import Apply from "../Component/Apply";
import NavberData from "../AllDataFatchingFunction/Topber";

export const metadata = {
  title: 'Ethical Hacking & Advanced Python Course Combo Offer!',
  description: 'Level up your skills in Python and Ethical Hacking! Our expert-led courses empower you to excel in IT security. Enroll now for a brighter future!',
}; 
const page = async() => {
    const data = await NavberData();
   
  return (
    <div className="px-0 mt-5 max-w-[1280px] mx-auto  shadow-[0px_0px_5px_0px_rgba(0,0,0,0.3)]  my-10 pr-3 rounded-2xl ">
      <div className="flex h-[90vh] gap-2  ">
        <div className="relative w-[50%] hidden lg:block">
        {/* <article className="admissionSideber w-[100%] h-[100%]">
         
         </article> */}
         {/* <div className=" px-5 bg-gradient-to-br from-[#56b5e3] to-[#7d58a5] rounded-s-2xl h-full ">
            <div className="flex justify-center "><Image src={Logo} alt="Logo" className="w-44"/></div>
            <h1 className="text-3xl font-bold py-2   text-[#FBC453] mt-5">Admission going on 2024</h1>
            <hr/>
            <h3 className="mt-3 text-2xl text-white">Master the art of Ethical  <span className="font-semibold"><span className="text-yellow-700">H</span>ac<span className="text-yellow-700">K</span>ing</span></h3>
            <div>
            <h1 className="text-3xl font-bold py-2   text-[#FBC453] mt-5">Our Courses</h1>
      
            <ul className="mt-5">
              <li className="flex items-center gap-x-2 text-white"><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Cyber Security & Ethical Hacking</li>
              <li className="flex items-center gap-x-2 text-white"><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Advanced Python With Freelancing</li>
              <li className="flex items-center gap-x-2 text-white"><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Cyber Security and Advance Python (Combo)</li>
              <li className="flex items-center gap-x-2 text-white"><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>CEHF Masterclass</li>
              <li className="flex items-center gap-x-2 text-white"><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Certified in Open Source Intelligence (C|OSINT)</li>
              <li className="flex items-center gap-x-2 text-white"><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Linux</li>
              <li className="flex items-center gap-x-2 text-white"><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Networking Security</li>
            </ul>
            <h1 className="text-3xl font-bold py-2   text-[#FBC453] mt-5">Duration </h1>
            <p className="text-white">4 months of Hands-on training</p>
              </div>  
         </div> */}
          <div className="px-5 py-6 bg-gradient-to-br from-[#56b5e3] to-[#7d58a5] rounded-s-2xl text-center h-full">
      {/* Logo */}
      <div className="flex justify-center">
        <Image src={Logo} alt="Logo" className="w-44" />
      </div>

      {/* Admission Info */}
      <h1 className="text-2xl font-mono text-[#FBC453] mt-8">Admission 2025</h1>
      <hr className="my-3 border-white/30" />
      <h2 className="text-xl text-[#FFD321] font-semibold">Admission going on</h2>
      <p className="text-white mt-1">
        Duration : <span className="text-[#FBC453] font-bold">4 months</span> of Hands-on training
      </p>
      <hr className="my-4 border-white/30" />

      {/* Master Ethical Hacking */}
      <h3 className="text-xl text-white font-medium mt-4">Master the art of</h3>
      <h2 className="text-2xl font-bold text-white">
        Ethical <span className="text-[#FFD321]">H</span>ack<span className="text-[#FFD321]">i</span>ng
      </h2>

      {/* Topics */}
      <ul className="mt-5 space-y-2 text-left text-white max-w-xs mx-auto">
        <li className="flex items-center gap-x-2">
          <Image src={right} alt="icon" className="h-5 w-5" />
          Cyber Security
        </li>
        <li className="flex items-center gap-x-2">
          <Image src={right} alt="icon" className="h-5 w-5" />
          Digital Forensics
        </li>
        <li className="flex items-center gap-x-2">
          <Image src={right} alt="icon" className="h-5 w-5" />
          Freelancing
        </li>
        <li className="flex items-center gap-x-2">
          <Image src={right} alt="icon" className="h-5 w-5" />
          Open Source Intelligence
        </li>
        <li className="flex items-center gap-x-2">
          <Image src={right} alt="icon" className="h-5 w-5" />
          Linux
        </li>
      </ul>

      {/* Gallery (replace with real images) */}
      {/* <div className="grid grid-cols-3 gap-2 mt-6 px-4">
        <div className="aspect-square bg-white rounded-md overflow-hidden">
          <Image src="/your-image-1.jpg" alt="img1" width={100} height={100} className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square bg-white rounded-md overflow-hidden">
          <Image src="/your-image-2.jpg" alt="img2" width={100} height={100} className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square bg-white rounded-md overflow-hidden">
          <Image src="/your-image-3.jpg" alt="img3" width={100} height={100} className="w-full h-full object-cover" />
        </div>
      </div> */}
    </div>
        </div>
             {/* Addmission Form */}
             <Apply/>
      </div>
    </div>
  );
};

export default page;
