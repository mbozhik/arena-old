import {AccordionCustomStyles} from '../Component/Faq'

const page = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="shadow-sm bg-gradient-to-r from-[#56b5e3] to-[#7d58a5] rounded-sm py-3 mb-5 mt-5">
        <h4 className="text-[28px] font-medium text-white text-center my-4 font-poppins">FAQ</h4>
      </div>

      <div className="mt-5">
        <AccordionCustomStyles />
      </div>
    </div>
  )
}

export default page
