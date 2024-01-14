import Link from "next/link";
import { BackgroundBlogCard } from "../Utility/CourseCard";

const Courses = () => {
    return (
        <div className="px-20 lg:pt-16 ">
            <header className="flex justify-between">
                <div className="relative">
                <h2 className="lg:text-3xl lg:font-bold">Our Courses</h2>
                <p className="lg:w-42 bg-[#ffd321] h-[3px] "></p>
        
                </div>
                <Link href='/Courses'>
                <button className="uppercase border border-blue-600 hover:border-[#ffd321] text-1xl
                 font-semibold px-8 py-2 rounded-full hover:bg-[#76599E] transition hover:text-white duration-300">View All Courses</button></Link>
                
            </header>
            <div className="course_div">
                <article>
                    <BackgroundBlogCard/>
                    
                </article>
                

            </div>
        </div>
    );
};

export default Courses;