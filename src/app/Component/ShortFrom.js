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
import ShortRegistration from "../AllDataFatchingFunction/ShortRegistation";

const ShortFrom = (e) => {
  const [sucess, setSucess] = useState(false);
  const [open, setOpen] = useState(false);

  const [course, setCourse] = useState(null);
  const [allcourse, setAllcoures] = useState(null);
  const [validNumber, setValidNumber] = useState(null);
  const [from_id, setFormId] = useState("");
  const [pending, setPending] = useState(false);

  // Course Function Call hare
  useEffect(() => {
    try {
      async function DataFatching() {
        const data = await NavberData();
        setAllcoures(data);
      }
      DataFatching();
    } catch (error) {
      setAllcoures(null);
    }
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };
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

    newFormData.append("course", course);
    // let object = Object.fromEntries(newFormData);
    if (course === null) {
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
      ShortRegistration(newFormData, setSucess, setOpen, setFormId, setPending);
    }
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
            <div className="w-full col-span-6">
              <Input
                variant="standard"
                required
                name="name"
                label="Student Name"
                size="md"
                color="indigo"
                maxLength={255}
              />
            </div>
            <div className="w-full col-span-6  mt-2">
              <Input
                variant="standard"
                required
                label="Mobile Number"
                size="md"
                color="indigo"
                name="mobile"
                type="text"
                value={validNumber}
                onChange={student_mobileOnChange}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 15))}
              />
            </div>
          </div>

          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full col-span-6   mt-2">
              <div className="w-full col-span-6  relative ">
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
                    name="course"
                  >
                    <Option className="text-red-500">Server Error</Option>
                  </Select>
                )}
              </div>
            </div>
            <div className="w-full col-span-6 mt-2">
              <Input
                variant="standard"
                required
                label="Valid Email Address"
                size="md"
                type="email"
                color="indigo"
                name="email"
              />
            </div>
          </div>
        </div>

        <button
          className={`w-full mt-4 py-2 ${
            pending ? "bg-[#90bde0]" : "bg-deep-purple-600"
          } text-white rounded-lg`}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShortFrom;
