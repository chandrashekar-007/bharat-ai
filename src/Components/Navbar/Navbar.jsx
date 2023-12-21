import React, { useEffect, useState } from "react";
import "./Nav.css";
import "../Global.css";
import { ImCross } from "react-icons/im";
import { IoMenu  } from "react-icons/io5";
import dropIcon from "../../assets/dropdown-icon.svg"
import navLogo from "../../assets/BharatAi.svg"
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);
  const listenToScroll = ()=>{
    let heightToHidden = 10;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    winScroll > heightToHidden ? setScroll(true) : setScroll(false)
  }

  useEffect(() => {
    window.addEventListener("scroll",listenToScroll);  
    return () => {
      window.removeEventListener("scroll",listenToScroll);
    }
  }, [])


  return (
    <div
      data-animation="default"
      className="nav w-nav"
      data-easing2="ease-in-out"
      data-easing="ease-in-out"
      data-collapse="medium"
      role="banner"
      data-no-scroll="1"
      data-duration="400"
      data-doc-height="1"
    >
      <div className="contain nav-container">
        <div className={`nav-background ${scroll === true ? "is-visible":""}`}></div>
        <Link
          to="/"
          aria-label="Link to the homepage"
          id="w-node-_94dce9b7-2909-bc55-e3e7-a03aedcd0da9-edcd0da7"
          aria-current="page"
          className="nav-logo w-nav-brand w--current"
        >
          <div className="nav-logo-svg w-embed">
            <img src={navLogo} alt="navlogo" />
          </div>
        </Link>
        <nav role="navigation" className="nav-items w-nav-menu">
          <div data-hover="true" data-delay="0" className="nav-dropdown w-dropdown">
            <div className="nav-item w-dropdown-toggle">
              <div>Resources</div>
              <div className="nav-dropdown-icon w-embed">
                <img src={dropIcon} alt="dropIcon" />
              </div>
            </div>
            <nav className="nav-dropdown-list w-dropdown-list">
              <div className="nav-dropdown-wrapper">
                <Link to="/Coming" className="nav-dropdown-link w-inline-block">
                  <div className="nav-dropdown-link-title">
                    <div>Code</div>
                  </div>
                  <div className="body-xsmall">
                  </div>
                </Link>
                <Link to="/Coming" className="nav-dropdown-link w-inline-block">
                  <div className="nav-dropdown-link-title">
                    <div>User Rankings</div>
                  </div>
                  {/* <div className="body-xsmall">
                    Connect &amp; unify product information across tools
                  </div> */}
                </Link>
                <div className="nav-dropdown-link is-soon">
                  <div className="nav-dropdown-link-title">
                    <div>Competition</div>
                    <div className="pricing-row-tag">Soon</div>
                  </div>
                  <div className="body-xsmall">
                    {/* Communicate your new releases, publicly */}
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <Link to="/Coming" className="nav-item">
            Models
          </Link>
          <Link to="/Coming" className="nav-item">
            Datasets
          </Link>
          <Link to="/Coming" className="nav-item">
            Courses
          </Link>
          <div data-hover="true" data-delay="0" className="nav-dropdown w-dropdown">
            <div className="nav-item w-dropdown-toggle">
              <div>Discussions</div>
              <div className="nav-dropdown-icon w-embed">
                <img src={dropIcon} alt="dropIcon" />
              </div>
            </div>
            <nav className="nav-dropdown-list w-dropdown-list">
              <div className="nav-dropdown-wrapper">
                <Link
                  to="/Coming"
                  target="_blank"
                  className="nav-dropdown-link w-inline-block"
                >
                  <div className="nav-dropdown-link-title">
                    <div>Contact/Support</div>
                  </div>
                  <div className="body-xsmall"></div>
                </Link>
                <Link
                  to="/Coming"
                  target="_blank"
                  className="nav-dropdown-link w-inline-block"
                >
                  <div className="nav-dropdown-link-title">
                    <div>Blog</div>
                  </div>
                  <div className="body-xsmall"></div>
                </Link>
              </div>
            </nav>
          </div>
          <div className="nav-ctas is-mobile">
            <Link
              data-property-page="header"
              data-analytics="Login"
              to="/Coming"
              target="_blank"
              className="nav-item"
            >
              Log in
            </Link>
            <Link
              to="/Coming"
              target="_blank"
              data-property-page="header"
              data-analytics="Get started"
              id="w-node-_934ee7b3-e9b4-2665-9e94-db781c953340-edcd0da7"
              className="button nav-button w-button"
            >
              Get started
            </Link>
          </div>
        </nav>
        <div
          id="w-node-_44cf08b7-8323-7a14-c847-b755c7dfa03f-edcd0da7"
          className="nav-ctas is-desktop"
        >
          <Link
            data-property-page="header"
            data-analytics="Login"
            to="/Coming"
            className="nav-item"
          >
            Log in
          </Link>
          <Link
            data-property-page="header"
            data-analytics="Get started"
            to="/Coming"
            className="button blue nav-button w-inline-block"
          >
            <div>Start free trial</div>
            <div className="tooltip-wrapper is-nav">
              <div className="tooltip-bubble">
                <div>7-day free trial unlocked by onboarding call</div>
                <div className="tooltip-arrow w-embed">
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 5L1 0H9L5 5Z" fill="white" />
                    <path d="M0 0.5H1L5 5.5L9 0.5H10" stroke="#171618" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div
          data-w-id="94dce9b7-2909-bc55-e3e7-a03aedcd0dae"
          className="nav-mobile w-nav-button"
        >
          <div
            data-is-ix2-target="1"
            className="nav-mobile-lottie"
            data-w-id="5d54e02f-8907-7899-f029-b2badd664dc7"
            data-animation-type="lottie"
            data-loop="0"
            data-direction="1"
            data-autoplay="0"
            data-default-duration="3"
            data-duration="0"
            onClick={()=>setShow(!show)}
          >
          {
            show === true ? (<ImCross className="menu-size1"/>):(
            <IoMenu  className="menu-size"/>)
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
