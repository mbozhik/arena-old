
import Image from "next/image";
import Link from "next/link";
import cyberSecurity from "./../../../../public/cyber-security-course-outline/cyberSecurity.svg";
import network from "./../../../../public/cyber-security-course-outline/network.svg";
import linux from "./../../../../public/cyber-security-course-outline/linux.svg";
import AdvancedCourse from "./../../../../public/cyber-security-course-outline/networking.svg";
const courses = [
  {
    image: cyberSecurity,
    title: "Cyber Security & Ethical Hacking",
    link: "/cyber-security-ethical-hacking",
    description:
      "Whether you’re interested in landing your first IT security job, becoming a full-time white hat hacker, or preparing to test the security of your own home network, Arena Web Security offers approachable, hands-on ethical hacking courses to help you keep your networks safe from cyber criminals & make your career at professional marketplace.",
  },
  {
    image: cyberSecurity,
    title: "Advance Python With Freelancing",
    link: "/advance-python-with-django",
    description:
      "Python is a high-level, interpreted, interactive and object-oriented scripting language. Python is designed to be highly readable. It uses English keywords frequently where as other languages use punctuation, and it has fewer syntactical constructions than other languages.",
  },
  {
    image: cyberSecurity,
    title: "Cyber Security and Advance Python (Combo)",
    link: "/cyber-security-and-python-course",
    description:
      "Cybersecurity needs a programming language and today Python is very popular because of its flexibility and lightweight features. This course can help to build skills across the cyberattack world for both cyber attackers and defenders",
  },
  {
    image: AdvancedCourse,
    title: "CEHF Masterclass",
    link: "/advanced-cyber-security-course",
    description:
      "Advanced Cyber Security & Ethical Hacking is a pioneer in endpoint security, with proactive security solutions that stop advanced persistent threats in their initial stages and prevent advancement. Advanced Cyber Security & Ethical Hacking products provide the first.",
  },
  {
    image: network,
    title: "C|OSINT (Certified Open Source Intelligence)",
    link: "/cosint-course",
    description:
      "Open Source Intelligence Training™ - Syllabus and Featured Topics This course will provide an education and information you will not be able to acquire anywhere else. The class is completely interactive keeping you busy every moment and enjoying the activities. Learn to direct your searches to obtain results quickly!",
  },
  {
    image: linux,
    title: "Linux",
    link: "/linux-course",
    description:
      "The industry-leading Penetration Testing with Kali Linux (KLIN-ACS) course just got even better. This online ethical hacking course is self-paced. It introduces penetration testing tools and techniques via hands-on experience. Students who complete the course and pass the exam earn the coveted Arena Web Certified Professional certification.",
  },
  {
    image: network,
    title: "Networking Security",
    link: "/networking-course",
    description:
      "In this course, you will be able to discover security vulnerabilities across an entire network, by using network hacking techniques and vulnerability scanning. You will be able to design & construct your network for maximum security and prevent local and remote attacks. We cover one of the largest risks online, the browser. The doorway into your system.",
  },
  {
    image: network,
    title: "Additional Courses",
    link: "/networking-course",
    description:
      "In this course, you will be able to discover security vulnerabilities across an entire network, by using network hacking techniques and vulnerability scanning. You will be able to design & construct your network for maximum security and prevent local and remote attacks. We cover one of the largest risks online, the browser. The doorway into your system.",
  },
];
export function AllCourses() {
  return (
   
    <div className="container">
      <div className="shadow-sm bg-gradient-to-r from-[#56b5e3] to-[#7d58a5] rounded-sm py-3 mb-5 mt-5">
  <h4 className="text-[28px] font-medium text-white text-center my-4 font-poppins">
    All Courses
  </h4>
</div>
  <div className="grid grid-cols-4 place-content-end justify-center py-10 gap-2">
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
          
              <Link
                href={course.link}
                className="text-[#0b6481] text-lg font-normal hover:text-black hover:font-medium "
              >
                {course.title}
              </Link>
              <p className=" text-sm font-[300] mt-2 leading-[20px]">
                {course.description}
              </p>
            </div>
          </div>
        </div>
     
    ))}

  </div>

    </div>
  );
}
