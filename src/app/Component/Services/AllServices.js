import cyberSecurity from "./../../../../public/cyber-security-course-outline/cyberSecurity.svg";
import network from "./../../../../public/cyber-security-course-outline/network.svg";
import linux from "./../../../../public/cyber-security-course-outline/linux.svg";
import AdvancedCourse from "./../../../../public/cyber-security-course-outline/networking.svg";
import Image from "next/image";
import Link from "next/link";
import ServiceToggle from "../Utility/ServicesCheckbox";
const courses = [
  {
    image: network,
    title: "VAPT & Pen Testing",
    link: "/services/vapt",
    description:
      "Identify, analyze, and exploit vulnerabilities across your applications, networks, or infrastructure to assess real-world risks.",
  },
  {
    image: network,
    title: "Web Application Security Testing",
    link: "/services/web-app-security-testing",
    description:
      "Secure your web platforms against OWASP Top 10 vulnerabilities and other business logic flaws.",
  },
  {
    image: network,
    title: "Mobile Application Security Testing",
    link: "/services/mobile-app-security-testing",
    description:
      "Perform security assessments of Android and iOS apps, including static and dynamic analysis.",
  },
  {
    image: network,
    title: "Network Security Assessment",
    link: "/services/network-security-assessment",
    description:
      "Evaluate internal and external network configurations for potential exploits, weak protocols, and misconfigurations.",
  },
  {
    image: network,
    title: "Cloud Security Assessment",
    link: "/services/cloud-security-assessment",
    description:
      "Audit your cloud environments (AWS, Azure, GCP) to ensure compliance, visibility, and security best practices.",
  },
  {
    image: network,
    title: "Social Media & OSINT Monitoring",
    link: "/services/osint-monitoring",
    description:
      "Detect fake profiles, impersonation, threats, and sensitive leaks through open-source intelligence.",
  },
  {
    image: network,
    title: "Red Teaming & Adversary Simulation",
    link: "/services/red-teaming",
    description:
      "Simulate real-world attacks to test your organization’s detection and response capabilities.",
  },
  {
    image: network,
    title: "Security Awareness Training",
    link: "/services/security-awareness-training",
    description:
      "Educate employees through phishing simulations, workshops, and threat understanding sessions.",
  },
  {
    image: network,
    title: "Incident Response & Forensics",
    link: "/services/incident-response-forensics",
    description:
      "React fast to cyber incidents with expert-led digital forensics and root-cause analysis.",
  },
  {
    image: network,
    title: "Endpoint Security & EDR Implementation",
    link: "/services/endpoint-security",
    description:
      "Protect workstations and servers with advanced detection, response, and endpoint hardening solutions.",
  },
  {
    image: network,
    title: "Firewall & Perimeter Security Configuration",
    link: "/services/firewall-security",
    description:
      "Set up and review firewalls, IDS/IPS, and security appliances for effective network protection.",
  },
  {
    image: network,
    title: "Dark Web Monitoring",
    link: "/services/dark-web-monitoring",
    description:
      "Detect compromised credentials, leaks, and threats emerging from the dark web ecosystem.",
  },
  {
    image: network,
    title: "Security Compliance & Policy Design",
    link: "/services/security-compliance",
    description:
      "Assist in achieving ISO 27001, GDPR, NIST, or other regulatory frameworks.",
  },
  {
    image: network,
    title: "Cybersecurity Consultancy",
    link: "/services/cybersecurity-consultancy",
    description:
      "Strategic advisory for CISOs, IT heads, or startup founders to design and improve cybersecurity infrastructure.",
  },
  {
    image: network,
    title: "Managed Security Services (MSSP)",
    link: "/services/managed-security-services",
    description:
      "Ongoing threat monitoring, detection, and mitigation with 24/7 SOC support.",
  },
];

export function AllServices() {
  return (
   
    <div>
 
 <div className="container">
      <div className="shadow-sm bg-gradient-to-r from-[#56b5e3] to-[#7d58a5] rounded-sm py-3 mb-5 mt-5">
  <h4 className=" text-[22px] md:text-[28px] font-medium text-white text-center my-4 font-poppins">
  Our Cybersecurity Services

  </h4>
  
</div>
{/* <details className="details bg-[#f0efef] rounded-md overflow-hidden">
  <summary className="summary py-5 text-white  font-semibold px-7 cursor-pointer">
    Get Services
  </summary>

  <div className="px-7 pb-6 mt-5 text-sm space-y-3 leading-relaxed">
    <div>
      <p className="font-medium text-base">Arena Web Security</p>
      <p>House No-1, BLOCK-B</p>
      <p>Banasree, Main Road Rampura</p>
      <p>Dhaka - 1219</p>
    </div>

    <div>
      <p className="font-medium">Phone</p>
      <p>+880 1310 333 444</p>
      <p>+880 1885 841 489</p>
    </div>

    <div>
      <p className="font-medium">Email</p>
      <p>
        <a
          href="mailto:info@arenawebsecurity.net"
          className="hover:underline hover:text-gray-300 transition-colors"
        >
          info@arenawebsecurity.net
        </a>
      </p>
    </div>

    <div>
      <p className="font-medium">Website</p>
      <p>
        <a
          href="https://www.arenawebsecurity.net"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-gray-300 transition-colors"
        >
          www.arenawebsecurity.net
        </a>
      </p>
    </div>
  </div>
</details> */}
<ServiceToggle/>

  <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-content-end justify-center  py-5 gap-2">
  {courses?.map((course, index) => (
        
        <div className="p-2 " key={index}>
          <div className="inline-block text-center ">
            {/* Outer Skewed Container */}
            <div className="inline-block  overflow-hidden h-[230px] w-[200px] rounded-b-[20px] rounded-md  ">
              <div className="inline-block skew-y-[13deg] h-[250px] w-[200px] rounded-[20px]  bg-[#c8c2c2] transition-all duration-300 mt-[30px] overflow-hidden
               ">
                <div className="relative  h-[250px] -ml-[30px] -mt-[30px]">
                  <Image
                    src={course.image}
                    alt="Course Image"
                    fill
                    className="-skew-y-[13deg] object-cover hover:skew-y-[-12deg]"
                  />
                </div>
              </div>
            </div>

            {/* Text Content Container */}
            <div className="px-5 pt-32 pb-10   rounded-[10px] bg-white mt-[-120px] h-full  
               shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_9px_0px_rgba(0,0,0,0.3)]">
          
              <p
                // href={course.link}
                className="text-[#0b6481] text-[16px] md:text-lg font-normal hover:text-black hover:font-medium "
              >
                {course.title}
              </p>
              <p className="text-[12px] md:text-sm font-[300] mt-2 leading-[20px]">
                {course.description}
              </p>
            </div>
          </div>
        </div>
     
    ))}

  </div>

    </div>
    </div>
  );
}
