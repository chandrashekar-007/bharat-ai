import React from 'react'
import './Footer.css'
import "../Global.css";
import footerLogo from "../../assets/BharatAi.svg"
import twitter from "../../assets/twitter-icon.svg"
import dribble from "../../assets/dribble-icon.svg"
import linkedin from "../../assets/linkedin-icon.svg"

const Footer = () => {
    return (
        <footer>
            <div className=" layout-grid footer-grid">
                <div
                    id="footer2"
                    className="divTag footer-logo w-embed"
                >
                    <img src={footerLogo} alt="footerLogo" className="footer-img"/>
                </div>
                <div
                    id="w-node-_9704f96a-3bea-5174-9b6c-9e209d38fc0d-51cd1386"
                    className="divTag footer-items"
                >
                    <h3 className="h4">Explore</h3>
                    <a
                        href="#"
                        target="_blank"
                        className="anchorTag footer-item w-inline-block7"
                    >
                        <div className='divTag'>Docs</div>
                    </a>
                    <a href="#" className="anchorTag footer-item w-inline-block7">
                        <div className='divTag'>Integrations</div>
                    </a>
                    <a href="#" className="anchorTag footer-item w-inline-block7">
                        <div className='divTag'>Slack</div>
                    </a>
                    <a href="#" className="anchorTag footer-item w-inline-block7">
                        <div className='divTag '>Pricing</div>
                    </a>
                    <a href="#" className="anchorTag footer-item w-inline-block7">
                        <div className='divTag '>Changelog</div>
                    </a>
                    <a href="#" className="anchorTag footer-item w-inline-block7">
                        <div className='divTag '>Blog</div>
                    </a>
                </div>
                <div
                    id="w-node-_4d40a9c7-ef22-504e-63bd-bdf68166e8bc-51cd1386"
                    className="divTag footer-items"
                >
                    <h3 className="h4">Company</h3>
                    <a href="#" className="anchorTag footer-item w-inline-block7">
                        <div className='divTag '>Manifesto</div>
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        className="anchorTag footer-item w-inline-block7"
                    >
                        <div className='divTag '>Press Kit</div>
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        className="anchorTag footer-item w-inline-block7"
                    >
                        <div className='divTag '>Status</div>
                    </a>
                </div>
                <div
                    id="w-node-_1e139e51-12b2-4348-6035-aff2f7752d02-51cd1386"
                    className="divTag footer-items"
                >
                    <h3 className="h4">Legal</h3>
                    <a
                        href="#"
                        target="_blank"
                        className="anchorTag footer-item w-inline-block7"
                    >
                        <div className='divTag '>Terms of Service</div>
                    </a>
                    <a
                        href="#"
                        className="anchorTag footer-item w-inline-block7"
                    >
                        <div className='divTag '>Privacy Policy</div>
                    </a>
                </div>
                <div
                    id="w-node-_7099fa8d-962d-0700-d572-65b2e692dc3d-51cd1386"
                    className="divTag footer-items is-full"
                >
                    <div className="divTag footer-line is-top hide w-embed">
                        <svg
                            width={117}
                            height={275}
                            viewBox="0 0 117 275"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M115 2L44 2C20.804 2 2 20.804 2 44L2 273"
                                stroke="#D9D9D9"
                                strokeWidth={4}
                                strokeLinecap="round"
                                strokeDasharray="8 14"
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>
                    </div>
                </div>
                <div
                    id="w-node-_35c2d630-af6f-7190-7877-0b0c82e55f4c-51cd1386"
                    className="divTag footer-socials"
                >
                    <a
                        aria-label="Link to Cycle's twitter profile"
                        href="#"
                        target="_blank"
                        className="anchorTag footer-social twitter w-inline-block7"
                    >
                        <div className="divTag footer-link-icon w-embed">
                            <img src={twitter} alt="twitter-icon"/>
                        </div>
                    </a>
                    <a
                        aria-label="Link to Cycle's Dribble profile"
                        href="#"
                        target="_blank"
                        className="anchorTag footer-social dribble w-inline-block7"
                    >
                        <div className="divTag footer-link-icon w-embed">
                        <img src={dribble} alt="dribble-icon"/>                           
                        </div>
                    </a>
                    <a
                        aria-label="Link to Cycle's LinkedIn profile"
                        href="#"
                        target="_blank"
                        className="anchorTag footer-social linkedin w-inline-block7"
                    >
                        <div className="divTag footer-link-icon w-embed">
                        <img src={linkedin} alt="linkedin-icon"/>                            
                        </div>
                    </a>
                </div>
                <p
                    id="w-node-f5224ec1-e68e-7a15-6b2d-3fac286bebec-51cd1386"
                    className="paraT body-xsmall"
                >
                    © BharatAI. <span id="copyright">2023</span> — All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer