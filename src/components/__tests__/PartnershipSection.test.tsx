import { render, screen } from "@testing-library/react";
import PartnershipSection from "../Home/PartnershipSection";
jest.mock("next/image");

describe("PartnershipSection Component", () => {
  test("renders the main Partnership heading", () => {
    render(<PartnershipSection />);
    expect(
      screen.getByRole("heading", { name: /Partnership/i })
    ).toBeInTheDocument();
  });

  test("renders UiPath partner image", () => {
    render(<PartnershipSection />);
    const uipathImage = screen.getByAltText("UiPath Partner");
    expect(uipathImage).toBeInTheDocument();
  });

  test("renders image", () => {
    render(<PartnershipSection />);
    expect(
      screen.getByAltText("Team collaborating on a project")
    ).toBeInTheDocument();
  });

  test("renders Accreditations heading", () => {
    render(<PartnershipSection />);
    expect(
      screen.getByRole("heading", { name: /Accreditations/i })
    ).toBeInTheDocument();
  });

  test("renders all accreditation logos", () => {
    render(<PartnershipSection />);

    const logos = [
      "Women Owned Certified",
      "NMSDC Certified",
      "SBA WOSB Certified",
      "HUB Certified",
    ];

    logos.forEach((alt) => {
      expect(screen.getByAltText(alt)).toBeInTheDocument();
    });
  });

  test("renders correct number of accreditation images", () => {
    render(<PartnershipSection />);
    const images = screen.getAllByTestId("mock-next-image");

    // 1 UiPath logo + 4 accreditation logos = 5 total images
    expect(images.length).toBe(5);
  });
});
