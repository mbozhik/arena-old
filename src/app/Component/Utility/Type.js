'use client'
import { TypeAnimation } from "react-type-animation";
const Type = () => {
    return (
        <div>
        <TypeAnimation
      sequence={[
        'Hacking was passion', 
        3000, // Waits 1s
        'Security is profession',
        3000, // Waits 2s
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
        </div>
    );
};

export default Type;