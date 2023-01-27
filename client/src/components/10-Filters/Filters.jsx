import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByContinent,
  filterByActivity,
  sortByName,
  sortByPopulation,
  getActivity,
} from "../../redux/actions";

import styles from "./Filters.module.css";

function Filter() {
  const dispatch = useDispatch();

  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    if (!activities) dispatch(getActivity());
  }, [activities, dispatch]);

  function handleFilterByContinent(event) {
    dispatch(filterByContinent(event.target.value));
  }

  function handleFilterActivity(event) {
    dispatch(filterByActivity(event.target.value));
  }

  function handleSortByName(event) {
    dispatch(sortByName(event.target.value));
  }

  function handlesortByPopulation(event) {
    dispatch(sortByPopulation(event.target.value));
  }

  return (
    <div>
      <header>
        <div className={styles.nav}>
          <div className={styles.container}>
            <select
              className={styles.filters}
              onChange={(event) => handleSortByName(event)}
            >
              {/* <option hidden selected>
                Sort by name
              </option> */}
              <option value="asc"> A-Z </option>
              <option value="desc"> Z-A </option>
            </select>
            <select
              className={styles.filters}
              onChange={(event) => handleFilterByContinent(event)}
            >
              {/* <option hidden selected>
                Continents
              </option> */}
              <option value="All">All Continents</option>
              <option value="Africa">Africa</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
            <select
              className={styles.filters}
              onChange={(event) => handleFilterActivity(event)}
            >
              {/* <option hidden selected>
                Activities
              </option> */}
              <option value="All">All Activities</option>
              {activities.map((act) => (
                <option value={act.name} key={act.name}>
                  {act.name}
                </option>
              ))}
            </select>

            <select
              className={styles.filters}
              onChange={(event) => handlesortByPopulation(event)}
            >
              {/* //   <option hidden selected>
            //     Population Sort
            //   </option> */}
              <option value="asc">Larger</option>
              <option value="desc">Smaller</option>
            </select>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Filter;
