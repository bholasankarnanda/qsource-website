import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import JobOpeningsSection from "../jobs/JobOpeningsSection";

describe("JobOpeningsSection Component", () => {
  test("renders job list properly", () => {
    render(<JobOpeningsSection />);

    expect(screen.getByText("Current Job Openings")).toBeInTheDocument();

    // Ensure job cards exist
    expect(screen.getByText("DevOps Engineer")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
  });

  test("opens job details dialog on job click", () => {
    render(<JobOpeningsSection />);

    const jobCard = screen.getByText("DevOps Engineer");
    fireEvent.click(jobCard);

    expect(screen.getByText("Role Overview")).toBeInTheDocument();
    expect(screen.getByText("Apply Now")).toBeInTheDocument();
  });

  //   test("closes dialog on clicking Cancel", () => {
  //     render(<JobOpeningsSection />);

  //     fireEvent.click(screen.getByText("DevOps Engineer"));
  //     expect(screen.getByText("Role Overview")).toBeInTheDocument();

  //     fireEvent.click(screen.getByText("Cancel"));

  //     // After closing, Role Overview should NOT be visible
  //     expect(screen.queryByText("Role Overview")).not.toBeInTheDocument();
  //   });

  test("switches to Contact / Apply page when clicking Apply Now", () => {
    render(<JobOpeningsSection />);

    fireEvent.click(screen.getByText("DevOps Engineer")); // open details
    fireEvent.click(screen.getByText("Apply Now")); // navigate

    // ContactSection should appear
    expect(screen.getByText("Apply Now")).toBeInTheDocument();
    expect(
      screen.getByText(/You are applying for the position/i)
    ).toBeInTheDocument();
  });
});
