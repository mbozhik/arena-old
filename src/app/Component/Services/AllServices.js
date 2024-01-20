'use client'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";  
import { Fade } from "react-reveal";
  export function AllServices() {
    return (

        <div className="grid px-20 lg:pt-16">
            <div className="grid lg:grid-cols-4 gap-4 mt-6 ">
            <Fade bottom delay={200} distance='20%'>
                <Card
    
        className="relative grid h-[40rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
         
          
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none CyberService bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold drop-shadow-md leading-[1.5] text-[#FFA121]  transition duration-[1s] ease-in-out "
          >
            Cyber Security Consultancy
          </Typography>
          <Typography variant="paragraph" className="mb-4  text-white  font-semibold  ">
          The threats of cyber-attacks are a fact of life and a fact of business. Wipro’s Cyber security and Risk Service can help you stay ahead of the threats and put your customer’s minds at ease. We take an integrated approach to protection that prioritizes not only prevention, but also minimizing risk and controlling loss.
          </Typography>

        </CardBody>
      </Card></Fade>
      <Fade delay={200} bottom  distance='20%'>
      <Card
        
        className="relative grid h-[40rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
         
          
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none Sof bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold drop-shadow-md leading-[1.5] text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
           Software Development
          </Typography>
          <Typography variant="paragraph" className="mb-4  text-white  font-semibold  ">
          Software development services are aimed at designing, engineering, deploying, supporting, and evolving various software types. We are develops quality software services – software consulting, cloud migration, app integration, and more. We serve mid and large enterprises and software product companies across multiple industries.
          </Typography>
    
        </CardBody>
      </Card>
      </Fade>
      <Fade delay={200} bottom  distance='20%'>
      <Card
        
        className="relative grid h-[40rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
         
          
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none Net bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold leading-[1.5] text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
            Networking Security Service (NSS)
          </Typography>
          <Typography variant="paragraph" className="mb-4  text-white  font-semibold  ">
          Network Security Services (NSS) is a set of libraries designed to support cross-platform development of security-enabled client and server applications. Applications built with NSS can support SSL v3, TLS, PKCS #5, PKCS #7, PKCS #11, PKCS #12, S/MIME, X. 509 v3 certificates, and other security standards.
          </Typography>

        </CardBody>
      </Card>
      </Fade>
      <Fade delay={200} bottom  distance='20%'>
      <Card
        
        className="relative grid h-[40rem] w-full max-w-[28rem] group   items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
         
          
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none Mobile bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold leading-[1.5] text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
            Mobile App Development
          </Typography>
          <Typography variant="paragraph" className="mb-4  text-white  font-semibold  ">
          We have leading mobile app developers who always stay up-to-date with the latest technology trends to serving firms across the globe. While our analysts make qualitative and quantitative market study and well-researched forecasts for mobile app market fluctuations, our developers and designers craft stunning for our clients.
          </Typography>
      
        </CardBody>
      </Card>
      </Fade>
   
      <Fade bottom delay={200} distance='20%'>
      <Card
        
        className="relative grid h-[40rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
         
          
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none CyberService bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold leading-[1.5] text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
           Software Testing
          </Typography>
          <Typography variant="paragraph" className="mb-4  text-white  font-semibold  ">
          Web Application & Website Testing Services, Manual Testing, Test Automation, Mobile Testing, Web Testing, Desktop Testing, Security and Penetration Testing, Game Testing, Documentation, QA and Testing, DevOps. Full-cycle Independent QA and Managed testing Services for web, desktop, mobile apps, server-side systems, and devices.
          </Typography>
      
        </CardBody>
      </Card>
      </Fade>
     
      <Fade bottom delay={200} distance='20%'>
      <Card
        
        className="relative grid h-[40rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
         
          
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none CyberService bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold leading-[1.5] text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
          VAPT
          </Typography>
          <Typography variant="paragraph" className="mb-4  text-white  font-semibold  ">
          Vulnerability Assessment & Penetration Testing describes a broad range of security assessment services designed to identify & help address cyber security exposures across an organisation’s IT estate. To ensure that you choose the right type of assessment for your company’s needs, it’s important to understand the other types of VAPT services.
          </Typography>
      
        </CardBody>
      </Card>
      </Fade>
      <Fade bottom delay={200} distance='20%'>
      <Card
        
        className="relative grid h-[40rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
         
          
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none CyberService bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold leading-[1.5] text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
            Software Maintenance
          </Typography>
          <Typography variant="paragraph" className="mb-4  text-white  font-semibold  ">
          The Arena Web Security is your one stop solution for complete software and maintenance services. We ami to provided trusted source to maintain and improve your existing application. When you hire web application maintenance services, you will be assigned a cluster of professional with the vast expertise of application maintenance services.
          </Typography>
      
        </CardBody>
      </Card>
      </Fade>
      <Fade bottom delay={200} distance='20%'>
      <Card
        
        className="relative grid h-[40rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
         
          
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none CyberService bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold leading-[1.5] text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
           Ecommerce Solution
          </Typography>
          <Typography variant="paragraph" className="mb-4  text-white  font-semibold  ">
          Our Ecommerce development services cater to multi-disciplinary requirements of performance, security, scalability and usability. Our SEO experts optimize the top selling products of your store with an on-page and off-page Ecommerce SEO strategy that drives loads of organic traffic to your website.
          </Typography>
      
        </CardBody>
      </Card>
      </Fade>
      <Fade bottom delay={200} distance='20%'>
      <Card
        
        className="relative grid h-[40rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
         
          
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none CyberService bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold leading-[1.5] text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
           SEO
          </Typography>
          <Typography variant="paragraph" className="mb-4  text-white  font-semibold  ">
          SEO is not magic. Google doesn't randomly decide which website's go to the top of the search results. The algorithm adjusts rankings based on several factors. Our SEO campaigns optimize for each of those factors to show Google your website has what it's looking for.
          </Typography>
      
        </CardBody>
      </Card>
      </Fade>
      <Fade bottom delay={200} distance='20%'>
      <Card
        
        className="relative grid h-[40rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
         
          
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none CyberService bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold leading-[1.5] text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
         Digital Marketing
          </Typography>
          <Typography variant="paragraph" className="mb-4  text-white  font-semibold  ">
          We are provide Build your brand reputation across online channels, facebook marketing, email marketing, Page Boost, people engagement, Video Marketing, Promote greater consumer engagement, Leverage precise audience targeting Improve your conversion rates.
          </Typography>
      
        </CardBody>
      </Card>
      </Fade>
      <Fade bottom delay={200} distance='20%'>
      <Card
        
        className="relative grid h-[40rem] w-full max-w-[28rem] group  items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
         
          
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none CyberService bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold leading-[1.5] text-[#FFA121]  transition duration-[1s] ease-in-out"
          >
          UI/UX & Graphics Design
          </Typography>
          <Typography variant="paragraph" className="mb-4  text-white  font-semibold  ">
         We design user friendly and intuitive interfaces expected by today’s consumer using the latest UX and UI best practices. Want to build your product with a team that establishes a clear design process, meets deadlines, and delivers. Turn to Arena Web Security’s UI and UX services.
          </Typography>
      
        </CardBody>
      </Card>
      </Fade>
      </div>
      </div>
 
    );
  }