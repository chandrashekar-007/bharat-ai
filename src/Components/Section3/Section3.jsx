import React, { useState } from "react";
import "./Section3.css";
import topImage1 from "../../assets/character-cap.png";
import topImage2 from "../../assets/character-glasses.png";
import mainImg1 from "../../assets/container-img.png";
import img from "../../assets/btn-pic.svg";
import arrowr from "../../assets/right-arrow.svg";
import arrowl from "../../assets/left-arrow.svg";

const Section3 = () => {
  const [activeFirst, setActiveFirst] = useState("1");
  const [activeSecond, setActiveSecond] = useState("5");

  const handleEventFirst = e => {
    setActiveFirst(e.target.id);
  };
  const handleEventSecond = e => {
    setActiveSecond(e.target.id);
  };

  return (
    <section className="section-3">
      {/* <img src={img} alt="hello" /> */}
      <div className="container">
        <div className="wrapper-1">
          <div className="content-1">
            <h2>Capture feedback from many sources</h2>
            <div className="description1">
              <p>
                All your feedback, all in one place<br />User interviews, NPS
                surveys... Bring them all into Cycle.
              </p>
            </div>

            <div className="button-container">
              <div
                className={`btn btn-1 style ${activeFirst === "1"
                  ? "btn-click"
                  : " "} `}
                id={"1"}
                onClick={e => handleEventFirst(e)}
              >
                <h3 id={"1"}>Bring it all in your inbox</h3>
                <div id={"1"}>
                  <img
                    src={arrowr}
                    className={`${activeFirst === "1"
                      ? "arrow-icon"
                      : "arrow"}`}
                  />
                </div>
              </div>
              <div
                className={`btn btn-2 style ${activeFirst === "2"
                  ? "btn-click"
                  : " "} `}
                id={"2"}
                onClick={e => handleEventFirst(e)}
              >
                <h3 id={"2"}>Customize feedback forms</h3>
                <div id={"2"}>
                  <img
                    src={arrowr}
                    className={`${activeFirst === "2"
                      ? "arrow-icon"
                      : "arrow"}`}
                  />
                </div>
              </div>
              <div
                className={`btn btn-3 style ${activeFirst === "3"
                  ? "btn-click"
                  : " "} `}
                id={"3"}
                onClick={e => handleEventFirst(e)}
              >
                <h3 id={"3"}>Capture with context</h3>
                <div id={"3"}>
                  <img
                    src={arrowr}
                    className={`${activeFirst === "3"
                      ? "arrow-icon"
                      : "arrow"}`}
                  />
                </div>
              </div>
              <div
                className={`btn btn-4 style ${activeFirst === "4"
                  ? "btn-click"
                  : " "} `}
                id={"4"}
                onClick={e => handleEventFirst(e)}
              >
                <h3 id={"4"}>
                  Document rich user <br /> interviews
                </h3>
                <div id={"4"}>
                  <img
                    src={arrowr}
                    className={`${activeFirst === "4"
                      ? "arrow-icon"
                      : "arrow"}`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="content-2">
            <div
              className={`image-wrapper  ${activeFirst === "3" ||
              activeFirst === "4"
                ? "pink"
                : " "}`}
            >
              <div className="top-image1">
                <img src={topImage1} alt="logo" className="cap-logo" />
              </div>
            <div className="hz-tabs-content w-tab-content">
              <div
                data-w-tab="inbox"
                className={`hz-tab-content-wrapper w-tab-pane ${activeFirst === "1"? "w--tab-active":""}`}
              >
                <div className="hz-tab-content is-teal">
                  <div
                    data-w-id="ba058c20-de2e-2840-673f-d5fd48e90e63"
                    data-is-ix2-target="1"
                    className="hz-tab-lottie first"
                    data-animation-type="lottie"
                    data-src="https://assets-global.website-files.com/62b5b85dd560583e288cb389/63f5f84dc5b2ee01a1986c98_lottie-hz-bring-it-all-in-your-inbox.json"
                    data-loop="0"
                    data-direction="1"
                    data-autoplay="0"
                    data-renderer="svg"
                    data-default-duration="4"
                    data-duration="0"
                  ></div>
                  <div className="hz-tab-caption">
                    Meet your inbox. The home for your feedback from all
                    of your sources. Make sure no feedback gets unnoticed.
                  </div>
                </div>
              </div>
              <div
                data-w-tab="feedback-forms"
                className={`hz-tab-content-wrapper w-tab-pane ${activeFirst === "2"? "w--tab-active":""}`}
              >
                <div className="hz-tab-content is-green">
                  <div
                    className="hz-tab-lottie first"
                    data-w-id="dfcfa17a-f248-1db4-2ecc-26aeea2282d0"
                    data-animation-type="lottie"
                    data-src="https://assets-global.website-files.com/62b5b85dd560583e288cb389/63f5f84dbc273c0cde701c20_lottie-hz-customize-feedback-forms.json"
                    data-loop="0"
                    data-direction="1"
                    data-autoplay="1"
                    data-is-ix2-target="0"
                    data-renderer="svg"
                    data-default-duration="4"
                    data-duration="0"
                  ></div>
                  <div className="hz-tab-caption">
                    Configure the properties and tags you want people to
                    fill in when they send you product feedback
                  </div>
                </div>
              </div>
              <div
                data-w-tab="context"
                className={`hz-tab-content-wrapper w-tab-pane ${activeFirst === "3"? "w--tab-active":""}`}
              >
                <div className="hz-tab-content is-yellow">
                  <div
                    className="hz-tab-lottie first"
                    data-w-id="d4f56c96-41d0-163a-02cb-3d924c441cbc"
                    data-animation-type="lottie"
                    data-src="https://assets-global.website-files.com/62b5b85dd560583e288cb389/63fe4854d5ef767c6bfde6fe_lottie-capture-context.json"
                    data-loop="0"
                    data-direction="1"
                    data-autoplay="1"
                    data-is-ix2-target="0"
                    data-renderer="svg"
                    data-default-duration="5.016666666666667"
                    data-duration="0"
                  ></div>
                  <div className="hz-tab-caption">
                    When capturing feedback from Intercom or anywhere on
                    the web, don’t lose any context.
                  </div>
                </div>
              </div>
              <div
                data-w-tab="interviews"
                className={`hz-tab-content-wrapper w-tab-pane ${activeFirst === "4"? "w--tab-active":""}`}
              >
                <div className="hz-tab-content is-pink">
                  <div
                    className="hz-tab-lottie first"
                    data-w-id="74ecfd19-1a63-6a9d-6be0-97994ac30dda"
                    data-animation-type="lottie"
                    data-src="https://assets-global.website-files.com/62b5b85dd560583e288cb389/63f5f84d2ba19e72d961d877_lottie-hz-document-rich-user-interviews.json"
                    data-loop="0"
                    data-direction="1"
                    data-autoplay="1"
                    data-is-ix2-target="0"
                    data-renderer="svg"
                    data-default-duration="4"
                    data-duration="0"
                  ></div>
                  <div className="hz-tab-caption">
                    Write user research docs with all you expect from a
                    modern rich text editor with markdown and media
                    embeds.
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="wrapper-2">
          <div className="content-3">
            <div
              className={`image-wrapper2 ${activeSecond === "6" ||
              activeSecond === "7"
                ? " blue"
                : " "}`}
            >
              <div className="top-image2">
                <img src={topImage2} alt="logo" className="cap-logo" />
              </div>
              <div className="hz-tabs-content is-left w-tab-content">
                <div
                  data-w-tab="split-views"
                  className={`hz-tab-content-wrapper w-tab-pane ${activeSecond === "5"? "w--tab-active":""}`}
                >
                  <div className="hz-tab-content is-pink">
                    <div
                      className="hz-tab-lottie second"
                      data-w-id="5ec21348-b19e-fed5-8915-e9897b6690c1"
                      data-animation-type="lottie"
                      data-src="https://assets-global.website-files.com/62b5b85dd560583e288cb389/63f5f84d046f911c17a4a09d_lottie-hz-split-inbox-into-views.json"
                      data-loop="0"
                      data-direction="1"
                      data-autoplay="1"
                      data-is-ix2-target="0"
                      data-renderer="svg"
                      data-default-duration="5.016666666666667"
                      data-duration="0"
                    ></div>
                    <div className="hz-tab-caption">
                      Feedback isn&#x27;t all the same. Cycle lets you split
                      your Inbox the way that fits your needs so you can
                      process feedback in a full-focus mode.
                    </div>
                  </div>
                </div>
                <div
                  data-w-tab="inbox-zero"
                  className={`hz-tab-content-wrapper w-tab-pane ${activeSecond === "6"? "w--tab-active":""}`}
                >
                  <div className="hz-tab-content is-teal">
                    <div
                      className="hz-tab-lottie second"
                      data-w-id="bd945f59-7e08-ad9b-5ed9-811cbb262461"
                      data-animation-type="lottie"
                      data-src="https://assets-global.website-files.com/62b5b85dd560583e288cb389/63f5f84d591f4c066cd1ddd0_lottie-hz-get-to-inbox-zero.json"
                      data-loop="0"
                      data-direction="1"
                      data-autoplay="1"
                      data-is-ix2-target="0"
                      data-renderer="svg"
                      data-default-duration="4"
                      data-duration="0"
                    ></div>
                    <div className="hz-tab-caption">
                      Once you&#x27;re done extracting insights from
                      feedback and linking them to your initiatives… mark
                      the feedback as “processed” and hit inbox zero.
                    </div>
                  </div>
                </div>
                <div
                  data-w-tab="extract"
                  className={`hz-tab-content-wrapper w-tab-pane ${activeSecond === "7"? "w--tab-active":""}`}
                >
                  <div className="hz-tab-content is-green">
                    <div
                      className="hz-tab-lottie second"
                      data-w-id="121675f6-95a5-dd8a-b487-0f388679147a"
                      data-animation-type="lottie"
                      data-src="https://assets-global.website-files.com/62b5b85dd560583e288cb389/63f5f84d9b32b3f8155deac8_lottie-hz-extract-insights-from-feedback.json"
                      data-loop="0"
                      data-direction="1"
                      data-autoplay="1"
                      data-is-ix2-target="0"
                      data-renderer="svg"
                      data-default-duration="4"
                      data-duration="0"
                    ></div>
                    <div className="hz-tab-caption">
                      Highlight relevant pieces of text and turn them into
                      insights. Link the insights to their related product
                      initiatives (or create a new one), so you can close
                      the loop later on.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-4">
            <div className="heading">
              <h2>Extract product insights in your inbox</h2>
              <div className="description">
                <p>
                  Fly through your feedback with intuitive keyboard shortcuts,
                  extract product insights and get to Inbox zero in no time.
                </p>
              </div>
            </div>

            <div className="button-container">
              <div
                className={`btn btn-5 sec3-button style ${activeSecond === "5"
                  ? "btn-click"
                  : " "} `}
                id={"5"}
                onClick={e => handleEventSecond(e)}
              >
                <div id={"5"}>
                  <img src={arrowl} 
                    className={`${activeSecond === "5"
                      ? " icon arrow-icon"
                      : "arrow"}`}
                  />
                </div>
                <h3 id={"5"}>Split into two views</h3>
              </div>
              <div
                className={`btn btn-6 sec3-button style ${activeSecond === "6"
                  ? "btn-click"
                  : " "} `}
                id={"6"}
                onClick={e => handleEventSecond(e)}
              >
                <div id={"6"}>
                  <img src={arrowl} 
                    className={`${activeSecond === "6"
                      ? "icon arrow-icon"
                      : "arrow"}`}
                  />
                </div>
                <h3 id={"6"}>Get to inbox zero</h3>
              </div>
              <div
                className={`btn btn-7 sec3-button style ${activeSecond === "7"
                  ? "btn-click"
                  : " "} `}
                id={"7"}
                onClick={e => handleEventSecond(e)}
              >
                <div id={"7"}>
                  <img src={arrowl} 
                    className={`${activeSecond === "7"
                      ? "icon arrow-icon"
                      : "arrow"}`}
                  />
                </div>
                <h3 id={"7"}>Extract insights from feedback</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
