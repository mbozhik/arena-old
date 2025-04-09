import Counter from "../Utility/Counter";


const CourseStatistic = () => {
 
  return (
    <div className="relative">
      <div className="CourseStatistic"></div>
      <div className="absolute left-1/2 top-20 transform -translate-x-1/2 text-center  ">
        <h1 className="font-bold md:text-3xl text-[#0b6481]">Course Statitic</h1>
        {/* <p className="lg:w-56 bg-[#ffd321] h-1 "></p> */}
        <p className="sectionSubTitle">Statstic measures the whole progressing report which is organised by Arena Web Security.</p>
      </div>
    
      <div className="absolute lg:bottom-0 bottom-20 md:bottom-32  left-0 w-full ">
        <div className="bg-transparent w-full h-48">
            <Counter/>
       
        </div>
      </div>
    </div>
  );
};

export default CourseStatistic;
