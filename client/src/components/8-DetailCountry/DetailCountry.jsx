import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions";
import detail from "../../images/create.mp4";
import styles from "./DetailCountry.module.css";

function Details(props) {
  const { id } = props.match.params;
  const countryDetail = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getDetails(id));
    setLoading(true);
  }, [dispatch, id]);

  console.log(countryDetail);

  return (
    <div className={styles.body}>
      <video autoPlay muted loop className={styles.vid}>
        <source src={detail} type="video/mp4"></source>
      </video>
      {loading ? (
        <div>
          <div
            className={
              countryDetail.TouristActivities.length > 0
                ? styles.countryact
                : styles.country
            }
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
                  countryDetail.name.length < 24 ? styles.name : styles.nameL
                }
              >
                {countryDetail.name}
              </p>
              <div className={styles.dat}>
                <p>{countryDetail.id}</p>
                <p>{countryDetail.continents}</p>
                {/* <p>{countryDetail.subregion}</p> */}
                <p>{countryDetail.capital}</p>
                <p className={styles.population}>
                  {countryDetail.population.toLocaleString(undefined, {
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
              countryDetail.TouristActivities.length > 0
                ? styles.activities
                : styles.null
            }
          >
            <p>Actividades Turisticas</p>
            {countryDetail.TouristActivities?.map((TouristActivities) => (
              <p className={styles.nameact}>{TouristActivities.name}</p>
            ))}
            <p className={styles.subtitle}>Season</p>
            {countryDetail.TouristActivities?.map((TouristActivities) => (
              <p>{TouristActivities.season}</p>
            ))}
            <p className={styles.subtitle}>Duration</p>
            {countryDetail.TouristActivities?.map((TouristActivities) => (
              <p>{TouristActivities.duration}</p>
            ))}
            <p className={styles.subtitle}>Season</p>
            {countryDetail.TouristActivities?.map((TouristActivities) => (
              <p> {TouristActivities.difficulty}</p>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Details;
