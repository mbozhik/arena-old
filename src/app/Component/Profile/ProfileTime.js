import React from 'react';

const ProfileTime = () => {
    return (
        <div className="absolute left-1/2 top-40 transform -translate-x-1/2 ">
        {/* <h1 className="font-bold lg:text-3xl text-white">
          Arena Web & Security
        </h1> */}
        <h1 className="font-bold lg:text-3xl text-white">
        Admission Time Remaining
        </h1>
        <p className="lg:w-full bg-[#ffd321] h-1 mt-1 mx-auto "></p>
        <div className="mt-5 flex justify-between">
            <div className=" fetext-center" >
                <h3 className="text-white text-3xl font-bold">2</h3>
                <p className="text-yellow-700 text-1xl font-bold">Day</p>
            </div>
            <div className="text-center" >
                <h3 className="text-white text-3xl font-bold">5</h3>
                <p className="text-yellow-700 text-1xl font-bold">HOURS</p>
            </div>
            <div className="text-center" >
                <h3 className="text-white text-3xl font-bold">59</h3>
                <p className="text-yellow-700 text-1xl font-bold">Munites</p>
            </div>
            <div className="text-center" >
                <h3 className="text-white text-3xl font-bold">13</h3>
                <p className="text-yellow-700 text-1xl font-bold">Seconds</p>
            </div>
        </div>
      </div>
    );
};

export default ProfileTime;