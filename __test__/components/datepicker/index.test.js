import React from "react";
import { render, screen } from "@testing-library/react";
import DatePicker from "../../../components/datepicker";
import "@testing-library/jest-dom";

describe("datepicker component testing", () => {
  it("Testing filter button", () => {
    render(<DatePicker />);
    const filterBtn = screen.getByRole("button");
    expect(filterBtn).toBeInTheDocument();
  });

  it("Testing: start date field", () => {
    render(<DatePicker />);
    const inputField = screen.getByTestId("start_date_input");
    expect(inputField).toBeDefined();
  });

  it("Testing: end date field", () => {
    render(<DatePicker />);
    const inputField = screen.getByTestId("end_date_input");
    expect(inputField).toBeDefined();
  });
});
