import Image from 'next/image'
import Navber from './Component/Common/Navber'
import Banner from './Component/home/Banner'
import Courses from './Component/home/Courses'
import About from './Component/home/About'
import Services from './Component/home/Services'
import Events from './Component/home/Events'
import CourseStatistic from './Component/home/CourseStatistic'
import Preview from './Component/home/Preview'
import OurConcern from './Component/home/OurConcern'

export default function Home() {
  return (
    <div className="relative ">
      <Banner />
      {/* <About /> */}
      <Courses />
      <Services />
      {/* <Events/> */}
      <CourseStatistic />
      <Preview />
      <OurConcern />
    </div>
  )
}
