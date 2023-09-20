"use client";

import Star from "@/components/star/Star";
import bulb from "@/public/assets/images/bulb.png";
import chain from "@/public/assets/images/chain.png";
import fire from "@/public/assets/images/fire.png";
import globe from "@/public/assets/images/globe.png";
import underline from "@/public/assets/images/underline.png";
import big_idea from "@/public/assets/images/big_idea.png";
import rules from "@/public/assets/images/rules.png";
import criteria from "@/public/assets/images/criteria.png";
import arrow from "@/public/assets/images/arrow.png";
import Timer from "@joseavilasg/react-compound-timer";
import { Unica_One } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { Bounce, Rotate, Roll, Slide } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

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
                  <Star color={"white"} />
                  <div className="bottom-star">
                    <Star color={"white"} />
                  </div>
                  <div className="hero-content-text-title">
                    <Slide duration={2500}>
                      <h1>
                        getlinked Te
                        <span className="bulb">
                          <Image src={bulb} alt="creative bulb" />c
                        </span>
                        h
                      </h1>
                    </Slide>
                    <Slide duration={4000}>
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

                  <Bounce delay={3000}>
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
                  <Star color={"white"} />
                </div>
                <div className="hero-content-image-wrapper">
                  <Image src={globe} alt="globe" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="big-idea">
          <div className="big-idea-inner">
            <div className="big-idea-image">
              <div className="big-idea-image-star">
                <Star />
              </div>
              <Rotate delay={500}>
                <Image src={big_idea} alt="a big idea" />
              </Rotate>
              <div className="big-idea-image-arrow">
                <Image src={arrow} alt="a big idea" />
              </div>
            </div>

            <div className="big-idea-content">
              <div className="big-idea-content-wrapper">
                <Slide direction="right">
                  <h1 className="big-idea-content-title">
                    Introduction to getlinked <br />{" "}
                    <span className="secondary">tech Hackathon 1.0</span>
                    <div className="big-idea-content-title-star">
                      <Star />
                    </div>
                  </h1>
                </Slide>
                <Slide duration={2000} direction="right">
                  <p className="big-idea-content-desc">
                    Our tech hackathon is a melting pot of visionaries, and its
                    purpose is as clear as day: to shape the future. Whether
                    you're a coding genius, a design maverick, or a concept
                    wizard, you'll have the chance to transform your ideas into
                    reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the
                    world, that's what we're all about!
                  </p>
                </Slide>
              </div>
            </div>
          </div>
        </section>

        <section className="rules">
          <div className="rules-inner">
            <div className="rules-content">
              <div className="rules-content-wrapper">
                <div className="rules-content-title-star">
                  <Star color={"white"} />
                </div>{" "}
                <div className="rules-content-title-star2">
                  <Star />
                </div>
                <Slide direction="left">
                  <h1 className="rules-content-title">
                    Rules <br /> <span className="secondary">Guidelines</span>
                  </h1>
                </Slide>
                <Slide duration={2000} direction="left">
                  <p className="rules-content-desc">
                    ur tech hackathon is a melting pot of visionaries, and its
                    purpose is as clear as day: to shape the future. Whether
                    you're a coding genius, a design maverick, or a concept
                    wizard, you'll have the chance to transform your ideas into
                    reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the
                    world, that's what we're all about!
                  </p>
                </Slide>
              </div>
            </div>

            <div className="rules-image">
              <Bounce delay={500}>
                <Image src={rules} alt="rules" />
              </Bounce>
            </div>
          </div>
        </section>

        <section className="criteria">
          <div className="criteria-inner">
            <div className="criteria-image">
              <div className="criteria-image-star">
                <Star />
              </div>
              <Bounce>
                <Image src={criteria} alt="criteria" />
              </Bounce>
              <div className="criteria-image-star2">
                <Star color={"white"} />
              </div>
            </div>

            <div className="criteria-content">
              <div className="criteria-content-wrapper">
                <Slide direction="right">
                  <h1 className="criteria-content-title">
                    Judging Criteria <br />{" "}
                    <span className="secondary">Key attributes</span>
                    <div className="criteria-content-title-star">
                      <Star />
                    </div>
                  </h1>
                </Slide>
                <Slide cascade direction="right">
                  <ul className="criterias">
                    <li>
                      <p>
                        <span>Innovation and Creativity:</span> Evaluate the
                        uniqueness and creativity of the solution. Consider
                        whether it addresses a real-world problem in a novel way
                        or introduces innovative features.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Functionality:</span> Assess how well the solution
                        works. Does it perform its intended functions
                        effectively and without major issues? Judges would
                        consider the completeness and robustness of the
                        solution.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Impact and Relevance:</span> Determine the
                        potential impact of the solution in the real world. Does
                        it address a significant problem, and is it relevant to
                        the target audience? Judges would assess the potential
                        social, economic, or environmental benefits.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Technical Complexity:</span> Evaluate the
                        technical sophistication of the solution. Judges would
                        consider the complexity of the code, the use of advanced
                        technologies or algorithms, and the scalability of the
                        solution.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Adherence to Hackathon Rules:</span> Judges will
                        Ensure that the team adhered to the rules and guidelines
                        of the hackathon, including deadlines, use of specific
                        technologies or APIs, and any other competition-specific
                        requirements.
                      </p>
                    </li>
                  </ul>
                </Slide>

                <Bounce>
                  <button className="btn-primary">Read More</button>
                </Bounce>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
