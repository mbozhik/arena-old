'use client'
import { useState } from "react";
import Delete from "./Cookies";
import ClearSession from "./ClearStirage";
const Time = ({CreateDates,activeday}) => {
    const [duration,setDuration]=useState(false);
    if(duration)
    {
        Swal.fire({
            title: 'Session Expire ! Please Call The Help Number +88 01324176407',
            timer: 1000,
            button: false,
            timerProgressBar: true,
            customClass: 'swal-Title',
        }).then((result) => {
            ClearSession()
        Delete()
        })
        
    }
    const [day,setDay]=useState(0)
    const [houre,setHoure]=useState(0)
    const [munites,setMunites]=useState(0)
    const [seconds,setSeconds]=useState(0)  
    let myInterval = setInterval(() => {
        let active =Number(activeday)
        var CreateDate =CreateDates+86400000 * active;
        var today = new Date().getTime();
        var distance= CreateDate - today ;
        let timeDiff = distance;
            let newseconds = Math.floor( (timeDiff % (1000*60))/(1000));
            let newminutes = Math.floor((timeDiff % (1000*60*60))/(1000*60)) ;
            let newhours = Math.floor((timeDiff % (1000*60*60*24))/(1000*60*60)) ;
            let days = Math.floor((timeDiff / (1000*60*60*24)));
            if (timeDiff > 0) {
                setDay(days)
                setHoure(newhours)
                setMunites(newminutes)
                setSeconds(newseconds)
               }
             else {
                clearInterval(myInterval) ;
                setDuration(!duration) 
             }
    }, 1000);
    return (
        <div>
    <div className="absolute left-1/2 top-40 transform -translate-x-1/2 ">
    <div className=" mt-16 flex justify-between items-center gap-x-20">
        <div className=" text-center" >
            <h3 className="text-white text-3xl font-bold">{day}</h3>
            <p className="text-[#3ED089] mt-1 text-1xl font-bold">Day</p>
        </div>
        <div className="text-center" >
            <h3 className="text-white text-3xl font-bold">{houre}</h3>
            <p className="text-[#3ED089] mt-1 text-1xl font-bold">Hours</p>
        </div>
        <div className="text-center" >
            <h3 className="text-white text-3xl font-bold">{munites}</h3>
            <p className="text-[#3ED089] mt-1 text-1xl font-bold">Munites</p>
        </div>
        <div className="text-center" >
            <h3 className="text-white text-3xl font-bold">{seconds}</h3>
            <p className="text-[#3ED089] mt-1 text-1xl font-bold">Seconds</p>
        </div>
    </div>
    </div>

        </div>
    );
};

export default Time;