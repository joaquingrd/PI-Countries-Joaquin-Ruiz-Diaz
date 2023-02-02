import styles from "./Home.module.css";
import videolanding from "../../images/videolanding.mp4";
import loader from "../../images/loading.gif";
import Cards from "../5-Cards/Cards";
import NavBar from "../3-Navbar/Navbar";
import Pagination from "../9-Pagination/Pagination";
import Filter from "../10-Filters/Filters";
import React, { useEffect, useState } from "react";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    setLoading(true);
    // }, 2000);
  }, []);

  return (
    <div className={styles.body}>
      {loading ? (
        <>
          <video autoPlay muted loop className={styles.video}>
            <source src={videolanding} type="video/mp4"></source>
          </video>
          <div className={styles.filter}>
            <Filter />
          </div>
          <NavBar />
          <Cards />
          <Pagination />
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

export default Home;
