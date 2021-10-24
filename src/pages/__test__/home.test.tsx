import React from "react";
import HomePage from "../home";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../../app/store";

let getByTestId: any;
beforeEach(() => {
  const component = render(
    <Provider store={store}>
      <HomePage
        path={""}
        name={""}
        exact={false}
        component={undefined}
        history={undefined}
        location={undefined}
        match={undefined}
      />
    </Provider>
  );
  getByTestId = component.getByTestId;
});

test("home page should be exist", () => {
  const homeEl = getByTestId("home");
  expect(homeEl).toBeTruthy();
});

test("home page should have heading", () => {
  const headingEl = getByTestId("heading");
  expect(headingEl.textContent).toEqual(
    "Leading Crypto Currencies in the market"
  );
});

afterEach(() => {
  cleanup();
});
