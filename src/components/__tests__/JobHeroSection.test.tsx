import { render, screen } from "@testing-library/react";
import JobHeroSection from "../jobs/JobHeroSection";
import { describe } from "node:test";

describe("job hero section component", () => {
  it("render the title find jobs", () => {
    render(<JobHeroSection />);
    expect(screen.getByText("Find Jobs")).toBeInTheDocument();
  });

  it("renders the subtitle text", () => {
    render(<JobHeroSection />);
    expect(
      screen.getByText(/Dive into a world of career possibilities with us/i)
    ).toBeInTheDocument();
  });

  it("applies correct heading role", () => {
    render(<JobHeroSection />);
    const heading = screen.getByRole("heading", { name: /find jobs/i });
    expect(heading).toBeInTheDocument();
  });
});
