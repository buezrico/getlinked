"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Bounce, Fade, Slide } from "react-awesome-reveal";

const navLinks = [
  {
    label: "Timeline",
    path: "/timeline",
  },
  {
    label: "Overview",
    path: "/overview",
  },
  {
    label: "FAQs",
    path: "/faqs",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [navBg, setNavBg] = useState(false);
  const activePath = usePathname();

  const toggleMenu = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 2) {
      setNavBg(true);
    } else if (scrolled <= 2) {
      setNavBg(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleMenu);
  }

  return (
    <div className={`nav ${navBg ? "nav-with-bg" : ""} `}>
      <div className="nav-inner">
        <div className="brand">
          <Link href="/">
            <p className="brand-name">
              get<span className="linked">linked</span>
            </p>
          </Link>
        </div>

        <div className="nav-items">
          <Bounce cascade>
            <ul className="nav-links">
              {navLinks.map((link, index): any => (
                <Link
                  href={link.path}
                  className={`nav-link ${
                    activePath === link.path ? "active-nav-link" : "  "
                  }`}
                  key={index}
                >
                  <li>{link.label}</li>
                </Link>
              ))}
            </ul>
          </Bounce>

          <div className="nav-contact-btn">
            <button className="btn-primary">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
