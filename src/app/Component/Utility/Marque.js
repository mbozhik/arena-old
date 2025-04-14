import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = ({data}) => {
    return (
        <div>
               {data && (
        <Marquee className="bg-[#ece9e9] text-sm py-1 font-[300]">
          Admission going on for{" "}
          <span className="font-semibold text-purple-400 px-2">
            {data[0]?.batch_schedule_name}
          </span>
          course by Arena Web Academy. The class will start on{" "}
          <span className="font-semibold text-purple-400 px-2">
            {data[0]?.deadline_date_s}
          </span>
          Admission going on for{" "}
          <span className="font-semibold text-purple-400 px-2">
            {data[1]?.batch_schedule_name}
          </span>
          course by Arena Web Academy. The class will start on{" "}
          <span className="font-semibold text-purple-400 px-2">
            {data[2]?.deadline_date_s}
          </span>
          Admission going on for{" "}
          <span className="font-semibold text-purple-400 px-2">
            {data[2]?.batch_schedule_name}
          </span>
          course by Arena Web Academy. The class will start on{" "}
          <span className="font-semibold text-purple-400 px-2">
            {data[2]?.deadline_date_s}
          </span>
        </Marquee>
      )}
        </div>
    );
};

export default Marque;