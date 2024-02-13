import Link from "next/link";
import { BackgroundBlogCard } from "../Utility/CourseCard";

const Courses = () => {
    return (
        <div className="2xl:px-20 xl:px-10 md:px-5 pt-8 lg:pt-16 px-6 ">
            <header className="flex justify-between">
                <div className="relative">
                <h2 className="lg:text-3xl md:text-2xl text-[20px] font-bold">Our Courses</h2>
                <p className="lg:w-42 bg-[#ffd321] h-[3px] "></p>
        
                </div>
                <Link href='/courses'>
                <button className="uppercase border border-blue-600 hover:border-[#ffd321] md:text-1xl text-[14px]
                 font-semibold md:px-8 py-2 px-4 rounded-full hover:bg-[#76599E] transition hover:text-white duration-300">View All Courses</button></Link>
                
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