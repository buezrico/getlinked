"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import underline from "@/public/assets/images/underline.png";
import bulb from "@/public/assets/images/bulb.png";
import chain from "@/public/assets/images/chain.png";
import fire from "@/public/assets/images/fire.png";
import globe from "@/public/assets/images/globe.png";
import { useState } from "react";
import Star from "@/components/star/Star";
import { Bounce, Hinge, JackInTheBox, Slide } from "react-awesome-reveal";
import Timer from "@joseavilasg/react-compound-timer";
import { Unica_One } from "next/font/google";

const unica = Unica_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [underlineState, setUnderlineState] = useState(false);
  return (
    <div className="home">
      <div className="home-inner">
        <header className="hero">
          <div className="hero-intro">
            <div className="hero-intro-wrapper">
              <div className="hero-intro-text">
                <Typewriter
                  words={["Igniting a Revolution in HR Innovation"]}
                  loop={0}
                  cursor
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={3000}
                />
              </div>
              <div className="hero-intro-underline">
                <Image src={underline} alt="underline" />
              </div>
            </div>
          </div>

          <div className="hero-content">
            <div className="hero-content-wrapper">
              <div className="hero-content-text">
                <div className="hero-content-text-wrapper">
                  <Star />
                  <div className="bottom-star">
                    <Star />
                  </div>
                  <div className="hero-content-text-title">
                    <Slide duration={3000}>
                      <h1>
                        getlinked Te
                        <span className="bulb">
                          <Image src={bulb} alt="creative bulb" />c
                        </span>
                        h
                      </h1>
                    </Slide>
                    <Slide duration={6000}>
                      <h1>
                        Hackathon <span className="secondary"> &nbsp;1.0</span>
                        <span className="chain">
                          <Image src={chain} alt="chain" />
                        </span>
                        <span className="fire">
                          <Image src={fire} alt="fire" />
                        </span>
                      </h1>
                    </Slide>
                  </div>

                  <p>
                    <Typewriter
                      words={[
                        "Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize",
                      ]}
                      loop={0}
                      cursor
                      typeSpeed={100}
                      deleteSpeed={100}
                      delaySpeed={3000}
                    />
                  </p>

                  <Bounce delay={5000}>
                    <button className="btn-primary">Register</button>
                  </Bounce>

                  <div className="countdown">
                    <Timer initialTime={834500000} direction="backward">
                      {() => (
                        <div className="countdown-wrapper">
                          <div className="countdown-time">
                            <div
                              className={`countdown-number  ${unica.className}`}
                            >
                              <Timer.Hours />
                            </div>
                            <div className="countdown-prefix">H</div>
                          </div>
                          <div className="countdown-time">
                            <div
                              className={`countdown-number  ${unica.className}`}
                            >
                              <Timer.Minutes />
                            </div>
                            <div className="countdown-prefix">M</div>
                          </div>
                          <div className="countdown-time">
                            <div
                              className={`countdown-number  ${unica.className}`}
                            >
                              <Timer.Seconds />
                            </div>
                            <div className="countdown-prefix">S</div>
                          </div>
                        </div>
                      )}
                    </Timer>
                  </div>
                </div>
              </div>

              <div className="hero-content-image">
                <div className="hero-content-image-star">
                  <Star />
                </div>
                <div className="hero-content-image-wrapper">
                  <Image src={globe} alt="globe" />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
