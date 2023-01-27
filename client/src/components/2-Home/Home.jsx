import styles from "./Home.module.css";
import landing from "../../images/landing.mp4";
import Cards from "../5-Cards/Cards";
import NavBar from "../3-Navbar/Navbar";
import Pagination from "../9-Pagination/Pagination";
import Filter from "../10-Filters/Filters";

function Home() {
  return (
    <div className={styles.body}>
      <video autoPlay muted loop className={styles.video}>
        <source src={landing} type="video/mp4"></source>
      </video>
      <div className={styles.filter}>
        <Filter />
      </div>
      <NavBar />
      <Cards />
      <Pagination />
    </div>
  );
}

export default Home;
