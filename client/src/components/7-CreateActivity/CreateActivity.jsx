import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postActivities, getCountries } from "../../redux/actions";
import create from "../../images/create.mp4";
import styles from "./CreateActivity.module.css";

export function validate(input) {
  let error = {};

  if (!input.name) {
    error.name = "Required";
  } else if (
    !/^[a-zA-Z\s]*$/.test(input.name) ||
    typeof input.name !== "string"
  ) {
    error.name = "Only letters";
  }

  if (!input.difficulty) {
    error.difficulty = "Required";
  } else if (input.difficulty < 1 || input.difficulty > 5)
    error.difficulty = "Between 1 and 5";

  if (!input.duration) {
    error.duration = "Required";
  } else if (input.duration < 1 || input.duration > 24)
    error.duration = "Between 1 and 24";

  if (!input.season) {
    error.season = "Select a season";
  }

  if (!input.countryId) {
    error.countryId = "Select a Country";
  }

  return error;
}

const Create = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const allCountries = useSelector((state) => state.allCountries);
  const [error, setError] = useState({});
  // const [errorButton, setErrorButton] = useState(
  //   Object.values(error).length !== 0 ? true : false
  // );
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: [],
  });

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setError(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleCheck(event) {
    setInput({
      ...input,
      season: event.target.value,
    });
    setError(
      validate({
        ...input,
        season: event.target.value,
      })
    );
  }

  function handleSelect(event) {
    if (input.countryId.length < 5)
      setInput({
        ...input,
        countryId: [...input.countryId, event.target.value],
      });
    setError(
      validate({
        ...input,
        countryId: event.target.value,
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(postActivities(input));
    alert("Activity created!!!");
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countryId: [],
    });
    history.push("/home");
  }

  function handleDelete(event) {
    setInput({
      ...input,
      countryId: input.countryId.filter((country) => country !== event),
    });
  }

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={styles.body}>
      <video autoPlay muted loop className={styles.video}>
        <source src={create} type="video/mp4"></source>
      </video>
      <div className={styles.lin}>
        <Link to="/home">
          <p className={styles.link}>Back</p>
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div>
            <h1 className={styles.tytle}>Create New Activity</h1>
          </div>
          <form onSubmit={(event) => handleSubmit(event)}>
            <div>
              <div className={styles.inputs}>
                <label>NAME</label>
                <br />
                <input
                  className={styles.inp}
                  type="text"
                  value={input.name}
                  name="name"
                  onChange={(event) => handleChange(event)}
                />
                <div className={styles.err1}>
                  {error.name && <a>{error.name}</a>}
                </div>
              </div>
              <div>
                <label>DIFFICULTY:</label>
                <br />
                <input
                  className={styles.inp}
                  type="number"
                  value={input.difficulty}
                  name="difficulty"
                  onChange={(event) => handleChange(event)}
                />
                <div className={styles.err2}>
                  {error.difficulty && <a>{error.difficulty}</a>}
                </div>
              </div>
              <div>
                <label>DURATION</label>
                <br />
                <input
                  className={styles.inp}
                  type="number"
                  value={input.duration}
                  name="duration"
                  onChange={(event) => handleChange(event)}
                />
                <div className={styles.err3}>
                  {error.duration && <a>{error.duration}</a>}
                </div>
              </div>
              <div>
                <br />
                <div>
                  <select
                    className={styles.inp}
                    onChange={(event) => handleCheck(event)}
                  >
                    <br />
                    <option hidden selected>
                      Select season
                    </option>
                    <option name="Summer" value="Summer">
                      Summer
                    </option>

                    <option name="Fall" value="Fall">
                      Fall
                    </option>

                    <option name="Winter" value="Winter">
                      Winter
                    </option>

                    <option name="Spring" value="Spring">
                      Spring
                    </option>
                  </select>
                </div>
                <div className={styles.err3}>
                  {error.temporada && <a>{error.temporada}</a>}
                </div>
              </div>
              <div>
                <br />
                <select
                  className={styles.inp}
                  onChange={(event) => handleSelect(event)}
                >
                  <option hidden selected>
                    Select country
                  </option>
                  {allCountries.map((country) => (
                    <option value={country.id} key={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <div className={styles.err}>
                  {error.countryId && <a>{error.countryId}</a>}
                </div>
              </div>
              <br />
            </div>
            <button
              className={styles.button2}
              type="submit"
              disabled={Object.values(error).length !== 0 ? true : false}
            >
              CREATE
            </button>
          </form>
          <div className={styles.answer}>
            {input.countryId.map((element) => (
              <div className={styles.count} key={element}>
                <p>{element}</p>

                <button
                  className={styles.button1}
                  onClick={() => handleDelete(element)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
