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
import { useEffect, useState, useRef } from "react";
import Confetti from "react-confetti";
import NavberData from "../AllDataFatchingFunction/Topber";
import Registration from "../AllDataFatchingFunction/Registration";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MenuItem, TextField } from "@mui/material";
import { CustomDaySelect } from "./Utility/Day";
import { CustomMonthSelect } from "./Utility/Month";
import { CustomYearSelect } from "./Utility/Year";

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
  const [notRequired, setNotRequired] = useState(false);
  const [notRequiredWork, setNotRequiredWork] = useState(false);
  const [showAllDays, setShowAllDays] = useState(false);
  const [versityName, setVersityName] = useState(" ");
  const [versityDep, setVersityDep] = useState(" ");
  const [versityRoll, setVersityRoll] = useState(" ");
  const days = Array.from({ length: 31 }, (_, i) => i + 1); // 1-31

  // Course Function Call hare
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setNotRequired(isChecked);

    // Set occupation based on checkbox state
    if (isChecked) {
      setVersityName("not required");
      setVersityDep("not required");
      setVersityRoll("not required");
    } else {
      setVersityName(" "); // Or set to empty string "" if preferred
      setVersityDep(" "); // Or set to empty string "" if preferred
      setVersityRoll(" "); // Or set to empty string "" if preferred
    }
  };
  useEffect(() => {
    try {
      async function DataFatching() {
        const data = await NavberData();
        setAllcoures(data?.reverse());
      }
      DataFatching();
    } catch (error) {
      setAllcoures(null);
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
    // let student_mobiles = event.target.value.replace(/[^0-9+]/g, "");
    // setValidNumber(student_mobiles);
    setValidNumber(event);
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
    newFormData.append("student_mobile", validNumber);
    newFormData.append("nationality", nationality);
    newFormData.append("birth_date", birth_date);
    newFormData.append("gender", gander);
    newFormData.append("course_title", course_title);
    newFormData.append("varsity_name", versityName);
    newFormData.append("varsity_dpt", versityDep);
    newFormData.append("varsity_id", versityRoll);
    // newFormData.append("course_title", course_title);
    let object = Object.fromEntries(newFormData);

    if (validNumber === null) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Mobile Number required",
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
    <div className="lg:w-[70%] shadow-sm   applyCardPadding relative">
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
            <button className="px-10 py-2 text-yellow-600 bg-purple-600 font-semibold my-3 rounded-md">
              pay Now
            </button>
          </Link>
          <p>
            Your
            <span className="font-semibold text-purple-800">
              User ID , Password
            </span>
            , Password has been send to your email. Please check your
            <span className="font-semibold text-purple-800">
              mail inbox or spam box
            </span>
            for further instruction.
          </p>
        </div>
        <DialogFooter>
          <Button variant="gradient" color="red" onClick={handleOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>

      <form
        onSubmit={(e) => RegistationSucess(e)}
        className="shadow-sm relative"
      >
        <h1 className="md:text-2xl text-2xl font-medium py-3 mt-2 text-center  applicationTitle text-white">
          Student Application Form
        </h1>
        <div className="flex mt-4">
          {/* <input type="checkbox" onChange={() => setCopy(!copy)} /> */}
          <p className="font-poppins text-xl md:text-2xl font-medium text-[#0c9669] mt-6 ">
            Personal & Contact Information :
          </p>
        </div>
        <div className="w-full md:col-span-3 col-span-6 mt-2 md:mt-0 relative group">
          <div className="flex space-x-6 items-center mt-4">
            <p className="text-sm font-[300] ">Prefix*:</p>
            <div className="flex items-center">
              <input
                type="radio"
                id="mr"
                name="prefix"
                value="male"
                onChange={(e) => setGander(e.target.value)}
                className="form-radio text-indigo-600"
              />
              <label htmlFor="mr" className="ml-2 text-sm text-gray-700">
                Mr.
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="missMrs"
                name="prefix"
                value="female"
                onChange={(e) => setGander(e.target.value)}
                className="form-radio text-indigo-600"
              />
              <label htmlFor="missMrs" className="ml-2 text-sm text-gray-700">
                Miss/Mrs.
              </label>
            </div>
          </div>
        </div>

        <div className="grid gap-y-4 mt-3">
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
              <TextField
                fullWidth
                required
                name="student_name"
                label="Student Name "
                variant="outlined"
                size="medium"
                inputProps={{ maxLength: 255 }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#5BA9DB", // Border color on hover
                    },
                    "& fieldset": {
                      borderColor: "#5BA9DB", // Default border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7B5DA7", // Border color on focus
                      borderWidth: "1px",
                    },
                  },
                }}
              />
            </div>
            <div className="w-full md:col-span-3 col-span-6  pt-1 ">
              <PhoneInput
                value={validNumber}
                onChange={student_mobileOnChange}
                required
                country={"bd"}
                name="student_mobile"
                inputStyle={{
                  width: "100%",
                  border: "1px solid #5BA9DB",
                  borderBottom: "1px solid #5BA9DB",
                  borderRadius: "5px",
                  padding: "26px 50px 26px 70px", // leave space for the flag button
                  transition: "border-color 0.3s ease",
                  boxSizing: "border-box",
                }}
                buttonStyle={{
                  border: "none",
                  backgroundColor: "transparent",
                  borderRadius: "5px",
                  height: "30px",
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: "20px",
                  alignSelf: "center",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                containerStyle={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
              <TextField
                fullWidth
                required
                label="Valid Email Address"
                size="medium"
                type="email"
                color="primary"
                name="student_email"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#5BA9DB",
                    },
                    "& fieldset": {
                      borderColor: "#5BA9DB",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7B5DA7",
                      borderWidth: "1px",
                    },
                  },
                }}
              />
            </div>

            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
              <TextField
                fullWidth
                required
                label="Facebook url"
                size="medium"
                color="primary"
                name="fb_id"
                inputProps={{ maxLength: 255 }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#5BA9DB",
                    },
                    "& fieldset": {
                      borderColor: "#5BA9DB",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7B5DA7",
                      borderWidth: "1px",
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
              <TextField
                fullWidth
                required
                label="Present Address "
                size="medium"
                color="primary"
                name="present_address"
                onChange={(e) => setAddress(e.target.value)}
                inputProps={{ maxLength: 300 }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#5BA9DB",
                    },
                    "& fieldset": {
                      borderColor: "#5BA9DB",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7B5DA7",
                      borderWidth: "1px",
                    },
                  },
                }}
              />
            </div>

            <div className="w-full md:col-span-3 col-span-6 mt-2 md:mt-0 grid grid-cols-2 gap-x-2">
              <div className=" pt-1">
                <TextField
                  fullWidth
                  required
                  label="Present City "
                  size="medium"
                  color="primary"
                  name="present_city"
                  onChange={(e) => setCity(e.target.value)}
                  inputProps={{ maxLength: 50 }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#5BA9DB",
                      },
                      "& fieldset": {
                        borderColor: "#5BA9DB",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7B5DA7",
                        borderWidth: "1px",
                      },
                    },
                  }}
                />
              </div>
              <div className=" pt-1">
                <TextField
                  fullWidth
                  label="Postal Code "
                  size="medium"
                  color="primary"
                  name="present_postal"
                  onChange={(e) => setPostal(e.target.value)}
                  inputProps={{ maxLength: 15 }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#5BA9DB",
                      },
                      "& fieldset": {
                        borderColor: "#5BA9DB",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7B5DA7",
                        borderWidth: "1px",
                      },
                    },
                  }}
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
              <TextField
                fullWidth
                required
                value={copy ? address : ""}
                label="Permanent Address "
                size="medium"
                color="primary"
                name="permanent_address"
                inputProps={{ maxLength: 300 }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#5BA9DB",
                    },
                    "& fieldset": {
                      borderColor: "#5BA9DB",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7B5DA7",
                      borderWidth: "1px",
                    },
                  },
                }}
              />
            </div>
            <div className="w-full md:col-span-3 col-span-6 mt-2 md:mt-0 grid grid-cols-2 gap-x-2">
              <div className=" pt-1">
                <TextField
                  fullWidth
                  required
                  label="Permanent City "
                  size="medium"
                  color="primary"
                  name="permanent_city"
                  value={copy ? city : ""}
                  inputProps={{ maxLength: 50 }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#5BA9DB",
                      },
                      "& fieldset": {
                        borderColor: "#5BA9DB",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7B5DA7",
                        borderWidth: "1px",
                      },
                    },
                  }}
                />
              </div>
              <div className=" pt-1">
                <TextField
                  fullWidth
                  label="Postal Code"
                  size="medium"
                  color="primary"
                  name="permanent_postal"
                  value={copy ? postal : ""}
                  inputProps={{ maxLength: 15 }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#5BA9DB",
                      },
                      "& fieldset": {
                        borderColor: "#5BA9DB",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7B5DA7",
                        borderWidth: "1px",
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full col-span-6">
              <div className="grid grid-cols-6 gap-x-2">
                <div className="w-full md:col-span-3 col-span-6 mt-5 md:mt-0 border-b border-[#B0BEC5] grid grid-cols-3 gap-2 px-4 relative inputDateP ">
                  <span className="">
                    Date Of Birth *
                    {/* <span className="text-red-400">*</span> */}
                  </span>

                  <CustomDaySelect
                    year={year}
                    month={month}
                    setBirth_date={setBirth_date}
                    setDay={setDay}
                  />

                  {/* <select
                    className="border border-[#B0BEC5] text-center p-1 rounded-md focus:outline-none"
                    id="Month"
                    onChange={(e) => {
                      setMonth(e.target.value);
                      setBirth_date(`${year}-${e.target.value}-${day}`);
                    }}
                  >
                    <option value={"Month"} disabled>Month</option>
                    {MonthsArray.map((month, index) => (
                      <option key={index + 1} value={index + 1}>
                        {month}
                      </option>
                    ))}
                  </select> */}
                  <CustomMonthSelect
                    year={year}
                    day={day}
                    setMonth={setMonth}
                    setBirth_date={setBirth_date}
                  />
                  {/* <select
                    className="border border-[#B0BEC5] text-center p-1 rounded-md focus:outline-none"
                    id="Year"
                    onChange={(e) => {
                      setYear(e.target.value);
                      setBirth_date(`${e.target.value}-${month}-${day}`);
                    }}
                  >
                    <option value={"Year"} disabled>Year</option>
                    {yearsArray.map((year, index) => (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    ))}
                  </select> */}
                  <CustomYearSelect
                    month={month}
                    day={day}
                    setYear={setYear}
                    setBirth_date={setBirth_date}
                  />
                </div>
                <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
                  <TextField
                    fullWidth
                    required
                    name="nid"
                    label="Nid/Birth Certificate/Passport No"
                    variant="outlined"
                    size="medium"
                    inputProps={{ maxLength: 50 }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#5BA9DB",
                        },
                        "& fieldset": {
                          borderColor: "#5BA9DB",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#7B5DA7",
                          borderWidth: "1px",
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
              <TextField
                fullWidth
                required
                select
                label="Nationality"
                name="nationality"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#5BA9DB",
                    },
                    "& fieldset": {
                      borderColor: "#5BA9DB",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7B5DA7",
                      borderWidth: "1px",
                    },
                  },
                }}
              >
                <MenuItem value="Bangladeshi">Bangladeshi</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </TextField>
            </div>
            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
              <TextField
                fullWidth
                required
                select
                label="Select a Course "
                name="course_title"
                value={course}
                onChange={(e) => {
                  setCourse(e.target.value);
                  onChangeCourse(e.target.value);
                }}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#5BA9DB",
                    },
                    "& fieldset": {
                      borderColor: "#5BA9DB",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7B5DA7",
                      borderWidth: "1px",
                    },
                  },
                }}
              >
                {/* {allcourse && allcourse.length > 0 ? (
                  allcourse.map((x, index) => (
                    <MenuItem key={index + 1} value={x.batch_schedule_time_id}>
                      {x.batch_schedule_name}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem disabled className="text-red-500">
                    Server Error
                  </MenuItem>
                )} */}
                {allcourse && allcourse.length > 0 ? (
                  allcourse
                    .filter(
                      (x) =>
                        x.batch_schedule_name !==
                        "Advanced Python With Django and Freelancing"
                    )
                    .map((x, index) => (
                      <MenuItem
                        key={index + 1}
                        value={x.batch_schedule_time_id}
                      >
                        {x.batch_schedule_name}
                      </MenuItem>
                    ))
                ) : (
                  <MenuItem disabled className="text-red-500">
                    Server Error
                  </MenuItem>
                )}
              </TextField>
            </div>
          </div>
          {/* <div className="flex mt-1 w-full">
       
            <p className="font-poppins text-xl md:text-2xl font-medium text-[#0c9669] mt-6 ">
              Work Information :
            </p>
          </div>

          <div className="flex items-center mb-1">
            <input
              type="checkbox"
              id="notRequired"
              checked={notRequiredWork}
              onChange={(e) => setNotRequiredWork(e.target.checked)}
              className="mr-2"
            />
            
            <label htmlFor="notRequired" className="text-sm">
              Not Required
            </label>
          </div> */}
          {!notRequiredWork && (
            <div className="grid grid-cols-6 gap-x-2">
              <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
                <TextField
                  fullWidth
                  name="office_address"
                  label="Office Address (if Applicable)"
                  variant="outlined"
                  size="medium"
                  inputProps={{ maxLength: 200 }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#5BA9DB",
                      },
                      "& fieldset": {
                        borderColor: "#5BA9DB",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7B5DA7",
                        borderWidth: "1px",
                      },
                    },
                  }}
                />
              </div>
              <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
                <TextField
                  fullWidth
                  required
                  name="student_occupation"
                  label="Occupation "
                  variant="outlined"
                  size="medium"
                  inputProps={{ maxLength: 100 }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#5BA9DB",
                      },
                      "& fieldset": {
                        borderColor: "#5BA9DB",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7B5DA7",
                        borderWidth: "1px",
                      },
                    },
                  }}
                />
              </div>
            </div>
          )}

          <div className="flex mt-1 w-full">
            <p className="font-poppins text-xl md:text-2xl font-medium text-[#0c9669] mt-6 ">
              Educational Background :
            </p>
          </div>

          <div className="flex items-center mb-1">
            {/* <input
              type="checkbox"
              id="notRequired"
              checked={notRequired}
              onChange={(e) => setNotRequired(e.target.checked)}
              className="mr-2"
            /> */}
            <input
              type="checkbox"
              id="notRequired"
              checked={notRequired}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="notRequired" className="text-sm">
              Not Required
            </label>
          </div>

          {!notRequired && (
            <div className="grid grid-cols-6 gap-x-2">
              {/* School/College/University */}
              <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
                <TextField
                  fullWidth
                  required
                  name="varsity_name"
                  label="School/College/University"
                  variant="outlined"
                  value={versityName}
                  onChange={(e) => setVersityName(e.target.value)}
                  size="medium"
                  inputProps={{ maxLength: 200 }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#5BA9DB",
                      },
                      "& fieldset": {
                        borderColor: "#5BA9DB",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7B5DA7",
                        borderWidth: "1px",
                      },
                    },
                  }}
                />
              </div>

              {/* Department & Roll */}
              <div className="w-full md:col-span-3 col-span-6 mt-2 md:mt-0 grid grid-cols-2 gap-x-2">
                <div className=" pt-1">
                  <TextField
                    fullWidth
                    required
                    name="varsity_dpt"
                    label="Department"
                    variant="outlined"
                    value={versityDep}
                    onChange={(e) => setVersityDep(e.target.value)}
                    size="medium"
                    inputProps={{ maxLength: 100 }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#5BA9DB",
                        },
                        "& fieldset": {
                          borderColor: "#5BA9DB",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#7B5DA7",
                          borderWidth: "1px",
                        },
                      },
                    }}
                  />
                </div>
                <div className=" pt-1">
                  <TextField
                    fullWidth
                    required
                    name="varsity_id"
                    label="Roll"
                    variant="outlined"
                    size="medium"
                    value={versityRoll}
                    onChange={(e) => setVersityRoll(e.target.value)}
                    inputProps={{ maxLength: 35 }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#5BA9DB",
                        },
                        "& fieldset": {
                          borderColor: "#5BA9DB",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#7B5DA7",
                          borderWidth: "1px",
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex mt-1 w-full">
            <p className="font-poppins text-xl md:text-2xl font-medium text-[#0c9669] mt-6 ">
              Alternative Contact :
            </p>
          </div>

          <div className="grid grid-cols-6 gap-x-2">
            {/* Alternative Contact Name */}
            <div className="w-full md:col-span-3 col-span-6 mt-2 pt-1 md:mt-0">
              <TextField
                fullWidth
                name="alt_name"
                required
                label="Alternative Contact Name"
                variant="outlined"
                size="medium"
                inputProps={{ maxLength: 255 }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#5BA9DB",
                    },
                    "& fieldset": {
                      borderColor: "#5BA9DB",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7B5DA7",
                      borderWidth: "1px",
                    },
                  },
                }}
              />
            </div>

            {/* Mobile & Relation */}
            <div className="w-full md:col-span-3 col-span-6 mt-2 md:mt-0 grid grid-cols-2 gap-x-2">
              <div className=" pt-1">
                <TextField
                  fullWidth
                  required
                  name="alt_mobile"
                  label="Mobile"
                  variant="outlined"
                  size="medium"
                  type="number"
                  inputProps={{ maxLength: 15 }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#5BA9DB",
                      },
                      "& fieldset": {
                        borderColor: "#5BA9DB",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7B5DA7",
                        borderWidth: "1px",
                      },
                    },
                  }}
                />
              </div>
              <div className=" pt-1">
                <TextField
                  fullWidth
                  name="alt_relation"
                  label="Relation With Student"
                  variant="outlined"
                  size="medium"
                  inputProps={{ maxLength: 100 }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#5BA9DB",
                      },
                      "& fieldset": {
                        borderColor: "#5BA9DB",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7B5DA7",
                        borderWidth: "1px",
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex mt-1 w-full">
            {/* <input type="checkbox" onChange={() => setCopy(!copy)} /> */}
            <p className="font-poppins text-xl md:text-2xl font-medium text-[#0c9669] mt-6 ">
              Others :
            </p>
          </div>

          <TextField
            fullWidth
            name="hobby"
            label="Interest/Hobbies"
            variant="outlined"
            size="medium"
            inputProps={{ maxLength: 100 }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "#5BA9DB",
                },
                "& fieldset": {
                  borderColor: "#5BA9DB",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#7B5DA7",
                  borderWidth: "1px",
                },
              },
            }}
          />

          <TextField
            fullWidth
            required
            name="des_question"
            label="Why do you learn Cyber Security / Python?"
            variant="outlined"
            size="medium"
            inputProps={{ maxLength: 500 }}
            multiline
            // rows={4} // You can adjust the number of rows as needed
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "#5BA9DB",
                },
                "& fieldset": {
                  borderColor: "#5BA9DB",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#7B5DA7",
                  borderWidth: "1px",
                },
              },
            }}
          />
        </div>

        <div className="flex justify-center py-5">
          <button
            type="submit"
            className={`px-8 py-3 ${
              pending ? "bg-[#90bde0]" : "bg-blue-500 hover:bg-blue-600"
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
