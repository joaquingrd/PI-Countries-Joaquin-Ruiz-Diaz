import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ name, flags, id, continents, population }) => {
  return (
    <div className={styles.divCard}>
      <img className={styles.img} src={flags} alt={name} />

      <button className={styles.boton}>
        <Link to={`/details/${id}`} className={styles.link}>
          <div className={styles.info}>
            <p>{name}</p>
            <br />
            <p>{continents}</p>
          </div>
        </Link>
      </button>
    </div>
  );
};

export default Card;
