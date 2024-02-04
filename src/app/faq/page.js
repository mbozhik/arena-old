import { AccordionCustomStyles } from "../Component/Faq";

const page = () => {
    return (
        <div className="container mx-auto mt-5">
            {/* <h1 className="text-3xl text-center mt-5 font-bold">Frequently Asked Questions</h1> */}
            <div >
  <h2 className="title lg:text-4xl font-bold drop-shadow-lg py-2 text-center">
    <span className="title-word title-word-1"> Frequently</span>
    <span className="title-word title-word-2"> Asked </span>
    {/* <span className="title-word title-word-3">my</span> */}
    <span className="title-word title-word-4">Questions</span>
  </h2>

      </div>
            <div className="mt-5">
            <AccordionCustomStyles/>
            </div>
        
            
        </div>
    );
};

export default page;