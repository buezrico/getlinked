"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Bounce, Slide } from "react-awesome-reveal";
import register_img from "@/public/assets/images/register_img.png";
import girl_walk from "@/public/assets/images/girl_walk.png";
import guy_walk from "@/public/assets/images/guy_walk.png";
import Success from "@/components/modals/Success";
import { useState } from "react";

export default function Home() {
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  return (
    <div className="register">
      <div className="back-btn" onClick={() => router.back()}>
        <div className="back-btn-wrapper">
          <div className="back-btn-wrapper-inner">
            <div className="line line1"></div>
            <div className="line line2"></div>
          </div>
        </div>
      </div>
      <div className="register-inner">
        <div className="register-title mobile-title">
          <h1 className="register-title-heading">Register</h1>
        </div>
        <div className="register-image">
          <Slide>
            <Image src={register_img} alt="register img" />
          </Slide>
        </div>

        <div className="register-form">
          <Bounce>
            <div className="register-form-wrapper">
              <form className="form">
                <div className="register-form-title">
                  <h1 className="register-title desktop-title">
                    <div className="register-title-heading">Register</div>
                  </h1>

                  <div className="register-form-title-movement">
                    <p>Be part of this movement!</p>
                    <div className="movement">
                      <div className="movement-wrapper">
                        <Image src={girl_walk} alt="girl walking" />
                        <Image src={guy_walk} alt="guy walking" />
                      </div>
                    </div>
                  </div>

                  <h1 className="register-form-semi-title">
                    CREATE YOUR ACCOUNT
                  </h1>
                </div>
                <div className="form-inputs">
                  <div className="form-group">
                    <label htmlFor="">Team's Name</label>
                    <input
                      type="text"
                      placeholder="Enter the name of your group"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder="Enter your phone number" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter your email address" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Project Topic</label>
                    <input
                      type="text"
                      placeholder="What is your group project topic"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Category</label>
                    <select name="" id="">
                      <option value="">Select Category</option>
                      <option value="">Category 1</option>
                      <option value="">Category 2</option>
                      <option value="">Category 3</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Group Size</label>
                    <select name="" id="">
                      <option value="">Select </option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                    </select>
                  </div>
                </div>

                <div className="terms">
                  <p className="warning">
                    Please review your registration details before submitting
                  </p>

                  <div className="condition">
                    <input type="checkbox" name="" id="" />
                    <p>
                      I agreed with the event terms and conditions and privacy
                      policy
                    </p>
                  </div>
                </div>

                <div
                  className="register-form-button"
                  onClick={() => setSuccess(true)}
                >
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
