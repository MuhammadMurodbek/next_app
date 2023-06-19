import React from "react";
import { render, screen } from "@testing-library/react";
import Pagination from "../../../components/pagination";
import "@testing-library/jest-dom";

describe("Pagination testing", () => {
  let props = { total: 9 };
  it("left arrow is exist", () => {
    render(<Pagination {...props} />);
    const leftArrowElement = screen.getByTestId("arrow_left");
    expect(leftArrowElement).toBeDefined();
  });
  it("right arrow is exist", () => {
    render(<Pagination {...props} />);
    const rightArrowElement = screen.getByTestId("arrow_right");
    expect(rightArrowElement).toBeDefined();
  });
  it("count paging elements", async () => {
    render(<Pagination {...props} />);
    const pagingElements = await screen.findAllByTestId("paging_element");
    expect(pagingElements).toHaveLength(Math.ceil(props.total / 10));
  });
});
