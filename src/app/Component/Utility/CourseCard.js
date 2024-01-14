'use client'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
import Image from "next/image";
import ceo from '@/app/Images/ceo.png'
    
  export function BackgroundBlogCard() {
    return (

        <div className="grid">
            <div className="grid lg:grid-cols-4 gap-4 mt-6 ">
      <Card
        shadow={false}
        className="relative grid h-[40rem] w-full max-w-[28rem] group  transition-all duration-350  items-end justify-center overflow-hidden text-center border-3 border-[#8444c8cc]"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none CyberCard bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/50 group-hover:via-black/80" />
        </CardHeader>
        <CardBody className=" py-14 px-6 md:px-12 absolute translate-y-96 transition-all group-hover:translate-y-0 duration-1000 ease-in-out ">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold leading-[1.5] text-white group-hover:text-[#FFA121]  transition  ease-in-out "
          >
            Cyber Security & Ethical Hacking
          </Typography>
          <Typography variant="p" className="mb-4  group-hover:w-full   text-white mt-40 group-hover:mt-0   font-semibold ">
          Whether you’re interested in landing your first IT security job, becoming a full-time white hat hacker, or preparing to test the security of your own home network, Arena Web Security offers approachable, hands-on ethical hacking courses to help you keep your networks safe from cyber criminals & make your career at professional marketplace.
          </Typography>
        
          <Typography variant="h5" className="mb-4 text-gray-400 hidden  group-hover:block">
          Tanjim AL Fahim
          </Typography>
          <Image

            src={ceo}
            alt="Tanjim AL Fahim"
            className="border-2 border-white h-16 w-16 rounded-full justify-center mx-auto hidden  group-hover:block"
          
          />
        </CardBody>
      </Card>
      <Card
        shadow={false}
        className="relative grid h-[40rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none PythonCard bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/90 from-black/80 via-black/50 group-hover:via-black/80" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold leading-[1.5] text-white group-hover:text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
           Advanced Python With Freelancing
          </Typography>
          <Typography variant="p" className="mb-4  transition  w-0 h-0 group-hover:w-full group-hover:h-auto duration-[1s] ease-in-out group-hover:text-white  overflow-hidden font-semibold  ">
          Python is a high-level, interpreted, interactive and object-oriented scripting language. Python is designed to be highly readable. It uses English keywords frequently where as other languages use punctuation, and it has fewer syntactical constructions than other languages.
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
          Tanjim AL Fahim
          </Typography>
          <Image

            src={ceo}
            alt="Tanjim AL Fahim"
            className="border-2 border-white h-16 w-16 rounded-full justify-center mx-auto"
          
          />
        </CardBody>
      </Card>
      <Card
        shadow={false}
        className="relative grid h-[40rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none Combo bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/90 from-black/80 via-black/50 group-hover:via-black/80" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold leading-[1.5] text-white group-hover:text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
            Cyber Security and Advance Python (Combo)
          </Typography>
          <Typography variant="p" className="mb-4  transition  w-0 h-0 group-hover:w-full group-hover:h-auto duration-[1s] ease-in-out group-hover:text-white  overflow-hidden font-semibold  ">
          Cybersecurity needs a programming language and today Python is very popular because of its flexibility and lightweight features. This course can help to build skills across the cyberattack world for both cyber attackers and defenders.
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
          Tanjim AL Fahim
          </Typography>
          <Image

            src={ceo}
            alt="Tanjim AL Fahim"
            className="border-2 border-white h-16 w-16 rounded-full justify-center mx-auto"
          
          />
        </CardBody>
      </Card>
      <Card
        shadow={false}
        className="relative grid h-[40rem] w-full max-w-[28rem] group   items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none Master bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/90 from-black/80 via-black/50 group-hover:via-black/80" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold leading-[1.5] text-white group-hover:text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
            CEHF Masterclass
          </Typography>
          <Typography variant="p" className="mb-4  transition  w-0 h-0 group-hover:w-full group-hover:h-auto duration-[1s] ease-in-out group-hover:text-white  overflow-hidden font-semibold  ">
          Advanced Cyber Security & Ethical Hacking is a pioneer in endpoint security, with proactive security solutions that stop advanced persistent threats in their initial stages and prevent advancement. Advanced Cyber Security & Ethical Hacking products provide the first.
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
          Tanjim AL Fahim
          </Typography>
          <Image

            src={ceo}
            alt="Tanjim AL Fahim"
            className="border-2 border-white h-16 w-16 rounded-full justify-center mx-auto"
          
          />
        </CardBody>
      </Card>
      </div>
      {/* <div className="flex justify-center items-center mx-auto mt-4">
      <div className=" grid grid-cols-3  lg:col-span-3 gap-4 lg:col-start-2 ">
      <Card
        shadow={false}
        className="relative grid h-[40rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none Int bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/90 from-black/80 via-black/50 group-hover:via-black/80" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold leading-[1.5] text-white group-hover:text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
           C|OSINT (Certified Open Source Intelligence)
          </Typography>
          <Typography variant="p" className="mb-4  transition  w-0 h-0 group-hover:w-full group-hover:h-auto duration-[1s] ease-in-out group-hover:text-white  overflow-hidden font-semibold  ">
          Open Source Intelligence Training™ - Syllabus and Featured Topics This course will provide an education and information you will not be able to acquire anywhere else. The class is completely interactive keeping you busy every moment and enjoying the activities. Learn to direct your searches to obtain results quickly!
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
          Tanjim AL Fahim
          </Typography>
          <Image

            src={ceo}
            alt="Tanjim AL Fahim"
            className="border-2 border-white h-16 w-16 rounded-full justify-center mx-auto"
          
          />
        </CardBody>
      </Card>
      <Card
        shadow={false}
        className="relative grid h-[40rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none Linax bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/90 from-black/80 via-black/50 group-hover:via-black/80" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold leading-[1.5] text-white group-hover:text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
           Linux
          </Typography>
          <Typography variant="p" className="mb-4  transition  w-0 h-0 group-hover:w-full group-hover:h-auto duration-[1s] ease-in-out group-hover:text-white  overflow-hidden font-semibold  ">
          The industry-leading Penetration Testing with Kali Linux (KLIN-ACS) course just got even better. This online ethical hacking course is self-paced. It introduces penetration testing tools and techniques via hands-on experience. Students who complete the course and pass the exam earn the coveted Arena Web Certified Professional certification.
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
          Tanjim AL Fahim
          </Typography>
          <Image

            src={ceo}
            alt="Tanjim AL Fahim"
            className="border-2 border-white h-16 w-16 rounded-full justify-center mx-auto"
          
          />
        </CardBody>
      </Card>
      <Card
        shadow={false}
        className="relative grid h-[40rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none network bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/90 from-black/80 via-black/50 group-hover:via-black/80" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold leading-[1.5] text-white group-hover:text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
            Networking Security
          </Typography>
          <Typography variant="p" className="mb-4  transition  w-0 h-0 group-hover:w-full group-hover:h-auto duration-[1s] ease-in-out group-hover:text-white  overflow-hidden font-semibold  ">
          In this course, you will be able to discover security vulnerabilities across an entire network, by using network hacking techniques and vulnerability scanning. You will be able to design & construct your network for maximum security and prevent local and remote attacks. We cover one of the largest risks online, the browser. The doorway into your system.
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
          Tanjim AL Fahim
          </Typography>
          <Image

            src={ceo}
            alt="Tanjim AL Fahim"
            className="border-2 border-white h-16 w-16 rounded-full justify-center mx-auto"
          
          />
        </CardBody>
      </Card>
      </div>
      </div> */}
      </div>
    );
  }