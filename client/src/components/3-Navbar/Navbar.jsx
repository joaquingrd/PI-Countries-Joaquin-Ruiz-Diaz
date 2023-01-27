import styles from "./Navbar.module.css";
import Searchbar from "../11-Searchbar/Searchbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.body}>
      <div className={styles.nav}>
        <nav>
          <Link to={""}> HOME </Link>
          <Link to={"/create"}> CREATE </Link>
          <Searchbar />
        </nav>
        {/* <Link to={""} className={styles.invisible}></Link> */}
      </div>
    </div>
  );
}

export default NavBar;
