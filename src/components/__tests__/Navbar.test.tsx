import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar Component", () => {
  test("renders desktop nav items", () => {
    render(<Navbar />);

    const homeLinks = screen.getAllByText("Home");
    expect(homeLinks.length).toBeGreaterThan(0);

    expect(screen.getAllByText("Our Services").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Find Jobs").length).toBeGreaterThan(0);
    expect(screen.getAllByText("About").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
  });

  test("opens mobile drawer when menu icon clicked", () => {
    render(<Navbar />);

    // find the menu icon
    const menuIcon = screen.getByLabelText("open drawer");
    fireEvent.click(menuIcon);

    // Drawer items should appear
    expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Our Services").length).toBeGreaterThan(0);
  });
});
