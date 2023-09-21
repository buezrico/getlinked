"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { Bounce, Fade, Slide } from "react-awesome-reveal";

const navLinks = [
  {
    label: "Timeline",
    path: "#timeline",
  },
  {
    label: "Overview",
    path: "#overview",
  },
  {
    label: "FAQs",
    path: "#faqs",
  },
  {
    label: "Contact",
    path: "#contact",
  },
];

export default function Navbar() {
  const [navBg, setNavBg] = useState(false);
  const [activeHash, setActiveHash] = useState<string>();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "") {
      setActiveHash("/");
    }
    setActiveHash(hash);
  }, []);

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
    <nav className={`nav ${navBg ? "nav-with-bg" : ""} `}>
      <div className="nav-inner">
        <div className="brand">
          <Link href="/" onClick={() => setActiveHash("/")}>
            <p className="brand-name">
              get<span className="linked">linked</span>
            </p>
          </Link>
        </div>

        <div className="nav-items">
          {/* <Bounce cascade> */}
          <ul className="nav-links">
            {navLinks.map((link, index): any => (
              <Link
                href={link.path}
                className={`nav-link ${
                  activeHash === link.path ? "active-nav-link" : ""
                }`}
                key={index}
                onClick={() => {
                  setActiveHash(link.path);
                }}
              >
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>
          {/* </Bounce> */}

          <div className="nav-contact-btn">
            <button className="btn-primary">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
