import Counter from '../Utility/Counter'

const CourseStatistic = () => {
  return (
    <div className="container relative pt-8 md:pt-10">
      {/* Header Section */}
      <div className="mb-10 text-center">
        <h5 className="text-[32px] font-bold text-[#7BAADA] mb-2 font-poppins">Company Statistics</h5>
        <p className="text-[14px] text-[#757575] font-normal">Statistics measures the whole progressing report which is organised by Arena Web Security.</p>
      </div>

      {/* Statistics Card */}
      <div className="w-full bg-white rounded-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)] p-8">
        <Counter />
      </div>
    </div>
  )
}

export default CourseStatistic
