
import MentorSlides from "../Component/Common/slider/slider";
import Combo from "../Component/Courses-page-component/combo/Combo";
export const metadata = {
  title: 'Ethical Hacking & Advanced Python Course Combo Offer!',
  description: 'Level up your skills in Python and Ethical Hacking! Our expert-led courses empower you to excel in IT security. Enroll now for a brighter future!',
}; 
const page = () => {
  return (
    <div className="container mx-auto  ">
      <div className="">
       <Combo></Combo>
      </div>
    </div>
  );
};

export default page;
