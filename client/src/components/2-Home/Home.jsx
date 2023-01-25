import styles from "./Home.module.css";
import Landing from "../../images/Landing.mp4";
import Cards from "../5-Cards/Cards";
import NavBar from "../3-Navbar/Navbar";
import Pagination from "../9-Pagination/Pagination";
import Filter from "../10-Filters/Filters";

function Home() {
  return (
    <div className={styles.body}>
      <video autoPlay muted loop className={styles.video}>
        <source src={Landing} type="video/mp4"></source>
      </video>
      <NavBar />
      <Cards />
      <Pagination />
    </div>
  );
}

export default Home;
