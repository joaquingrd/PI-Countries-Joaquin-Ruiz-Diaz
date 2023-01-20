import styles from "./Home.module.css";
import Cards from "../5-Cards/Cards";

function Home() {
  return (
    <div className={styles.body}>
      <Cards />
    </div>
  );
}

export default Home;
