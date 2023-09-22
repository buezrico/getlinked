"use client";
import Image from "next/image";
import facebook from "@/public/assets/images/facebook.png";
import instagram from "@/public/assets/images/instagram.png";
import linkedin from "@/public/assets/images/linkedin.png";
import twitter from "@/public/assets/images/twitter.png";
import { useRouter } from "next/navigation";
import { Bounce, Slide } from "react-awesome-reveal";
import { FormEvent, useState } from "react";
import Success from "@/components/modals/Success";

interface IForm {
  first_name: string;
  email: string;
  phone_number: string;
  message: string;
}

export default function Home() {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState<IForm>({
    first_name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const router = useRouter();

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_baseUrl}/hackathon/contact-form`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            first_name: form.first_name,
            email: form.email,
            phone_number: form.phone_number,
            message: form.message,
          }),
        }
      );

      if (response.ok) {
        setSuccess(true);
        console.log("Working", response);
      } else {
        alert("Server Unavailable, Please try again later");
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              <form onSubmit={handleSubmit} className="form">
                <div className="contact-form-title">
                  <h3 className="contact-form-title-text">
                    Questions or need assistance?
                  </h3>
                  <h3 className="contact-form-title-text">
                    Let us know about it!
                  </h3>
                </div>
                <input
                  name="first_name"
                  type="text"
                  placeholder="Your Full Name"
                  value={form.first_name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Your Email Address"
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  required
                />
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  value={form.phone_number}
                  onChange={handleChange}
                  name="phone_number"
                  required
                />
                <textarea
                  cols={30}
                  rows={5}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  name="message"
                  required
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
      {success && <Success />}
    </div>
  );
}
