"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ApiUrl from "../AllDataFatchingFunction/ApiUrl";
const HwPanelToAwsSite = () => {
  const router = useRouter();
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [studentRedirect, setStudentRedirect] = useState(false);
  useEffect(() => {
    let url = window.location.href;
    let urlObj = new URL(url);
    let apiKey = urlObj.href.split("=")[1];
    localStorage.setItem("ApiKey", apiKey);
    axios
      .get(ApiUrl.SendApiUrl + apiKey + "/")
      .then((response) => {
        if (response.status === 200) {
          if (response.data.length !== 0) {
            setStudentName(response.data[0].fullname);
            setStudentEmail(response.data[0].email);
            setStudentPhone(response.data[0].phone);
            setUserName(response.data[0].username);

            localStorage.setItem("UserEmail", response.data[0].email);
            localStorage.setItem("Type", 2);
          } else {
            setStudentRedirect(true);
          }
        } else {
          setStudentRedirect(true);
        }
      })
      .catch(() => {});
  }, []);

  const onStudentRedirect = () => {
    if (studentRedirect === true) {
      return router.push("/login");
    }
  };

  return (
    <>
      <div className="container mx-auto mt-5">
        <div className="flex justify-content-center">
          <div className=" w-full bg-white border-none shadow-sm mt-lg-4 mt-5">
            <div className="p-lg-4 p-5">
              <h6>
                <span className="font-semibold">Name: </span>
                <span className="text-primary">{studentName}</span>
              </h6>
              <h6>
                <span className="font-semibold">Email:</span>

                <span className="text-primary">{studentEmail}</span>
              </h6>
              <h6>
                

                <span className="font-semibold">Phone: </span>
                <span className="text-primary">{studentPhone}</span>
              </h6>
            </div>
          </div>
        </div>
        {onStudentRedirect()}
      </div>
    </>
  );
};

export default HwPanelToAwsSite;
