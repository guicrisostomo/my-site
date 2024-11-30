import { render, screen } from "@testing-library/react";
import Footer from "./index";
import imgCopyright from "../../assets/img/imgCopyright.svg";

describe("Footer", () => {
  it("should render the footer", () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  it("should render the icons", () => {
    render(<Footer />);
    const icons = screen.getAllByRole("link");
    expect(icons).toHaveLength(3);
  });

  it("should render the text", () => {
    render(<Footer />);
    const text = screen.getByText(/Guilherme Crisostomo da Silva/i);
    expect(text).toBeInTheDocument();
  });

  it("should render the image", () => {
    render(<Footer />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });

  it("should render the image with the correct src", () => {
    render(<Footer />);
    const img = screen.getByRole("img");
    expect(img.src).toContain(imgCopyright);
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
})