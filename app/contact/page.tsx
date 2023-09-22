"use client";
import Image from "next/image";
import facebook from "@/public/assets/images/facebook.png";
import instagram from "@/public/assets/images/instagram.png";
import linkedin from "@/public/assets/images/linkedin.png";
import twitter from "@/public/assets/images/twitter.png";
import { useRouter } from "next/navigation";
import { Bounce, Slide } from "react-awesome-reveal";

export default function Home() {
  const router = useRouter();
  return (
    <div className="contact">
      <div className="back-btn" onClick={() => router.back()}>
        <div className="back-btn-wrapper">
          <div className="back-btn-wrapper-inner">
            <div className="line line1"></div>
            <div className="line line2"></div>
          </div>
        </div>
      </div>
      <div className="contact-inner">
        <div className="contact-info">
          <Slide>
            <h1 className="contact-info-title">Get in touch</h1>
          </Slide>
          <Bounce cascade>
            <ul>
              <li>
                <p>
                  Contact <br /> Information
                </p>
              </li>
              <li>
                <p>
                  27, Alara Street <br /> Yaba 100012 <br /> Lagos State
                </p>
              </li>
              <li>
                <p>Call Us : 07067981819</p>
              </li>
              <li>
                <p>
                  we are open from Monday-Friday <br /> 08:00am - 05:00pm
                </p>
              </li>
            </ul>
          </Bounce>

          <div className="contact-info-share">
            <Slide>
              <p>Share on</p>
            </Slide>
            <Bounce cascade>
              <ul className="icons">
                <li>
                  <Image src={instagram} alt="instagram" />
                </li>
                <li>
                  <Image src={twitter} alt="twitter" />
                </li>
                <li>
                  <Image src={facebook} alt="facebook" />
                </li>
                <li>
                  <Image src={linkedin} alt="linkedin" />
                </li>
              </ul>
            </Bounce>
          </div>
        </div>

        <div className="contact-form">
          <Bounce>
            <div className="contact-form-wrapper">
              <form className="form">
                <div className="contact-form-title">
                  <h3 className="contact-form-title-text">
                    Questions or need assistance?
                  </h3>
                  <h3 className="contact-form-title-text">
                    Let us know about it!
                  </h3>
                </div>
                <input type="text" placeholder="Your Full Name" />
                <input type="text" placeholder="Your Email Address" />
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={5}
                  placeholder="Your Message"
                ></textarea>
                <div className="contact-form-button">
                  <button className="btn-primary">
                    <div className="btn-primary-inner">Submit</div>
                  </button>
                </div>
              </form>
            </div>
          </Bounce>
        </div>
      </div>
    </div>
  );
}
