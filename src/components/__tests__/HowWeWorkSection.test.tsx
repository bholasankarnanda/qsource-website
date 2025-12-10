import { render, screen } from "@testing-library/react";
import HowWeWorkSection from "../Home/HowWeWorkSection";
jest.mock("next/image");

describe("HowWeWorkSection Component", () => {
  test("renders section label", () => {
    render(<HowWeWorkSection />);
    expect(screen.getByText("How We Work?")).toBeInTheDocument();
  });

  test("renders image", () => {
    render(<HowWeWorkSection />);
    expect(
      screen.getByAltText("Team collaborating on a project")
    ).toBeInTheDocument();
  });

  test("renders all step titles", () => {
    render(<HowWeWorkSection />);

    expect(screen.getByText("Understand Client Needs:")).toBeInTheDocument();
    expect(
      screen.getByText("Customized Solution Design and Proposal:")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Implementation and Ongoing Support:")
    ).toBeInTheDocument();
  });

  test("renders all step descriptions", () => {
    render(<HowWeWorkSection />);

    expect(
      screen.getByText(/Understanding your needs and challenges/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/We tailor solutions to your needs/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Upon your approval, we seamlessly transition/i)
    ).toBeInTheDocument();
  });

  test("renders number circles (1, 2, 3)", () => {
    render(<HowWeWorkSection />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("renders two dividers between items", () => {
    render(<HowWeWorkSection />);

    const dividers = screen.getAllByRole("separator");
    expect(dividers.length).toBe(2); // 3 steps → 2 dividers
  });

  test("renders the image", () => {
    render(<HowWeWorkSection />);
    const img = screen.getByAltText("Team collaborating on a project");
    expect(img).toBeInTheDocument();
  });
});
