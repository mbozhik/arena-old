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
      <div className="mt-5 mx-auto shadow-[0px_0px_5px_0px_rgba(0,0,0,0.3)] my-10 rounded-2xl relative overflow-hidden">
        <div className="flex 2xl:h-[640px] xl:h-[90vh] lg:h-[50vh] overflow-clip gap-2 relative flex-col xl:flex-row">
          <div className="relative w-full xl:w-[50%]">
            <div className="px-5 py-6 text-white bg-gradient-to-bl from-[#7d58a5] to-[#56b5e3] rounded-s-2xl text-center h-full">
              {/* Admission Info */}
              <h1 className="text-2xl font-semibold text-[#FFD321] uppercase mt-2">Admission 2025</h1>
              <hr className="mx-10 my-3 border-black/10" />
              <h2 className="text-xl font-semibold text-[#FFD321]">Admission going on</h2>
              <p className="mt-1">
                Duration : <span className="text-[#FFD321] font-semibold text-1xl ">4 Months </span>
                of Hands-on training
              </p>
              <hr className="mx-10 my-3 border-black/10 " />

              {/* Master Ethical Hacking */}
              <h3 className="mt-4 text-xl font-medium text-white">Master the art of</h3>
              <h2 className="text-xl font-semibold text-[#FFD321]">Ethical Hacking</h2>

              {/* Topics */}
              <ul className="max-w-xs mx-auto mt-5 space-y-2 text-left text-white">
                <li className="flex items-center gap-x-1">
                  <AiOutlineSafety className="text-2xl text-[#FFD321]" />
                  Cyber Security
                </li>
                <li className="flex items-center gap-x-1">
                  <AiOutlineSafety className="text-2xl text-[#FFD321]" />
                  Digital Forensics
                </li>
                <li className="flex items-center gap-x-1">
                  <AiOutlineSafety className="text-2xl text-[#FFD321]" />
                  Freelancing
                </li>
                <li className="flex items-center gap-x-1">
                  <AiOutlineSafety className="text-2xl text-[#FFD321]" />
                  Open Source Intelligence
                </li>
                <li className="flex items-center gap-x-1">
                  <AiOutlineSafety className="text-2xl text-[#FFD321]" />
                  Linux
                </li>
              </ul>

              <div className="w-full xl:w-[45%] mx-auto h-[200px] mt-4">
                <img src="/Cy.png" className="w-full h-full" alt="image" />
              </div>
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
