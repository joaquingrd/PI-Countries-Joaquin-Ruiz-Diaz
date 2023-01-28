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
        <Link to={`/countries/${id}`} className={styles.link}>
          <div className={styles.info}>
            <div className={styles.countries}>
              <p className={styles.name}>
                <div className={name.length > 23 ? styles.name2 : styles.name}>
                  {name}
                </div>
              </p>
            </div>

            <p
              className={
                name.length > 28 || continents.length > 24
                  ? styles.continent2
                  : styles.continent
              }
            >
              {/* {name.length > 40 ? "" : continents} */}
              {continents}
            </p>
          </div>
        </Link>
      </button>
    </div>
  );
};

export default Card;
