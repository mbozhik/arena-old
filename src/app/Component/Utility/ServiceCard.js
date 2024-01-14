'use client'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";  
import { Fade } from "react-reveal";
  export function ServiceCard() {
    return (

        <div className="grid">
            <div className="grid lg:grid-cols-4 gap-4 mt-6 ">
            <Fade left>
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
            className="mb-6 font-bold drop-shadow-md leading-[1.5] text-white group-hover:text-[#FFA121]  transition duration-[1s] ease-in-out "
          >
            Cyber Security Consultancy
          </Typography>
          <Typography variant="p" className="mb-4  transition  w-0 h-0 group-hover:w-full group-hover:h-auto duration-[1s] ease-in-out group-hover:text-white  overflow-hidden   font-semibold ">
          The threats of cyber-attacks are a fact of life and a fact of business. Wipro’s Cyber security and Risk Service can help you stay ahead of the threats and put your customer’s minds at ease. We take an integrated approach to protection that prioritizes not only prevention, but also minimizing risk and controlling loss.
          </Typography>

        </CardBody>
      </Card>
            </Fade>
      
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
            className="mb-6 font-bold drop-shadow-md leading-[1.5] text-white group-hover:text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
           Software Development
          </Typography>
          <Typography variant="p" className="mb-4  transition  w-0 h-0 group-hover:w-full group-hover:h-auto duration-[1s] ease-in-out group-hover:text-white  overflow-hidden   font-semibold ">
          Software development services are aimed at designing, engineering, deploying, supporting, and evolving various software types. We are develops quality software services – software consulting, cloud migration, app integration, and more. We serve mid and large enterprises and software product companies across multiple industries.
          </Typography>
    
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
            className="mb-6 font-bold leading-[1.5] text-white group-hover:text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
            Networking Security Service (NSS)
          </Typography>
          <Typography variant="p" className="mb-4  transition  w-0 h-0 group-hover:w-full group-hover:h-auto duration-[1s] ease-in-out group-hover:text-white  overflow-hidden   font-semibold ">
          Network Security Services (NSS) is a set of libraries designed to support cross-platform development of security-enabled client and server applications. Applications built with NSS can support SSL v3, TLS, PKCS #5, PKCS #7, PKCS #11, PKCS #12, S/MIME, X. 509 v3 certificates, and other security standards.
          </Typography>

        </CardBody>
      </Card>
      <Fade right>
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
            className="mb-6 font-bold leading-[1.5] text-white group-hover:text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
            Mobile App Development
          </Typography>
          <Typography variant="p" className="mb-4  transition  w-0 h-0 group-hover:w-full group-hover:h-auto duration-[1s] ease-in-out group-hover:text-white  overflow-hidden   font-semibold ">
          We have leading mobile app developers who always stay up-to-date with the latest technology trends to serving firms across the globe. While our analysts make qualitative and quantitative market study and well-researched forecasts for mobile app market fluctuations, our developers and designers craft stunning for our clients.
          </Typography>
      
        </CardBody>
      </Card>
      </Fade>
     
      </div>

      </div>
    );
  }