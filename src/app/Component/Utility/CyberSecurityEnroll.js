import React from 'react';
const EnrollComponent = () => {
  const letters = ['B', 'e', 'c', 'o', 'm', 'e', ];
  const letters2 = ['A', 'n' ];
  const letters3 = ['E', 't','h','i','c','a','l' ];
  const letters4 = ['H', 'a','c','k','e','r', ];

  return (
    <div className="waviy drop-shadow-md">
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
  );
};

export default EnrollComponent;
