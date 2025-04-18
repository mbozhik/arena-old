import Counter from "../Utility/Counter";


const CourseStatistic = () => {
 
  return (
    <div className="relative container xl:pt-20 pt-10">
      {/* <div className="CourseStatistic"></div> */}
      <div className="text-center ">
        <h1 className="font-bold md:text-3xl text-[#0b6481]">Company Statitic</h1>
        {/* <p className="lg:w-56 bg-[#ffd321] h-1 "></p> */}
        <p className="sectionSubTitle text-[10px] md:text-sm md:pb-10 pb-16">Statstic measures the whole progressing report which is organised by Arena Web Security.</p>
      </div>
    
      <div className="">
        <div className="bg-transparent w-full h-auto">
            <Counter/>
       
        </div>
      </div>
    </div>
  );
};

export default CourseStatistic;
