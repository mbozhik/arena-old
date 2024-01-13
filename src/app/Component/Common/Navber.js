import Image from "next/image";
import '@/app/globals.css'
import Logo from "@/app/Images/Banner/Logo.png"
import Link from "next/link";
const Navber = () => {
    return (
        <div className="lg:flex navber px-10 sticky top-0">
            <article>
                <Image src={Logo} alt="Arena-Logo"/>
            </article>
            <nav className="flex justify-center items-center">
                <ul className="flex text-white  font-semibold gap-x-4">
                    <li className="hover:text-[#ffd321]"> <Link href='#'>Home</Link></li>
                    <li className="hover:text-[#ffd321]"><Link href='#'>About</Link></li>
                    <li className="hover:text-[#ffd321]"><Link href='#'>Courses</Link></li>
                    <li className="hover:text-[#ffd321]"><Link href='#'>Blog</Link></li>
                    <li className="hover:text-[#ffd321]"><Link href='#'>Services</Link></li>
                    <li className="hover:text-[#ffd321]"><Link href='#'>Gallery</Link></li>
                </ul>
            </nav>
            <article className="flex justify-center items-center">
            <ul className="flex text-white font-semibold gap-x-4">
                    <li><Link href='#' className="">  <span className="navBtn ">Apply Now</span></Link></li>
                    {/* <li><Link href='#'>Verify Student</Link></li> */}
                 
                </ul>
            </article>
            
            
        </div>
    );
};
export default Navber;