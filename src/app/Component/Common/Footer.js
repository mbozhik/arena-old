import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaGlobe,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  const courses = [
    { name: "Cyber Security", href: "/cyber-security-ethical-hacking" },
    {
      name: "Advanced Cyber Security",
      href: "/advanced-cyber-security-course",
    },
    { name: "Advanced Python", href: "/advance-python-with-django" },
    { name: "C|OSINT", href: "/cosint-course" },
    { name: "Linux", href: "/linux-course" },
    { name: "Networking Security", href: "/networking-course" },
  ];
  const links = [
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    // { name: "Career", href: "/career" }, // Add route if needed
    { name: "Blog", href: "https://www.hackers.institute/" }, // External link
    { name: "Service", href: "/all-services" },
    { name: "Gallery", href: "/arena-gallery" },
    { name: "Privacy Policy", href: "/privacy" },
  ];
  return (
    <footer className="bg-[#26272b] text-[#8d8d8d]   pt-12 pb-8 text-sm leading-6 ">
      <div className=" container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 border-b border-gray-500/50 pb-8 leading-4 lg:leading-normal">
        {/* Address */}
        <div>
          <h3 className="text-white text-[24px] font-normal mb-4">Address</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <FaLocationDot className="mt-1 text-[#715296] text-[16px]" />
              <span className="text-[16px] leading-[22px] font-[300] text-[#8d8d8d]">
                House No-1, BLOCK-B
                <br />
                Banasree, Main Road Rampura,
                <br />
                Dhaka - 1219
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaMobileAlt className="mt-1 text-[#715296] text-[16px]" />
              <span className="text-[16px] leading-[22px] font-[300] text-[#8d8d8d]">
                +880 1310 333 444,
                <br />
                +880 1885 841 489
              </span>
            </li>
            <li className="flex items-center gap-2 ">
              <IoMail className="text-[#715296] text-[16px] mt-1" />
              <p className="text-[16px] leading-[22px] font-[300] text-[#8d8d8d]">
                info@arenawebsecurity.net
              </p>
            </li>

            <li className="flex items-center gap-2">
              <FaGlobe className="mt-1 text-[#715296] text-[16px]" />
              <span className="text-[16px] leading-[22px] font-[300] text-[#8d8d8d]">
                www.arenawebsecurity.net
              </span>
            </li>
          </ul>
          {/* <h3 className="text-white text-lg font-medium mb-4 mt-16 md:block xl:hidden">
            Technologies
          </h3>
          <ul className="space-y-2 text-[16px] leading-[22px] font-[300] text-[#8d8d8d] md:block xl:hidden">
            {[
              "React, Vue Js, jQuery",
              "Python, Node.js, Php",
              "SQL, MySQL, FireBase, SQLite",
              "Java, Dart, Flutter",
              "UI/UX",
            ].map((tech) => (
              <li
                key={tech}
                className="flex items-center gap-2 hover:text-[#29aafe] transition"
              >
                <FaArrowRight className=" text-[#715296] text-[16px]" />
                {tech}
              </li>
            ))}
          </ul> */}
        </div>

        {/* Information */}
        <div className="md:hidden xl:block">
          <h3 className="text-white text-lg font-medium mb-4">Information</h3>
          <ul className="space-y-2 text-[16px] leading-[22px] font-[300] text-[#8d8d8d]">
            {links.map(({ name, href }) => (
              <li
                key={name}
                className="flex items-center gap-2 hover:text-[#29aafe] transition"
              >
                <FaArrowRight className="text-[#715296] text-[16px]" />
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Courses */}
        <div>
          <div className="md:block xl:hidden">
            <h3 className="text-white text-lg font-medium mb-4">Information</h3>
            <ul className="space-y-2 text-[16px] leading-[22px] font-[300] text-[#8d8d8d]">
              {links.map(({ name, href }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 hover:text-[#29aafe] transition"
                >
                  <FaArrowRight className="text-[#715296] text-[16px]" />
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <h3 className="text-white text-lg font-medium mb-4 md:mt-6 xl:mt-0">
            Our Courses
          </h3>

          <ul className="space-y-2 text-[16px] leading-[22px] font-[300] text-[#8d8d8d]">
            {courses.map(({ name, href }) => (
              <li
                key={name}
                className="flex items-center gap-2 hover:text-[#29aafe] transition"
              >
                <FaArrowRight className="text-[#715296] text-[16px]" />
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>

          {/* <h3 className="text-white text-lg font-medium mb-4 mt-10 md:hidden xl:block">
            Technologies
          </h3>
          <ul className="space-y-2 text-[16px] leading-[22px] font-[300] text-[#8d8d8d] md:hidden xl:block">
            {[
              "React, Vue Js, jQuery",
              "Python, Node.js, Php",
              "SQL, MySQL, FireBase, SQLite",
              "Java, Dart, Flutter",
              "UI/UX",
            ].map((tech) => (
              <li
                key={tech}
                className="flex items-center gap-2 hover:text-[#29aafe] transition"
              >
                <FaArrowRight className=" text-[#715296] text-[16px]" />
                {tech}
              </li>
            ))}
          </ul> */}
        </div>

        {/* Developers */}
        <div>
          <h3 className="text-white text-lg font-medium mb-4">Our Services</h3>
          <ul className="space-y-2 text-[16px] leading-[22px] font-[300] text-[#8d8d8d]">
            {[
              "VAPT & Pen Testing",
              "Web Application Security Testing",
              "Mobile Application Security Testing",
              "Network Security Assessment",
              "Cloud Security Assessment",
              // "Social Media & OSINT Monitoring",
              // "Red Teaming & Adversary Simulation",
              // "Security Awareness Training",
              // "Incident Response & Forensics",
              // "Endpoint Security & EDR Implementation",
              // "Firewall & Perimeter Security Configuration",
              // "Dark Web Monitoring",
              // "Cybersecurity Consultancy",
              // "Managed Security Services (MSSP)",
              // "Security Compliance & Policy Design",
            ].map((dev) => (
              <li
                key={dev}
                className="flex items-center gap-2 hover:text-[#29aafe] transition"
              >
                <FaArrowRight className=" text-[#715296] text-[16px]" />
                <a href='/all-services'>{dev}</a>

              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 container">
        <p className="text-[15px] text-center md:text-left">
          Copyright © 2025 All Rights Reserved by

          <span className="text-[#29aafe]"> Arena Web Security</span>.
        </p>
        <div className="flex gap-3 mt-4 md:mt-0">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#33353d] text-[#885cbe] hover:bg-[#3b5998] transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#33353d] text-[#885cbe] hover:bg-[#007bb6] transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#33353d] text-[#885cbe] hover:bg-[#007bb6]  transition"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
