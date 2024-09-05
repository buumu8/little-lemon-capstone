const BookingForm = ({ form, handleChange, formSubmit, availableTimes }) => {
  return (
    <section>
      <h1>Reservation</h1>
      <section className="bookingForm">
        <form className="bookingForm-form" onSubmit={formSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" name="date" onChange={(e) => handleChange(e)} />
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" name="time" onChange={(e) => handleChange(e)}>
            {availableTimes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" name="guests" placeholder="1" min="1" max="10" id="guests" onChange={(e) => handleChange(e)} />
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" name="occasion" onChange={(e) => handleChange( e)}>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
          <input type="submit" value="Make Your reservation"></input>
        </form>
      </section>
    </section>
  );
};

export default BookingForm;
