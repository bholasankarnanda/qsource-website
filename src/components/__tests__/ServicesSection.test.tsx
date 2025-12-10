import { render, screen } from "@testing-library/react";
import ServicesSection from "../Home/ServicesSection";

// Mock MUI icons (renders simple <svg>)
jest.mock("@mui/icons-material/DisplaySettings", () => {
  const MockIcon = () => <svg data-testid="DisplaySettingsIcon" />;
  MockIcon.displayName = "DisplaySettingsIcon";
  return MockIcon;
});

jest.mock("@mui/icons-material/Code", () => {
  const MockIcon = () => <svg data-testid="CodeIcon" />;
  MockIcon.displayName = "CodeIcon";
  return MockIcon;
});

jest.mock("@mui/icons-material/Psychology", () => {
  const MockIcon = () => <svg data-testid="PsychologyIcon" />;
  MockIcon.displayName = "PsychologyIcon";
  return MockIcon;
});

jest.mock("@mui/icons-material/CloudQueue", () => {
  const MockIcon = () => <svg data-testid="CloudQueueIcon" />;
  MockIcon.displayName = "CloudQueueIcon";
  return MockIcon;
});

jest.mock("@mui/icons-material/GroupAdd", () => {
  const MockIcon = () => <svg data-testid="GroupAddIcon" />;
  MockIcon.displayName = "GroupAddIcon";
  return MockIcon;
});

jest.mock("@mui/icons-material/Security", () => {
  const MockIcon = () => <svg data-testid="SecurityIcon" />;
  MockIcon.displayName = "SecurityIcon";
  return MockIcon;
});

jest.mock("next/image", () => {
  const MockNextImage = (props: any) => <img {...props} alt={props.alt} />;
  MockNextImage.displayName = "MockNextImage";
  return MockNextImage;
});

describe("ServicesSection Component", () => {
  beforeEach(() => {
    render(<ServicesSection />);
  });

  test("renders main heading", () => {
    expect(
      screen.getByRole("heading", {
        name: /Driving success through tailored IT/i,
      })
    ).toBeInTheDocument();
  });

  test("renders description text", () => {
    expect(
      screen.getByText(/Empower your business with our comprehensive suite/i)
    ).toBeInTheDocument();
  });

  test("renders all 6 service cards", () => {
    const titles = [
      "IT Consulting",
      "Software Development",
      "AI & ML Solutions",
      "Cloud Computing",
      "Staffing and Recruitment",
      "Cybersecurity Solutions",
    ];

    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  test("renders all 6 service icons", () => {
    expect(screen.getByTestId("DisplaySettingsIcon")).toBeInTheDocument();
    expect(screen.getByTestId("CodeIcon")).toBeInTheDocument();
    expect(screen.getByTestId("PsychologyIcon")).toBeInTheDocument();
    expect(screen.getByTestId("CloudQueueIcon")).toBeInTheDocument();
    expect(screen.getByTestId("GroupAddIcon")).toBeInTheDocument();
    expect(screen.getByTestId("SecurityIcon")).toBeInTheDocument();
  });

  test("renders grid layout", () => {
    const gridItems = screen.getAllByRole("gridcell", { hidden: true });
    expect(gridItems.length).toBeGreaterThan(0);
  });
});
