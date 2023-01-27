import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import landing from "../../images/landing.mp4";

const LandingPage = () => {
  return (
    <div className={styles.landing}>
      <video autoPlay muted loop className={styles.video}>
        <source src={landing} type="video/mp4"></source>
      </video>

      <div className={styles.landingText}>
        <span className={styles.landingName}>COUNTRIES</span>

        <div className={styles.landingWrapper}>
          <h1 className={styles.landingTitle}>Let's go on a trip??</h1>

          <div className={styles.landingLinks}>
            <Link className={styles.landingButton} to="/home">
              <button>let's go!</button>
            </Link>

            <Link className={styles.landingButton1} to="/about">
              <button>about</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
