import React from "react";
import Header from "../Header";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

let getByTestId: any = null;
beforeEach(() => {
  const component = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  getByTestId = component.getByTestId;
});
test("header renders correctly with logo", () => {
  const headerEl = getByTestId("header");
  expect(headerEl.textContent).toBe("Crypto-Watch");
});

test("header should Home navigation link", () => {
  const homeNavEl = getByTestId("homeNav");
  expect(homeNavEl).toBeTruthy();
  expect(homeNavEl).toHaveAttribute("href", "/home");
});

test("header should liquidity chart navigation link", () => {
  const liqNavEl = getByTestId("liqNav");
  expect(liqNavEl).toBeTruthy();
  expect(liqNavEl).toHaveAttribute("href", "/liquidity");
});

afterEach(()=>{
    cleanup();
})
