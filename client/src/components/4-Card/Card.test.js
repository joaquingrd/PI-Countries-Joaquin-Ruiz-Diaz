import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("Card component", () => {
  it("renders correctly", () => {
    const id = "ARG";
    const name = "Argentina";
    const continents = "South America";
    const flags = "argentina-flag.png";

    const history = createMemoryHistory();

    const { getByAltText, getByText } = render(
      <Router history={history}>
        <Card id={id} name={name} flags={flags} continents={continents} />
      </Router>
    );

    expect(getByAltText(name)).toBeInTheDocument();
    expect(getByText(continents)).toBeInTheDocument();
  });
});
