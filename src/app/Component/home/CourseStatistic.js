import Counter from "../Utility/Counter";


const CourseStatistic = () => {
 
  return (
    <div className="relative">
      <div className="CourseStatistic"></div>
      <div className="absolute left-1/2 top-20 transform -translate-x-1/2 ">
        <h1 className="font-bold md:text-3xl text-white">Course Statitic</h1>
        <p className="lg:w-56 bg-[#ffd321] h-1 "></p>
      </div>
      <div className="absolute lg:bottom-0 md:bottom-32 left-0 w-full ">
        <div className="bg-transparent w-full h-48">
            <Counter/>
       
        </div>
      </div>
    </div>
  );
};

export default CourseStatistic;
