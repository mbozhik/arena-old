"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
// import config from 'react-reveal/globals';
// config({ ssrFadeout: true });
// import { Fade } from "react-reveal";
import { Fade } from "react-awesome-reveal";
export function ServiceCard() {
  return (
    <div className="grid">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-6 ">
        <Fade direction="left">
          <Card className="relative grid 2xl:h-[40rem]  md:h-[35rem] h-[26rem] w-full max-w-[28rem] group  transition-all duration-350  items-end justify-center overflow-hidden text-center border-3 border-[#8444c8cc]">
            <CardHeader
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none CyberService bg-cover bg-center"
            >
              <div
                className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100"
              />
            </CardHeader>
            <CardBody className=" 2xl:py-14 2xl:px-3 xl:px-2  absolute  xl:translate-y-60 2xl:translate-y-52 transition-all group-hover:translate-y-0 duration-700 ease-in-out ">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-bold leading-[1.5] text-white  2xl:text-3xl text-2xl   "
              >
                Cyber Security Consultancy
              </Typography>
              <Typography
                variant="paragraph"
                className="mb-4  group-hover:w-full     lg:opacity-0 group-hover:opacity-100 text-white   font-semibold transition-all duration-700 ease-in-out "
              >
                The threats of cyber-attacks are a fact of life and a fact of
                business. Wipro’s Cyber security and Risk Service can help you
                stay ahead of the threats and put your customer’s minds at ease.
                We take an integrated approach to protection that prioritizes
                not only prevention, but also minimizing risk and controlling
                loss.
              </Typography>
            </CardBody>
          </Card>
        </Fade>
        <Card className="relative grid 2xl:h-[40rem]  md:h-[35rem] h-[26rem] w-full max-w-[28rem] group  transition-all duration-350  items-end justify-center overflow-hidden text-center border-3 border-[#8444c8cc]">
          <CardHeader
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none Sof bg-cover bg-center"
          >
            <div
              className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100"
            />
          </CardHeader>
          <CardBody className="2xl:py-14 2xl:px-3 xl:px-2  absolute  xl:translate-y-60 2xl:translate-y-52 transition-all group-hover:translate-y-0 duration-700 ease-in-out ">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-bold leading-[1.5] text-white 2xl:text-3xl text-2xl    "
            >
              Software Development
            </Typography>
            <Typography
              variant="paragraph"
              className="mb-4  group-hover:w-full     lg:opacity-0 group-hover:opacity-100 text-white   font-semibold transition-all duration-700 ease-in-out"
            >
              Software development services are aimed at designing, engineering,
              deploying, supporting, and evolving various software types. We are
              develops quality software services – software consulting, cloud
              migration, app integration, and more. We serve mid and large
              enterprises and software product companies across multiple
              industries.
            </Typography>
          </CardBody>
        </Card>

        <Card className="relative grid 2xl:h-[40rem]  h-[35rem]w-full max-w-[28rem] group  transition-all duration-350  items-end justify-center overflow-hidden text-center border-3 border-[#8444c8cc]">
          <CardHeader
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none Net bg-cover bg-center"
          >
            <div
              className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100"
            />
          </CardHeader>
          <CardBody className=" 2xl:py-14 2xl:px-3 xl:px-2  absolute  xl:translate-y-60 2xl:translate-y-52 transition-all group-hover:translate-y-0 duration-700 ease-in-out ">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-bold leading-[1.5] text-white  2xl:text-3xl text-2xl   "
            >
              Networking Security Service
            </Typography>
            <Typography
              variant="paragraph"
              className="mb-4  group-hover:w-full     lg:opacity-0 group-hover:opacity-100 text-white   font-semibold transition-all duration-700 ease-in-out "
            >
              Network Security Services (NSS) is a set of libraries designed to
              support cross-platform development of security-enabled client and
              server applications. Applications built with NSS can support SSL
              v3, TLS, PKCS #5, PKCS #7, PKCS #11, PKCS #12, S/MIME, X. 509 v3
              certificates, and other security standards.
            </Typography>
          </CardBody>
        </Card>

        <Fade direction="right" duration={1000}>
          <Card className="relative grid 2xl:h-[40rem]  md:h-[35rem] h-[26rem] w-full max-w-[28rem] group  transition-all duration-350  items-end justify-center overflow-hidden text-center border-3 border-[#8444c8cc]">
            <CardHeader
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none Mobile bg-cover bg-center"
            >
              <div
                className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100"
              />
            </CardHeader>
            <CardBody className="2xl:py-14 2xl:px-3 xl:px-2  absolute  xl:translate-y-60 2xl:translate-y-56 transition-all group-hover:translate-y-0 duration-700 ease-in-out  ">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-bold leading-[1.5] text-white  2xl:text-3xl text-2xl   "
              >
                Mobile App Development
              </Typography>
              <Typography
                variant="paragraph"
                className=" mb-4  group-hover:w-full     lg:opacity-0 group-hover:opacity-100 text-white   font-semibold transition-all duration-700 ease-in-out"
              >
                We have leading mobile app developers who always stay up-to-date
                with the latest technology trends to serving firms across the
                globe. While our analysts make qualitative and quantitative
                market study and well-researched forecasts for mobile app market
                fluctuations, our developers and designers craft stunning for
                our clients.
              </Typography>
            </CardBody>
          </Card>
        </Fade>
      </div>
    </div>
  );
}
