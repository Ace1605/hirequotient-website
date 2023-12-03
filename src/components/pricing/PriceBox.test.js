import React from "react";
import { render, screen } from "@testing-library/react";
import PriceBox from "./PriceBox"; // Adjust the import path as necessary

describe("PriceBox Component", () => {
  // Test for rendering the component
  it("renders correctly", () => {
    render(<PriceBox freeP="0" startP="10" proP="20" />);
    expect(screen.getByText(/Starter/i)).toBeInTheDocument();
    expect(screen.getByText(/Pro/i)).toBeInTheDocument();
  });

  // Test to check if it displays the correct prices
  it("displays the correct prices", () => {
    render(<PriceBox freeP="0" startP="10" proP="20" />);
    expect(screen.getByText("$0")).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
    expect(screen.getByText("$20")).toBeInTheDocument();
  });

  it("displays the CTA pricing button", () => {
    render(<PriceBox freeP="0" startP="10" proP="20" />);
    expect(screen.getByTestId("CTA")).toBeInTheDocument();
    expect(screen.getByTestId("CTA")).toHaveTextContent("Get started");
  });

  // Additional tests can include checking for the presence of specific features or text
  // based on the props, or any conditional rendering logic your component might have.
});
