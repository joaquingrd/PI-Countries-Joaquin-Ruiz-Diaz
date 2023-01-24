import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ name, flags, id, continents, population }) => {
  // let continentsif = () => {
  //   if (continents === "subregion not found") {
  //     return "";
  //   } else {
  //     return continents;
  //   }
  // };

  return (
    <div className={styles.divCard}>
      <img className={styles.img} src={flags} alt={name} />

      <button className={styles.boton}>
        <Link to={`/details/${id}`} className={styles.link}>
          <div className={styles.info}>
            <p className={styles.name}>{name}</p>
            <br />
            <p className={styles.continents}>{continents}</p>
          </div>
        </Link>
      </button>
    </div>
  );
};

export default Card;
