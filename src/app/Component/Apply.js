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
import { useState } from "react";
import Confetti from "react-confetti";

const Apply = () => {
  const [sucess, setSucess] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const RegistationSucess = () => {
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
          <Link href='/login'> <button className="px-10 py-2 text-yellow-600 bg-purple-600 font-semibold my-3 rounded-md">pay Now</button></Link>
          <p>
            Your <span className="font-semibold text-purple-800">User ID , Password </span>, Password has been send to your email. Please check
            your <span className="font-semibold text-purple-800">mail inbox or spam box</span> for further instruction.
          </p>
        </div>
        <DialogFooter>
          <Button variant="gradient" color="red" onClick={handleOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>

      <from>
        <h1 className="text-3xl font-bold py-2 text-center  applicationTitle text-[#FFD321]">
          Student Application Form
        </h1>
        <div className="grid gap-y-4 mt-3">
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full col-span-3">
              <Input
                variant="standard"
                required
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
                color="indigo"
              />
            </div>
            <div className="w-full col-span-3">
              <Input
                variant="standard"
                required
                label="Facebook url"
                size="md"
                color="indigo"
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
                />
              </div>
              <div className="">
                <Input
                  variant="standard"
                  required
                  label="Postal Code"
                  size="md"
                  color="indigo"
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <input type="checkbox" />
            <p className="pl-2">Same as Present Address</p>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full col-span-3">
              <Input
                variant="standard"
                required
                label="Permanent Address"
                size="md"
                color="indigo"
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
                />
              </div>
              <div className="">
                <Input
                  variant="standard"
                  required
                  label="Postal Code"
                  size="md"
                  color="indigo"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full col-span-6">
              <div className="grid grid-cols-6 gap-x-2">
                <div className="w-full col-span-3 relative group">
                  <Select
                    required
                    variant="standard"
                    label="Nationality"
                    id="Nationality"
                  >
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                </div>
                <div className="w-full col-span-3  border-b border-[#B0BEC5] grid grid-cols-3 gap-x-2 relative ">
                  <p className="absolute -top-3 left-0 text-sm text-[#B0BEC5]">
                    Date Of Birth <span className="text-red-400">*</span>
                  </p>
                  <select className="outline-none  ">
                    <option className="bg-[#B0BEC5]">day</option>
                  </select>
                  <select className="outline-none ">
                    <option>Month</option>
                  </select>
                  <select className="outline-none ">
                    <option>Year</option>
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
              />
            </div>
            <div className="w-full col-span-3">
              <Input
                variant="standard"
                required
                label="Nid/Birth Certificate/Passport No"
                size="md"
                color="indigo"
              />
            </div>
          </div>

          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full col-span-3">
              <div className="w-full col-span-3  relative ">
                <Select required variant="standard" label="Select a Course *">
                  <Option selected>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>
            </div>
            <div className="w-full col-span-3">
              <Input
                variant="standard"
                label="Occupation (if Applicable)"
                size="md"
                color="indigo"
              />
            </div>
          </div>
          <div className="flex">
            <p className=" text-green-300 text-2xl font-semibold">
              Educational Background
            </p>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full col-span-3">
              <Input
                variant="standard"
                label="School/College/University"
                size="md"
                color="indigo"
              />
            </div>
            <div className="w-full col-span-3 grid grid-cols-2 gap-x-2">
              <div className="">
                <Input
                  variant="standard"
                  label="Department"
                  size="md"
                  color="indigo"
                />
              </div>
              <div className="">
                <Input
                  variant="standard"
                  label="Roll"
                  size="md"
                  color="indigo"
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <p className=" text-green-300 text-2xl font-semibold">
              Alternative Contact{" "}
            </p>
          </div>
          <div className="grid grid-cols-6 gap-x-2">
            <div className="w-full col-span-3">
              <Input
                required
                variant="standard"
                label="Alternative Name"
                size="md"
                color="indigo"
              />
            </div>
            <div className="w-full col-span-3 grid grid-cols-2 gap-x-2">
              <div className="">
                <Input
                  required
                  variant="standard"
                  label="Mobile"
                  size="md"
                  color="indigo"
                />
              </div>
              <div className="">
                <Input
                  required
                  variant="standard"
                  label="Relation With Student"
                  size="md"
                  color="indigo"
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <p className=" text-green-300 text-2xl font-semibold">
              Interest/Hobbies
            </p>
          </div>
          <Input
            variant="standard"
            label="Present Address"
            size="md"
            color="indigo"
          />
          <div className="flex">
            <p className=" text-green-300 text-2xl font-semibold">
              Why do you learn Cyber Security / Python?
            </p>
          </div>
          <Input
            variant="standard"
            label="Type Your Ans Hare"
            size="md"
            color="indigo"
          />
        </div>
        <div className="flex justify-center py-5">
          <button
            className="px-8 py-3 bg-deep-purple-600 text-white rounded-lg"
            onClick={RegistationSucess}
          >
            Submit
          </button>
        </div>
      </from>
    </div>
  );
};

export default Apply;
