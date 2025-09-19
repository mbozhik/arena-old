import right from "@/app/admission-form/right.svg"
import Image from "next/image";
const page = () => {
    return (
        <div className="lg:px-20 mt-10 md:px-5 px-3">
            <h1 className="text-3xl font-bold text-purple-500">PRIVACY POLICY OF ARENA</h1>
            <p className="mt-1">This privacy notice for Arena Web Security, describes how and why we might collect, store, use, (process your information when you use our services Services), such as when you:</p>
             <div className="pl-10 mt-5">
             <p className="flex items-center gap-x-2 "><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Cyber Register at our website at arenawebsecurity.net, or any website of ours that links to this privacy notice</p>
             <p className="flex items-center gap-x-2 "><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Engage with us in other related ways, including any sales, marketing, or events</p>     
             </div>
             <h3 className="text-[20px] font-semibold mt-3"> Questions or concerns?</h3>
             <p className="pl-10 mt-1">Reading this privacy notice will help you understand your privacy rights and choices.</p>
             <h3 className="text-2xl font-semibold mt-5"> SUMMARY OF KEY POINTS</h3>
             <h3 className="text-[20px] font-semibold mt-3">What personal information do we process?</h3>
             <p className="mt-1">When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Arena Web Security and the Services, the choices you make, and the service and features you use. The personal information we collect may include the following:</p>
             <div className="pl-10 mt-5">
             <p className="flex items-center gap-x-2 "><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Names</p>
             <p className="flex items-center gap-x-2 "><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Phone numbers</p>     
             <p className="flex items-center gap-x-2 "><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Phone Email addresses</p>     
             <p className="flex items-center gap-x-2 "><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Phone Job titles</p>     
             <p className="flex items-center gap-x-2 "><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Phone Contact or authentication data</p>     
             <p className="flex items-center gap-x-2 "><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Phone Billing addresses</p>     
             </div>
             <h3 className="text-[20px] font-semibold mt-3">  Do we process any sensitive personal information?</h3>
             <p className="mt-1">We do not process sensitive personal information.</p>
             <h3 className="text-[20px] font-semibold mt-3"> How do we process your information?</h3>
             <p className="mt-1">We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</p>
             <h3 className="text-[20px] font-semibold mt-3"> In what situations and with which parties do we share personal information?</h3>
             <p className="mt-1">We do not share information in specific situations and with specific third parties except</p>
             <div className="pl-10 mt-5">
             <p className="flex items-center gap-x-2 "><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Any regulatory, supervisory or government authority having jurisdiction over Arena Web Security
</p>
             <p className="flex items-center gap-x-2 "><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Any person to whom Arena Web Security is required or authorized by law or a court of law to disclose such information</p>     
             </div>
             <h3 className="text-[20px] font-semibold mt-3">How do we keep your information safe?</h3>
             <p className="mt-1">We have organizational and technical processes and procedures in place to protect your personal information.</p>
             <h3 className="text-2xl font-semibold mt-5"> PAYMENT DATA</h3>
             <p className="mt-1">We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a Bkash), and the security code associated with your payment instrument. All payment data is stored by Bkash. You may find their privacy in their website. All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
             <h3 className="text-[20px] font-semibold mt-3"> Withdrawing your consent:</h3>
             <p className="mt-1">You can withdraw your consent at any time by contacting us through email (info@arenawebsecurity.net) or via hotline (+880 1310 333 444)</p>

        </div>
    );
};

export default page;