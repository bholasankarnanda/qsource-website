import { render, screen } from "@testing-library/react";
import WhatWeOfferSection from "../Home/WhatWeOfferSection";

// Mock next/image (avoid Next.js optimization in tests)
jest.mock("next/image", () => {
  const MockedImage = (props: any) => {
    return <img {...props} alt={props.alt} />;
  };
  MockedImage.displayName = "NextImageMock";
  return MockedImage;
});

describe("WhatWeOfferSection", () => {
  test("renders main title", () => {
    render(<WhatWeOfferSection />);
    expect(screen.getByText("What We Offer?")).toBeInTheDocument();
  });

  test("renders strategic IT Solutions heading", () => {
    render(<WhatWeOfferSection />);
    expect(screen.getByText("Strategic IT Solutions:")).toBeInTheDocument();
  });

  test("renders talent empowerment heading", () => {
    render(<WhatWeOfferSection />);
    expect(
      screen.getByText("Talent Empowerment Services:")
    ).toBeInTheDocument();
  });

  test("renders the illustration image", () => {
    render(<WhatWeOfferSection />);

    const image = screen.getByAltText("Strategic IT Solutions Illustration");

    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toBe("/Illustration-3.svg");
  });

  test("renders both text sections", () => {
    render(<WhatWeOfferSection />);

    expect(
      screen.getByText(/Elevate your business to new heights/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Unlock the full potential of your workforce/i)
    ).toBeInTheDocument();
  });

  test("renders two grid columns", () => {
    render(<WhatWeOfferSection />);

    const grids = screen.getAllByRole("gridcell");
    expect(grids.length).toBeGreaterThanOrEqual(2);
  });
});
