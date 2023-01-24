import styles from "./Home.module.css";
import Cards from "../5-Cards/Cards";
import NavBar from "../3-Navbar/Navbar";
import Pagination from "../9-Pagination/Pagination";

function Home() {
  return (
    <div className={styles.body}>
      <NavBar />
      <Cards />
      <Pagination />
    </div>
  );
}

export default Home;
