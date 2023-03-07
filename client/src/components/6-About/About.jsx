import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import detail from "../../images/create.mp4";
import image from "../../images/profile2.jpg";
import li from "../../images/li.png";
import gh from "../../images/gh.png";
import styles from "./About.module.css";
import loader from "../../images/loading.gif";

function About() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 700);
  }, []);

  return (
    <div className={styles.body}>
      {loading ? (
        <>
          <div className={styles.vid}>
            <video autoPlay muted loop className={styles.vid}>
              <source src={detail} type="video/mp4"></source>
            </video>
          </div>
          <div className={styles.conteiner}>
            <div className={styles.link}>
              <Link to="/home">
                <p className={styles.link}>home</p>
              </Link>
            </div>
            <div className={styles.info}>
              <div>
                <img src={image} className={styles.ima} />
              </div>
              <div className={styles.datos}>
                <div className={styles.name}>
                  <p>JOAQUIN RUIZ DIAZ</p>
                </div>
                <div className={styles.subtitle}>
                  <p>Full Stack Developer</p>
                </div>
                <div className={styles.skils}>
                  <p>| HTML | CSS | JavaScript |</p>
                  <br />
                  <p>| React | Redux | </p>
                  <br />
                  <p>| NodeJS | Express |</p>
                  <br />
                  <p>| Sequelize | PostgreSQL |</p>
                  <br />
                </div>
                <div className={styles.ks}>
                  <a href="https://linkedin.com/in/joaquindev">
                    <img className={styles.ksli} src={li} alt="linkedin" />
                  </a>

                  <a href="https://github.com/joaquingrd">
                    <img className={styles.ksgh} src={gh} alt="git" />
                  </a>
                </div>
                <h3>SoyHenry - Bootcamp</h3>
              </div>
            </div>
          </div>{" "}
        </>
      ) : (
        <div>
          <img className={styles.loader} src={loader} alt="loading" />
          <h1 className={styles.loader1}>Loading...</h1>
        </div>
      )}
    </div>
  );
}
export default About;
