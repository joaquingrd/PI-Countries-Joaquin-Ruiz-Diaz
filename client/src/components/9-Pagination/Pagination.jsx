import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { setPageCharacter } from "../../redux/actions";

import styles from "./Pagination.module.css";

const Pagination = ({ countries, setPageCharacter }) => {
  const [chars, SetChars] = useState(countries);
  const [charsPerPage, SetCharsPerPage] = useState(9);
  const [currentPage, SetCurrentPage] = useState(1);

  const onPageChangeEvent = (start, end) => {
    if (!isNaN(start) && !isNaN(end)) {
      setPageCharacter(start, end);
    }
  };

  // const OnPerCharsChangeEvent = (e) => {
  //   SetCharsPerPage(e.target.value);
  //   SetCurrentPage(1);
  // };

  let numOfPages = Math.ceil(chars.length / charsPerPage);

  const numOfButtons = [];
  for (let i = 1; i <= numOfPages; i++) {
    numOfButtons.push(i);
  }

  const prevPageClick = () => {
    if (currentPage === 1) {
      SetCurrentPage(currentPage);
    } else {
      SetCurrentPage(currentPage - 1);
    }
  };

  const nextPageClick = () => {
    if (currentPage === numOfButtons.length) {
      SetCurrentPage(currentPage);
    } else {
      SetCurrentPage(currentPage + 1);
    }
  };

  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    if (chars.length !== countries.length) SetChars(countries);
    let tempNumberOfButtons = [...arrOfCurrButtons];

    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    if (numOfButtons.length < 6) {
      tempNumberOfButtons = numOfButtons;
      // console.log("a", numOfButtons);
    } else if (currentPage >= 1 && currentPage <= 3) {
      tempNumberOfButtons = [1, 2, 3, numOfButtons.length];
      // console.log("b");
    } else if (currentPage === 4) {
      const sliced = numOfButtons.slice(2, 5);
      tempNumberOfButtons = [...sliced, numOfButtons.length];
      //  console.log("c");
    } else if (currentPage > 4 && currentPage < numOfButtons.length - 2) {
      // from 5 to 8 -> (10 - 2)
      const sliced1 = numOfButtons.slice(currentPage - 2, currentPage);
      // sliced1 (5-2, 5) -> [4,5]
      const sliced2 = numOfButtons.slice(currentPage, currentPage + 1);
      // sliced1 (5, 5+1) -> [6]
      tempNumberOfButtons = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numOfButtons.length,
      ];
      // [1, '...', 4, 5, 6, '...', 10]
      // console.log("d");
    } else if (currentPage > numOfButtons.length - 3) {
      // > 7
      const sliced = numOfButtons.slice(numOfButtons.length - 4);
      // slice(10-4)
      tempNumberOfButtons = [1, dotsLeft, ...sliced];
      //console.log("e");
    } else if (currentPage === dotsInitial) {
      // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
      // arrOfCurrButtons[3] = 4 + 1 = 5
      // or
      // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
      // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
      SetCurrentPage(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
      //  console.log("f");
    } else if (currentPage === dotsRight) {
      SetCurrentPage(arrOfCurrButtons[3] + 2);
      //  console.log("g");
    } else if (currentPage === dotsLeft) {
      SetCurrentPage(arrOfCurrButtons[3] - 2);
      //  console.log("h");
    }

    setArrOfCurrButtons(tempNumberOfButtons);
    const value = currentPage * charsPerPage;
    onPageChangeEvent(value - charsPerPage, value);
    //console.log(tempNumberOfButtons, arrOfCurrButtons, numOfButtons, currentPage, value, charsPerPage, numOfPages);
  }, [countries, currentPage, charsPerPage, numOfPages]);

  return (
    <>
      <div className={styles.tablefilterinfo}>
        <div className={styles.dtpagination}>
          <ul className={styles.dtpaginationul}>
            <li
              className={`${styles.dtitem} ${
                currentPage === 1 ? "disabled" : ""
              }`}
            >
              <a className={styles.dtlink} onClick={prevPageClick}>
                Prev
              </a>
            </li>
            {arrOfCurrButtons.map((data, index) => {
              return (
                <li key={index} className={`${styles.dtitem}`}>
                  <a
                    className={`${
                      currentPage === data ? styles.active : styles.dtlink
                    }`}
                    onClick={() => SetCurrentPage(data)}
                  >
                    {data}
                  </a>
                </li>
              );
            })}
            <li
              className={`${styles.dtitem} ${
                currentPage === numOfButtons.length ? "disabled" : ""
              }`}
            >
              <a className={styles.dtlink} onClick={nextPageClick}>
                Next
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setPageCharacter: (start, end) => {
      dispatch(setPageCharacter(start, end));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
