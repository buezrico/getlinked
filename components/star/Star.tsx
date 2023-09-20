import React from "react";
import bright_star from "@/public/assets/images/bright_star.png";
import purple_star from "@/public/assets/images/purple_star.png";
import Image from "next/image";

export default function Star({ color }: any) {
  return (
    <div className="star">
      <Image src={color === "white" ? bright_star : purple_star} alt="star" />
    </div>
  );
}
