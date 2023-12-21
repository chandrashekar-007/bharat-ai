import React, { useState, useRef } from "react";
import "./Section5.css";
import "../Global.css";
import imgPlay from "../../assets/icon-close-the-loop-play.svg";
import imgPause from "../../assets/icon-close-the-loop-pause.svg";
import imgNotif from "../../assets/icon-notif.svg";
import imgMessage from "../../assets/icon-message.svg";
import imgRecruit from "../../assets/icon-recruit.svg";
import loopVideo from "../../assets/video-close-the-loop_d2bpvo.mp4";

function Section5() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    // setIsPlaying(!isPlaying);
    isPlaying ? videoRef.current.play() :"";
  };


  return (
    <>
      <section className="section-5">
        <div className="section-wrapper5 is-close">
          <div className="container-5">
            <div className="section-title5 is-large">
              <h2 className="title-main">
                Close the loop with customers at each release
              </h2>
              <div className="tagline5 ch-3">
                Just shipped a cool feature? Use Cycle to get back to folks who
                requested it.
              </div>
            </div>
          </div>
            <div className="w-layout-grid5 close-grid5">
              <div className="close-video-wrapper5">
                <div className="close-video-button w-inline-block5" onClick={()=>toggleVideo(    setIsPlaying(!isPlaying))}>
                  <div className={`close-video-button-icons`}>
                    <img
                      src={` ${isPlaying ? imgPlay:imgPause}`}
                      loading="lazy"
                      alt=""
                      className={`close-video-button-icon ${isPlaying ? 'closing-loop' : 'closed-loop'} `}
                    />
                  </div>
                  <div className="close-video-button-text">Close the loop</div>
                </div>
                <div className="close-video-embed w-embed">
                  <video ref={videoRef} className="close-video-file" muted   >
                    <source src={loopVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
              <div
                id="w-node-_30b0a9a1-26a8-c865-9570-60cf354d0271-0d911088"
                className="close-content-wrapper"
              >
                <div>
                  <img
                    src={imgNotif}
                    loading="lazy"
                    alt=""
                    className="feature-icon"
                  />
                  <h3 className="feature-icon-title">Personalized notifications</h3>
                  <p className="paratext">
                    Get notified in Slack or via email when there's an update on
                    an initiative you showed interest in.
                  </p>
                </div>
                <div>
                  <img
                    src={imgMessage}
                    loading="lazy"
                    alt=""
                    className="feature-icon"
                  />
                  <h3 className="feature-icon-title">Close the loop</h3>
                  <p className="paratext">
                    Communicate with customers in the right source and with the
                    right message when you ship something they asked.
                  </p>
                </div>
                <div>
                  <img
                    src={imgRecruit}
                    loading="lazy"
                    alt=""
                    className="feature-icon"
                  />
                  <h3 className="feature-icon-title">Recruit people for user research</h3>
                  <p className="paratext">
                    Reach out to the right folks when you start thinking about a
                    new feature - if they gave you feedback about it, they're
                    likely to care.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}
export default Section5;
