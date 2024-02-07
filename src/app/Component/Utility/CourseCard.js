import Image from "next/image";
import ceo from "@/app/Images/ceo.png";
import Link from "next/link";

export function BackgroundBlogCard() {
  return (
    <div className="grid">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-6 ">
        <Link href="/cybersecurity">
          <div className="relative grid 2xl:h-[40rem]  md:h-[35rem] w-full max-w-[28rem] group  transition-all duration-350  items-end justify-center overflow-hidden text-center border-3 border-[#8444c8cc]">
            <div
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none CyberCard bg-cover bg-center"
            >
              <div
                className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100"
              />
            </div>
            <article className=" 2xl:py-14 2xl:px-3 px-2  absolute  xl:translate-y-60 2xl:translate-y-52 transition-all group-hover:translate-y-0 duration-700 ease-in-out ">
              <Image
                src={ceo}
                alt="Tanjim AL Fahim"
                className="border-2 border-white h-16 w-16 rounded-full justify-center mx-auto "
              />
              <footer
                variant="h5"
                className="mb-4 text-[#FFA121] font-bold 2xl:text-[20px] xl:text-[16px]"
              >
                Tanjim AL Fahim
              </footer>
              <h2
                variant="h2"
                color="white"
                className="mb-6 font-bold leading-[1.5] text-white 2xl:text-3xl xl:text-2xl   "
              >
                Cyber Security & Ethical Hacking
              </h2>
              <p
                variant="paragraph"
                // className="mb-4  group-hover:w-full  text-transparent group-hover:text-white   font-semibold "
                className="mb-4  group-hover:w-full    lg:opacity-0 group-hover:opacity-100 text-white   font-semibold transition-all duration-700 ease-in-out  "
              >
                Whether you’re interested in landing your first IT security job,
                becoming a full-time white hat hacker, or preparing to test the
                security of your own home network, Arena Web Security offers
                approachable, hands-on ethical hacking courses to help you keep
                your networks safe from cyber criminals & make your career at
                professional marketplace.
              </p>
            </article>
          </div>
        </Link>
        <Link href="/python">
          <div className="relative grid 2xl:h-[40rem]  md:h-[35rem] w-full max-w-[28rem] group  transition-all duration-350  items-end justify-center overflow-hidden text-center border-3 border-[#8444c8cc]">
            <div
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none PythonCard bg-cover bg-center"
            >
              <div
                className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100"
              />
            </div>
            <article className=" 2xl:py-14 2xl:px-3 px-2  absolute  lg:translate-y-48 transition-all group-hover:translate-y-0 duration-700 ease-in-out ">
              <Image
                src={ceo}
                alt="Tanjim AL Fahim"
                className="border-2 border-white h-16 w-16 rounded-full justify-center mx-auto "
              />
              {/*   <footer variant="h5" className="mb-4 text-[#FFA121] font-bold text-[20px]">
          Tanjim AL Fahim
          </footer> */}
              <footer
                variant="h5"
                className="mb-4 text-[#FFA121] font-bold 2xl:text-[20px] xl:text-[16px]"
              >
                Tanjim AL Fahim
              </footer>
              <h2
                variant="h2"
                color="white"
                className="mb-6 font-bold leading-[1.5] text-white 2xl:text-3xl xl:text-2xl   "
              >
                Advanced Python With Freelancing
              </h2>
              <p
                variant="paragraph"
                className="mb-4  group-hover:w-full    lg:opacity-0 group-hover:opacity-100 text-white   font-semibold transition-all duration-700 ease-in-out "
              >
                Python is a high-level, interpreted, interactive and
                object-oriented scripting language. Python is designed to be
                highly readable. It uses English keywords frequently where as
                other languages use punctuation, and it has fewer syntactical
                constructions than other languages.
              </p>
            </article>
          </div>
        </Link>
        <Link href="/combo">
          <div className="relative grid 2xl:h-[40rem]  md:h-[35rem] w-full max-w-[28rem] group  transition-all duration-350  items-end justify-center overflow-hidden text-center border-3 border-[#8444c8cc]">
            <div
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none Combo bg-cover bg-center"
            >
              <div
                className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100"
              />
            </div>
            <article className=" 2xl:py-14 2xl:px-3 px-2  absolute xl:translate-y-48    2xl:translate-y-40 transition-all group-hover:translate-y-0 duration-700 ease-in-out ">
              <Image
                src={ceo}
                alt="Tanjim AL Fahim"
                className="border-2 border-white h-16 w-16 rounded-full justify-center mx-auto "
              />
              <footer
                variant="h5"
                className="mb-4 text-[#FFA121] font-bold 2xl:text-[20px] xl:text-[16px]"
              >
                Tanjim AL Fahim
              </footer>
              <h2
                variant="h2"
                color="white"
                className="mb-6 font-bold leading-[1.5] text-white 2xl:text-3xl xl:text-2xl   "
              >
                Cyber Security and Advance Python (Combo)
              </h2>
              <p
                variant="paragraph"
                className="mb-4  group-hover:w-full   lg:opacity-0 group-hover:opacity-100 text-white   font-semibold transition-all duration-700 ease-in-out"
              >
                Cybersecurity needs a programming language and today Python is
                very popular because of its flexibility and lightweight
                features. This course can help to build skills across the
                cyberattack world for both cyber attackers and defenders.
              </p>
            </article>
          </div>
        </Link>
        <Link href="/cehf">
          <div className="relative grid  2xl:h-[40rem]  md:h-[35rem] w-full max-w-[28rem] group  transition-all duration-350  items-end justify-center overflow-hidden text-center border-3 border-[#8444c8cc]">
            <div
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none Master bg-cover bg-center"
            >
              <div
                className="to-bg-black-10 absolute  inset-0 h-full
           w-full bg-gradient-to-t group-hover:from-black/100 from-black/90 via-black/80 group-hover:via-black/100"
              />
            </div>
            <article className=" 2xl:py-14 2xl:px-3 px-2  absolute   2xl:translate-y-40 xl:translate-y-40  transition-all group-hover:translate-y-0 duration-700 ease-in-out ">
              <Image
                src={ceo}
                alt="Tanjim AL Fahim"
                className="border-2 border-white h-16 w-16 rounded-full justify-center mx-auto "
              />
              <footer
                variant="h5"
                className="mb-4 text-[#FFA121] font-bold 2xl:text-[20px] xl:text-[16px]"
              >
                Tanjim AL Fahim
              </footer>
              <h2
                variant="h2"
                color="white"
                className="mb-6 font-bold leading-[1.5] text-white text-3xl  2xl:text-3xl xl:text-2xl"
              >
                CEHF Masterclass
              </h2>
              <p
                variant="paragraph"
                className="mb-4  group-hover:w-full  lg:opacity-0 group-hover:opacity-100 text-white   font-semibold transition-all duration-700 ease-in-out "
              >
                Advanced Cyber Security & Ethical Hacking is a pioneer in
                endpoint security, with proactive security solutions that stop
                advanced persistent threats in their initial stages and prevent
                advancement. Advanced Cyber Security & Ethical Hacking products
                provide the first.
              </p>
            </article>
          </div>
        </Link>
      </div>

    </div>
  );
}
