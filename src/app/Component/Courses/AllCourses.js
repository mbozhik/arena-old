"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import Image from "next/image";
import ceo from "@/app/Images/ceo.png";
import { Fade } from "react-reveal";
import Link from "next/link";

export function AllCourses() {
  return (
    <div className="grid lg:px-20 md:px-5 px-3 lg:pt-16">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-6 ">
        <Fade bottom delay={200} distance="20%">
          <Link href='/cybersecurity'>
          <Card className="relative grid lg:h-[40rem] h-[35rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center">
            <CardHeader
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none CyberCard bg-cover bg-center"
            >
              <div
                className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100"
              />
            </CardHeader>
            <CardBody className="relative py-14 px-6 ">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-bold leading-[1.5] text-[#FFA121]  transition duration-[1s] ease-in-out 2xl:text-3xl text-2xl "
              >
                Cyber Security & Ethical Hacking
              </Typography>
              <Typography
                variant="paragraph"
                className="mb-4 text-white  font-semibold "
              >
                Whether you’re interested in landing your first IT security job,
                becoming a full-time white hat hacker, or preparing to test the
                security of your own home network, Arena Web Security offers
                approachable, hands-on ethical hacking courses to help you keep
                your networks safe from cyber criminals & make your career at
                professional marketplace.
              </Typography>

             
            </CardBody>
          </Card>
          </Link>
        </Fade>
        <Fade bottom delay={200} distance="20%">
        <Link href='/python'>
          <Card className="relative grid lg:h-[40rem] h-[35rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center">
            <CardHeader
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none PythonCard bg-cover bg-center"
            >
              <div
                className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100"
              />
            </CardHeader>
            <CardBody className="relative py-14 px-6 ">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-bold leading-[1.5] text-[#FFA121]  transition duration-[1s] ease-in-out 2xl:text-3xl text-2xl"
              >
                Advanced Python With Freelancing
              </Typography>
              <Typography
                variant="paragraph"
                className="mb-4 text-white  font-semibold "
              >
                Python is a high-level, interpreted, interactive and
                object-oriented scripting language. Python is designed to be
                highly readable. It uses English keywords frequently where as
                other languages use punctuation, and it has fewer syntactical
                constructions than other languages.
              </Typography>
             
            </CardBody>
          </Card>
          </Link>
        </Fade>

        <Fade bottom delay={200} distance="20%">
        <Link href='/combo'>
          <Card className="relative grid lg:h-[40rem] h-[35rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center">
            <CardHeader
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none Combo bg-cover bg-center"
            >
              <div
                className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100"
              />
            </CardHeader>
            <CardBody className="relative py-14 px-6 ">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-bold leading-[1.5] text-[#FFA121]  transition duration-[1s] ease-in-out 2xl:text-3xl text-2xl"
              >
                Cyber Security and Advance Python (Combo)
              </Typography>
              <Typography
                variant="paragraph"
                className="mb-4 text-white  font-semibold "
              >
                Cybersecurity needs a programming language and today Python is
                very popular because of its flexibility and lightweight
                features. This course can help to build skills across the
                cyberattack world for both cyber attackers and defenders.
              </Typography>
             
            </CardBody>
          </Card>
          </Link>
        </Fade>
        <Fade bottom delay={200} distance="20%">
        <Link href='/cehf'>
          <Card className="relative grid lg:h-[40rem] h-[35rem] w-full max-w-[28rem] group   items-end justify-center overflow-hidden text-center">
            <CardHeader
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none Master bg-cover bg-center"
            >
              <div
                className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100"
              />
            </CardHeader>
            <CardBody className="relative py-14 px-6 ">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-bold leading-[1.5] text-[#FFA121]  transition duration-[1s] ease-in-out 2xl:text-3xl text-2xl"
              >
                CEHF Masterclass
              </Typography>
              <Typography
                variant="paragraph"
                className="mb-4 text-white  font-semibold "
              >
                Advanced Cyber Security & Ethical Hacking is a pioneer in
                endpoint security, with proactive security solutions that stop
                advanced persistent threats in their initial stages and prevent
                advancement. Advanced Cyber Security & Ethical Hacking products
                provide the first.
              </Typography>
             
            </CardBody>
          </Card>
          </Link>
        </Fade>
      </div>
      <div className="flex justify-center items-center mx-auto mt-4">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2  lg:col-span-3 gap-4 lg:col-start-2 ">
          <Fade bottom delay={200} distance="20%">
          <Link href='/cosint'>
            <Card className="relative grid lg:h-[40rem] h-[35rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center">
              <CardHeader
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none Int bg-cover bg-center"
              >
                <div
                  className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100"
                />
              </CardHeader>
              <CardBody className="relative py-14 px-6 ">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-6 font-bold leading-[1.5] text-[#FFA121]  transition duration-[1s] ease-in-out 2xl:text-3xl text-2xl"
                >
                  C|OSINT (Certified Open Source Intelligence)
                </Typography>
                <Typography
                  variant="paragraph"
                  className="mb-4 text-white  font-semibold "
                >
                  Open Source Intelligence Training™ - Syllabus and Featured
                  Topics This course will provide an education and information
                  you will not be able to acquire anywhere else. The class is
                  completely interactive keeping you busy every moment and
                  enjoying the activities. Learn to direct your searches to
                  obtain results quickly!
                </Typography>
               
              </CardBody>
            </Card>
            </Link>
          </Fade>
          <Fade bottom delay={200} distance="20%">
          <Link href='/linux'>
            <Card className="relative grid lg:h-[40rem] h-[35rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center">
              <CardHeader
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none Linax bg-cover bg-center"
              >
                <div
                  className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100"
                />
              </CardHeader>
              <CardBody className="relative py-14 px-6 ">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-6 font-bold leading-[1.5] text-[#FFA121]  transition duration-[1s] ease-in-out 2xl:text-3xl text-2xl"
                >
                  Linux
                </Typography>
                <Typography
                  variant="paragraph"
                  className="mb-4 text-white  font-semibold "
                >
                  The industry-leading Penetration Testing with Kali Linux
                  (KLIN-ACS) course just got even better. This online ethical
                  hacking course is self-paced. It introduces penetration
                  testing tools and techniques via hands-on experience. Students
                  who complete the course and pass the exam earn the coveted
                  Arena Web Certified Professional certification.
                </Typography>
            
              </CardBody>
            </Card>
            </Link>
          </Fade>
          <Fade bottom delay={200} distance="20%">
          <Link href='/network'>
            <Card className="relative grid lg:h-[40rem] h-[35rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center">
              <CardHeader
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none network bg-cover bg-center"
              >
                <div
                  className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100"
                />
              </CardHeader>
              <CardBody className="relative py-14 px-6 ">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-6 font-bold leading-[1.5] text-[#FFA121]  transition duration-[1s] ease-in-out 2xl:text-3xl text-2xl"
                >
                  Networking Security
                </Typography>
                <Typography
                  variant="paragraph"
                  className="mb-4 text-white  font-semibold "
                >
                  In this course, you will be able to discover security
                  vulnerabilities across an entire network, by using network
                  hacking techniques and vulnerability scanning. You will be
                  able to design & construct your network for maximum security
                  and prevent local and remote attacks. We cover one of the
                  largest risks online, the browser. The doorway into your
                  system.
                </Typography>
             
              </CardBody>
            </Card>
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
}
