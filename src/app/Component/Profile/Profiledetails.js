import ProfileData from "@/app/AllDataFatchingFunction/ProfileData";
import male from "@/app/Images/profile/AZMail.jpg";
import female from "@/app/Images/profile/AzFemail.jpg";
import logo from "@/app/Images/profile/logo.png";
import Image from "next/image";
const Profiledetails = async ({ data, paymetdata }) => {
  // console.log(paymetdata?.data?.total.total_amount);
  return (
    <div className="  flex flex-col md:flex-row w-full  rounded-md bg-white">
      {/* Left Sidebar */}
      <div className="w-full md:w-[35%]  text-white p-6 flex flex-col items-center profile_img_sec">
        <div className="bg-white p-2 rounded-full w-32 h-32 md:w-40 md:h-40">
          <Image
            src={male}
            alt="User Image"
            className="w-full h-full rounded-full object-cover"
          />
            {/* <img className="profileImg " src={data?.data.gender=='male'?male:female} alt="" /> */}
        </div>
        <p className="mt-4 text-sm">ID: #{data?.data.u_id}</p>
        <h2 className="text-lg font-medium">{data?.data.Fullname}</h2>

        <div className="mt-4 text-center w-full ">
          <p className="bg-white text-black py-1 font-medium rounded-md mb-2">
            Admission Status
          </p>

          {/* {paymetdata?.data?.total.total_amount >=
          data?.data?.course_fee_divide ? (
            <p className="text-green-300 font-medium">Admission Done</p>
          ) : paymetdata?.data?.total.total_amount <
            data?.data?.course_fee_divide ? (
            <p className="text-yellow-500 font-medium">Seat Booking</p>
          ) : (
            <p className="text-red-300 font-medium">Pending</p>
          )} */}
          {data?.data?.discount_user ? (
  <p className="text-green-300 font-medium">Admission Done</p>
) : !paymetdata?.data?.total?.total_amount ||
  paymetdata?.data?.total?.total_amount === 0 ? (
  <p className="text-yellow-600 font-medium">Pending</p>
) : paymetdata?.data?.total.total_amount >= data?.data?.course_fee_divide ? (
  <p className="text-green-300 font-medium">Admission Done</p>
) : (
  <p className="text-yellow-500 font-medium">Seat Booking</p>
)}

        </div>

        <div className="mt-4 text-center">
          <p className="bg-white text-black py-1 font-medium rounded-md mb-2">
            Course Title
          </p>
          <p className="text-sm">{data?.data.batch_schedule_name}</p>
        </div>
      </div>

      {/* Right Details */}
      <div className="w-full md:w-[65%] ">
        <div className="profile_title">
          <h3 className="text-white text-xl font-medium">Personal Details</h3>
        </div>

        <div className="p-5 space-y-2">
          <div className="grid grid-cols-5 gap-y-3 gap-x-4 lg:p-5">
            <span className="font-medium">Name:</span>
            <span className="col-span-4">{data?.data.Fullname}</span>

            <span className="font-medium">Phone:</span>
            <span className="col-span-4">{data?.data.phn}</span>

            <span className="font-medium">Email:</span>
            <span className="col-span-4">{data?.email}</span>

            <span className="font-medium">Nid:</span>
            <span className="col-span-4">{data?.data.nid}</span>

            <span className="font-medium">Birth Date:</span>
            <span className="col-span-4">{data?.data.dob}</span>

            <span className="font-medium">Gender:</span>
            <span className="col-span-4">{data?.data.gender}</span>

            <span className="font-medium">Institute:</span>
            <span className="col-span-4">{data?.data.institute}</span>

            <span className="font-medium">Address:</span>
            <span className="col-span-4">{data?.data.p_address}</span>

            <span className="font-medium">City:</span>
            <span className="col-span-4">{data?.data.city}</span>

            <span className="font-medium">Hobby:</span>
            <span className="col-span-4">{data?.data.hobby}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiledetails;
