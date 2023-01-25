import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByContinent,
  filterByActivity,
  sortByName,
  sortByPopulation,
  getElementById,
} from "../../redux/actions";

import styles from "./Filters.module.css";

function Filter() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);

  // const [, /* order */ setOrder] = useState("");

  // function handleSort(event) {
  //   event.preventDefault();
  //   dispatch(sortByName(event.target.value));
  //   setOrder(event.target.value);
  //   if (
  //     document
  //       .getElementById("continentSelect")
  //       .getElementsByTagName("option")[0].selected !== "selected"
  //   ) {
  //     document
  //       .getElementById("continentSelect")
  //       .getElementsByTagName("option")[0].selected = "selected";
  //     document
  //       .getElementById("populationSelect")
  //       .getElementsByTagName("option")[0].selected = "selected";
  //     document
  //       .getElementById("activitynSelect")
  //       .getElementsByTagName("option")[0].selected = "selected";
  //   }
  //   document
  //     .getElementById("populationSelect")
  //     .getElementsByTagName("option")[0].selected = "selected";
  //   document
  //     .getElementById("activitynSelect")
  //     .getElementsByTagName("option")[0].selected = "selected";
  // }

  function handleFilterByContinent(event) {
    dispatch(filterByContinent(event.target.value));
  }

  function handleFilterActivity(event) {
    dispatch(filterByActivity(event.target.value));
  }

  // function handleFilterByActivity(event) {
  //   event.preventDefault();
  //   dispatch(filterByActivity(event.target.value));
  //   document
  //     .getElementById("nameSelect")
  //     .getElementsByTagName("option")[0].selected = "selected";
  //   document
  //     .getElementById("continentSelect")
  //     .getElementsByTagName("option")[0].selected = "selected";
  //   document
  //     .getElementById("populationSelect")
  //     .getElementsByTagName("option")[0].selected = "selected";
  // }

  // function populationOrder(event) {
  //   event.preventDefault();
  //   dispatch(sortByPopulation(event.target.value));
  //   setOrder(event.target.value);
  //   if (
  //     document.getElementById("nameSelect").getElementsByTagName("option")[0]
  //       .selected !== "selected"
  //   ) {
  //     document
  //       .getElementById("nameSelect")
  //       .getElementsByTagName("option")[0].selected = "selected";
  //     document
  //       .getElementById("activitynSelect")
  //       .getElementsByTagName("option")[0].selected = "selected";
  //   }
  //   document
  //     .getElementById("activitynSelect")
  //     .getElementsByTagName("option")[0].selected = "selected";
  // }

  return (
    <div>
      <header>
        <div className={styles.nav}>
          <div>
            <select
              className={styles.select}
              // onChange={(event) => handleSort(event)}
            >
              <option> Order by name </option>
              <option value="asc"> A-Z </option>
              <option value="desc"> Z-A </option>
            </select>
            <select
              className={styles.select}
              onChange={(event) => handleFilterByContinent(event)}
            >
              <option value="All">All Continents</option>
              <option value="Africa">Africa</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>

            <select
              className={styles.select}
              onChange={(event) => handleFilterActivity(event)}
            >
              <option value="All">All Activities</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
              <option value="Fall">Fall</option>
              <option value="Summer">Summer</option>
            </select>

            <select
              className={styles.select}
              // onChange={(event) => populationOrder(event)}
            >
              <option> Order by population </option>
              <option value="DESC"> Ascendent </option>
              <option value="ASC"> Descendant </option>
            </select>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Filter;
