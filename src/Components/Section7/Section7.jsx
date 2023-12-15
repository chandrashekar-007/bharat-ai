import React, { useState } from "react";
import "./Section7.css";
import coverImg from '../../assets/cover-file.svg';
import eyeShape from "../../assets/eyes-shape.svg"
import eyeWhite from "../../assets/eyes-white.svg"
import eyeBlack from "../../assets/eyes-black.svg"
import collabBlue from "../../assets/collab-blue.png"
import collabGreen from "../../assets/collab-green.png"
import collabYellow from "../../assets/collab-yellow.png"
import incogEyes from "../../assets/incognito-eyes.png"
import incogMask from "../../assets/incognito-mask.svg"
import coverDropable from "../../assets/cover-dropable.svg"
import searchIcon from "../../assets/search-icon.svg"
import lightTheme from "../../assets/btn-light.svg"
import darkTheme from "../../assets/btn-dark.svg"
import keyIcon from "../../assets/key-icon.svg"
import keyIcon2 from "../../assets/key-icon2.svg"
import greenArrow from "../../assets/collab-circle.svg"
import yellowArrow from "../../assets/yellow-arrow.svg"
import blueArrow from "../../assets/blue-arrow.svg"
import plusIcon from "../../assets/plus-icon.svg"
import Draggable  from 'react-draggable';
import { useRef } from "react";
// import { DraggableCore } from "react-draggable";

const Square = () => {
  const [clicked, setClicked] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <button
      aria-label="Click to check the box"
      className="delight-bulk active w-inline-block"
    >
      <div
        className={`square ${clicked ? 'clicked' : 'unclicked'} w-inline-block`}
        onClick={handleClick}
      ></div>
    </button>
  );
};

