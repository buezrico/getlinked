"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

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
  const activePath = usePathname();

  return (
    <div className="nav">
      <div className="nav-inner">
        <div className="brand">
          <Link href="/">
            <p className="brand-name">
              get<span className="linked">linked</span>
            </p>
          </Link>
        </div>

        <div className="nav-items">
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

          <div className="nav-contact-btn">
            <button className="btn-primary">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
