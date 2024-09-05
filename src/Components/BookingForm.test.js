import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Reservation");
  expect(headingElement).toBeInTheDocument();
});

test("can submit", () => {
  render(<BookingForm />);
  const btn = screen.getByText("Make Your reservation");
  //   expect(heading).toHaveTextContent("2");
  fireEvent.click(btn);
});
