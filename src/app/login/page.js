import Image from "next/image";
import Logo from "@/app/admission/Logo.png";
import Login from "../Component/Login";

export const metadata = {
  title: 'Ethical Hacking & Advanced Python Course Combo Offer!',
  description: 'Level up your skills in Python and Ethical Hacking! Our expert-led courses empower you to excel in IT security. Enroll now for a brighter future!',
}; 
const page = () => {
  return (
    <div className="lg:px-20 md:px-5 px-3 mt-5">
      <div className="flex md:h-[50vh] lg:h-[80vh] gap-2 ">
        <div className="relative w-[50%] hidden md:block ">
          <article className="admissionSideber w-[100%] h-[100%]"></article>
          <div className="absolute top-0 left-0 h-[100%] w-[100%] px-5">
            <div className="flex justify-center mt-4">
              <Image src={Logo} alt="Logo" className="w-44" />
            </div>
            <div className="flex  items-center h-full ">
              <div>
                <h1 className="text-4xl font-bold   text-white pl-20 ">
                  Welcome back!
                </h1>
                <p className="text-1xl font-medium   text-white pl-20 mt-4">
                  We are glad to see you again! Get access to your Orders,
                  Wishlist and Recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default page;
