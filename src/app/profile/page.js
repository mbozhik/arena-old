import { PaymentModal } from "../Component/Common/Payment";
import BkashPayment from "../Component/Common/BkashPyament";
import PaymentDetails from "../Component/Profile/PaymentDetails";
import ProfileTime from "../Component/Profile/ProfileTime";
import Profiledetails from "../Component/Profile/Profiledetails";
const page = () => {
  return (
    <div className="relative">
      <div className="ProfileImages relative"></div>
       <ProfileTime/>
      <Profiledetails />
      <PaymentDetails/>
      <BkashPayment/>
      <div className="mt-10">
      <PaymentModal/>
      </div>
      
    </div>
  );
};

export default page;
