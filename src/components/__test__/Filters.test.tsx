import React from "react";
import Filters from "../Filters";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../../app/store";

let getByTestId: any;
beforeEach(() => {
  const component = render(
    <Provider store={store}>
      <Filters />
    </Provider>
  );
  getByTestId = component.getByTestId;
});

test("Filters should be exist", () => {
  const filtersEl = getByTestId("filters");
  expect(filtersEl).toBeTruthy();
});

test("type filter should be have default selection", () => {
  const typeFilterEl = getByTestId("type");
  expect(typeFilterEl.value).toEqual("latest");
});

test("limit filter should be have default selection", () => {
  const limitFilterEl = getByTestId("limit");
  expect(limitFilterEl.value).toEqual("10");
});

afterEach(() => {
  cleanup();
});
