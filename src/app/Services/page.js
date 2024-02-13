import { AllServices } from "../Component/Services/AllServices";

export const metadata = {
    title: 'Cybersecurity & Tech Courses | Arena Web  Security',
    description: ' We are offering courses in cyber security, ethical hacking, OSINT, Linux, software development, and networking security.',
  }; 
const Page = () => {
    return (
        <div>
            <AllServices/>
            
        </div>
    );
};

export default Page;