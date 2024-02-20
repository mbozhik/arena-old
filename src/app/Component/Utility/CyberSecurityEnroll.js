import Link from "next/link";

const EnrollComponent = ({ data }) => {
  const str = data[0];
  const First = str.split("");
  const str2 = data[1];
  const First2 = str2.split("_");
  // console.log(First2);
  const Last = data[data.length - 1];
  const Lastst = Last.split("");

  // const letters = ['B', 'e', 'c', 'o', 'm', 'e', ];
  // const letters2 = ['A', 'n' ];
  // const letters3 = ['E', 't','h','i','c','a','l' ];
  // const letters4 = ['H', 'a','c','k','e','r', ];

  return (
    <div className="waviy drop-shadow-md">
      <div className="text-center">
        {First.map((letter, index) => (
          <span className="span" key={index} style={{ "--i": index + 1 }}>
            {letter}{" "}
          </span>
        ))}
        {First2.map((spen, index) => (
          <span key={index} className="mx-2">
            {spen}
          </span>
        ))}

        {/* <span  className='ml-2'>Ethical </span> */}
        {Lastst.map((letter, index) => (
          <span className="span" key={index} style={{ "--i": index + 1 }}>
            {letter}{" "}
          </span>
        ))}
        {/* <addr> an Ethical Hacker</addr> */}
      </div>
      <div className="flex justify-center items-center mt-2 ">
        <Link href='/admission'>
        <button className="uppercase shadow-2xl px-10 py-3 bg-[#76599E] font-semibold text-white hover:text-black">
          Enroll Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default EnrollComponent;
