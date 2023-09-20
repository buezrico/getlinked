import React from "react";
import bright_star from "@/public/assets/images/bright_star.png";
import Image from "next/image";

export default function Star() {
  return (
    <div className="star">
      <Image src={bright_star} alt="star" />
    </div>
  );
}
