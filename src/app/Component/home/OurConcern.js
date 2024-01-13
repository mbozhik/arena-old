import Image from "next/image";
import img from '@/app/Images/Concern/ict.svg'
import img1 from '@/app/Images/Concern/sena_kalyan.svg'
import img2 from '@/app/Images/Concern/porzotok.svg'
import img3 from '@/app/Images/Concern/polli_Academy.svg'
import img4 from '@/app/Images/Concern/henan.svg'
import img5 from '@/app/Images/Concern/defense.svg'
import img6 from '@/app/Images/Concern/cyber71.svg'
import img7 from '@/app/Images/Concern/buet.svg'
import img8 from '@/app/Images/Concern/bpplastic.svg'
import img9 from '@/app/Images/Concern/airForce.svg'
import Marquee from "react-fast-marquee";

const OurConcern = () => {
    return (
        <div className="bg-[#EBE7F8] px-20 lg:mt-16 h-auto ">
            <div className="flex justify-center">
            <div className="relative pt-20">
                        <h3 className="lg:text-3xl font-bold  pb-2  ">Our Concerns</h3>
                        <p className="w-48 bg-[#ffd321] h-[3px]"></p>
            </div>

            </div>
            
            <div className=" py-10">
            <Marquee 
            direction='right'
            gap='20px'
            // style={{ marginRight: '20px' }}
        
            >
         
                    <Image src={img}  style={{ marginRight: '20px' }}  className="rounded-md " alt="ict" width={200} height={200}/>
                    <Image src={img1}  style={{ marginRight: '20px' }} className="rounded-md" alt="ict" width={200} height={200}/>
                    <Image src={img2}  style={{ marginRight: '20px' }} className="rounded-md" alt="ict" width={200} height={200}/>
                    <Image src={img3} style={{ marginRight: '20px' }}  className="rounded-md" alt="ict" width={200} height={200}/>
                    <Image src={img4} style={{ marginRight: '20px' }} className="rounded-md" alt="ict" width={200} height={200}/>
                    <Image src={img5} style={{ marginRight: '20px' }} className="rounded-md" alt="ict" width={200} height={200}/>
                    <Image src={img6} style={{ marginRight: '20px' }} className="rounded-md" alt="ict" width={200} height={200}/>
                    <Image src={img7} style={{ marginRight: '20px' }} className="rounded-md" alt="ict" width={200} height={200}/>
                    <Image src={img8} style={{ marginRight: '20px' }} className="rounded-md" alt="ict" width={200} height={200}/>
                    <Image src={img9} style={{ marginRight: '20px' }} className="rounded-md" alt="ict" width={200} height={200}/>
                    </Marquee>
 

            </div>
          
            
        </div>
    );
};
export default OurConcern;