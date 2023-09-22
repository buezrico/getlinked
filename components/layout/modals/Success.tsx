import React from "react";
import happy_guy from "@/public/assets/images/happy_guy.png";
import success from "@/public/assets/images/success.png";
import wink_emoji from "@/public/assets/images/wink_emoji.png";
import Image from "next/image";

export default function Success() {
  return (
    <div className="success">
      <div className="success-inner">
        <div className="success-wrapper">
          <div className="success-images">
            <Image src={success} alt="success icon" />
            <Image src={happy_guy} alt="success icon" />
          </div>

          <h1 className="success-message">Congratulations</h1>
          <h1 className="success-message">you have successfully registered</h1>
          <p className="success-sub-message">
            Yes, it was easy and you made it!
          </p>
          <p className="success-sub-message">
            Check your mail box for next step{" "}
            <Image src={wink_emoji} alt="wink emoji" />
          </p>
        </div>
      </div>
    </div>
  );
}
