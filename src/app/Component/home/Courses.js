import { BackgroundBlogCard } from "./CourseCard";

const Courses = () => {
    return (
        <div className="px-20 lg:pt-16 ">
            <header className="flex justify-between">
                <h2 className="lg:text-3xl lg:font-bold">Our Courses</h2>
                <button className="uppercase border border-blue-600 text-1xl font-semibold px-8 py-2 rounded-full">View All Courses</button>
            </header>
            <div className="course_div">
                <article>
                    <BackgroundBlogCard/>
                    
                </article>
                <article></article>
                <article></article>
                <article></article>
                <article></article>
                <article></article>

            </div>
        </div>
    );
};

export default Courses;