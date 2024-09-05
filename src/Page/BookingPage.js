import { useState, useReducer } from "react";
import BookingForm from "../Components/BookingForm.js";

const initialTime = ["17:00", "18:00", "19:00", "20:00"];

function reducer(state, action) {
  if (action.type === "even_date") {
    return ["18:00", "20:00"];
  } else if (action.type === "odd_date") {
    return ["17:00", "19:00"];
  } else {
    return initialTime;
  }
}

const BookingPage = () => {
  const [form, setForm] = useState({ date: "2024-01-01", time: "17:00", guests: 1, occasion: "birthday" });

  const [availableTimes, dispatch] = useReducer(reducer, initialTime);

  const handleChange = (e) => {
    const name = e.target.name;
    setForm((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
    if (name === "date") {
      const date = new Date(e.target.value).getDate();
      if (Number(date) % 2 === 0) {
        dispatch({ type: "even_date" });
      } else {
        dispatch({ type: "odd_date" });
      }
    }
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Congratulations! You made a reservation on ${form.date} at ${form.time} for ${form.guests} person(s)`);
  };
  return (
    <section className="bookingPage">
      <BookingForm form handleChange={handleChange} formSubmit={formSubmit} availableTimes={availableTimes} />
      <section className="bookingSummary">
        <h1>Summary</h1>
        {form !== undefined ? (
          <article>
            <p>
              Date: <span>{form.date}</span>
            </p>
            <p>
              Time: <span>{form.time}</span>
            </p>
            <p>
              Number of guests: <span>{form.guests}</span>
            </p>
            <p>
              Occasion: <span>{form.occasion.toUpperCase()}</span>
            </p>
          </article>
        ) : (
          <p>No input information</p>
        )}
      </section>
    </section>
  );
};

export default BookingPage;
