
import style from "@/app/Component/Common/Footer.module.css"
import social1 from "@/app/Images/footer/facebook.png";
import social2 from "@/app/Images/footer/youtube.png";
import social3 from "@/app/Images/footer/linkedin.png";
import icon1 from "@/app/Images/footer/address.png";
import icon3 from "@/app/Images/footer/at.png";
import favIcon from "@/app/Images/footer/favicon.ico";
import icon2 from "@/app/Images/footer/telephone.png";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <section className={style.parent_container} id="main">
      <div className={` ${style.footerCard} container mx-auto `}>
        <Link href='/contact' className="cursor-pointer">
        <div className={style.footer_wrapper}>
          <div className={`${style.footer_wrapper_img} mx-auto flex justify-center`}>
            <Image className={style.icon} src={icon1} alt="" />
          </div>
          <div>
            <h5 className="text-center">Address</h5>
            <p>
              House No-1, BLOCK-B Banasree, <br /> Main Road Rampura, Dhaka -
              1219
            </p>
          </div>
        </div>
        </Link>
        <div className={`${style.phone} ${style.footer_wrapper}`}>
          <div className={`${style.footer_wrapper_img}  mx-auto flex justify-center`}>
            <Image className={style.icon} src={icon2} alt="" />
          </div>

          <div>
            <h5 className="text-center">Phone</h5>
            <div>
              <p><a href="tel:+8801310333444" className="text-blue-400">+880 1310333444</a></p>
              <p><a href="tel:+8801885841489" className="text-blue-400">+880 1885841489</a></p>
              {/* <p>+880 1885841489</p> */}
            </div>
          </div>
        </div>
        <div className={style.footer_wrapper}>
          <div className={`${style.footer_wrapper_img} mx-auto flex justify-center`}>
            <Image className={style.icon} src={icon3} alt="" />
          </div>
          <div>
            <h5 className="text-center">Email</h5>
           <p><a href="mailto:info@arenawebsecurity.net" className="text-blue-400">info@arenawebsecurity.net</a></p> 
            {/* <p></p> */}
          </div>
        </div>
      </div>
      <footer className={`${style.footer} `}>
        <div>
          <div className={`position-relative ${style.contactWrapper} `}>
            <Image src={favIcon} alt="arena" />
          </div>
          <div className={`${style.footerContainer} container  mx-auto `}>
            <div>
              <h5>Information</h5>
              <ul className={style.list_wrapper}>
                <Link href="/about" className="text-decoration-none">
                  {" "}
                  <li>About Us</li>
                </Link>
                <Link href="/contact" className="text-decoration-none">
                  {" "}
                  <li>Contact</li>
                </Link>
                <Link href="/faq" className="text-decoration-none">
                  {" "}
                  <li>FAQ</li>
                </Link>
                {/* <Link href="/career" className="text-decoration-none">
                  {" "}
                  <li>Career</li>
                </Link> */}
                <a
                  href="https://www.hackers.institute/"
                  className="text-decoration-none"
                >
                  {" "}
                  <li>Blog</li>
                </a>
                <Link href="/services" className="text-decoration-none">
                  {" "}
                  <li>Service</li>
                </Link>
                <Link href="/arena-gallery" className="text-decoration-none">
                  {" "}
                  <li>Gallery</li>
                </Link>
                <Link href="/privacy" className="text-decoration-none">
                  {" "}
                  <li>Privacy Policy</li>
                </Link>
              </ul>
            </div>
            <div>
              <h5>Courses</h5>
              <ul className={style.list_wrapper}>
                <Link
                  href="/cyber-security"
                  className="text-decoration-none"
                >
                  {" "}
                  <li>Cyber Security & Ethical Hacking</li>
                </Link>
                <Link
                  href="/python"
                  className="text-decoration-none"
                >
                  {" "}
                  <li>Advanced Python & Freelancing</li>
                </Link>
                <Link
                  href="/combo"
                  className="text-decoration-none"
                >
                  {" "}
                  <li>Cyber Security & Python (Combo)</li>
                </Link>
                <Link href="/cosint" className="text-decoration-none">
                  {" "}
                  <li>C|OSINT</li>
                </Link>
                <Link href="/linux" className="text-decoration-none">
                  {" "}
                  <li>Linux</li>
                </Link>
                <Link href="/network" className="text-decoration-none">
                  {" "}
                  <li>Networking Security</li>
                </Link>
                <Link
                  href="/cehf"
                  className="text-decoration-none"
                >
                  {" "}
                  <li>CEHF Masterclass</li>
                </Link>
              </ul>
            </div>
            <div>
              <h5>Technologies</h5>
              <ul className={style.list_wrapper}>
                <li>React</li>
                <li> Vue Js</li>
                <li> jQuery</li>
                <li>Python</li>
                <li> Node.js</li>
                <li>SQL</li>
                <li> MySQL</li>
                <li> FireBase</li>
                <li> SQLite</li>
                <li>Java, Dart, Flutter</li>
                <li>UI/UX</li>
              </ul>
            </div>
          </div>

          <div className={`  ${style.social} container mx-auto `}>
            <div className={style.socialContainer}>
              <a
                href="https://www.facebook.com/ArenaBangladesh/"
                className="text-decoration-none"
              >
                <div className={style.socialWrapper}>
                  <Image src={social1} alt="facebook icon" />
                  <span>Facebook</span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/channel/UCABV9wzGHQcgyIMP-Vr57tw"
                className="text-decoration-none"
              >
                <div className={style.socialWrapper}>
                  <Image src={social2} alt="youtube icon" />
                  <span>Youtube</span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/arena-web-security"
                className="text-decoration-none"
              >
                <div className={style.socialWrapper}>
                  <Image src={social3} alt="linkedin icon" />
                  <span>Linkedin</span>
                </div>
              </a>
            </div>
          </div>
         
        </div>
        <p className="text-center !text-white relative m-0 py-5">
            Copyright © 2024 All Rights Reserved by Arena Web Security.
          </p>
      </footer>
    </section>
  );
};

export default Footer;
