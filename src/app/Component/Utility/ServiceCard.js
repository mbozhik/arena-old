'use client'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";  
  export function ServiceCard() {
    return (

        <div className="grid">
            <div className="grid lg:grid-cols-4 gap-4 mt-6 ">
      <Card
        shadow={false}
        className="relative grid h-[40rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none CyberService bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/90 from-black/80 via-black/50 group-hover:via-black/80" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium drop-shadow-md leading-[1.5] text-white group-hover:text-[#FFA121]  transition duration-[1s] ease-in-out "
          >
            Cyber Security Consultancy
          </Typography>
          <Typography variant="p" className="mb-4  transition  w-0 h-0 group-hover:w-full group-hover:h-auto duration-[1s] ease-in-out group-hover:text-white  overflow-hidden   ">
          The threats of cyber-attacks are a fact of life and a fact of business. Wipro’s Cyber security and Risk Service can help you stay ahead of the threats and put your customer’s minds at ease. We take an integrated approach to protection that prioritizes not only prevention, but also minimizing risk and controlling loss.
          </Typography>

          {/* <Typography variant="h5" className="mb-4 text-gray-400">
          Tanjim AL Fahim
          </Typography>
          <Image

            src={ceo}
            alt="Tanjim AL Fahim"
            className="border-2 border-white h-16 w-16 rounded-full justify-center mx-auto"
          
          /> */}
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
          className="absolute inset-0 m-0 h-full w-full rounded-none Sof bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/90 from-black/80 via-black/50 group-hover:via-black/80" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium drop-shadow-md leading-[1.5] text-white group-hover:text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
           Software Development
          </Typography>
          <Typography variant="p" className="mb-4  transition  w-0 h-0 group-hover:w-full group-hover:h-auto duration-[1s] ease-in-out group-hover:text-white  overflow-hidden   ">
          Software development services are aimed at designing, engineering, deploying, supporting, and evolving various software types. We are develops quality software services – software consulting, cloud migration, app integration, and more. We serve mid and large enterprises and software product companies across multiple industries.
          </Typography>
          {/* <Typography variant="h5" className="mb-4 text-gray-400">
          Tanjim AL Fahim
          </Typography>
          <Image

            src={ceo}
            alt="Tanjim AL Fahim"
            className="border-2 border-white h-16 w-16 rounded-full justify-center mx-auto"
          
          /> */}
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
          className="absolute inset-0 m-0 h-full w-full rounded-none Net bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/90 from-black/80 via-black/50 group-hover:via-black/80" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5] text-white group-hover:text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
            Networking Security Service (NSS)
          </Typography>
          <Typography variant="p" className="mb-4  transition  w-0 h-0 group-hover:w-full group-hover:h-auto duration-[1s] ease-in-out group-hover:text-white  overflow-hidden   ">
          Network Security Services (NSS) is a set of libraries designed to support cross-platform development of security-enabled client and server applications. Applications built with NSS can support SSL v3, TLS, PKCS #5, PKCS #7, PKCS #11, PKCS #12, S/MIME, X. 509 v3 certificates, and other security standards.
          </Typography>
          {/* <Typography variant="h5" className="mb-4 text-gray-400">
          Tanjim AL Fahim
          </Typography>
          <Image

            src={ceo}
            alt="Tanjim AL Fahim"
            className="border-2 border-white h-16 w-16 rounded-full justify-center mx-auto"
          
          /> */}
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
          className="absolute inset-0 m-0 h-full w-full rounded-none Mobile bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/90 from-black/80 via-black/50 group-hover:via-black/80" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5] text-white group-hover:text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
            Mobile App Development
          </Typography>
          <Typography variant="p" className="mb-4  transition  w-0 h-0 group-hover:w-full group-hover:h-auto duration-[1s] ease-in-out group-hover:text-white  overflow-hidden   ">
          We have leading mobile app developers who always stay up-to-date with the latest technology trends to serving firms across the globe. While our analysts make qualitative and quantitative market study and well-researched forecasts for mobile app market fluctuations, our developers and designers craft stunning for our clients.
          </Typography>
          {/* <Typography variant="h5" className="mb-4 text-gray-400">
          Tanjim AL Fahim
          </Typography>
          <Image

            src={ceo}
            alt="Tanjim AL Fahim"
            className="border-2 border-white h-16 w-16 rounded-full justify-center mx-auto"
          
          /> */}
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
            className="mb-6 font-medium leading-[1.5] text-white group-hover:text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
           C|OSINT (Certified Open Source Intelligence)
          </Typography>
          <Typography variant="p" className="mb-4  transition  w-0 h-0 group-hover:w-full group-hover:h-auto duration-[1s] ease-in-out group-hover:text-white  overflow-hidden   ">
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
            className="mb-6 font-medium leading-[1.5] text-white group-hover:text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
           Linux
          </Typography>
          <Typography variant="p" className="mb-4  transition  w-0 h-0 group-hover:w-full group-hover:h-auto duration-[1s] ease-in-out group-hover:text-white  overflow-hidden   ">
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
            className="mb-6 font-medium leading-[1.5] text-white group-hover:text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
            Networking Security
          </Typography>
          <Typography variant="p" className="mb-4  transition  w-0 h-0 group-hover:w-full group-hover:h-auto duration-[1s] ease-in-out group-hover:text-white  overflow-hidden   ">
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