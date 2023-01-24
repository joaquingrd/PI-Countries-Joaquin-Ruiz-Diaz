import React from "react";
import Card from "../4-Card/Card";
import styles from "./Cards.module.css";
import { connect } from "react-redux";
import { getCountries } from "../../redux/actions";

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCountries();
  }

  render() {
    return (
      <div className={styles.cards}>
        {[...this.props.pageCountries, ...this.props.allCountries].map(
          (countries) => {
            return (
              <Card
                name={countries.name}
                continents={countries.subregion}
                flags={countries.flags}
                population={countries.population}
                key={countries.id}
                id={countries.id}
              />
            );
          }
        )}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
