"use client";

import { Button, Dialog, DialogFooter } from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import { IoPlayOutline } from "react-icons/io5";
import VideoContent from "../TicketAssets/VideoContent";
import "../../Component/TicketAssets/Video.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

const BannerVaideo = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (data) => {
    // setImage(data)
    setOpen(!open);
  };

  return (
    <div>
      <button className="lg:text-2px font-semibold bg-[#00ffca] rounded-full !h-[40px]  w-10 flex justify-center video items-center">
        {/* <IoPlayOutline className="text-black" onClick={handleOpen} /> */}
        <Link href='admission'><AiOutlineArrowLeft className="text-black" /></Link>
        
      </button>
      <Dialog open={open} handler={handleOpen} size="md">
        {/* <Image src={img} alt="bkash" className="h-[80%]"/> */}

        <VideoContent props={true} />

        <DialogFooter>
          <Button variant="gradient" color="red" onClick={handleOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default BannerVaideo;
