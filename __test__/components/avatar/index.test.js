import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "../../../components/avatar";
import "@testing-library/jest-dom";

describe("Avatar component testing", () => {
  it("image uses correct src", () => {
    let props = { url: "https://picsum.photos/id/237/200/300" };
    render(<Avatar {...props} />);
    const image = screen.getByTestId("image_avatar");
    expect(image).toHaveAttribute("src", props.url);
  });
});
