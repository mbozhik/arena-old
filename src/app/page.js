import Image from 'next/image'
import Navber from './Component/Common/Navber'
import Banner from './Component/home/Banner'
import Courses from './Component/home/Courses'
import About from './Component/home/About'
import Services from './Component/home/Services'
import Events from './Component/home/Events'
import CourseStatistic from './Component/home/CourseStatistic'

export default function Home() {
  return (
   <div className='overflow-hidden'>
    <Banner/>
    <About/>
    <Courses/>
    <Services/>
    <Events/>
    <CourseStatistic/>
    </div>
  )
}
