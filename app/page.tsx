"use client";

import Star from "@/components/star/Star";
import Timer from "@joseavilasg/react-compound-timer";
import { Unica_One } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { Bounce, Rotate, Roll, Slide, Zoom } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const unica = Unica_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [underlineState, setUnderlineState] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>();
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
                    <Slide duration={1500}>
                      <h1>
                        getlinked Te
                        <span className="bulb">
                          <Image src={bulb} alt="creative bulb" />c
                        </span>
                        h
                      </h1>
                    </Slide>
                    <Slide duration={2500}>
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
                <Zoom cascade direction="right">
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
                </Zoom>

                <Bounce>
                  <button className="btn-primary">Read More</button>
                </Bounce>
              </div>
            </div>
          </div>
        </section>

        <section className="questions">
          <div className="questions-inner">
            <div className="questions-content">
              <div className="questions-content-wrapper">
                <Slide direction="right">
                  <h1 className="questions-content-title">
                    Frequently Asked <br />{" "}
                    <span className="secondary">Questions</span>
                    <div className="questions-content-title-star">
                      <Star />
                    </div>
                  </h1>
                </Slide>
                <Slide duration={2000}>
                  <p className="questions-content-title-desc">
                    We got answers to the questions that you might want to ask
                    about getlinked Hackathon 1.0
                  </p>
                </Slide>
                <Zoom direction="left">
                  <ul className="faqs">
                    {faqs.map((faq, index) => (
                      <li
                        key={index}
                        className={activeFaq == index ? "active-faq" : ""}
                        onClick={() => {
                          setActiveFaq(faq.id === activeFaq ? null : faq.id);
                        }}
                      >
                        <div className="question">
                          <p>{faq.question}</p>
                          <div className="plus">
                            {faq.id === activeFaq ? "-" : "+"}
                          </div>
                        </div>
                        <p className="answer">{faq.answer}</p>
                      </li>
                    ))}
                  </ul>
                </Zoom>
              </div>
            </div>

            <div className="questions-image">
              <div className="questions-image-star">
                <Star />
              </div>
              <div className="question-mark mark1">
                <Image src={question_mark} alt="question" />
              </div>{" "}
              <div className="question-mark mark2">
                <Image src={question_mark} alt="question" />
              </div>{" "}
              <div className="question-mark mark3">
                <Image src={question_mark} alt="question" />
              </div>
              <Bounce>
                <Image src={question} alt="questions" />
              </Bounce>
              <div className="questions-image-star2">
                <Star color={"white"} />
              </div>
            </div>
          </div>
        </section>

        <section className="timeline" id="timeline">
          <div className="timeline-inner">
            <div className="timeline-title">
              <Bounce>
                <h1>Timeline</h1>
                <p>
                  Here is the breakdown of the time we anticipate using for the
                  upcoming event.
                </p>
              </Bounce>
            </div>

            <div className="timelines">
              <div className="timeline-wrapper">
                <div className="timeline-content">
                  <Slide>
                    <h1>Hackathon Announcement</h1>
                    <p>
                      The getlinked tech hackathon 1.0 is formally announced to
                      the general public and teams begin to get ready to
                      register
                    </p>
                    <div className="timeline-mobile-date">
                      <h1>November 18, 2023</h1>
                    </div>
                  </Slide>
                </div>

                <div className="timeline-seperation">
                  <div className="line"></div>
                  <div className="number">
                    <h1>1</h1>
                  </div>
                </div>

                <div className="timeline-date">
                  <Slide direction="right">
                    <h1>November 18, 2023</h1>
                  </Slide>
                </div>
              </div>

              <div className="timeline-wrapper timeline-wrapper-odd">
                <div className="timeline-date">
                  <Slide>
                    <h1>November 18, 2023</h1>
                  </Slide>
                </div>

                <div className="timeline-seperation">
                  <div className="line"></div>
                  <div className="number">
                    <h1>2</h1>
                  </div>
                </div>

                <div className="timeline-content">
                  <Slide direction="right">
                    <h1>Teams Registration begins</h1>
                    <p>
                      Interested teams can now show their interest in the
                      getlinked tech hackathon 1.0 2023 by proceeding to
                      register
                    </p>
                    <div className="timeline-mobile-date">
                      <h1>November 18, 2023</h1>
                    </div>
                  </Slide>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-content">
                  <Slide>
                    <h1>Teams Registration ends</h1>
                    <p>
                      Interested Participants are no longer Allowed to register
                    </p>
                    <div className="timeline-mobile-date">
                      <h1>November 18, 2023</h1>
                    </div>
                  </Slide>
                </div>

                <div className="timeline-seperation">
                  <div className="line"></div>
                  <div className="number">
                    <h1>3</h1>
                  </div>
                </div>

                <div className="timeline-date">
                  <Slide direction="right">
                    <h1>November 18, 2023</h1>
                  </Slide>
                </div>
              </div>

              <div className="timeline-wrapper timeline-wrapper-odd">
                <div className="timeline-date">
                  <Slide>
                    <h1>November 18, 2023</h1>
                  </Slide>
                </div>

                <div className="timeline-seperation">
                  <div className="line"></div>
                  <div className="number">
                    <h1>4</h1>
                  </div>
                </div>

                <div className="timeline-content">
                  <Slide direction="right">
                    <h1>Announcement of the accepted teams and ideas</h1>
                    <p>
                      All teams whom idea has been accepted into getlinked tech
                      hackathon 1.0 2023 are formally announced
                    </p>
                    <div className="timeline-mobile-date">
                      <h1>November 18, 2023</h1>
                    </div>
                  </Slide>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-content">
                  <Slide>
                    <h1>Getlinked Hackathon 1.0 Offically Begins</h1>
                    <p>
                      Accepted teams can now proceed to build their ground
                      breaking skill driven solutions
                    </p>
                    <div className="timeline-mobile-date">
                      <h1>November 18, 2023</h1>
                    </div>
                  </Slide>
                </div>

                <div className="timeline-seperation">
                  <div className="line"></div>
                  <div className="number">
                    <h1>5</h1>
                  </div>
                </div>

                <div className="timeline-date">
                  <Slide direction="right">
                    <h1>November 18, 2023</h1>
                  </Slide>
                </div>
              </div>

              <div className="timeline-wrapper timeline-wrapper-odd">
                <div className="timeline-date">
                  <Slide>
                    <h1>November 18, 2023</h1>
                  </Slide>
                </div>

                <div className="timeline-seperation">
                  <div className="line"></div>
                  <div className="number">
                    <h1>6</h1>
                  </div>
                </div>

                <div className="timeline-content">
                  <Slide direction="right">
                    <h1>Demo Day</h1>
                    <p>
                      Teams get the opportunity to pitch their projects to
                      judges. The winner of the hackathon will also be announced
                      on this day
                    </p>
                    <div className="timeline-mobile-date">
                      <h1>November 18, 2023</h1>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="prices">
          <div className="prices-inner">
            <div className="prices-title-mobile">
              {/* <Slide direction="right"> */}
              <Slide direction="right">
                <h1>
                  Prices and <br /> <span className="secondary">Rewards</span>
                </h1>
                <p>
                  Highlight of the prizes or rewards for winners and for
                  participants.
                </p>
              </Slide>
              <div className="prices-content-title-star">
                <Star color={"white"} />
              </div>
            </div>

            <div className="prices-image">
              <div className="prices-image-star">
                <Star />
              </div>
              <Bounce>
                <Image src={trophy} alt="trophy" />
              </Bounce>
              <div className="prices-image-star2">
                <Star />
              </div>
            </div>

            <div className="prices-content">
              <div className="prices-title">
                {/* <Slide direction="right"> */}
                <Slide direction="right">
                  <h1>
                    Prices and <br /> <span className="secondary">Rewards</span>
                  </h1>
                  <p>
                    Highlight of the prizes or rewards for winners and for
                    participants.
                  </p>
                </Slide>
                {/* </Slide> */}
                <div className="prices-content-title-star">
                  <Star color={"white"} />
                </div>
              </div>

              <div className="prices-trophies">
                <div className="prices-trophies-wrapper">
                  <Slide cascade direction="up">
                    <ul className="trophies">
                      <li className="trophy first-position">
                        <Image src={gold_medal} alt="silver medal" />
                        <h1 className="position">1st</h1>
                        <h2>Runner</h2>
                        <h1 className="amount">N400,000</h1>
                      </li>
                      <li className="trophy second-position">
                        <Image src={silver_medal} alt="silver medal" />
                        <h1 className="position">2nd</h1>
                        <h2>Runner</h2>
                        <h1 className="amount">N300,000</h1>
                      </li>

                      <li className="trophy third-position">
                        <Image src={bronze_medal} alt="silver medal" />
                        <h1 className="position">3rd</h1>
                        <h2>Runner</h2>
                        <h1 className="amount">N150,000</h1>
                      </li>
                    </ul>
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="partners" id="partners">
          <div className=" partners-inner">
            <div className=" partners-title">
              <Slide direction="right">
                <h1>Partners and Sponsors</h1>
                <p>
                  Here is the breakdown of the time we anticipate using for the
                  upcoming event.
                </p>
              </Slide>
            </div>

            <div className="partners-list">
              <div className=" partners-list-wrapper">
                <div className="partner-group">
                  <div className="partner-image">
                    <Bounce>
                      <Image src={partner1} alt="partner logo" />
                    </Bounce>
                  </div>
                  <div className="seperation-line">
                    <div className="line"></div>B
                  </div>
                  <div className="partner-image">
                    <Bounce>
                      <Image src={partner2} alt="partner logo" />
                    </Bounce>
                  </div>
                </div>

                <div className="middle-line">
                  <div className="line"></div>
                  <div className="line"></div>
                </div>

                <div className="partner-group">
                  <div className="partner-image">
                    <Bounce>
                      <Image src={partner3} alt="partner logo" />
                    </Bounce>
                  </div>
                  <div className="seperation-line">
                    <div className="line"></div>
                  </div>
                  <div className="partner-image">
                    <Bounce>
                      <Image src={partner4} alt="partner logo" />
                    </Bounce>
                  </div>
                </div>

                <div className="middle-line">
                  <div className="line"></div>
                  <div className="line"></div>
                </div>

                <div className="partner-group">
                  <div className="partner-image">
                    <Bounce>
                      <Image src={partner5} alt="partner logo" />
                    </Bounce>
                  </div>
                  <div className="seperation-line">
                    <div className="line"></div>
                  </div>
                  <div className="partner-image">
                    <Bounce>
                      <Image src={partner6} alt="partner logo" />
                    </Bounce>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="privacy">
          <div className="privacy-inner">
            <div className="privacy-content">
              <div className="privacy-title">
                <div className="privacy-title-star">
                  <Star color={"white"} />
                </div>
                <Slide>
                  <h1>
                    Privacy Policy <br />{" "}
                    <span className="secondary">and Terms</span>
                  </h1>
                  <p className="date-updated">
                    Last updated on September 12, 2023
                  </p>
                  <p className="privacy-title-desc">
                    Highlight of the prizes or rewards for winners and for
                    participants.
                  </p>
                </Slide>
                <div className="privacy-title-star">
                  <Star color={"white"} />
                </div>
              </div>

              <div className="privacy-policy">
                <p className="privacy-policy-desc">
                  At getlinked tech Hackathon 1.0, we value your privacy and are
                  committed to protecting your personal information. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your data when you participate in our tech hackathon
                  event. By participating in our event, you consent to the
                  practices described in this policy.
                </p>
                <p className="privacy-policy-title">
                  Licensing Policy <br />
                </p>
                <p className="privacy-policy-title-desc">
                  Here are terms of our Standard License:
                </p>

                <ul className="policies">
                  <li className="policy">
                    <Image src={check} alt="check icon" />
                    <p className="policy-text">
                      The Standard License grants you a non-exclusive right to
                      navigate and register for our event
                    </p>
                  </li>
                  <li className="policy">
                    <Image src={check} alt="check icon" />
                    <p className="policy-text">
                      You are licensed to use the item available at any free
                      source sites, for your project developement
                    </p>
                  </li>
                </ul>

                <div className="policy-button">
                  <button className="btn-primary">Read More</button>
                </div>
              </div>
            </div>

            <div className="policy-image">
              <div className="policy-image-wrapper">
                <div className="image">
                  <Image src={security} alt="security" />
                </div>
                <div className="guy-on-padlock image">
                  <Image src={guy_lock} alt="Guy on a padlock" />
                </div>

                <div className=" privacy-title-star3">
                  <Star color={"white"} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import bulb from "@/public/assets/images/bulb.png";
