"use client";
import {
  Dialog,
  Input,
  Option,
  Select,
  Button,
  DialogFooter,
} from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import NavberData from "../AllDataFatchingFunction/Topber";

const Apply = (e) => {
  const [sucess, setSucess] = useState(false);
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [day, setDay] = useState(null);
  const [birth_date, setBirth_date] = useState(null);
  const [course, setCourse] = useState(null);
  const [nationality, setNationality] = useState("Bangladeshi");
  const [gander, setGander] = useState(null);
  const [allcourse, setAllcoures] = useState([]);
  const [copy,setCopy]=useState(false)
  // for copy present address
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");

  console.log(copy);

  // Couse Function Call hare
  useEffect(() => {
    NavberData()
      .then((data) => {
        setAllcoures(data);
      })
      .catch((error) => {
        console.error("Error during data fetching:", error.message);
      });
  }, []);

  // Date Validation
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 69; // Adjust this range based on your requirements
  let yearsArray = Array.from(
    { length: 70 },
    (_, index) => startYear + index
  ).reverse();
  let MonthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let Day = Array.from({ length: 31 }, (_, index) => index + 1);
  const handleOpen = () => {
    setOpen(!open);
  };

  const RegistationSucess = (e) => {
    e.preventDefault();

    if(!year){
    console.log(year);
    }
    // if (){
    //   Swal.fire({
    //       position: 'top-center',
    //       icon: 'error',
    //       title: 'For admission you have to pay 1st installment(7000TK).',
    //       showConfirmButton: false,
    //       showDenyButton: true,
    //       denyButtonText: `ok`,
    //       timer:5000
    //   });
    // Create a new FormData with values replaced using the regex
    let formdata = new FormData(e.target);
    const replaceSticker = (value) =>
      value.replace(
        /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g,
        ""
      );
    const newFormData = new FormData();
    for (const [key, value] of formdata.entries()) {
      newFormData.append(key, replaceSticker(value));
    }
    newFormData.append("reg_course ", course);
    newFormData.append("nationality", nationality);
    newFormData.append("nationality", nationality);
    newFormData.append("birth_date", birth_date);
    newFormData.append("reg_gender ", gander);
    let object = Object.fromEntries(newFormData);
    console.log(object);
    setSucess(true);
    setOpen(true);
  };

  return (
    <div className="w-[50%] shadow-sm  px-5 applyCardPadding">
      <Dialog open={open} handler={handleOpen} size="md">
        {sucess && <Confetti width={750} height={350} />}
        <div className="text-center py-10 px-5">
          <h1 className="text-4xl font-bold text-green-600 pb-5">
            Congratulations!
          </h1>
          <h3 className="text-2xl font-bold text-purple-800">
            Your Registration ID
          </h3>
          <p className="text-1xl text-blue-400">
            <span>#</span>64654654
          </p>

          <p>
            Your form has been submitted successfully. To complete registration
          </p>
          <Link href="/login">
            {" "}
            <button className="px-10 py-2 text-yellow-600 bg-purple-600 font-semibold my-3 rounded-md">
              pay Now
            </button>
          </Link>
          <p>
            Your{" "}
            <span className="font-semibold text-purple-800">
              User ID , Password{" "}
            </span>
            , Password has been send to your email. Please check your{" "}
            <span className="font-semibold text-purple-800">
              mail inbox or spam box
            </span>{" "}
            for further instruction.
          </p>
        </div>
        <DialogFooter>
          <Button variant="gradient" color="red" onClick={handleOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <form onSubmit={(e) => RegistationSucess(e)}>
        <h1 className="text-3xl font-bold py-2 text-center  applicationTitle text-[#FFD321]">
          Student Application Form
        </h1>
        <div className="grid gap-y-4 mt-3">
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full col-span-3">
              <Input
                variant="standard"
                required
                name="student_name"
                label="Student Name"
                size="md"
                color="indigo"
              />
            </div>
            <div className="w-full col-span-3">
              <Input
                variant="standard"
                required
                label="Mobile Number"
                size="md"
                color="indigo"
                name="student_mobile"
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full col-span-3">
              <Input
                variant="standard"
                required
                label="Valid Email Address"
                size="md"
                type="email"
                color="indigo"
                name="student_email"
              />
            </div>
            <div className="w-full col-span-3">
              <Input
                variant="standard"
                required
                label="Facebook url"
                size="md"
                color="indigo"
                name="fb_id"
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full col-span-3">
              <Input
                variant="standard"
                required
                label="Present Address"
                size="md"
                color="indigo"
                name="present_address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="w-full col-span-3 grid grid-cols-2 gap-x-2">
              <div className="">
                <Input
                  variant="standard"
                  required
                  label="Present City"
                  size="md"
                  color="indigo"
                  name="present_city"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="">
                <Input
                  variant="standard"
                  required
                  label="Postal Code"
                  size="md"
                  color="indigo"
                  name="present_postal"
                  onChange={(e) => setPostal(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <input type="checkbox" onChange={()=>setCopy(!copy)}/>
            <p className="pl-2">Same as Present Address</p>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full col-span-3">
              <Input
                variant="standard"
                required
                value={copy ? address : undefined}
                label="Permanent Address"
                size="md"
                color="indigo"
                name="permanent_address"
              />
            </div>
            <div className="w-full col-span-3 grid grid-cols-2 gap-x-2">
              <div className="">
                <Input
                  variant="standard"
                  required
                  label="Permanent City"
                  size="md"
                  color="indigo"
                  name="permanent_city"
                  value={copy ? city : undefined}
                />
              </div>
              <div className="">
                <Input
                  variant="standard"
                  required
                  label="Postal Code"
                  size="md"
                  color="indigo"
                  name="permanent_postal"
                  value={copy ? postal : undefined}
                  
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full col-span-6">
              <div className="grid grid-cols-6 gap-x-2">
                <div className="w-full col-span-3 relative group">
                  <Select
                    variant="standard"
                    label="Gander *"
                    id="Gander"
                    onChange={(e) => setGander(e)}
                  >
                    <Option value="Bangladeshi">Male</Option>
                    <Option value="Others">Female</Option>
                  </Select>
                </div>
                <div className="w-full col-span-3  border-b border-[#B0BEC5] grid grid-cols-3 gap-x-2 relative ">
                  <p className="absolute -top-3 left-0 text-sm text-[#B0BEC5]">
                    Date Of Birth <span className="text-red-400">*</span>
                  </p>
                  <select
                    className="outline-none  "
                    id="Day"
                    onChange={(e) => {
                      setDay(e.target.value);
                      setBirth_date(`${year}-${month}-${e.target.value}`);
                    }}
                  >
                    {Day.map((day, index) => {
                      return (
                        <option key={index} value={day}>
                          {day}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="outline-none "
                    id="Month"
                    onChange={(e) => {
                      setMonth(e.target.value);
                      setBirth_date(`${year}-${e.target.value}-${day}`);
                    }}
                  >
                    {MonthsArray.map((month, index) => {
                      return (
                        <option key={index} value={index + 1}>
                          {month}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="outline-none "
                    id="Year"
                    onChange={(e) => {
                      setYear(e.target.value);
                      setBirth_date(`${e.target.value}-${month}-${day}`);
                    }}
                  >
                    {yearsArray.map((year, index) => {
                      return (
                        <option key={index} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full col-span-3">
              <Input
                variant="standard"
                label="Office Address (if Applicable)"
                size="md"
                color="indigo"
                name="office_address"
              />
            </div>
            <div className="w-full col-span-3">
              <Input
                variant="standard"
                required
                label="Nid/Birth Certificate/Passport No"
                size="md"
                color="indigo"
                name="nid"
              />
            </div>
          </div>

          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full col-span-3">
              <div className="w-full col-span-3  relative ">
                <Select
                  required
                  variant="standard"
                  label="Select a Course *"
                  name="course_title"
                  id="Course"
                  onChange={(e) => setCourse(e)}
                >
                  {allcourse &&
                    allcourse?.map((x, index) => {
                      return (
                        <Option
                          key={index + 1}
                          value={x.batch_schedule_time_id}
                        >
                          {x.batch_schedule_name}
                        </Option>
                      );
                    })}
                </Select>
              </div>
            </div>
            <div className="w-full col-span-3">
              <Input
                variant="standard"
                label="Occupation (if Applicable)"
                size="md"
                color="indigo"
                name="student_occupation"
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full col-span-3">
              <Input
                variant="standard"
                label="School/College/University"
                size="md"
                color="indigo"
                name="varsity_name"
              />
            </div>
            <div className="w-full col-span-3 grid grid-cols-2 gap-x-2">
              <div className="">
                <Input
                  variant="standard"
                  label="Department"
                  size="md"
                  color="indigo"
                  name="varsity_dpt"
                />
              </div>
              <div className="">
                <Input
                  variant="standard"
                  label="Roll"
                  size="md"
                  color="indigo"
                  name="varsity_id"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full col-span-3">
              <Input
                variant="standard"
                label="Alternative Name"
                size="md"
                color="indigo"
                name="alt_name"
              />
            </div>
            <div className="w-full col-span-3 grid grid-cols-2 gap-x-2">
              <div className="">
                <Input
                  variant="standard"
                  label="Mobile"
                  size="md"
                  color="indigo"
                  name="alt_mobile"
                />
              </div>
              <div className="">
                <Input
                  variant="standard"
                  label="Relation With Student"
                  size="md"
                  color="indigo"
                  name="alt_relation"
                />
              </div>
            </div>
          </div>
          <Input
            variant="standard"
            label="Interest/Hobbies"
            size="md"
            color="indigo"
            name="hobby"
          />
          <Input
            variant="standard"
            label="Why do you learn Cyber Security / Python?"
            size="md"
            color="indigo"
            name="des_question"
          />
        </div>

        <div className="flex justify-center py-5">
          <button
            type="submit"
            className="px-8 py-3 bg-deep-purple-600 text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Apply;
