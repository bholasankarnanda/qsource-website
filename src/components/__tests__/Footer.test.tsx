import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer Component", () => {
  test("renders address correctly", () => {
    render(<Footer />);

    expect(
      screen.getByText("17302 House & Hahl Rd , Suite #310")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Cypress, Texas, 77433 , United States.")
    ).toBeInTheDocument();
  });

  test("renders phone section with correct link", () => {
    render(<Footer />);

    // Label
    expect(screen.getByText("Call Us Directly")).toBeInTheDocument();

    // Phone Number
    expect(screen.getByText("832-400-2629")).toBeInTheDocument();

    // Phone Link
    const phoneLink = screen.getByRole("link", { name: "832-400-2629" });
    expect(phoneLink).toHaveAttribute("href", "tel:832-400-2629");
  });

  test("renders email section with correct link", () => {
    render(<Footer />);

    // Label
    expect(screen.getByText("Mail Us Directly")).toBeInTheDocument();

    // Email
    expect(screen.getByText("hr@qsourcegroupinc.com")).toBeInTheDocument();

    // Email Link
    const emailLink = screen.getByRole("link", {
      name: "hr@qsourcegroupinc.com",
    });

    expect(emailLink).toHaveAttribute("href", "mailto:hr@qsourcegroupinc.com");
  });
});
