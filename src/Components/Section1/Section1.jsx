import React, { useEffect, useLayoutEffect, useRef, useState}   from "react";
import "./style1.css";
import { TbStack3 } from "react-icons/tb";
import  {Link}   from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import memoji1  from "../../assets/64a5cae9d3cc966a63df1fc8_memoji-1.jpg";
import memoji2  from "../../assets/64a5cae9b512e7df400ac445_memoji-2.jpg";
import memoji3  from "../../assets/64a5cae984029ebf1ce2d36d_memoji-3.jpg";
import memoji4  from "../../assets/64a5cae99e05806420a21142_memoji-4.jpg";
import memoji5  from "../../assets/64a5cae8aee9d5727a2a4027_memoji-5.jpg";
import memoji6  from "../../assets/64a5cae9b512e7df400ac441_memoji-6.jpg";
import btnArrow  from "../../assets/btn-arrow.svg"
import video1  from "../../assets/Donut_V5-hevc-safari_c0zzqo.mp4";
import video2  from "../../assets/Donut_V5-vp9-chrome_yq79bl.webm";
import airbnb  from "../../assets/64a6b4400da92d30ef23c490_logo-airbnb.svg";
import slackImg  from "../../assets/64a5d2c0cd80642581697f4c_logo-slack.svg";
import dropboxImg  from "../../assets/64a6b44032768f8d2e49c1ab_logo-dropbox.svg";
import zapierImg  from "../../assets/64a6b44074dc070f6de7ca6e_logo-zapier.svg";
import openAI  from "../../assets/64a6b440e1c6af2535d200e4_logo-openai.svg";
import cycleImg  from "../../assets/64a5d2c03a0ef409f36a24bf_logo-cycle.svg";
import arcImg  from "../../assets/64a6b44083e96a08c79c0908_logo-arc.svg";
import chromeImg  from "../../assets/64a6b5c740a280bbcc73dac6_logo-google-chrome.svg";
import youtube  from "../../assets/64a5d2c075586f04fecc3d3d_logo-youtube.svg";
import spotify  from "../../assets/64a6b4403af46a9433734cfd_logo-spotify.svg";
import intercom  from "../../assets/logo_intercom.svg";
import vercel  from "../../assets/64a6b440f4b3868b2b01ab08_logo-vercel.svg";
import hubspot  from "../../assets/64a5d2c0f1c54d34eabd3620_logo-hubspot.svg";
import avatar  from "../../assets/63fdc5679163af1aa449d7c8_demo-avatar.jpg";
import swan  from "../../assets/swan.svg";
import june  from "../../assets/june.svg";
import mokacare  from "../../assets/moka-care.svg";
import nodalview  from "../../assets/nodalview.svg";
import dopt  from "../../assets/dopt.svg";
import figures  from "../../assets/figures.svg";
import fabriq  from "../../assets/fabriq.svg";
import multis  from "../../assets/multis.svg";
import contrast  from "../../assets/contrast.svg";
import dreem  from "../../assets/dreem.svg";
import lazy  from "../../assets/lazy.svg";
import efounders  from "../../assets/efounders.svg";
gsap.registerPlugin(ScrollTrigger);

