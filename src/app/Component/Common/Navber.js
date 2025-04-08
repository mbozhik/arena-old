import Image from "next/image";
import "@/app/globals.css";
import Logo from "@/app/Images/Banner/Logo.png";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import NavberData from "@/app/AllDataFatchingFunction/Topber";
import { cookies } from "next/headers";
import LogOut from "../Utility/Logout";
// import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import MobileNav from "../Utility/MobileNav";
import Marque from "../Utility/Marque";
import Navparents from "./Navparents";
const Navber = async () => {
  const data = await NavberData();
  const cookieStore = cookies();
  const cookieValue = cookieStore.get("uid");
  const uid = cookieValue?.value;
  return (
    <div className=" w-full !top-0 z-50">
      <Navparents data={data} uid={uid}/>
    {/* <div className="fixed w-full !top-0 z-50 ">
      <Marque data={data}/>
      <MobileNav uid={uid}/>
    </div> */}
    </div>
    
  );
};
export default Navber;
