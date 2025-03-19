import React, { useState } from 'react';

const FlightSearch = () => {
  const [tripType, setTripType] = useState('one-way');
  const [formData, setFormData] = useState({
    departure: '',
    arrival: '',
    date: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search data:', formData);
  };

  return (
    <div className="flight-search-container">
      <div className="background-image">
        <img 
          src="../src/assets/Banner  Background.png"
          alt="Travel Landscape"
          className="full-background"
        />
      </div>
      <div className="content-wrapper">
        <div className="hero-content">
          <h1>Let's explore & travel the world</h1>
          <p>Find the best destinations and the most popular stays!</p>
        </div>

        <div className="search-box">
          <h2>SEARCH FLIGHTS</h2>
          <div className="trip-type">
            <label>
              <input
                type="radio"
                value="return"
                checked={tripType === 'return'}
                onChange={(e) => setTripType(e.target.value)}
              />
              Return
            </label>
            <label>
              <input
                type="radio"
                value="one-way"
                checked={tripType === 'one-way'}
                onChange={(e) => setTripType(e.target.value)}
              />
              One-way
            </label>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-group">
                <label>Departure</label>
                <input
                  type="text"
                  placeholder="Singapore (SIN)"
                  value={formData.departure}
                  onChange={(e) => setFormData({...formData, departure: e.target.value})}
                />
              </div>
              <div className="input-group">
                <label>Arrival</label>
                <input
                  type="text"
                  placeholder="Los Angeles (LA)"
                  value={formData.arrival}
                  onChange={(e) => setFormData({...formData, arrival: e.target.value})}
                />
              </div>
              <div className="input-group">
                <label>Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
            </div>
            <button type="submit" className="search-button">SEARCH FLIGHTS</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;