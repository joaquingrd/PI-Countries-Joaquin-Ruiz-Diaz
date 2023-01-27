import React from "react";
import Card from "../4-Card/Card";
import styles from "./Cards.module.css";
import { connect } from "react-redux";
import { getCountries, getActivity } from "../../redux/actions";

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCountries();
    this.props.getActivity();
  }

  render() {
    return (
      <div className={styles.cards}>
        {[...this.props.pageCountries].map((countries) => {
          return (
            <Card
              name={countries.name}
              flags={countries.flags}
              continents={countries.subregion}
              capital={countries.capital}
              subregion={countries.subregion}
              area={countries.area}
              population={countries.population}
              key={countries.id}
              id={countries.id}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pageCountries: state.pageCountries,
    allCountries: state.allCountries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCountries: () => dispatch(getCountries()),
    getActivity: () => dispatch(getActivity()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
