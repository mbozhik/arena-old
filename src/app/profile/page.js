import {PaymentModal} from '../Component/Common/Payment'
import BkashPayment from '../Component/Common/BkashPyament'
import PaymentDetails from '../Component/Profile/PaymentDetails'
import ProfileTime from '../Component/Profile/ProfileTime'
import Profiledetails from '../Component/Profile/Profiledetails'
import ProfileData from '../AllDataFatchingFunction/ProfileData'
import NavberData from '../AllDataFatchingFunction/Topber'
import PaymentHistory from '../AllDataFatchingFunction/PaymentHistory'
const page = async () => {
  const data = await ProfileData()
  const paymetdata = await PaymentHistory()
  const course = await NavberData()
  let newData = course?.find((x) => x.batch_schedule_time_id == data?.data?.batch_schedule_time_id)
  let courseFee = newData?.course_fee

  // console.log("admission value:", data?.data.admission);
  // console.log("type of admission:", typeof data?.data.admission);

  return (
    <div className="relative px-3 md:px-12">
      {data?.data.admission === true ? (
        <></>
      ) : (
        <>
          <h6 className="mt-5 text-center CountTitle">Admission Time Remaining</h6>
          <div className="relative ProfileImages"></div>
          <ProfileTime />
        </>
      )}

      <div className={data?.data.admission === true ? 'mt-20' : ''}>
        <Profiledetails data={data} paymetdata={paymetdata} />
      </div>

      <PaymentDetails courseFee={courseFee} paymetdata={paymetdata} />
      <BkashPayment />
      <div className="mt-3 md:mt-10">
        <PaymentModal />
      </div>
    </div>
  )
}

export default page
