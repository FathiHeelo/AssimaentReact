import { useState } from "react";

const SearchFlights = () => {
  const [departure, setDeparture] = useState("Singapore (SIN)");
  const [arrival, setArrival] = useState("Los Angeles (LA)");
  const [date, setDate] = useState("01/05/2022");
  const [tripType, setTripType] = useState("One-way");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ departure, arrival, date, tripType });
  };

  return (
    <section className="search-flights">
      <h2>SEARCH FLIGHTS</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Departure</label>
          <input
            type="text"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Arrival</label>
          <input
            type="text"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Trip Type</label>
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
          >
            <option value="One-way">One-way</option>
            <option value="Return">Return</option>
          </select>
        </div>

        <button type="submit" className="search-button">
          SEARCH FLIGHTS
        </button>
      </form>
    </section>
  );
};

export default SearchFlights;