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

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
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
        onKeyDown={handleKeyDown}
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
