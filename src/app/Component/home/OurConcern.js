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
        <div className=" lg:mt-16  relative h-[500px] bg-[#fbfcfd]">
          
            <div className="flex justify-center">
            <div className="relative pt-20">
                        <h3 className="lg:text-3xl font-bold  pb-2  ">Our Concerns</h3>
                        <p className="w-48 bg-[#ffd321] h-[3px]"></p>
            </div>

            </div>
            
             <div className="absolute bottom-5  ">
            <Marquee 
            direction='right'
            gap='20px'
            // style={{ marginRight: '20px' }}
        
            >
         
                    <Image src={img}  style={{ marginRight: '20px' }}  className="rounded-md " alt="ict" width={120} height={120}/>
                    <Image src={img1}  style={{ marginRight: '20px' }} className="rounded-md" alt="ict"width={120} height={120} />
                    <Image src={img2}  style={{ marginRight: '20px' }} className="rounded-md" alt="ict"width={120} height={120} />
                    <Image src={img3} style={{ marginRight: '20px' }}  className="rounded-md" alt="ict"width={120} height={120} />
                    <Image src={img4} style={{ marginRight: '20px' }} className="rounded-md" alt="ict"width={120} height={120} />
                    <Image src={img5} style={{ marginRight: '20px' }} className="rounded-md" alt="ict"width={120} height={120} />
                    <Image src={img6} style={{ marginRight: '20px' }} className="rounded-md" alt="ict"width={120} height={120} />
                    <Image src={img7} style={{ marginRight: '20px' }} className="rounded-md" alt="ict"width={120} height={120} />
                    <Image src={img8} style={{ marginRight: '20px' }} className="rounded-md" alt="ict"width={120} height={120} />
                    <Image src={img9} style={{ marginRight: '20px' }} className="rounded-md" alt="ict"width={120} height={120} />
                    <Image src={img10} style={{ marginRight: '20px' }} className="rounded-md " alt="ict"width={120} height={120} />
                    </Marquee>
 

            </div> 
       <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0"
      >
        <path
          fill="#EBE7F8"
          fillOpacity="1"
          d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,186.7C672,171,768,149,864,133.3C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
          
            
        </div>
    );
};
export default OurConcern;