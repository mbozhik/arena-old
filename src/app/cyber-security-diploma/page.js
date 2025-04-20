import React, { Fragment } from "react";

import MentorSlides from "../Component/Common/slider/slider";
import CyberSecurity from "../Component/Courses-page-component/Cyber/CyberSecurity";
import CyberSecurityDiploma from "../Component/Courses-page-component/cyber-security-diploma/CyberSecurityDiploma";
export const metadata = {
  title: "Cyber Security Training Course - Ethical Hacking",
  description:
    "Learn ethical hacking  with industry experts. Our immersive courses help you land dream IT security jobs or become a freelance white hat hacker. Enroll now!",
};

const page = async () => {
  return (
    <Fragment>
      <div className="container mx-auto  ">
        <div className=" ">
          <CyberSecurityDiploma />
        </div>
      </div>
    </Fragment>
  );
};

export default page;
