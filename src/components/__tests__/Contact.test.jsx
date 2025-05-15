import React from "react"; // ✅ Required for JSX
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

/*
 *  For Grouping purpose we can use Describe method
 *  It is the alias name of test
 */

describe("Contact Us Page Test Cases", () => {
  it("Should Component is loaded on the page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should button is loaded", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should placeholder loaded", () => {
    render(<Contact />);
    const placeholderText = screen.getByPlaceholderText("Enter Your Name");
    expect(placeholderText).toBeInTheDocument();
  });

  test("Checking whether 2 input boxes are present or not", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
