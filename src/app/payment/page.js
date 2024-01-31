import BkashPayment from "../Component/Common/BkashPyament";
import { PaymentModal } from "../Component/Common/Payment";
import PaymentDetails from "../Component/Profile/PaymentDetails";
import HwPanelToAwsSite from "./HwPanelToAwsSite";

const page = () => {
    return (
        <div>
             <HwPanelToAwsSite/>
             <BkashPayment/>
             <PaymentModal/>
        </div>
    );
};

export default page;