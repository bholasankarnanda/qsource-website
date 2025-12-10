import { render, screen } from "@testing-library/react";
import RecruitingSection from "../jobs/RecruitingSection";

describe("RecruitingSection", () => {
  it("renders main heading", () => {
    render(<RecruitingSection />);
    expect(
      screen.getByRole("heading", { name: /Recruiting for/i })
    ).toBeInTheDocument();
  });

  it("renders description text", () => {
    render(<RecruitingSection />);
    expect(
      screen.getByText(/Discover a tapestry of career opportunities/i)
    ).toBeInTheDocument();
  });

  it("renders all job titles at least once", () => {
    const JOB_TITLES = [
      "DevOps Engineer",
      "Data Scientist",
      "Cybersecurity Analyst",
      "Product Owner",
      "Software Engineer",
      "Systems Analyst",
      "Project Manager",
    ];

    render(<RecruitingSection />);

    JOB_TITLES.forEach((job) => {
      expect(screen.getAllByText(job).length).toBeGreaterThan(0);
    });
  });

  it("renders animated container", () => {
    render(<RecruitingSection />);
    const container = screen.getByTestId("animated-container");
    expect(container).toBeInTheDocument();
  });
});
