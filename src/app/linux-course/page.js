
import React, { Fragment } from "react";
import MentorSlides from "../Component/Common/slider/slider";
import Linax from "../Component/Courses-page-component/Linax/Linax";
export const metadata = {
  title: 'Linux Essentials & Master the Basics!',
  description: 'Unlock the power of Linux with our comprehensive essentials course. Master key basics and elevate your skills today!',
}; 
const page = () => {
return (
    <div className="container mx-auto  ">
    <div className="">
    <Linax/>
    </div>
  </div>
  );
};

export default page;
