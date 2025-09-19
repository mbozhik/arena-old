import axios from 'axios'
import ShortFrom from '../Component/ShortFrom'
import ContactForm from '../Component/ContactForm'
const Contact = () => {
  return (
    <div className="container mx-auto">
      <div className="shadow-sm bg-gradient-to-r from-[#56b5e3] to-[#7d58a5] rounded-sm py-3 mb-5 mt-5">
        <h4 className="text-[28px] font-medium text-white text-center my-4 font-poppins">Contact & Address</h4>
      </div>
      <div className="gap-10 px-2 py-5 lg:flex lg:px-3 md:px-2" id="main">
        <div className="lg:w-1/2">
          <ContactForm />
        </div>
        <div className="mt-5 lg:w-1/2 md:mt-0">
          <div className="h-[400px] xl:h-[400px] 2xl:h-[400px] ">
            <iframe className="border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4921053577773!2d90.42471487599451!3d23.76548448819581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9998b8a324f%3A0xc7e89d05a8adc2e1!2sArena%20Web%20Security%20-%20The%20Hacker&#39;s%20Arena!5e0!3m2!1sen!2sbd!4v1685432813512!5m2!1sen!2sbd" title="map" height="100%" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
