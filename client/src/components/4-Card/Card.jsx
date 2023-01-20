import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ name, flags, id, continents }) => {
  return (
    <div className={styles.divCard}>
      <img className={styles.img} src={flags} alt={name} />
      <p>{continents}</p>
      <button className={styles.boton}>
        <Link to={`/details/${id}`} className={styles.link}>
          {name}
        </Link>
      </button>
    </div>
  );
};

export default Card;
