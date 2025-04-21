import Counter from "../Utility/Counter";


const CourseStatistic = () => {
 
  return (
    <div className="relative container  pt-10">
      {/* <div className="CourseStatistic"></div> */}
      <div className="text-center bg-white ">
      <h5 className="text-center md:text-[24px] xl:text-[26px] font-bold text-[#0b6481]  mb-2"> 
      Company Statistics
      </h5>
        {/* <h1 className="font-bold md:text-3xl text-[#0b6481]"></h1> */}
        {/* <p className="lg:w-56 bg-[#ffd321] h-1 "></p> */}
        <h6 className="text-center text-gray-600 md:text-sm  mb-10 text-[10px]">Statstic measures the whole progressing report which is organised by Arena Web Security.</h6>
   
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
