import ProfileData from '@/app/AllDataFatchingFunction/ProfileData'
import male from '@/app/Images/profile/AZMail.jpg'
import female from '@/app/Images/profile/AzFemail.jpg'
import logo from '@/app/Images/profile/logo.png'
import Image from 'next/image'

const Profiledetails = async ({data, paymetdata}) => {
  // console.log(paymetdata?.data?.total.total_amount);

  const DataCard = ({label, value, color = '#5BA9DB', bgColor = 'bg-gray-100'}) => (
    <div className={`${bgColor} px-3 py-2 rounded-lg border-l-4`} style={{borderLeftColor: color}}>
      <span className="block text-sm font-medium" style={{color}}>
        {label}:
      </span>
      <span className="block mt-1 text-[#1F202F]">{value}</span>
    </div>
  )

  return (
    <div className="flex flex-col w-full gap-6 overflow-hidden md:flex-row md:gap-10">
      {/* Left Sidebar - Fixed avatar positioning and smaller size */}
      <div className="w-full md:w-[35%] text-white p-2.5 md:p-4 flex flex-col items-center justify-between gap-4 bg-gradient-to-br from-[#7d58a5] to-[#56b5e3] rounded-xl overflow-hidden shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)]">
        <div className="space-y-4">
          <div className="w-24 h-24 p-1.5 bg-white rounded-full shadow-lg md:w-32 md:h-32 mb-4">
            <Image src={male} alt="User Image" className="object-cover w-full h-full rounded-full" />
          </div>

          <div className="space-y-0 text-center">
            <p className="text-sm text-white">ID: #{data?.data.u_id}</p>
            <h2 className="text-lg font-medium text-center text-white">{data?.data.Fullname}</h2>
          </div>
        </div>

        <div className="w-full space-y-2">
          <div className="w-full text-center">
            <div className="p-2 mb-3 bg-white border border-gray-200 rounded-lg shadow-sm xl:p-3">
              <p className="mb-2 text-xs font-medium tracking-wide text-gray-600 uppercase">Admission Status</p>
              {data?.data?.discount_user ? <p className="px-3 py-1 text-sm font-semibold text-green-600 border border-green-200 rounded-full bg-green-50">Admission Done</p> : !paymetdata?.data?.total?.total_amount || paymetdata?.data?.total?.total_amount === 0 ? <p className="text-sm font-semibold text-[#FFD321] bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200">Pending</p> : paymetdata?.data?.total.total_amount >= data?.data?.course_fee_divide ? <p className="px-3 py-1 text-sm font-semibold text-green-600 border border-green-200 rounded-full bg-green-50">Admission Done</p> : <p className="text-sm font-semibold text-[#FFD321] bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200">Seat Booking</p>}
            </div>
          </div>

          <div className="w-full text-center">
            <div className="p-2 bg-white border border-gray-200 rounded-lg shadow-sm xl:p-3">
              <p className="mb-2 text-xs font-medium tracking-wide text-gray-600 uppercase">Course Title</p>
              <p className="text-sm font-semibold text-white bg-gradient-to-r from-[#7BAADA] to-[#5BA9DB] px-3 py-2 rounded-md">{data?.data.batch_schedule_name}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Details - Smaller padding and header */}
      <div className="w-full md:w-[65%] bg-white rounded-xl overflow-hidden shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)]">
        <div className="bg-gradient-to-r from-[#7BAADA] to-[#5BA9DB] py-3 px-4">
          <h3 className="text-lg font-medium text-white">Personal Details</h3>
        </div>

        <div className="p-2.5 md:p-4">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <DataCard label="Name" value={data?.data.Fullname} />
            <DataCard label="Phone" value={data?.data.phn} />
            <DataCard label="Email" value={data?.email} />
            <DataCard label="NID" value={data?.data.nid} />
            <DataCard label="Birth Date" value={data?.data.dob} />
            <DataCard label="Gender" value={data?.data.gender} />
            <DataCard label="Institute" value={data?.data.institute} />
            <DataCard label="Address" value={data?.data.p_address} />
            <DataCard label="City" value={data?.data.city} />
            <DataCard label="Hobby" value={data?.data.hobby} />
            {/* <DataCard label="Field" value={data?.data.something} color="#5BA9DB" color="#7BAADA" />  */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profiledetails
