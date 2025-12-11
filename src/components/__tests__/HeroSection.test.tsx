import { render, screen } from "@testing-library/react";
import HeroSection from "../Home/HeroSection";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("HeroSection Component", () => {
  test("renders main headline", () => {
    render(<HeroSection />);
    expect(screen.getByText(/Empowering your/i)).toBeInTheDocument();
    expect(screen.getByText(/Enterprise/i)).toBeInTheDocument();
  });

  test("renders subheadline", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/Your Partner in Comprehensive IT Services/i)
    ).toBeInTheDocument();
  });

  test("renders description text", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(
        /Transform your challenges into triumphs with our comprehensive IT solutions/i
      )
    ).toBeInTheDocument();
  });

  test("renders CTA button", () => {
    render(<HeroSection />);
    const button = screen.getByRole("link", {
      name: /Explore Our Services/i,
    });
    expect(button).toBeInTheDocument();
  });

  test("CTA button contains correct link", () => {
    render(<HeroSection />);
    const buttonLink = screen.getByRole("link", {
      name: /Explore Our Services/i,
    });
    expect(buttonLink).toHaveAttribute("href", "/ourservices");
  });

  test("renders the GreenSwoosh SVG", () => {
    render(<HeroSection />);
    const svg = screen.getByTestId("green-swoosh");
    expect(svg).toBeInTheDocument();
  });
});
