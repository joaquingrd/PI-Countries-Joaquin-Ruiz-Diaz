import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryName } from "../../redux/actions";
import styles from "./Searchbar.module.css";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getCountryName(name));
    setName("");

    // else {
    //   window.alert("You need search someting");
    // }
  }

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        onChange={(event) => handleChange(event)}
      />
      <button
        className={styles.boton}
        type="submit"
        onClick={(event) => handleSubmit(event)}
      >
        🔍︎
      </button>
    </div>
  );
};

export default Searchbar;
