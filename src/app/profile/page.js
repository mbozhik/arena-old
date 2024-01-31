import { PaymentModal } from "../Component/Common/Payment";
import BkashPayment from "../Component/Common/BkashPyament";
import PaymentDetails from "../Component/Profile/PaymentDetails";
import ProfileTime from "../Component/Profile/ProfileTime";
import Profiledetails from "../Component/Profile/Profiledetails";
import ProfileData from "../AllDataFatchingFunction/ProfileData";
import NavberData from "../AllDataFatchingFunction/Topber";
import PaymentHistory from "../AllDataFatchingFunction/PaymentHistory";
const page = async() => {
  const data = await ProfileData();
  const paymetdata=await PaymentHistory();
  const course=await NavberData();
   let newData= course?.find((x)=>x.batch_schedule_time_id == data?.data?.batch_schedule_time_id);
   let courseFee=newData?.course_fee;
  

 
  return (
    <div className="relative">
      <div className="ProfileImages relative"></div>
       <ProfileTime/>
      <Profiledetails data={data}  paymetdata={paymetdata} />
      <PaymentDetails courseFee={courseFee} paymetdata={paymetdata}/>
      <BkashPayment/>
      <div className="mt-10">
      <PaymentModal/>
      </div>
      
    </div>
  );
};

export default page;