export const Section1 = () => {
  const [scroll, setScroll] = useState(false);
  const [settle, setSettle] = useState(false);
  const listenToScroll = ()=>{
    let heightToHidden = 450;
    let heightToHidden2 = 1200;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(winScroll);
    winScroll > heightToHidden && winScroll < heightToHidden2 ? setScroll(true) : setScroll(false)
    winScroll > heightToHidden2 ? setSettle(true) : setSettle(false)
  }
  

  useEffect(() => {
    window.addEventListener("scroll",listenToScroll);  
    return () => {
      window.removeEventListener("scroll",listenToScroll);
    }
  }, [])

  const elem1 = useRef(null);
  const elem2 = useRef(null);
  const elem3 = useRef(null);
  const elem4 = useRef(null);
  const elem5 = useRef(null);
  const elem6 = useRef(null);

  useEffect(() => {
    // Create the first script element
    const script1 = document.createElement("script");
    script1.src =
      "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=62b5b85dd560583e288cb389";
    script1.type = "text/javascript";
    script1.integrity = "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=";
    script1.crossOrigin = "anonymous";

    // Create the second script element
    const script2 = document.createElement("script");
    script2.src =
      "https://assets-global.website-files.com/62b5b85dd560583e288cb389/js/cycle-app.6e57c4c61.js";
    script2.type = "text/javascript";

    // Append the script elements to the head of the document
    document.head.appendChild(script1);
    document.head.appendChild(script2);

    // Clean-up function - will run when the component is unmounted
    return () => {
      // Remove the script elements to avoid memory leaks
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []); 

  useLayoutEffect(() => {
    const el1 = elem1.current;
    const el2 = elem2.current;
    const el3 = elem3.current;
    const el4 = elem4.current;
    const el5 = elem5.current;
    const el6 = elem6.current;


    gsap.to(el1,{
      x: '0%',
      y: '-1970%',
      duration: 500,
      ease: "ease-in",
      scrollTrigger: {
        trigger: el5,
        delay:0.5,
        start: "top 20% +=2",
        scrub: true,
        // markers: true,
        
      }
  })
    gsap.to(el3,{
      x: '0%',
      y: '-1980%',
      duration: 500,
      ease: "ease-in",
      scrollTrigger: {
        trigger: el5,
        delay:0.5,
        start: "top 20% +=2",
        scrub: true,
        // markers: true,
        
      }
  })
    gsap.to(el5,{
      x: '0%',
      y: '-1990%',
      duration: 500,
      ease: "ease-in",
      scrollTrigger: {
        trigger: el5,
        start: "top 70%",
        scrub: true,
        // markers: true,        
      }
  })
    gsap.to(el2,{
      x: '0%',
      y: '-1990%',
      duration: 500,
      ease: "ease-in",
      scrollTrigger: {
        trigger: el6,
        start: "top 20%",
        scrub: true,
        // markers: true,
      }
  })
    gsap.to(el4,{
      x: '0%',
      y: '-1990%',
      duration: 500,
      ease: "ease-in",
      scrollTrigger: {
        trigger: el6,
        start: "top 20%",
        scrub: true,
        // markers: true,

      }
  })
    gsap.to(el6,{
      x: '0%',
      y: '-1990%',
      duration: 500,
      ease: "ease-in",
      scrollTrigger: {
        trigger: el6,
        start: "top 65%",
        scrub: true,
        // markers: true,
        
      }
  })

  }, [])


  return (
    <>
      <section
        data-w-id="8feff86c-b318-d1af-6266-96dad34cab76"
        className="head"
      >
        <div className="hero-gradient"></div>
        <div className="w-layout-blockcontainer container is-head w-container">
          <Link to="/"  className="widget-banner w-inline-block">
            <div className="widget-emoji"><TbStack3/></div>
            <div>We're live on Product Hunt!</div>
            <div className="widget-link">
              <div>Learn more</div>
              <div className="button-arrow-wrapper is-right">
                <div className="button-arrow is-small w-embed">
                 <img src={btnArrow} alt="btn-arrow" />
                </div>
              </div>
            </div>
          </Link>
          <div className="head-title">
            <h1 className="headline">
              Your product feedback,
              <span className="color-txt-blue">
                <br />
                all in one place
              </span>
            </h1>
            <div className="tagline ch-40">
              Cycle is the most delightful way to capture feedback, extract
              insights, create roadmaps, and communicate your releases.
            </div>
            <div className="buttons">
              <Link
                to="/"
                data-property-page="index"
                data-analytics="Get started"
                data-w-id="8feff86c-b318-d1af-6266-96dad34cab82"
              
                className="button w-button"
              >
                Start free trial
              </Link>
              <Link
                to="/"
            
                data-property-source="index"
                data-analytics="Audit feedback system"
                data-w-id="8feff86c-b318-d1af-6266-96dad34cab84"
                className="button is-outline w-button"
              >
                Book a demo
              </Link>
            </div>
            <div className="text-block-2">
              7-day free trial unlocked by onboarding call
            </div>
          </div>
          <div className="donut-wrapper">
            <div className="donut-video is-back w-embed">
              <video className="donut-vid" autoPlay muted loop playsInline>
                <source
                  src={video1}
                  type='video/mp4; codecs="hvc1"'
                />

                <source
                  src={video2}
                  type="video/webm"
                />
              </video>
            </div>
            <div className="donut-video is-front w-embed">
              <video className="donut-vid" autoPlay muted loop playsInline>
                <source
                  src={video1}
                  type='video/mp4; codecs="hvc1"'
                />

                <source
                  src={video2}
                  type="video/webm"
                />
              </video>
            </div>
            <div className="donuts"></div>
          </div>
          <div className="ui-overlay" >
            <div
              id="w-node-_8feff86c-b318-d1af-6266-96dad34cab8b-0d911088"
              className="ui-sticky"
            >
        
              <div className={`head-ui-wrapper is-sticky ${settle === true ? "flex": ""}`} >
                <div className={`ui-row-wrapper is-1 ${scroll === true ? "scroll-1":settle === true ? "settle-1":""}`} ref={elem1}>
                  <div className={`ui-row is-1 ${settle === true ? "size": ""}`}>
                    <div className={`ui-wrapper is-final ${settle === true ? "show": "hide"}`}>
                      <div className="ui-horizontal">
                        <div className={`ui-image-wrapper is-transparent ${settle === true ? "visible": ""}`}>
                          <img
                            src={memoji6}
                            loading="lazy"
                            alt=""
                            className="ui-image"
                          />
                        </div>
                        <div className="ui-line"></div>
                        <img
                          src={airbnb}
                          loading="lazy"
                          alt="Logo of Airbnb"
                          className="ui-image-wrapper"
                        />
                        <div className="ui-line"></div>
                      </div>
                      <div className={`ui-image-wrapper is-transparent ${settle === true ? "visible": ""}`}>
                        <img
                          src={slackImg}
                          loading="lazy"
                          alt="Logo of Slack"
                          className="ui-picture-wrapper"
                        />
                      </div>
                    </div>
                    <div className={`ui-wrapper is-slack ${settle === true ? "hide": "show"}`}>
                      <div className="ui-picture-wrapper is-large">
                        <img
                          src={memoji6}
                          loading="lazy"
                          alt=""
                          className="ui-memoji"
                        />
                      </div>
                      <div
                        id="w-node-_8feff86c-b318-d1af-6266-96dad34cab9b-0d911088"
                        className="ui-lines is-move"
                      >
                        <div className="ui-line"></div>
                        <div className="ui-line is-small"></div>
                      </div>
                      <div
                        id="w-node-_8feff86c-b318-d1af-6266-96dad34cab9e-0d911088"
                        className="ui-picture-wrapper is-logo"
                      >
                        <img
                          src="src\assets\64a5d2c0cd80642581697f4c_logo-slack.svg"
                          loading="lazy"
                          id="w-node-_8feff86c-b318-d1af-6266-96dad34cab9f-0d911088"
                          alt="Logo of Slack"
                          className="ui-picture"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`ui-row-wrapper is-2 ${scroll === true ? "scroll-2":"scroll-back"} ${settle === true ? "settle-2":""}`} ref={elem2}>
                  <div className={`ui-row is-2 ${settle === true ? "size": ""}`}>
                    <div className={`ui-wrapper is-final ${settle === true ? "show": "hide"}`}>
                      <div className="ui-horizontal">
                        <div className={`ui-image-wrapper is-transparent ${settle === true ? "visible": ""}`}>
                          <img
                            src={memoji5}
                            loading="lazy"
                            alt=""
                            className="ui-image"
                          />
                        </div>
                        <div className="ui-line"></div>
                        <img
                          src={dropboxImg}
                          loading="lazy"
                          alt="Logo of Dropbox"
                          className="ui-image-wrapper"
                        />
                        <div className="ui-line"></div>
                      </div>
                      <div className="ui-image-wrapper">
                        <img
                          src={zapierImg}
                          loading="lazy"
                          alt="Logo of Zapier"
                          className="ui-picture-wrapper"
                        />
                      </div>
                    </div>
                    <div className={`ui-wrapper is-twitter ${settle === true ? "hide": "show"}`}>
                      <div className={`ui-picture-wrapper ${settle === true ? "is-large": ""}`}>
                        <img
                          src={zapierImg}
                          loading="lazy"
                          alt="Logo of Zapier"
                          className="ui-picture is-logo"
                        />
                        <img
                          src={memoji5}
                          loading="lazy"
                          alt=""
                          className="ui-memoji"
                        />
                      </div>
                      <div className="ui-lines">
                        <div className="ui-line"></div>
                        <div className="ui-line is-small"></div>
                      </div>
                      <div className="ui-cta"></div>
                    </div>
                  </div>
                </div>
                <div className={`ui-row-wrapper is-3 ${scroll === true ? "scroll-3":"scroll-back"} ${settle === true ? "settle-3":""}`} ref={elem3}>
                  <div className={`ui-row is-3 ${settle === true ? "size": ""}`}>
                    <div className={`ui-wrapper is-final ${settle === true ? "show": "hide"}`}>
                      <div className="ui-horizontal">
                        <div className={`ui-image-wrapper is-transparent ${settle === true ? "visible": ""}`}>
                          <img
                            src={memoji1}
                            loading="lazy"
                            alt=""
                            className="ui-image"
                          />
                        </div>
                        <div className="ui-line"></div>
                        <img
                          src={openAI}
                          loading="lazy"
                          alt="Logo of OpenAI"
                          className="ui-image-wrapper"
                        />
                        <div className="ui-line"></div>
                      </div>
                      <div className="ui-image-wrapper">
                        <img
                          src={cycleImg}
                          loading="lazy"
                          alt="Logo of Cycle"
                          className="ui-picture-wrapper"
                        />
                      </div>
                    </div>
                    <div className={`ui-wrapper is-image ${settle === true ? "hide": "show"}`}>
                      <div className="ui-cover is-large">
                        <img
                          src={memoji1}
                          loading="lazy"
                          alt=""
                          className="ui-memoji"
                        />
                      </div>
                      <div className="ui-lines">
                        <div className="ui-line"></div>
                        <div className="ui-line is-small"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`ui-row-wrapper is-4 ${scroll === true ? "scroll-4":"scroll-back"} ${settle === true ? "settle-4":""}`} ref={elem4}>
                  <div className={`ui-row is-4 ${settle === true ? "size": ""}`}>
                    <div className={`ui-wrapper is-final ${settle === true ? "show": "hide"}`}>
                      <div className="ui-horizontal">
                        <div className={`ui-image-wrapper is-transparent ${settle === true ? "visible": ""}`}>
                          <img
                            src={memoji2}
                            loading="lazy"
                            alt=""
                            className="ui-picture-wrapper"
                          />
                        </div>
                        <div className="ui-line"></div>
                        <img
                          src={arcImg}
                          loading="lazy"
                          alt="Logo of Arc"
                          className="ui-image-wrapper"
                        />
                        <div className="ui-line"></div>
                      </div>
                      <div className={`ui-image-wrapper is-transparent ${settle === true ? "visible": ""}`}>
                        <img
                          src={chromeImg}
                          loading="lazy"
                          alt="Logo of Chrome"
                          className="ui-picture-wrapper"
                        />
                      </div>
                    </div>
                    <div className={`ui-wrapper is-youtube ${settle === true ? "hide": "show"}`}>
                      <div className={`ui-picture-wrapper ${settle === true ? "is-large": ""}`}>
                        <img
                          src={chromeImg}
                          loading="lazy"
                          alt="Logo of Chrome"
                          className="ui-picture is-logo"
                        />
                        <img
                          src="src\assets\64a5cae9b512e7df400ac445_memoji-2.jpg"
                          loading="lazy"
                          alt=""
                          className="ui-memoji"
                        />
                      </div>
                      <div
                        id="w-node-_8feff86c-b318-d1af-6266-96dad34cabd0-0d911088"
                        className="ui-cta"
                      >
                        <img
                          src={youtube}
                          loading="lazy"
                          alt="Logo of YouTube"
                          className="ui-memoji"
                        />
                      </div>
                      <div
                        id="w-node-_8feff86c-b318-d1af-6266-96dad34cabd2-0d911088"
                        className="ui-lines"
                      >
                        <div className="ui-line"></div>
                        <div className="ui-line is-small"></div>
                      </div>
                      <div
                        id="w-node-_8feff86c-b318-d1af-6266-96dad34cabd5-0d911088"
                        className="w-layout-grid ui-grid"
                      >
                        <div
                          id="w-node-_8feff86c-b318-d1af-6266-96dad34cabd6-0d911088"
                          className="ui-cover"
                        ></div>
                        <div
                          id="w-node-_8feff86c-b318-d1af-6266-96dad34cabd7-0d911088"
                          className="ui-cover"
                        ></div>
                        <div
                          id="w-node-_8feff86c-b318-d1af-6266-96dad34cabd8-0d911088"
                          className="ui-cover"
                        ></div>
                        <div
                          id="w-node-_8feff86c-b318-d1af-6266-96dad34cabd9-0d911088"
                          className="ui-cover"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`ui-row-wrapper is-5 ${scroll === true ? "scroll-5":"scroll-back"} ${settle === true ? "settle-5":""}`} ref={elem5}>
                  <div className={`ui-row is-5 ${settle === true ? "size": ""}`}>
                    <div className={`ui-wrapper is-final ${settle === true ? "show": "hide"}`}>
                      <div className="ui-horizontal">
                        <div className={`ui-image-wrapper is-transparent ${settle === true ? "visible": ""}`}>
                          <img
                            src={memoji4}
                            loading="lazy"
                            alt=""
                            className="ui-picture-wrapper"
                          />
                        </div>
                        <div className="ui-line"></div>
                        <img
                          src={spotify}
                          loading="lazy"
                          alt="Logo of Spotify"
                          className="ui-image-wrapper"
                        />
                        <div className="ui-line"></div>
                      </div>
                      <div className="ui-image-wrapper">
                        <img
                          src={intercom}
                          loading="lazy"
                          alt="Logo of Intercom"
                          className="ui-picture-wrapper"
                        />
                      </div>
                    </div>
                    <div className={`ui-wrapper is-insta ${settle === true ? "hide": "show"}`}>
                      <div className={`ui-vertical ${settle === true ? "row": ""}`}>
                        <div className={`ui-picture-wrapper ${settle === true ? "is-large": ""}`}>
                          <img
                            src={intercom}
                            loading="lazy"
                            alt="Logo of Intercom"
                            className="ui-picture is-logo"
                          />
                          <img
                            src={memoji4}
                            loading="lazy"
                            alt=""
                            className="ui-memoji"
                          />
                        </div>
                        <div className="ui-lines">
                          <div className="ui-line"></div>
                          <div className="ui-line is-small"></div>
                        </div>
                        <div className="w-layout-grid ui-grid is-square">
                          <div
                            id="w-node-_8feff86c-b318-d1af-6266-96dad34cabee-0d911088"
                            className="ui-cover"
                          ></div>
                          <div
                            id="w-node-_8feff86c-b318-d1af-6266-96dad34cabef-0d911088"
                            className="ui-cover"
                          ></div>
                          <div
                            id="w-node-_8feff86c-b318-d1af-6266-96dad34cabf0-0d911088"
                            className="ui-cover"
                          ></div>
                          <div
                            id="w-node-_8feff86c-b318-d1af-6266-96dad34cabf1-0d911088"
                            className="ui-cover"
                          ></div>
                        </div>
                      </div>
                      <div className="ui-cta"></div>
                    </div>
                  </div>
                </div>
                <div className={`ui-row-wrapper is-6 ${scroll === true ? "scroll-6":"scroll-back"} ${settle === true ? "settle-6":""}`} ref={elem6}>
                  <div className={`ui-row is-6 ${settle === true ? "size": ""}`}>
                    <div className={`ui-wrapper is-final ${settle === true ? "show": "hide"}`}>
                      <div className="ui-horizontal">
                        <div className={`ui-image-wrapper is-transparent ${settle === true ? "visible": ""}`}>
                          <img
                            src={memoji3}
                            loading="lazy"
                            alt=""
                            className="ui-picture-wrapper"
                          />
                        </div>
                        <div className="ui-line"></div>
                        <img
                          src={vercel}
                          loading="lazy"
                          alt="Logo of Vercel"
                          className="ui-image-wrapper"
                        />
                        <div className="ui-line"></div>
                      </div>
                      <div className={`ui-image-wrapper is-transparent ${settle === true ? "visible": ""}`}>
                        <img
                          src={hubspot}
                          loading="lazy"
                          alt="Logo of Hubspot"
                          className="ui-picture-wrapper"
                        />
                      </div>
                    </div>
                    <div className={`ui-wrapper is-slack ${settle === true ? "hide": "show"}`}>
                      <div className="ui-picture-wrapper is-large">
                        <img
                          src={memoji3}
                          loading="lazy"
                          alt=""
                          className="ui-memoji"
                        />
                      </div>
                      <div
                        id="w-node-_8feff86c-b318-d1af-6266-96dad34cac01-0d911088"
                        className="ui-lines is-move"
                      >
                        <div className="ui-line"></div>
                        <div className="ui-line is-small"></div>
                      </div>
                      <div
                        id="w-node-_8feff86c-b318-d1af-6266-96dad34cac04-0d911088"
                        className="ui-picture-wrapper is-logo"
                      >
                        <img
                          src={hubspot}
                          loading="lazy"
                          id="w-node-_8feff86c-b318-d1af-6266-96dad34cac05-0d911088"
                          alt="Logo of Hubspot"
                          className="ui-picture"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="head-ui-overlay">
                  <Link
                    to="/"
                    className="button is-lightbox is-demo w-inline-block w-lightbox"
                  >
                    <div>Watch the demo</div>
                  </Link>
                  <div className="head-ui-overlay-button"></div>
                  <div className="head-ui-overlay-button"></div>
                  <img
                    src={avatar}
                    loading="lazy"
                    alt="Photo of Mehdi, CEO of Cycle, giving a demo of the product"
                    className={`head-ui-overlay-avatar ${settle === true ? "visible": ""}`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            tr-scrollflip-scrubend="center center"
            className="head-ui-wrapper is-desktop"
          ></div>
        </div>
      </section>
      <section className="section">
        <div className="container w-container">
          <div className="section-title">
            <div className="tagline">Loved by product folks at</div>
          </div>
          <figure className="clients-bar">
            <img
              src={swan}
              loading="lazy"
              alt="Logo of Swan"
              className="clients-logo"
            />
            <img
              src={nodalview}
              loading="lazy"
              alt="Logo of Nodalview"
              className="clients-logo"
            />
            <img
              src={june}
              loading="lazy"
              alt="Logo of June"
              className="clients-logo"
            />
            <img
              src={mokacare}
              loading="lazy"
              alt="Logo of Moka Care"
              className="clients-logo"
            />
            <img
              src={dopt}
              loading="lazy"
              alt="Logo of DOPT"
              className="clients-logo"
            />
            <img
              src={figures}
              loading="lazy"
              alt="Logo of Figures"
              className="clients-logo"
            />
            <img
              src={fabriq}
              loading="lazy"
              alt="Logo of Fabriq"
              className="clients-logo"
            />
            <img
              src={multis}
              loading="lazy"
              alt="Logo of Multis"
              className="clients-logo"
            />
            <img
              src={contrast}
              loading="lazy"
              alt="Logo of Contrast"
              className="clients-logo"
            />
            <img
              src={dreem}
              loading="lazy"
              alt="Logo of Dreem"
              className="clients-logo"
            />
            <img
              src={lazy}
              loading="lazy"
              alt="Logo of Lazy"
              className="clients-logo"
            />
            <img
              src={efounders}
              loading="lazy"
              alt="Logo of Efounders"
              className="clients-logo"
            />
          </figure>
        </div>
      </section>
    </>
  );
};

import  Helmet   from "react-helmet";

export default function Component() {
  return (
    <>
      <Helmet>
        <script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=62b5b85dd560583e288cb389"
          type="text/javascript"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"
        ></script>
        <script
          src="https://assets-global.website-files.com/62b5b85dd560583e288cb389/js/cycle-app.6e57c4c61.js"
          type="text/javascript"
        ></script>
      </Helmet>
      ...
    </>
  );
}
