

import male from '@/app/Images/profile/AZMail.jpg'
import female from '@/app/Images/profile/AzFemail.jpg'
import logo from '@/app/Images/profile/logo.png'
import Image from 'next/image';
const Profiledetails = () => {
    return (
        <div className="  relative container mx-auto">
        <article className='flex'>
            <Image src={male} alt='Arena Web and Security' className='h-52 w-52 rounded-full border-2 border-yellow-800 -mt-10'/>
            <div className='mt-14 pl-10'>
                <h3 className='font-bold text-2xl'>Md Shaharia</h3>
                <p  className='font-semibold text-1xl'>#5465465465</p>
                <p  className='font-semibold text-1xl'>Admission <span className='text-yellow-800'>Panding</span></p>
                <p  className=' text-1xl'> Cyber Security and Advance Python (Combo Offer)</p>
            </div>


        </article>
        <article>
            <h4 className=' py-3 text-white mt-4 text-center applicationTitle text-3xl font-semibold'>Personal Details</h4>
            <div className='py-5 px-5'>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>Name </p>
                    <p className='col-span-8 '>: Md Shaharia</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>Phone </p>
                    <p className='col-span-8 '>: +8801707018322</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>Email</p>
                    <p className='col-span-5 '>: adeptshaharia@gmail.com</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>Nid</p>
                    <p className='col-span-8 '>: 3754564532145</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>Birth Date</p>
                    <p className='col-span-8 '>: 25-05-2000</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>Gender</p>
                    <p className='col-span-8 '>: Male</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>Address </p>
                    <p className='col-span-8 '>: Brahmanbaria,Chittagong</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>City </p>
                    <p className='col-span-8 '>: Brahmanbaria</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>Institute </p>
                    <p className='col-span-8 '>: Brahmanbaria Govt College</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>Hobby </p>
                    <p className='col-span-8 '>: Catchig Fish</p>
                </li>
            </div>
        </article>
    </div>
    );
};

export default Profiledetails;