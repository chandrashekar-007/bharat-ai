import React ,{useState} from "react";
import "./Section9.css";
import "../Global.css";
import circleLine from "../../assets/cube-line.svg";
import cubeLine from "../../assets/circle-line.svg";

export default function Hero() {
  const [click,setClick] = useState(false);

  const flipBtn=()=>{
    setClick(!click);
  }

  return (
    <section className="section-9">
      <div className="container9">
        <div className="footer-wrapperr">
          <div className="w-layout-gridss">
            <div className="section-title1">
              <h2 className="heading1">Try Cycle today</h2>
              <div className="block">
                <div className="block-buttons">
                  <a href="/" className="button" id="btn1">
                    Start free trial
                  </a>
                  <a href="/" className="button" id="btn2">
                    Book a demo
                  </a>
                </div>
                <div className="text-block">
                  7-day free trial unlocked by onboarding call
                </div>
              </div>
            </div>

            <div className="callout-fun is-cube">
              <div className="fun-cube-wrapper">
                <div className="fun-cube-line w-embed">
                  <img src={cubeLine} alt="cubeLine" />
                </div>
                <div className="fun-cube-anchor">
                  <a role="button" href="#" onClick={flipBtn} className={`fun-cube w-inline-block ${click ? "animate-cube":""}`} />
                </div>
              </div>
            </div>
            <div className="callout-fun is-circle">
              <div className="fun-circle-wrapper">
                <div className="fun-circle-line w-embed">
                  <img src={circleLine} alt="circleLine" />
                </div>
                <div className="fun-circle-anchor">
                  <a role="button" href="#" className="fun-circle w-inline-block" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="callout-fun is-flip">
          <div className="fun-flip-wrapper">
            <a
              role="button"
              href="#"
              onClick={flipBtn}
              className={`fun-flip w-inline-block ${click ? "flip-up":""}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
