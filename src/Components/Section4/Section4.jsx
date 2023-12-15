import React from "react";
import "./Section4.css"
import img1 from "../../assets/context-img.jpg";
import img2a from "../../assets/delight-before-main.jpg";
import img2b from "../../assets/delight-after.svg";
import img3 from "../../assets/prd-content.jpg";
import img4 from "../../assets/prd-custom.png";



const Section4 = () => {
  return (
    <section
      className="section-4"
    >
      <div
        className="container-4"
      >
        <div
          className="content-main"
        >
          <h2 className="main-head">Write and organize your PRDs</h2>
          <p>
            All of your customer context, all in your PRDs. No split screen, no
            tool switching; it's all here.
          </p>
        </div>
        <div
          className="templates"
        >
          <div
            className="template template1"
          >
            <div
              className="template-content"
            >
              <h3>Customer context</h3>
              <p>
                Open a product initiative and use the insights panel on the
                right to empathize
              </p>
            </div>
            <div
              className="template-image temp-img1"
            >
              <img
                src={img1}
                className="image1 active-image1"
                alt="template_image1"
              />
            </div>
          </div>
          <div
            className="template template2"
          >
            <div
              className="template-content"
            >
              <h3>Delightful writing experience</h3>
              <p>
                Enjoy writing product specs with Cycle's full-fledged real-time
                editor, built for speed and delight.
              </p>
            </div>
            <div
              className="template-image temp-img2"
              style={{backgroundColor:"#fefaed"}}
            >
              <img
                src={img2a}
                alt="template_image1"
                className="image2a"
              />
              <img
                src={img2b}
                alt="template_image1"
                className="image2b"
              />
            </div>
          </div>
          <div
            className="template template3"
          >
            <div
              className="template-content"
            >
              <h3>Content templates</h3>
              <p>
                Content templates help you pre-fill PRDs with the structure and
                formatting you want.
              </p>
            </div>
            <div
              className="template-image temp-img2"
              style={{backgroundColor:"#fefaed"}}
            >
              <img
                src={img3}
                alt="template_image1"
                className="image3"
              />
            </div>
          </div>
          <div
            className="template template4"
          >
            <div
              className="template-content"
            >
              <h3>Custom properties</h3>
              <p>
                Add custom properties to your product initiatives. Use them to
                organize your roadmap.
              </p>
            </div>
            <div
              className="template-image temp-img1"
            >
              <img
                src={img4}
                alt="template_image1"
                className="image4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
