import About from "../Component/TicketAssets/About";
import Certification from "../Component/TicketAssets/Certification";
import Gallery from "../Component/TicketAssets/Gallery";
import Module from "../Component/TicketAssets/Module";
import Price from "../Component/TicketAssets/Price";
import Refund from "../Component/TicketAssets/Refund";
import Review from "../Component/TicketAssets/Review";
import Statistics from "../Component/TicketAssets/Statistics";
import Steps from "../Component/TicketAssets/Steps";
import Team from "../Component/TicketAssets/Team";
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
            <Review/>
            <Statistics/>
            <Gallery/>
            <Refund/>
            <Team/>
        
        </div>
    );
};

export default page;
