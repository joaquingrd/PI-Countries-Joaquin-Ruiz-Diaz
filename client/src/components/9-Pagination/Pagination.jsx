import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setPageCountries } from "../../redux/actions";
import styles from "./Pagination.module.css";

const Pagination = ({ countries, setPageCountries }) => {
  const [country, Setcountry] = useState(countries);
  const [countryPerPage] = useState(10);
  const [currentPage, SetCurrentPage] = useState(1);

  const onPageChangeEvent = (start, end) => {
    if (!isNaN(start) && !isNaN(end)) {
      setPageCountries(start, end);
    }
  };

  let pages = Math.ceil(country.length / countryPerPage);

  const buttons = [];
  for (let i = 1; i <= pages; i++) {
    buttons.push(i);
  }

  const handlePrev = () => {
    currentPage === 1
      ? SetCurrentPage(currentPage)
      : SetCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    currentPage === buttons.length
      ? SetCurrentPage(currentPage)
      : SetCurrentPage(currentPage + 1);
  };

  const start = () => {
    SetCurrentPage(1);
  };

  const end = () => {
    SetCurrentPage(buttons.length);
  };

  const [arrButons, setarrButons] = useState([]);

  useEffect(() => {
    if (country.length !== countries.length) Setcountry(countries);
    let templateButtons = [...arrButons];

    if (buttons.length < 6) {
      templateButtons = buttons;
    } else if (currentPage >= 1 && currentPage <= 2) {
      templateButtons = [1, 2, 3];
    } else if (currentPage > 2 && currentPage < buttons.length - 1) {
      const numPrev = buttons.slice(currentPage - 2, currentPage);
      const numNext = buttons.slice(currentPage, currentPage + 1);
      templateButtons = [...numPrev, ...numNext];
    } else if (currentPage > buttons.length - 3) {
      const sliced = buttons.slice(buttons.length - 3);
      templateButtons = [...sliced];
    }
    if (currentPage > pages) {
      start();
    }

    setarrButons(templateButtons);
    const value = currentPage * countryPerPage;
    onPageChangeEvent(value - countryPerPage, value);
  }, [countries, currentPage, countryPerPage, pages]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.pagination}>
          <ul>
            <li
              className={`${styles.items} ${
                currentPage === 1 ? "disabled" : ""
              }`}
            >
              <a className={styles.arrow} onClick={start}>
                ❮❮
              </a>
              <a className={styles.arrow} onClick={handlePrev}>
                ❮
              </a>
            </li>
            {arrButons.map((data, index) => {
              return (
                <li key={index} className={`${styles.items}`}>
                  <a
                    className={`${
                      currentPage === data ? styles.current : styles.diferents
                    }`}
                    onClick={() => SetCurrentPage(data)}
                  >
                    {data}
                  </a>
                </li>
              );
            })}
            <li
              className={`${styles.items} ${
                currentPage === buttons.length ? "disabled" : ""
              }`}
            >
              <a className={styles.arrow} onClick={handleNext}>
                ❯
              </a>
              <a className={styles.arrow} onClick={end}>
                ❯❯
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    allCountries: state.allCountries,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setPageCountries: (start, end) => {
      dispatch(setPageCountries(start, end));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