import chain from "@/public/assets/images/chain.png";
import fire from "@/public/assets/images/fire.png";
import globe from "@/public/assets/images/globe.png";
import underline from "@/public/assets/images/underline.png";
import big_idea from "@/public/assets/images/big_idea.png";
import rules from "@/public/assets/images/rules.png";
import criteria from "@/public/assets/images/criteria.png";
import question from "@/public/assets/images/question.png";
import trophy from "@/public/assets/images/trophy.png";
import gold_medal from "@/public/assets/images/gold_medal.png";
import bronze_medal from "@/public/assets/images/bronze_medal.png";
import silver_medal from "@/public/assets/images/silver_medal.png";
import question_mark from "@/public/assets/images/question_mark.png";
import guy_lock from "@/public/assets/images/guy_lock.png";
import security from "@/public/assets/images/security.png";
import partner1 from "@/public/assets/images/partner1.png";
import partner2 from "@/public/assets/images/partner2.png";
import partner3 from "@/public/assets/images/partner3.png";
import partner4 from "@/public/assets/images/partner4.png";
import partner5 from "@/public/assets/images/partner5.png";
import partner6 from "@/public/assets/images/partner6.png";
import arrow from "@/public/assets/images/arrow.png";
import check from "@/public/assets/images/check.png";

const faqs = [
  {
    id: 0,
    question: "Can I work on a project I started before the hackathon?",
    answer:
      "aliquid dolorum obcaecati recusandae necessitatibus ipsa. Provident totam aspernatur eaque illum",
  },
  {
    id: 1,
    question: "What happens if I need help during the hackathon?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquid dolorum obcaecati recusandae necessitatibus ipsa. Provident totam aspernatur eaque illum",
  },
  {
    id: 2,
    question: "What happens if I don't have an idea for a project?",
    answer:
      "Lorem  consectetur adipisicing elit. Eveniet aliquid dolorum obcaecati recusandae necessitatibus ipsa. Provident totam aspernatur eaque illum",
  },
  {
    id: 3,
    question: "Can I join a team or do I have to come with one?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquid dolorum obcaecati ipsa. Provident totam aspernatur eaque illum",
  },
  {
    id: 4,
    question: "What happens after the hackathon ends",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquid dolorum obcaecati ",
  },
  {
    id: 5,
    question: "Can I work on a project I started before the hackathon?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquid dolorum obcaecati recusandae necessitatibus ipsa. Provident totam aspernatur eaque illum",
  },
];
