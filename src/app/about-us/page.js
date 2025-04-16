// import ABoutH1 from "../Component/Utility/ABoutH1";
import Pdf from "../../../public/Pdf";
import CourseStatistic from "../Component/home/CourseStatistic";
import OurConcern from "../Component/home/OurConcern";

const page = () => {
  return (
    <div className="h-auto container ">
      <div className="shadow-sm bg-gradient-to-r from-[#56b5e3] to-[#7d58a5] rounded-sm py-3 mb-5 mt-5">
        <h4 className="text-[28px] font-medium text-white text-center my-4 font-poppins">
          About AWS
        </h4>
      </div>
      <div className="bg-[#F5F5F5] pt-16 pb-24 px-8 text-[16px] leading-6">
        <p>
          Arena Web Security is a sister concern of Arena Web Technology. Arena
          Web Security is a renowned IT security company in Bangladesh since its
          establishment in 2012. During these years, Arena Web Security has
          provided Cyber Security Services and Trainings to many around the
          world.
        </p>
        <p className="mt-5">
          Involved with Government entities in 2012 like ICT Ministry, Academy
          for Rural Development, University of Engineering and Technology.
          Experienced with cyber security support in corporate area linked with
          outsourcing market. Already 45 batches received this training and have
          started to earn through online and corporate job.
        </p>
      </div>

      {/* <iframe className="" src={`${AWTBrochure}#view=fitH`} frameBorder="0"
                                            height="1000px" width="100%"/> */}
      <div className="px-20 container mx-auto my-5 hidden 2xl:block">
        <Pdf />
      </div>
      <CourseStatistic />
      <OurConcern />
    </div>
  );
};

export default page;
