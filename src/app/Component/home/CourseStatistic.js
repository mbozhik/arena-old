import Counter from "../Utility/Counter";


const CourseStatistic = () => {
 
  return (
    <div className="relative container pt-20">
      {/* <div className="CourseStatistic"></div> */}
      <div className="text-center ">
        <h1 className="font-bold md:text-3xl text-[#0b6481]">Course Statitic</h1>
        {/* <p className="lg:w-56 bg-[#ffd321] h-1 "></p> */}
        <p className="sectionSubTitle text-sm pb-28">Statstic measures the whole progressing report which is organised by Arena Web Security.</p>
      </div>
    
      <div className="">
        <div className="bg-transparent w-full h-48">
            <Counter/>
       
        </div>
      </div>
    </div>
  );
};

export default CourseStatistic;
