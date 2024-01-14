import Image from "next/image";
import img from '@/app/Images/Concern/ict.png'
import img1 from '@/app/Images/Concern/sena_kalyan.png'
import img2 from '@/app/Images/Concern/porzotok.png'
import img3 from '@/app/Images/Concern/polli_Academy.png'
import img4 from '@/app/Images/Concern/henan.png'
import img5 from '@/app/Images/Concern/defense.png'
import img6 from '@/app/Images/Concern/c.png'
import img7 from '@/app/Images/Concern/buet.png'
import img8 from '@/app/Images/Concern/bpplastic.png'
import img9 from '@/app/Images/Concern/airForce.png'
import img10 from '@/app/Images/Concern/s.png'
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
                    <Image src={img10} style={{ marginRight: '20px' }} className="rounded-md h-44 w-44" alt="ict" />
                    </Marquee>
 

            </div>
          
            
        </div>
    );
};
export default OurConcern;