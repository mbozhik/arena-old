import About from "../Component/TicketAssets/About";
import Certification from "../Component/TicketAssets/Certification";
import Module from "../Component/TicketAssets/Module";
import Price from "../Component/TicketAssets/Price";
import Steps from "../Component/TicketAssets/Steps";
import Video from "../Component/TicketAssets/Video";


const page = () => {
  
    return (
        <div>
            <Video/>
            <Steps/>
            <Module/>
            <Price/>
            <About/>
            <Certification/>
        
        </div>
    );
};

export default page;
