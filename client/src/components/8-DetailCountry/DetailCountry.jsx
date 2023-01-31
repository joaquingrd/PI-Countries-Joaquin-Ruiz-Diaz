import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions";
import detail from "../../images/create.mp4";
import styles from "./DetailCountry.module.css";
import loader from "../../images/loading.gif";

function Details(props) {
  const { id } = props.match.params;
  const [loading, setLoading] = useState(false);
  const countryDetail = useSelector((state) => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getDetails(id));
  }, [dispatch, id]);

  // console.log(countryDetail);

  return (
    <div className={styles.body}>
      {loading ? (
        <>
          <video autoPlay muted loop className={styles.vid}>
            <source src={detail} type="video/mp4"></source>
          </video>

          <div className={styles.link}>
            <Link to="/home">
              <p className={styles.link}>Back</p>
            </Link>
          </div>

          <div>
            <div
              className={`${
                countryDetail.TouristActivities?.length
                  ? styles.countryact
                  : styles.country
              }`}
            >
              <div>
                <img
                  className={styles.flag}
                  src={countryDetail.flags}
                  alt="Not found"
                ></img>
              </div>
              <div className={styles.info}>
                <p
                  className={
                    countryDetail.name?.length < 24 ? styles.name : styles.nameL
                  }
                >
                  {countryDetail.name}
                </p>
                <div className={styles.dat}>
                  <p>
                    <a className={styles.astitles}>ID</a>
                    {countryDetail.id}
                  </p>

                  <p>
                    <a className={styles.astitles}>Continents</a>
                    {countryDetail.continents}
                  </p>
                  {/* <p>{countryDetail.subregion}</p> */}
                  <p>
                    <a className={styles.astitles}>Capital</a>
                    {countryDetail.capital}
                  </p>

                  <p className={styles.population}>
                    <a className={styles.astitles}>Population</a>
                    {countryDetail.population?.toLocaleString(undefined, {
                      useGrouping: true,
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={
                countryDetail.TouristActivities?.length > 0
                  ? styles.activities
                  : styles.null
              }
            >
              <p
                className={
                  countryDetail.TouristActivities?.length > 0
                    ? styles.titleact
                    : styles.null
                }
              >
                Turist Activities
              </p>
              <div className={styles.act}>
                <div
                  className={
                    countryDetail.TouristActivities?.length > 0
                      ? styles.namesactivities
                      : styles.null
                  }
                >
                  <p
                    className={
                      countryDetail.TouristActivities?.length > 0
                        ? styles.nact
                        : styles.nactNull
                    }
                  >
                    Activitie
                  </p>
                  <p>Difficulty |</p>
                  <p>Season |</p>
                  <p>Duration</p>
                </div>
                <div className={styles.touristactivities}>
                  <div className={styles.actname}>
                    {countryDetail.TouristActivities?.map(
                      (TouristActivities) => (
                        <div className={styles.lin}>
                          <a className={styles.nameact}>
                            {TouristActivities.name}
                          </a>
                        </div>
                      )
                    )}
                  </div>

                  <div className={styles.actdiff}>
                    {countryDetail.TouristActivities?.map(
                      (TouristActivities) => (
                        <div className={styles.lian}>
                          <p>Level - {TouristActivities.difficulty}</p>
                        </div>
                      )
                    )}
                  </div>

                  <div className={styles.actsea}>
                    {countryDetail.TouristActivities?.map(
                      (TouristActivities) => (
                        <div className={styles.lian}>
                          <p>{TouristActivities.season}</p>
                        </div>
                      )
                    )}
                  </div>

                  <div className={styles.actdur}>
                    {countryDetail.TouristActivities?.map(
                      (TouristActivities) => (
                        <div className={styles.lian}>
                          <p>{TouristActivities.duration}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <img className={styles.loader} src={loader} alt="loading" />
          <h1 className={styles.loader1}>Loading...</h1>
        </div>
      )}
    </div>
  );
}
export default Details;
