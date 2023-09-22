"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// import { Bounce, Fade, Slide } from "react-awesome-reveal";

const navLinks = [
  {
    label: "Timeline",
    path: "/#timeline",
  },
  {
    label: "Overview",
    path: "/#overview",
  },
  {
    label: "FAQs",
    path: "/#faqs",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [navBg, setNavBg] = useState(false);
  const [activeHash, setActiveHash] = useState<string>();
  const [mobileNav, setMobileNav] = useState(false);

  const pathName = usePathname();

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
      <div className={`nav-inner ${mobileNav ? "mobile-nav" : ""}`}>
        <div className="brand">
          <Link href="/" onClick={() => setActiveHash("/")}>
            <p className="brand-name">
              get<span className="linked">linked</span>
            </p>
          </Link>
        </div>

        <div
          className={`nav-btn ${mobileNav ? "nav-close" : ""}`}
          onClick={() => setMobileNav(!mobileNav)}
        >
          <div className="nav-btn-wrapper">
            <div className="nav-btn-wrapper-inner">
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </div>
          </div>
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
                  setMobileNav(false);
                }}
              >
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>
          {/* </Bounce> */}
          {pathName === "/register" ? (
            <Link href="/register" onClick={() => setMobileNav(false)}>
              <button className="btn-secondary">
                <div className="btn-secondary-inner">Register</div>
              </button>
            </Link>
          ) : (
            <Link href="/register" onClick={() => setMobileNav(false)}>
              <button className="btn-primary">
                <div className="btn-primary-inner">Register</div>
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
