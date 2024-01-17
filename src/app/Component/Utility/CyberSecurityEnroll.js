import React from 'react';
const EnrollComponent = () => {
  const letters = ['B', 'e', 'c', 'o', 'm', 'e', ];
  const letters2 = ['A', 'n' ];
  const letters3 = ['E', 't','h','i','c','a','l' ];
  const letters4 = ['H', 'a','c','k','e','r', ];

  return (
    <div className="waviy drop-shadow-md">
      <div>
      {letters.map((letter, index) => (
        <span className='span' key={index} style={{'--i': index + 1}}>{letter} </span>
      ))}
       <span className='ml-2'>an</span>
       <span  className='ml-2'>Ethical </span>
      {letters4.map((letter, index) => (
        <span className='span' key={index} style={{'--i': index + 1}}>{letter} </span>
      ))}
      {/* <addr> an Ethical Hacker</addr> */}
    </div>
    <div className="flex justify-center items-center mt-2 "> 
         <button className="uppercase shadow-2xl px-10 py-3 bg-[#76599E] font-semibold text-white">Enroll Now</button>
         </div>
    </div>
  );
};

export default EnrollComponent;
