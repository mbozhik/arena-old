

import ProfileData from '@/app/AllDataFatchingFunction/ProfileData';
import male from '@/app/Images/profile/AZMail.jpg'
import female from '@/app/Images/profile/AzFemail.jpg'
import logo from '@/app/Images/profile/logo.png'
import Image from 'next/image';
const Profiledetails = async({data,paymetdata}) => {
    // console.log(paymetdata?.data?.total.total_amount);
    return (
        <div className="  relative container mx-auto px-3 md:px-0">
        <article className='flex'>
            <Image src={male} alt='Arena Web and Security' className='md:h-52 md:w-52 h-32 w-32 rounded-full border-2 border-yellow-800 md:-mt-10 -mt-5'/>
            <div className='md:mt-14 mt-5 md:pl-10 pl-3'>
                <h3 className='font-bold text-2xl'>{data?.data.Fullname}</h3>
                <p  className='font-semibold text-1xl'>#{data?.data.u_id}</p>
                <p  className='font-semibold text-1xl'>Admission 
                {
                   paymetdata?.data?.total.total_amount>=data?.data?.course_fee_divide && <span className='text-green-500'> Done</span>
                }
                
                 {
                   !paymetdata && <span className='text-yellow-800'> Panding</span>
                }
               {
                   paymetdata?.data?.total.total_amount < data?.data?.course_fee_divide && <span className='text-light-blue-800'> Seat Booking</span>
                } 
                </p>
                <p  className=' text-1xl'> {data?.data.batch_schedule_name}</p>
            </div>


        </article>
        <article>
            <h4 className=' py-3 text-white mt-4 text-center applicationTitle md:text-3xl text-2xl font-semibold'>Personal Details</h4>
            <div className='py-5 px-5'>
                <li className='grid grid-cols-10'>
                    <p className='md:col-span-1 col-span-2 font-semibold'>Name </p>
                    <p className='md:md:col-span-8  col-span-7 '>: {data?.data.Fullname}</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='md:col-span-1 col-span-2 font-semibold'>Phone </p>
                    <p className='md:col-span-8 col-span-7 '>: {data?.data.phn}</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='md:col-span-1 col-span-2 font-semibold'>Email</p>
                    <p className='col-span-5 '>: {' '+data?.email}</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='md:col-span-1 col-span-2 font-semibold'>Nid</p>
                    <p className='md:col-span-8 col-span-7 '>:{' '+ data?.data.nid}</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='md:col-span-1 col-span-2 font-semibold'>Birth Date</p>
                    <p className='md:col-span-8 col-span-7 '>:{' '+ data?.data.dob}</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='md:col-span-1 col-span-2 font-semibold'>Gender</p>
                    <p className='md:col-span-8 col-span-7 '>: {' '+ data?.data.gender}</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='md:col-span-1 col-span-2 font-semibold'>Address </p>
                    <p className='md:col-span-8 col-span-7 '>:  {' '+ data?.data.p_address}</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='md:col-span-1 col-span-2 font-semibold'>City </p>
                    <p className='md:col-span-8 col-span-7 '>: {' '+ data?.data.city}</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='md:col-span-1 col-span-2 font-semibold'>Institute </p>
                    <p className='md:col-span-8 col-span-7 '>: {' '+ data?.data.institute}</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='md:col-span-1 col-span-2 font-semibold'>Hobby </p>
                    <p className='md:col-span-8 col-span-7 '>: {' '+ data?.data.hobby}</p>
                </li>
            </div>
        </article>
    </div>
    );
};

export default Profiledetails;