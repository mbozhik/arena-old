"use client";
import { Input, Option, Select,SelectOptionProps, select} from "@material-tailwind/react";
import Image from "next/image";
import Logo from '@/app/admission/Logo.png'
import right from "@/app/admission/right.svg"

const Apply = () => {
    return (
        <from className="w-[50%] shadow-sm  px-5 applyCardPadding">
        <h1 className="text-3xl font-bold py-2 text-center  applicationTitle text-[#FFD321]">Student Application Form</h1>
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
            <Select required variant="standard"  label="Nationality" id='Nationality' >
              <Option >Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>
          <div className="w-full col-span-3  border-b border-[#B0BEC5] grid grid-cols-3 gap-x-2 relative ">
            <p className="absolute -top-3 left-0 text-sm text-[#B0BEC5]">Date Of Birth <span className="text-red-400">*</span></p>
            <select className="outline-none  ">
                <option className="bg-[#B0BEC5]" >day</option>
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
     
            <Select  required variant="standard" label="Select a Course *"  >
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
          <p className=" text-green-300 text-2xl font-semibold">Educational Background</p>
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
          <p className=" text-green-300 text-2xl font-semibold">Alternative Contact </p>
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
          <p className=" text-green-300 text-2xl font-semibold">Interest/Hobbies</p>
        </div>
        <Input
              variant="standard"
              label="Present Address"
              size="md"
              color="indigo"
            />
        <div className="flex">
          <p className=" text-green-300 text-2xl font-semibold">Why do you learn Cyber Security / Python?</p>
        </div>
        <Input
              variant="standard"
              label="Type Your Ans Hare"
              size="md"
              color="indigo"
            />
      
      </div>
      <div className="flex justify-center py-5">
      <button className="px-8 py-3 bg-deep-purple-600 text-white rounded-lg">Submit</button>
      </div>
    </from>
    );
};

export default Apply;