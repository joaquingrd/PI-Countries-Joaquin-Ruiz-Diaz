import styles from "./Navbar.module.css";
import Searchbar from "../11-Searchbar/Searchbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.body}>
      <div className={styles.nav}>
        <nav>
          <Link to={"/"}> LANDING </Link>
          <Link to={"/create"}> CREATE </Link>
          <Link to={"/about"}> ABOUT </Link>
          <Searchbar />
        </nav>
        {/* <Link to={""} className={styles.invisible}></Link> */}
      </div>
    </div>
  );
}

export default NavBar;
