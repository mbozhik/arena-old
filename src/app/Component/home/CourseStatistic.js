import Counter from '../Utility/Counter'

const CourseStatistic = () => {
  return (
    <div className="container relative pt-8 md:pt-10">
      <div className="text-center bg-white ">
        <h5 className="text-center text-[18px] md:text-[24px] xl:text-[26px] font-bold text-[#7BAADA]  mb-2">Company Statistics</h5>

        <h6 className="text-center text-gray-600 md:text-sm  mb-10 text-[11px]">Statistics measures the whole progressing report which is organised by Arena Web Security.</h6>
      </div>

      <div className="">
        <div className="w-full h-auto bg-transparent">
          <Counter />
        </div>
      </div>
    </div>
  )
}

export default CourseStatistic
