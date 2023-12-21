import React from "react";
import { useEffect, useRef} from "react";
import './Section2.css'
import "../Global.css";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
import image1 from "../../assets/main-pic.jpg";
import image2 from "../../assets/sync-customer.jpg";
import image3 from "../../assets/sync-company.jpg";
import image4 from "../../assets/sync-source.jpg";
import image5 from "../../assets/icon-sync.svg";
import image6 from "../../assets/icon-search.svg";
import image7 from "../../assets/icon-merge.svg";
import image8 from "../../assets/icon-feedback.svg";
import image9 from "../../assets/icon-filter.svg";
import image10 from "../../assets/icon-profiles.svg";
gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
    const elem1 = useRef(null);
    const elem2 = useRef(null);
    const elem3 = useRef(null);

    useEffect(() => {
        const el1 = elem1.current;
        const el2 = elem2.current;
        const el3 = elem3.current;
        gsap.to(el1, {
            x: 30,
            y: -100,
            duration: 500,
            ease: "ease-in",
            scrollTrigger: {
                trigger: el1,
                start: "top 80%",
                scrub: true,
            }
        })
        gsap.to(el2, {
            x: -70,
            y: -40,
            duration: 20,
            ease: "ease-in",
            scrollTrigger: {
                trigger: el2,
                start: "top 80%",
                scrub: true,
            }
        })
        gsap.to(el3, {
            x: -20,
            y: 10,
            duration: 20,
            ease: "ease-in",
            scrollTrigger: {
                trigger: el3,
                start: "top 80%",
                scrub: true,
            }
        })
    }, []);

    return (
        <section 
            className="section-2">
            <div className="section-body">
                <div className="section-head">
                    <h2 className="sync-title">
                        Sync your customers
                    </h2>
                    <div className="desc">
                        Turn Cycle into a CRM for your product team by bringing your
                                    customers from Hubspot , Intercom and Slack
                    </div>
                </div>
                <div className="image-container">
                    <div className="customer-image">
                        <img src={image1}
                            alt="customer-data-image"
                            className="customer-image1"
                        />
                        <img src={image2}
                            alt="customer-data-image"
                            id="1"
                            ref={elem1}
                            className={
                                `image-style img1 ${
                                    window.scrollY === 1000 ? "animate1" : ""
                                }`
                            }/>
                        <img src={image3}
                            alt="customer-data-image"
                            className="image-style img2"
                            id="2"
                            ref={elem2}/>
                        <img src={image4}
                            alt="customer-data-image"
                            className="image-style img3"
                            id="3"
                            ref={elem3}/>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-data">
                        <img src={image5}
                            alt="icons"/>
                        <h3>
                            Sync people & companies
                        </h3>
                        <p>
                            All of your HubSpot, Intercom, and Slack customers, all in one
                                          place with a two way sync.
                        </p>
                    </div>
                    <div className="feature-data">
                        <img src={image6}
                            alt="icons"/>
                        <h3>
                            Fast search
                        </h3>
                        <p>
                            Hit cmd+K and start searching for a customer, whether it be a person or a company.
                        </p>
                    </div>
                    <div className="feature-data">
                        <img src={image7}
                            alt="icon"/>
                        <h3>
                            Auto merge
                        </h3>
                        <p>
                            Got a customer in both Intercom and HubSpot? No worries, they're automatically merged in Cycle.
                        </p>
                    </div>
                    <div className="feature-data">
                        <img src={image8}
                            alt="icons"/>
                        <h3>
                            Link feedback to customer
                        </h3>
                        <p>
                            Automatically fetch the right customer or create a new one in Cycle.
                        </p>
                    </div>
                    <div className="feature-data">
                        <img src={image9}
                            alt="icons"/>
                        <h3>
                            Filter views
                        </h3>
                        <p>
                            Filter by customer or company to access summary feedback views.
                        </p>
                    </div>
                    <div className="feature-data">
                        <img src={image10}
                            alt="icons"/>
                        <h3>
                            Customer profiles
                        </h3>
                        <p>
                            Each customer has a profile that aggregates their feedback and related product initiatives.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;
