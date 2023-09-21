import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-about">
          <div className="footer-about-wrapper">
            <Link href="/">
              <p className="footer-about-brand">
                get<span className="linked">linked</span>
              </p>
            </Link>

            <p className="footer-about-info">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology.
            </p>

            <div className="footer-about-terms">
              <p>Terms of Use</p>
              <div className="line"></div>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-links-wrapper">
            <h3 className="footer-links-title">Useful Links</h3>
            <ul>
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>
            </ul>
            <div className="follow-us">
              <p>Follow us</p>
              <div className="icons">
                <Image src={instagram} alt="instagram" />
                <Image src={twitter} alt="twitter" />
                <Image src={facebook} alt="facebook" />
                <Image src={linkedin} alt="linkedin" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-contact">
          <div className="footer-contact-wrapper">
            <h3 className="footer-contact-title">Contact Us</h3>
            <ul>
              <li>
                <Image src={phone} alt="instagram" />
                <p>+234 679 81819</p>
              </li>
              <li>
                <Image src={map} alt="instagram" />
                <p>27,Alara Street Yaba 100012 Lagos State</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>All rights reserved. © getlinked Ltd.</p>
      </div>
    </footer>
  );
}

import facebook from "@/public/assets/images/facebook.png";
import instagram from "@/public/assets/images/instagram.png";
import linkedin from "@/public/assets/images/linkedin.png";
import twitter from "@/public/assets/images/twitter.png";
import phone from "@/public/assets/images/phone.png";
import map from "@/public/assets/images/map.png";
import Image from "next/image";
