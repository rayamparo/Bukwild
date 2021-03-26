import React, { Fragment, useState } from "react";

// CSS Module Style Sheet
import styles from "./Landing.module.css";

// Logo
import abcLogo from "../../assests/images/abc_logo.svg";

const Landing = () => {
  const [headline, setHeadline] = useState("Lorem ipsum dolor sit amet");
  const [subhead, setSubhead] = useState(
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  );
  const [ctaText, setCTAText] = useState(
    "Nemo enim ipsam voluptatem quia voluptas"
  );

  const industries = () => {
    setHeadline("Lorem ipsum dolor sit amet");
    setSubhead(
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    );
    setCTAText("Nemo enim ipsam voluptatem quia voluptas");
  };

  const aboutUs = () => {
    setHeadline("About Us");
    setSubhead("Bukwild is the coolest company in the world!");
    setCTAText("Apply today!");
  };

  const services = () => {
    setHeadline("Services");
    setSubhead(
      "We offer worldclass service and ensure every product we create is at it's best"
    );
    setCTAText("Contact us today!");
  };

  const contact = () => {
    setHeadline("Here is our contact information!");
    setSubhead("Email: bukwild@bukwild.com. Phone Number: (888) 999-1234.");
    setCTAText("Feel free to contact us anytime!");
  };

  const overBtn = (e) => {
    e.target.style.color = "#ffc001";
  };

  const outBtn = (e) => {
    e.target.style.color = "#ffffff";
  };

  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.navbarWrapper}>
            <div className={styles.logoTabs}>
              <img
                className={styles.logo}
                onClick={() => industries()}
                src={abcLogo}
                alt="abc Logo"
              />
              <div className={styles.tabs}>
                <p
                  onClick={() => industries()}
                  onMouseOver={(e) => overBtn(e)}
                  onMouseOut={(e) => outBtn(e)}
                >
                  Industries
                </p>
                <p
                  onClick={() => aboutUs()}
                  onMouseOver={(e) => overBtn(e)}
                  onMouseOut={(e) => outBtn(e)}
                >
                  About Us
                </p>
                <p
                  onClick={() => services()}
                  onMouseOver={(e) => overBtn(e)}
                  onMouseOut={(e) => outBtn(e)}
                >
                  Services
                </p>
              </div>
            </div>
            <div className={styles.contact}>
              <p
                onClick={() => contact()}
                onMouseOver={(e) => overBtn(e)}
                onMouseOut={(e) => outBtn(e)}
                className={styles.contactText}
              >
                Contact Us
              </p>
            </div>
          </div>
          <div>
            <h1 className={styles.headline}>{headline}</h1>
          </div>
          <div>
            <p className={styles.subhead}>{subhead}</p>
          </div>
          <div className={styles.footer}>
            <div>
              <div>
                <h5 className={styles.ctaText}>{ctaText}</h5>
              </div>
              <div>
                <p onClick={() => contact()} className={styles.ctaButton}>
                  LET'S TALK <p className={styles.arrow}></p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
