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
    <div className="flex flex-col w-full gap-8 overflow-hidden md:flex-row md:gap-8 lg:gap-12">
      {/* Left Sidebar - Fixed avatar positioning and proper alignment */}
      <div className="w-full md:w-[35%] text-white p-4 md:p-6 flex flex-col items-center bg-gradient-to-br from-[#7d58a5] to-[#56b5e3] rounded-xl overflow-hidden shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)]">
        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <div className="p-2 bg-white rounded-full shadow-xl w-28 h-28 md:w-36 md:h-36">
              <Image src={male} alt="User Image" className="object-cover w-full h-full border-4 border-gray-100 rounded-full" width={144} height={144} />
            </div>
          </div>

          {/* User Info */}
          <div className="mt-4 space-y-1 text-center">
            <p className="text-sm font-medium text-white/90">ID: #{data?.data.u_id}</p>
            <h2 className="text-lg font-semibold leading-tight text-white md:text-xl">{data?.data.Fullname}</h2>
          </div>
        </div>

        {/* Status Cards Section */}
        <div className="flex flex-col justify-end flex-1 w-full space-y-3">
          {/* Admission Status */}
          <div className="w-full">
            <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
              <p className="mb-2 text-xs font-medium tracking-wide text-center text-gray-600 uppercase">Admission Status</p>
              <div className="flex justify-center">
                {/* Admission status logic with proper conditions */}
                {data?.data?.discount_user ? (
                  // User has discount - admission done
                  <p className="w-full px-4 py-2 text-sm font-bold text-center text-white rounded-full shadow-md bg-gradient-to-r from-green-500 to-green-600">Admission Done</p>
                ) : !paymetdata?.data?.total?.total_amount || paymetdata?.data?.total?.total_amount === 0 ? (
                  // No payment or zero amount - pending status
                  <p className="w-full px-4 py-2 text-sm font-bold text-center text-white border-2 border-orange-400 rounded-full shadow-md bg-gradient-to-r from-orange-500 to-red-500">Pending</p>
                ) : paymetdata?.data?.total.total_amount >= data?.data?.course_fee_divide ? (
                  // Payment meets course fee requirement - admission done
                  <p className="w-full px-4 py-2 text-sm font-bold text-center text-white rounded-full shadow-md bg-gradient-to-r from-green-500 to-green-600">Admission Done</p>
                ) : (
                  // Partial payment - seat booked
                  <p className="w-full px-4 py-2 text-sm font-bold text-center text-white rounded-full shadow-md bg-gradient-to-r from-blue-500 to-blue-600">Seat Booking</p>
                )}
              </div>
            </div>
          </div>

          {/* Course Title */}
          <div className="w-full">
            <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
              <p className="mb-2 text-xs font-medium tracking-wide text-center text-gray-600 uppercase">Course Title</p>
              <div className="flex justify-center">
                <p className="w-full text-sm font-semibold text-white bg-gradient-to-r from-[#7BAADA] to-[#5BA9DB] px-4 py-2 rounded-md text-center">{data?.data.batch_schedule_name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Details - Enhanced layout with better spacing */}
      <div className="w-full md:w-[65%] bg-white rounded-xl overflow-hidden shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#7BAADA] to-[#5BA9DB] py-4 px-6">
          <h3 className="text-xl font-semibold text-white">Personal Details</h3>
          <p className="mt-1 text-sm text-white/80">Complete information about your profile</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <DataCard label="Name" value={data?.data.Fullname} color="#7BAADA" />
            <DataCard label="Phone" value={data?.data.phn} color="#5BA9DB" />
            <DataCard label="Email" value={data?.email} color="#7BAADA" />
            <DataCard label="NID" value={data?.data.nid} color="#5BA9DB" />
            <DataCard label="Birth Date" value={data?.data.dob} color="#7BAADA" />
            <DataCard label="Gender" value={data?.data.gender} color="#5BA9DB" />
            <DataCard label="Institute" value={data?.data.institute} color="#7BAADA" />
            <DataCard label="Address" value={data?.data.p_address} color="#5BA9DB" />
            <DataCard label="City" value={data?.data.city} color="#7BAADA" />
            <DataCard label="Hobby" value={data?.data.hobby} color="#5BA9DB" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profiledetails
