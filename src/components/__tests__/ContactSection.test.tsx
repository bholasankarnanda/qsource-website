import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ContactSection from "../jobs/ContactSection";

describe("ContactSection Component", () => {
  test("renders headings correctly", () => {
    render(<ContactSection />);

    expect(
      screen.getByText("Unveil your professional story.")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Share your CV and illuminate the path to your future success."
      )
    ).toBeInTheDocument();
  });

  test("renders all input fields", () => {
    render(<ContactSection />);

    expect(screen.getByLabelText("Full name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone number")).toBeInTheDocument();
    expect(screen.getByLabelText("Subject")).toBeInTheDocument();
    expect(screen.getByLabelText("Your message")).toBeInTheDocument();
  });

  test("renders upload resume section", () => {
    render(<ContactSection />);

    expect(screen.getByText("Upload resume")).toBeInTheDocument();
    expect(screen.getByText("Choose File")).toBeInTheDocument();
  });

  //   test("file upload triggers input change", async () => {
  //     const user = userEvent.setup();
  //     render(<ContactSection />);

  //     const fileInput = screen
  //       .getByLabelText("Choose File")
  //       .querySelector("input")!;

  //     const mockFile = new File(["hello"], "resume.pdf", {
  //       type: "application/pdf",
  //     });

  //     await user.upload(fileInput, mockFile);

  //     expect(fileInput.files).toHaveLength(1);
  //     expect(fileInput.files![0].name).toBe("resume.pdf");
  //   });

  test("submit button is rendered", () => {
    render(<ContactSection />);

    const button = screen.getByText("Submit Application");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("MuiButton-root");
  });

  test("allows typing in text fields", async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    const nameInput = screen.getByLabelText("Full name");
    await user.type(nameInput, "John Doe");

    expect(nameInput).toHaveValue("John Doe");

    const emailInput = screen.getByLabelText("Email Address");
    await user.type(emailInput, "john@example.com");

    expect(emailInput).toHaveValue("john@example.com");
  });
});
