import "./Section8.css";
import a1 from "../../assets/a1.png";
import a2 from "../../assets/a2.png";
import a3 from "../../assets/a3.png";
import a4 from "../../assets/a4.png";
import a5 from "../../assets/a5.png";
import a6 from "../../assets/a6.png";
import authorIcon1 from "../../assets/author-icon1.svg";
import authorIcon2 from "../../assets/author-icon2.svg";
import authorIcon3 from "../../assets/author-icon3.svg";
import authorIcon4 from "../../assets/author-icon4.svg";
import authorIcon5 from "../../assets/author-icon5.svg";
import authorIcon6 from "../../assets/author-icon6.svg";



function App() {
  return (
    <>
    <section className="section-8">
      <div className="container">
        <div className="section-title title">
          <h2>You’re in great company</h2>
          <div className="tagline">
            500+ product-led organizations get stuff done with Cycle
          </div>
        </div>
        <div className="w-layout-grids quotes-grid">
          <div
            id="w-node-_89e0b93b-43d6-93a0-1e7d-e83d4d6176d3-0d911088"
            className="quote-card"
          >
            <p className="body-small">
              All eFounders teams have moved to Cycle for all things product
              management and it is truly a game-changer.
            </p>
            <div>
              <div className="quote-author is-green">
                <img
                  src={a1}
                  loading="lazy"
                  alt=""
                  className="quote-author-photo"
                />
                <div className="color-txt-white">Thibaud Elziere</div>
                <div className="quote-author-icon w-embed">
                  <img src={authorIcon1} alt="" />
                </div>
              </div>
              <p className="body-small">CEO @eFounders</p>
            </div>
          </div>
          <div
            id="w-node-_21f2d191-404b-336b-85bb-47509f45a4bf-0d911088"
            className="quote-card"
          >
            <p className="body-small">
              The power of Cycle lies in its ability to adapt to our processes,
              not the other way around.Now that we have all user insights
              visible in our PRDs doc, there is no going back ❤️
            </p>
            <div>
              <div className="quote-author is-teal">
                <img
                  src={a2}
                  loading="lazy"
                  alt=""
                  className="quote-author-photo"
                />
                <div className="color-txt-white">Loïck Müller</div>
                <div className="quote-author-icon w-embed">
                  <img src={authorIcon2} alt="" />
                </div>
              </div>
              <p className="body-small">CPO @Choose</p>
            </div>
          </div>
          <div
            id="w-node-f072ad49-138e-9cb2-5df2-3737115d5856-0d911088"
            className="quote-card"
          >
            <p className="body-small">
              Cycle is the gear that keeps our product feedback management
              running like clockwork.
            </p>
            <div>
              <div className="quote-author is-yellow">
                <img
                  src={a3}
                  loading="lazy"
                  alt=""
                  className="quote-author-photo"
                />
                <div className="color-txt-white">Alexis Toyane</div>
                <div className="quote-author-icon w-embed">
                 <img src={authorIcon3} alt="" />
                </div>
              </div>
              <p className="body-small">Head of Product @Figures</p>
            </div>
          </div>
          <div
            id="w-node-a8eb0594-0bf1-4b58-8dc0-079a606961cb-0d911088"
            className="quote-card"
          >
            <p className="body-small">
              Managing feedback throughout the whole cycle has been a tedious
              task until we discovered Cycle: a simple tool enabling you to do
              complex things.
            </p>
            <div>
              <div className="quote-author is-blue">
                <img
                  src={a4}
                  loading="lazy"
                  alt=""
                  className="quote-author-photo"
                />
                <div className="color-txt-white">Alexis Colonna</div>
                <div className="quote-author-icon w-embed">
                  <img src={authorIcon4} alt="" />
                </div>
              </div>
              <p className="body-small">Product @Moka Care</p>
            </div>
          </div>
          <div
            id="w-node-_89a1ab98-f5f8-e5ce-040e-d2661b48acc4-0d911088"
            className="quote-card"
          >
            <p className="body-small">
              Cycle makes it easy to contact the most relevant users whenever I
              need feedback on a new product initiative. It helps me capture all
              the necessary customer context without friction.
            </p>
            <div>
              <div className="quote-author is-pink">
                <img
                  src={a5}
                  loading="lazy"
                  alt=""
                  className="quote-author-photo"
                />
                <div className="color-txt-white">Léa Hugon</div>
                <div className="quote-author-icon w-embed">
                  <img src={authorIcon5} alt="" />
                </div>
              </div>
              <p className="body-small">Product @JeudiMerci</p>
            </div>
          </div>
          <div
            id="w-node-_83a8a654-0176-537d-67e6-8ea42a17b628-0d911088"
            className="quote-card"
          >
            <p className="body-small">
              Cycle is the single source of truth for everyone when it comes to
              product feedback
            </p>
            <div>
              <div className="quote-author is-orange">
                <img
                  src={a6}
                  loading="lazy"
                  alt=""
                  className="quote-author-photo"
                />
                <div className="color-txt-white">Luuk de Jonge</div>
                <div className="quote-author-icon w-embed">
                 <img src={authorIcon6} alt="" />
                </div>
              </div>
              <p className="body-small">Product @Contrast</p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default App;
