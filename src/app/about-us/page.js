// import ABoutH1 from "../Component/Utility/ABoutH1";
import Pdf from "../../../public/Pdf";
import CourseStatistic from "../Component/home/CourseStatistic";
import OurConcern from "../Component/home/OurConcern";

const page = () => {
  return (
    <div className="h-auto container ">
      <div className="shadow-sm bg-gradient-to-r from-[#56b5e3] to-[#7d58a5] rounded-sm py-3 mb-5 mt-5">
        <h4 className="text-[28px] font-medium text-white text-center my-4 font-poppins">
        About Arena Web Security
        </h4>
      </div>
      <div className="bg-[#F5F5F5] pt-8 pb-8 px-8 text-sm leading-6 text-gray-800">
  <p>
    <span className="font-medium">The First & Most Trusted Cybersecurity Company in Bangladesh</span><br />
    Arena Web Security, a sister concern of Arena Web Technology, is the first dedicated cybersecurity company in Bangladesh, established in 2012. Since then, it has become the most trusted name in cybersecurity training and services across the country.
  </p>

  <p className="mt-5">
    With over a decade of experience, Arena Web Security has been committed to securing digital platforms and building skilled cybersecurity professionals who can compete globally.
  </p>

  <p className="mt-5">
    🔗 <span className="font-medium">We have proudly worked with:</span><br />
    Government entities like the Ministry of ICT, Bangladesh Air Force, Ministry of Defense, and Bangladesh Academy for Rural Development<br />
    Top academic institutions including BUET, DU and various public/private universities<br />
    The banking sector, insurance companies, and other high-risk industries<br />
    National & international organizations seeking penetration testing, VAPT, OSINT, and digital forensics solutions
  </p>

  <p className="mt-5">
    🚀 <span className="font-medium">Our Impact So Far:</span><br />
    55+ batches trained through our flagship CEHF (Certified Ethical Hacking & Freelancing) course<br />
    Students are now working in international freelancing platforms, corporate IT departments, and government cybersecurity roles<br />
    Delivered global-standard cybersecurity training tailored to the needs of Bangladesh’s digital transformation
  </p>

  <p className="mt-5">
    At Arena Web Security, we are building the next generation of cyber defenders—equipped with real-world skills, international exposure, and a mission to secure the digital future of Bangladesh and beyond.
  </p>

  <p className="mt-5">
    👉 <span className="font-medium">Ready to join the legacy?</span> Let Arena Web Security be your gateway to a high-impact cybersecurity career.
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
