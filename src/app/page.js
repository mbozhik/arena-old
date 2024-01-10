import Image from 'next/image'
import Navber from './Component/home/Navber'
import Banner from './Component/home/Banner'
import Courses from './Component/home/Courses'

export default function Home() {
  return (
   <div className='overflow-hidden'>
    <Navber/>
    <Banner/>
    <Courses/>
   </div>
  )
}
