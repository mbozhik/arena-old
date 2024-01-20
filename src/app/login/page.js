import Image from "next/image";
import Logo from "@/app/admission/Logo.png";
import Login from "../Component/Login";
const page = () => {
  return (
    <div className="px-20 mt-5">
      <div className="flex h-[80vh] gap-2 ">
        <div className="relative w-[50%] ">
          <article className="admissionSideber w-[100%] h-[100%]"></article>
          <div className="absolute top-0 left-0 h-[100%] w-[100%] px-5">
            <div className="flex justify-center mt-4">
              <Image src={Logo} alt="Logo" className="w-44" />
            </div>
            <div className="flex  items-center h-full ">
              <div>
                <h1 className="text-4xl font-bold   text-white pl-20 ">
                  Welcome back!
                </h1>
                <p className="text-1xl font-medium   text-white pl-20 mt-4">
                  We are glad to see you again! Get access to your Orders,
                  Wishlist and Recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default page;
