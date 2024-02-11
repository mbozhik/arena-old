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
import Registration from "../AllDataFatchingFunction/Registration";

const Apply = (e) => {
  const [sucess, setSucess] = useState(false);
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState("Year");
  const [month, setMonth] = useState("Month");
  const [day, setDay] = useState("Day");
  const [birth_date, setBirth_date] = useState(null);
  const [course, setCourse] = useState(null);
  const [nationality, setNationality] = useState("Bangladeshi");
  const [gander, setGander] = useState(null);
  const [allcourse, setAllcoures] = useState(null);
  const [copy, setCopy] = useState(false);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [validNumber, setValidNumber] = useState(null);
  const [course_title, setCourse_title] = useState(null);
  const [from_id, setFormId] = useState("");
  const [pending, setPending] = useState(false);

  // Course Function Call hare
  useEffect(() => {

    try{
      async function DataFatching() {
        const  data =await NavberData();
        setAllcoures(data)
       }
       DataFatching()
    }catch(error){
      setAllcoures(null)
    }
  

    

    // .then((data) => {
    //   setAllcoures(data);
    // })
    // .catch((error) => {
    //   // console.error("Error during data fetching:", error.message);
    // });
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
  // Number Validation
  const student_mobileOnChange = (event) => {
    let student_mobiles = event.target.value.replace(/[^0-9+]/g, "");
    setValidNumber(student_mobiles);
  };
  const onChangeCourse = (e) => {
    for (var i = 0; i < allcourse.length; i++) {
      if (allcourse[i]?.batch_schedule_time_id === e) {
        setCourse_title(allcourse[i]?.batch_schedule_name);
      }
    }
  };
  const RegistationSucess = (e) => {
    e.preventDefault();
    // Create a new FormData with empty values replaced throw regex
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
    newFormData.append("batch_schedule_time", course);
    newFormData.append("nationality", nationality);
    newFormData.append("birth_date", birth_date);
    newFormData.append("gender", gander);
    newFormData.append("course_title", course_title);
    let object = Object.fromEntries(newFormData);

    if (gander === null) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Select a Gander",
        showConfirmButton: false,
        showDenyButton: true,
        denyButtonText: `ok`,
        timer: 2000,
      });
    } else if (year === "Year") {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Birth Date Required a Year",
        showConfirmButton: false,
        showDenyButton: true,
        denyButtonText: `ok`,
        timer: 2000,
      });
    } else if (month === "Month") {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Birth Date Required a Month",
        showConfirmButton: false,
        showDenyButton: true,
        denyButtonText: `ok`,
        timer: 2000,
      });
    } else if (day === "Day") {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Birth Date Required a day",
        showConfirmButton: false,
        showDenyButton: true,
        denyButtonText: `ok`,
        timer: 2000,
      });
    } else if (course === null) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Select a Course",
        showConfirmButton: false,
        showDenyButton: true,
        denyButtonText: `ok`,
        timer: 2000,
      });
    } else {
      Registration(newFormData, setSucess, setOpen, setFormId, setPending);
    }
  };

  return (
    <div className="lg:w-[50%] shadow-sm   applyCardPadding">
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
            <span>#</span>
            {from_id}
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
            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
              <Input
                variant="standard"
                required
                name="student_name"
                label="Student Name"
                size="md"
                color="indigo"
                maxLength={255}
              />
            </div>
            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
              <Input
                variant="standard"
                required
                label="Mobile Number"
                size="md"
                color="indigo"
                name="student_mobile"
                type="text"
                value={validNumber}
                onChange={student_mobileOnChange}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 15))}
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
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
            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
              <Input
                variant="standard"
                required
                label="Facebook url"
                size="md"
                color="indigo"
                name="fb_id"
                maxLength={255}
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
              <Input
                variant="standard"
                required
                label="Present Address"
                size="md"
                color="indigo"
                name="present_address"
                onChange={(e) => setAddress(e.target.value)}
                maxLength={300}
              />
            </div>
            <div className="w-full md:col-span-3 col-span-6 mt-2 md:mt-0 grid grid-cols-2 gap-x-2">
              <div className="overflow-hidden pt-1">
                <Input
                  variant="standard"
                  required
                  label="Present City"
                  size="md"
                  color="indigo"
                  name="present_city"
                  onChange={(e) => setCity(e.target.value)}
                  maxLength={50}
                />
              </div>
              <div className="overflow-hidden pt-1">
                <Input
                  variant="standard"
                  required
                  label="Postal Code"
                  size="md"
                  color="indigo"
                  name="present_postal"
                  onChange={(e) => setPostal(e.target.value)}
                  maxLength={15}
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <input type="checkbox" onChange={() => setCopy(!copy)} />
            <p className="pl-2">Same as Present Address</p>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
              <Input
                variant="standard"
                required
                value={copy ? address : undefined}
                label="Permanent Address"
                size="md"
                color="indigo"
                name="permanent_address"
                maxLength={300}
              />
            </div>
            <div className="w-full md:col-span-3 col-span-6 mt-2 md:mt-0 grid grid-cols-2 gap-x-2">
              <div className="overflow-hidden pt-1">
                <Input
                  variant="standard"
                  required
                  label="Permanent City"
                  size="md"
                  color="indigo"
                  name="permanent_city"
                  value={copy ? city : undefined}
                  maxLength={50}
                />
              </div>
              <div className="overflow-hidden pt-1">
                <Input
                  variant="standard"
                  required
                  label="Postal Code"
                  size="md"
                  color="indigo"
                  name="permanent_postal"
                  value={copy ? postal : undefined}
                  maxLength={15}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full col-span-6">
              <div className="grid grid-cols-6 gap-x-2">
                <div className="w-full md:col-span-3 col-span-6 mt-2 md:mt-0 relative group">
                  <Select
                    variant="standard"
                    label="Gender *"
                    id="Gender"
                    onChange={(e) => setGander(e)}
                  >
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                  </Select>
                </div>
                <div className="w-full md:col-span-3 col-span-6 mt-5  md:mt-0  border-b border-[#B0BEC5] grid grid-cols-3 gap-x-2 relative ">
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
                    {" "}
                    <option value={"Day"}>Day</option>
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
                    <option value={"Month"}>Month</option>
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
                    <option value={"Year"}>Year</option>
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
            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
              <Input
                variant="standard"
                label="Office Address (if Applicable)"
                size="md"
                color="indigo"
                name="office_address"
                maxLength={200}
              />
            </div>
            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
              <Input
                variant="standard"
                required
                label="Nid/Birth Certificate/Passport No"
                size="md"
                color="indigo"
                name="nid"
                maxLength={50}
              />
            </div>
          </div>

          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
              <div className="w-full md:col-span-3 col-span-6 mt-2 md:mt-0  relative ">
                {allcourse ? (
                  <Select
                    required
                    variant="standard"
                    label="Select a Course *"
                    name="course_title"
                    id="Course"
                    onChange={(e) => {
                      setCourse(e);
                      onChangeCourse(e);
                    }}
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
                ) : (
                  <Select
                    required
                    variant="standard"
                    label="Select a Course *"
                    name="course_title"
                  >
                    <Option className="text-red-500">Server Error</Option>
                  </Select>
                )}
              </div>
            </div>
            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
              <Input
                variant="standard"
                label="Occupation (if Applicable)"
                size="md"
                color="indigo"
                name="student_occupation"
                maxLength={100}
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
              <Input
                variant="standard"
                label="School/College/University"
                size="md"
                color="indigo"
                name="varsity_name"
                maxLength={200}
              />
            </div>
            <div className="w-full md:col-span-3 col-span-6 mt-2 md:mt-0 grid grid-cols-2 gap-x-2">
              <div className="overflow-hidden pt-1">
                <Input
                  variant="standard"
                  label="Department"
                  size="md"
                  color="indigo"
                  name="varsity_dpt"
                  maxLength={100}
                />
              </div>
              <div className="overflow-hidden pt-1">
                <Input
                  variant="standard"
                  label="Roll"
                  size="md"
                  color="indigo"
                  name="varsity_id"
                  maxLength={35}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
              <Input
                variant="standard"
                label="Alternative Name"
                size="md"
                color="indigo"
                name="alt_name"
                maxLength={255}
              />
            </div>
            <div className="w-full md:col-span-3 col-span-6 mt-2 md:mt-0 grid grid-cols-2 gap-x-2">
              <div className="overflow-hidden pt-1">
                <Input
                  variant="standard"
                  label="Mobile"
                  size="md"
                  color="indigo"
                  type="number"
                  name="alt_mobile"
                  maxLength={15}
                />
              </div>
              <div className="overflow-hidden pt-1">
                <Input
                  variant="standard"
                  label="Relation With Student"
                  size="md"
                  color="indigo"
                  name="alt_relation"
                  maxLength={100}
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
            maxLength={100}
          />
          <Input
            variant="standard"
            label="Why do you learn Cyber Security / Python?"
            size="md"
            color="indigo"
            name="des_question"
            maxLength={500}
          />
        </div>

        <div className="flex justify-center py-5">
          <button
            type="submit"
            className={`px-8 py-3 ${
              pending ? "bg-[#90bde0]" : "bg-deep-purple-600"
            } text-white rounded-lg`}
            disabled={pending}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Apply;
