

import ProfileData from '@/app/AllDataFatchingFunction/ProfileData';
import male from '@/app/Images/profile/AZMail.jpg'
import female from '@/app/Images/profile/AzFemail.jpg'
import logo from '@/app/Images/profile/logo.png'
import Image from 'next/image';
const Profiledetails = async({data,paymetdata}) => {
    console.log(paymetdata?.data?.total.total_amount);
    return (
        <div className="  relative container mx-auto">
        <article className='flex'>
            <Image src={male} alt='Arena Web and Security' className='h-52 w-52 rounded-full border-2 border-yellow-800 -mt-10'/>
            <div className='mt-14 pl-10'>
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
                   paymetdata?.data?.total.total_amount < data?.data?.course_fee_divide && <span className='text-light-blue-800'> Set Booking</span>
                } 
                </p>
                <p  className=' text-1xl'> {data?.data.batch_schedule_name}</p>
            </div>


        </article>
        <article>
            <h4 className=' py-3 text-white mt-4 text-center applicationTitle text-3xl font-semibold'>Personal Details</h4>
            <div className='py-5 px-5'>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>Name </p>
                    <p className='col-span-8 '>: {data?.data.Fullname}</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>Phone </p>
                    <p className='col-span-8 '>: {data?.data.phn}</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>Email</p>
                    <p className='col-span-5 '>: {' '+data?.email}</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>Nid</p>
                    <p className='col-span-8 '>:{' '+ data?.data.nid}</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>Birth Date</p>
                    <p className='col-span-8 '>:{' '+ data?.data.dob}</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>Gender</p>
                    <p className='col-span-8 '>: {' '+ data?.data.gender}</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>Address </p>
                    <p className='col-span-8 '>:  {' '+ data?.data.p_address}</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>City </p>
                    <p className='col-span-8 '>: {' '+ data?.data.city}</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>Institute </p>
                    <p className='col-span-8 '>: {' '+ data?.data.institute}</p>
                </li>
                <li className='grid grid-cols-10'>
                    <p className='col-span-1 font-semibold'>Hobby </p>
                    <p className='col-span-8 '>: {' '+ data?.data.hobby}</p>
                </li>
            </div>
        </article>
    </div>
    );
};

export default Profiledetails;