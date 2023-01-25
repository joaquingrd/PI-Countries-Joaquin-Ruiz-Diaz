import styles from "./Navbar.module.css";
// import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import Filter from "../10-Filters/Filters";

function NavBar() {
  return (
    <div className={styles.body}>
      <div className={styles.nav}>
        <nav>
          <Filter />
          <Link to={""}> INICIO </Link>
          <Link to={""}> CREAR </Link>
          {/* <SearchBar /> */}
        </nav>
        <Link to={""} className={styles.invisible}></Link>
      </div>
    </div>
  );
}

export default NavBar;