function Section7() {

  const nodeRef= useRef(null);
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [hover, setHover] = useState("0");
  const [dragging, setDragging] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [rotation,setRotation] = useState(0);
  const [currentPos,setCurrentPos] = useState({x:0 , y:0});
  const [currentPosition, setCurrentPosition] = useState({
    xRate: 0,
    yRate: 0
  });

  const handleRotation=()=>{
    const angle = Math.atan2(currentPos.y - window.innerHeight / 2, currentPos.x - window.innerWidth / 2);
    setRotation(angle * 180 / Math.PI);
  }
  const handleMouse = (e) => {
    setCurrentPos({x:e.clientX,y:e.clientY});
  };
  const handleMouseOut =(e)=>{
    setCurrentPos({x:0,y:0});
    setRotation(0);
  }

  const handleStart=(e,data)=>{
    setDragging(false);
  }
  const handleDrop=(e,data)=>{
    setDragging(false);
    if(currentPosition.xRate >= 113){
      setDragOver(true);
      setDragging(false);
    }
  }
  const onDrag = (e, data) => {
    setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });
    setDragging(true);
    if(currentPosition.xRate >= 113){
      setDragging(false);
      setDragOver(true);
      }
  };

  const removeColor = () => {
    setHover("0");
  }

  const changeToLight = () => {
    setBackgroundColor("#fff");
  };

  return (
    <>
      <section className="section-7">
        <div className="section-wrapper">
          <div className="container w-container">
            <div className="section-title is-large">
              <h2 className="title2">And there&#x27;s even more...</h2>
              <div className="tagline ch-30">
                Cycle is full of delightful details that will make you enjoy the
                ride.
              </div>
            </div>

            <div className="w-layout-grid-col delights-grid">
              <div
                id="w-node-a0f2f313-23c1-b194-6429-3db4bdcbbc61-0d911088"
                className="delight cover"
              >
                <div className="delight-content cover">
                  <h3 className="title3">Cover pictures</h3>
                  <p className="body-small">
                    Drag &amp; drop images or GIFs to create beautiful cover
                    pictures
                  </p>
                </div>
                <div className="delight-wrapper cover handle">
                  <Draggable
                  draggable
                  nodeRef={nodeRef}
                   position={{
                    x: currentPosition.xRate,
                    y: currentPosition.yRate
                  }}
                  axis="both"
                    onDrag={onDrag}
                    scale={1.2}
                    onStart={handleStart}
                    onStop={handleDrop}
                    bounds="parent"
                    >
                    <div id="draggable"  className={`delight-cover-drag ${dragOver?"hidden":""}`} draggable >
                      <img
                        src={coverImg}
                        loading="lazy"
                        alt="Illustration"
                        className="delight-cover-file"
                        draggable
                      />
                    </div>
                  </Draggable>
                  <div id="droppable" className={`delight-cover-wrapper ${dragging?"dashed":""}`} >
                    <div className={`delight-cover-plus w-embed ${dragOver?"hidden":""}`}>
                      <img src={plusIcon} alt="Illustration" />
                    </div>
                    { dragOver &&  (<div className="delight-cover-pictures">
                      <img src="https://assets-global.website-files.com/62b5b85dd560583e288cb389/62bd86a8422cd44301026f96_delight-cover-sun.png" loading="lazy" alt="3D image of a bright sun" className={`delight-cover-sun ${dragOver?"translate":""}`}/>
                      <img src="https://assets-global.website-files.com/62b5b85dd560583e288cb389/62bd86a8e98f911e7fe30379_delight-cover-mountain.png" loading="lazy" sizes="(max-width: 479px) 79vw, (max-width: 767px) 76vw, 100vw" srcSet="https://assets-global.website-files.com/62b5b85dd560583e288cb389/62bd86a8e98f911e7fe30379_delight-cover-mountain-p-500.png 500w, https://assets-global.website-files.com/62b5b85dd560583e288cb389/62bd86a8e98f911e7fe30379_delight-cover-mountain-p-800.png 800w, https://assets-global.website-files.com/62b5b85dd560583e288cb389/62bd86a8e98f911e7fe30379_delight-cover-mountain.png 1023w" alt="3D image of mountains" className={`delight-cover-mountains ${dragOver?"translate":""}`}/>
                    </div>)}
                  </div>
                </div>
              </div>
              <div
                id="w-node-_6488323b-2511-d467-dca4-7a64daee572b-0d911088"
                data-w-id="6488323b-2511-d467-dca4-7a64daee572b"
                className="delight preview"
                  onMouseOver={(e)=>handleMouse(e)}
                  onMouseOut={(e)=>handleMouseOut(e)}
              >
                <div className="delight-wrapper preview">
                  <div className="delight-preview-wrapper"
                  >
                    <img
                      src={eyeShape}
                      loading="lazy"
                      alt="eyeShape"
                      className="delight-preview-image shape"
                    />
                    <div className="delight-preview-inner" >
                      <img
                        src={eyeBlack}
                        alt="black-eye"
                        className="delight-preview-image black"
                        style={{ transform: `translate(${currentPos.x-currentPos.x/1.02}%, ${currentPos.y-currentPos.y/1.02}%)` }}
                      />
                      <img
                        src={eyeWhite}
                        alt="white-eye"
                        className="delight-preview-image white"
                        style={{ transform: `translate(${1.8*(currentPos.x-currentPos.x/1.02)}%, ${1.8*(currentPos.y-currentPos.y/1.02)}%)` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="delight-content preview">
                  <h3 className="title3">Quick previews</h3>
                  <p className="body-small">
                    Hold shift + space to quickly preview docs from anywhere
                  </p>
                </div>
              </div>
              <div
                id="w-node-f0779bdf-aa48-9b7e-9116-024f62ee3ea7-0d911088"
                className="delight search"
              >
                <div className="delight-wrapper search">
                  <div className="delight-search-wrapper">
                    <div className="w-embed">
                      <input
                        type="text"
                        className="form-field delight-search-input w-input"
                        autoComplete="off"
                        maxLength={256}
                        name="search"
                        data-name="search"
                        placeholder=""
                        id="delight-search"
                      />

                    </div>
                    <div className="delight-search-button">
                      <div className="delight-search-icon w-embed">
                        <img src={searchIcon} alt="searchIcon" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="delight-content search">
                  <h3 className="title3">Powerful search</h3>
                  <p className="body-small">
                    Find what you want in a blink with a blazingly fast search
                  </p>
                </div>
              </div>

              <div id="theme-card"
                className={`delight theme w-node-_21db81e3-27fc-6d96-3ebe-0e29523bf88a-0d911088 ${hover === "0" ? "white" : hover === "1" ? "yellow" : hover === "2" ? "blue" : hover === "3" ? "orange" : hover === "4" ? "pink" : hover === "5" ? "green" : ""}
                ${backgroundColor === "black" ? "black" : "white"}`}
              >
                <div className="delight-wrapper theme">
                  <div
                    data-w-id="864a7fb0-c790-91e9-a26d-36ce967ce8ff"
                    className="delight-theme-colors"
                  >
                    <div id={"1"} className="delight-theme-color is-yellow" onMouseEnter={() => setHover("1")} onMouseLeave={removeColor}>
                      <div className="delight-theme-color-circle is-yellow" />
                    </div>
                    <div id={"2"} className="delight-theme-color is-blue" onMouseEnter={() => setHover("2")} onMouseLeave={removeColor}>
                      <div className="delight-theme-color-circle is-blue" />
                    </div>
                    <div id={"3"} className="delight-theme-color is-orange" onMouseEnter={() => setHover("3")} onMouseLeave={removeColor}>
                      <div className="delight-theme-color-circle is-orange" />
                    </div>
                    <div id={"4"} className="delight-theme-color is-pink" onMouseEnter={() => setHover("4")} onMouseLeave={removeColor}>
                      <div className="delight-theme-color-circle is-pink" />
                    </div>
                    <div id={"5"} className="delight-theme-color is-green" onMouseEnter={() => setHover("5")} onMouseLeave={removeColor}>
                      <div className="delight-theme-color-circle is-green" />
                    </div>
                  </div>
                  <div
                    data-current="Light"
                    data-easing="ease"
                    data-duration-in={0}
                    data-duration-out={0}
                    className="w-tabs"
                  >
                    <div className="delight-theme-switch w-tab-menu">
                      <button
                        data-w-tab="Dark"
                        id="dark"
                        aria-label="Switch to dark mode"
                        data-w-id="0e69ca4a-9651-0407-a7a3-45f4b7cfc940"
                        className="delight-theme-button dark w-inline-block w-tab-link"
                        onClick={() => setBackgroundColor("black")}
                      >
                        <div className="delight-theme-icon w-embed">
                          <img src={lightTheme} alt="lightTheme" />
                        </div>
                      </button>
                      <button
                        onClick={changeToLight}
                        href="##"
                        data-w-tab="Light"
                        id="light"
                        aria-label="Switch to light mode"
                        className="delight-theme-button light w-inline-block w-tab-link w--current"
                      >
                        <div className="delight-theme-icon w-embed">
                          <img src={darkTheme} alt="darkTheme" />
                        </div>
                      </button>
                    </div>
                    <div className="hide w-tab-content">
                      <div data-w-tab="Dark" className="w-tab-pane" />
                      <div
                        data-w-tab="Light"
                        className="w-tab-pane w--tab-active"
                      />
                    </div>
                  </div>
                </div>
                <div className="delight-content themes">
                  <h3 className={`title3 ${backgroundColor==="black"?"text-light":""}`}>Themes</h3>
                  <p className="body-small">
                    Customize your experience with colors and themes to feel
                    like home
                  </p>
                </div>
                <div className="code w-embed">
                   </div>
              </div>

              <div
                id="w-node-ed738e67-2ad0-bf0b-0ec2-06e996321e73-0d911088"
                className="delight bulk"
              >
                <div className="delight-wrapper bulk">
                  <div className="delight-bulk-wrapper">
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <a
                      aria-label="Click to check the box"
                      href="#"
                    >

                      <Square />
                    </a>
                  </div>
                </div>
                <div className="delight-content bulk">
                  <h3 className="title3">Bulk actions</h3>
                  <p className="body-small">
                    Select a bunch of docs and apply quick actions to your
                    selection with one click
                  </p>
                </div>
              </div>

              <div
                id="w-node-_99a86c8e-2b7b-4819-2bd4-d6e59019a62d-0d911088"
                className="delight shortcuts"
              >
                <div id="bar-wrapper" className="delight-shortcuts-bar-wrapper">
                  <div
                    id="bar-overlay"
                    className="delight-shortcuts-bar-overlay"
                  >
                    <a
                      id="bar-message"
                      href="##"
                      className="delight-shortcuts-bar-message"
                    >
                      Book a demo
                    </a>
                  </div>
                </div>
                <div className="delight-wrapper shortcuts">
                  <div id="key-cmd" className="delight-shortcuts-key">
                    <div className="delight-shortcut-key-icon w-embed">
                      <img src={keyIcon} alt="keyIcon" />
                    </div>
                  </div>
                  <div id="key-k" className="delight-shortcuts-key">
                    <div className="delight-shortcut-key-icon w-embed">
                      <img src={keyIcon2} alt="keyIcon2" />
                    </div>
                  </div>
                </div>
                <div className="delight-content shortcuts">
                  <h3 className="title3">Shortcuts</h3>
                  <p className="body-small">
                    Navigate at speed of light without touching your mouse
                  </p>
                </div>
              </div>

              <div
                id="w-node-_61a52749-e1e6-336c-0b0f-8fd715de3e07-0d911088"
                className="delight realtime"
              >
                <div className="delight-wrapper realtime">
                  <a
                    id="w-node-_1b27e564-6a17-8226-c335-15a0cff4aef5-0d911088"
                    data-w-id="1b27e564-6a17-8226-c335-15a0cff4aef5"
                    href="#"
                    className="delight-collab-wrapper green w-inline-block"
                  >
                    <div className="delight-collab-circle"></div>
                    <div onClick={handleRotation}
                     style={{transform:`rotate(${rotation}deg)`}}
                      className="delight-collab-arrow green w-embed"
                    >
                      <img src={greenArrow} alt="collabCircle" />
                    </div>
                    <img
                      src={collabGreen}
                      loading="lazy"
                      alt="A 3D character wearing green glasses and a green hat"
                      className="delight-collab-character"
                    />
                  </a>
                  <a
                    id="w-node-_220d47c5-5959-c1fe-922f-edb9a8ab44a7-0d911088"
                    data-w-id="220d47c5-5959-c1fe-922f-edb9a8ab44a7"
                    href="#"
                    className="delight-collab-wrapper yellow w-inline-block"
                  >
                    <div className="delight-collab-circle"></div>
                    <div
                    onClick={handleRotation}
                    style={{transform:`rotate(${rotation}deg)`}}
                      className="delight-collab-arrow yellow w-embed"
                    >
                      <img src={yellowArrow} alt="yellowArrow" />
                    </div>
                    <img
                      src={collabYellow}
                      loading="lazy"
                      alt="A 3D character with blond hair wearing blue glasses"
                      className="delight-collab-character large"
                    />
                  </a>
                  <a
                    id="w-node-_17527b17-c5a9-e06d-d3c8-7fbf122de92c-0d911088"
                    data-w-id="17527b17-c5a9-e06d-d3c8-7fbf122de92c"
                    href="##"
                    className="delight-collab-wrapper blue w-inline-block"
                  >
                    <div className="delight-collab-circle"></div>
                    <div
                     onClick={handleRotation}
                     style={{transform:`rotate(${rotation}deg)`}}
                      className="delight-collab-arrow blue w-embed"
                    >
                      <img src={blueArrow} alt="blueArrow" />
                    </div>
                    <img
                      src={collabBlue}
                      loading="lazy"
                      alt="A 3D character wearing a blue cap"
                      className="delight-collab-character"
                    />
                  </a>
                </div>
                <div className="delight-content realtime">
                  <h3 className="title3">Real-time collaboration</h3>
                  <p className="body-small">
                    Work together in real-time and easily join your teammates by
                    clicking on their avatars
                  </p>
                </div>
                {/* <div className="code w-embed">
                  <style>
                    {`
            .delight-collab-circle {
              background-color: currentcolor;
            }

            .delight-collab-wrapper {
              border-color: currentcolor;
            }
          `}
                  </style>
                </div> */}
              </div>

              <div
                id="w-node-_85c302fc-bdd2-cec5-afe4-c478b8ebc00f-0d911088"
                className="delight incognito"
              >
                <div className="delight-wrapper incognito">
                  <div
                    data-w-id="d1f41bdb-880f-d82b-97d1-92a1b7c09481"
                    className="delight-incognito"
                  >
                    <img
                      src={incogEyes}
                      loading="lazy"
                      alt="3D eyes of a character, smiling"
                      className="delight-incognito-image eyes"
                    />
                    <img
                      src={incogMask}
                      loading="lazy"
                      alt="Illustration of an eye mask, similar to carnival masks to hide one's identity"
                      className="delight-incognito-image mask"
                    />
                  </div>
                </div>
                <div className="delight-content incognito">
                  <h3 className="title3">Incognito mode</h3>
                  <p className="body-small">
                    Don't want anyone looking over your shoulder? Just go
                    incognito, we've got your back!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Section7;
