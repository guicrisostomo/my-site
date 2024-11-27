import { render, screen } from "@testing-library/react";
import Footer from "./index";

describe("Footer", () => {
  it("should render the footer", () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
})