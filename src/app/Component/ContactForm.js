'use client'
import {useState} from 'react'
import Contact from '../AllDataFatchingFunction/Contact'
import {IoVolumeHigh} from 'react-icons/io5'
import axios from 'axios'
import ApiUrl from '../AllDataFatchingFunction/ApiUrl'
const ContactForm = () => {
  const [pending, setPending] = useState(false)
  const [reset, setReset] = useState(false)
  const UserLogin = (e) => {
    e.preventDefault()

    const newFormData = new FormData(e.target)
    let object = Object.fromEntries(newFormData)
    Contact(newFormData)
    axios
      .post(ApiUrl.Contact, newFormData)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Mail sent successfully.  We will contact  soon  ',
            showConfirmButton: false,
            showDenyButton: true,
            denyButtonText: `ok`,
            timer: 2000,
          }).then(() => {
            e.target.reset()
          })
        }
      })
      .catch((error) => console.log(error))
  }
  return (
    <div className=" w-[100%] h-auto">
      <form className="p-3 border " onSubmit={(e) => UserLogin(e)}>
        <h1 className="text-[20px] font-normal text-[#6FC0E7] text-center">Contact With Us</h1>
        <p className="text-sm font-normal  text-center text-[#494C50]">Write your name, mobile number and message and send</p>
        <div className="">
          <div className="relative z-0 w-4/5 mx-auto mt-5 mb-5 md:w-4/5 group">
            <input
              type="text"
              name="name"
              id="floating_email"
              className="block py-2.5 px-2 w-full text-sm font-normal text-[#778899] font-[Poppins]  
    bg-[#F5F5F5] appearance-none focus:outline-none focus:ring-0 peer"
              placeholder="Name "
              required
            />
          </div>

          <div className="relative z-0 w-4/5 mx-auto mt-5 mb-5 md:w-4/5 group">
            <input type="text" name="email" id="floating_email" className="block py-2.5 px-2 w-full text-sm font-normal text-[#778899] font-[Poppins] bg-[#F5F5F5] appearance-none focus:outline-none focus:ring-0 peer" placeholder="Enter Your Email" required />
          </div>

          <div className="w-4/5 mx-auto mt-5 md:w-4/5">
            <textarea name="message" className="w-full min-h-[100px] px-3 py-2.5 text-sm font-normal text-[#778899] font-[Poppins] bg-[#F5F5F5] resize-none rounded-[7px] focus:outline-none focus:ring-0 placeholder:text-[#778899]" placeholder="Message" required></textarea>
          </div>

          <div className="flex justify-center">
            <button className={`w-4/5  mt-4 py-2 ${pending ? 'bg-[#90bde0]' : 'bg-gradient-to-r from-[#56b5e3] to-[#7d58a5] rounded-sm py-1 mb-5 mt-5'} text-white rounded-lg`} type="submit">
              Send Email
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
