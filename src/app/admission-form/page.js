import Image from 'next/image'
import Logo from '@/app/admission-form/Logo.png'
import right from '@/app/admission-form/right.svg'
import Apply from '../Component/Apply'
import NavberData from '../AllDataFatchingFunction/Topber'
// import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import {AiOutlineSafety} from 'react-icons/ai'

export const metadata = {
  title: 'Ethical Hacking & Advanced Python Course Combo Offer!',
  description: 'Level up your skills in Python and Ethical Hacking! Our expert-led courses empower you to excel in IT security. Enroll now for a brighter future!',
}
const page = async () => {
  const data = await NavberData()
  return (
    <div className="px-3 md:px-12">
      <div className=" mt-5  mx-auto  shadow-[0px_0px_5px_0px_rgba(0,0,0,0.3)]  my-10 pr-3 rounded-2xl relative ">
        <div className="flex 2xl:h-[600px] xl:h-[90vh]  lg:h-[50vh] overflow-clip gap-2 relative  ">
          <div className="relative w-[50%] hidden lg:block">
            <div className="px-5 py-6 bg-gradient-to-bl  from-[#7d58a5] to-[#56b5e3] rounded-s-2xl text-center h-full">
              {/* Admission Info */}
              <h1 className="text-2xl font-mono text-[#FBC453] mt-2 monoFont">Admission 2025</h1>
              <hr className="mx-10 my-3 border-black/10 " />
              <h2 className="text-xl text-[#FFD321] font-medium">Admission going on</h2>
              <p className="mt-1 text-white">
                Duration : <span className="text-[#FBC453] font-semibold text-1xl font-[Poppins]">4 Months </span>
                of Hands-on training
              </p>
              <hr className="mx-10 my-3 border-black/10 " />

              {/* Master Ethical Hacking */}
              <h3 className="mt-4 text-xl font-medium text-white">Master the art of</h3>
              <h2 className="text-xl font-bold text-white font-[Poppins]">
                Ethical <span className="text-[#FFD321]">H</span>ack
                <span className="text-[#FFD321]">i</span>ng
              </h2>

              {/* Topics */}
              <ul className="max-w-xs mx-auto mt-5 space-y-2 text-left text-white">
                <li className="flex items-center gap-x-1">
                  <AiOutlineSafety className="text-2xl text-purple-600" />
                  Cyber Security
                </li>
                <li className="flex items-center gap-x-1">
                  <AiOutlineSafety className="text-2xl text-purple-600" />
                  Digital Forensics
                </li>
                <li className="flex items-center gap-x-1">
                  <AiOutlineSafety className="text-2xl text-purple-600" />
                  Freelancing
                </li>
                <li className="flex items-center gap-x-1">
                  <AiOutlineSafety className="text-2xl text-purple-600" />
                  Open Source Intelligence
                </li>
                <li className="flex items-center gap-x-1">
                  <AiOutlineSafety className="text-2xl text-purple-600" />
                  Linux
                </li>
                <div className="max-w-[350px] max-h-[200px]">
                  <img src="/Cy.png" className="w-[220px] max-h-[150px]" alt="image" />
                </div>
              </ul>
            </div>
          </div>
          {/* Addmission Form */}
          <Apply />
        </div>
      </div>
    </div>
  )
}

export default page
