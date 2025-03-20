import React from 'react';
import { FaPlane } from "react-icons/fa";

const RecentSearches = ({ searches }) => {
  return (
    <div className="recent-searches-section">
      <h2>Recent Searches</h2>
      
      <div className="searches-grid">
        {searches.map((search) => (
          <div key={search.from + search.to + search.date} className="search-card">
            <div className="search-content">
              <div className="route-info">
                <span className="city-code">{search.from}</span>
                <FaPlane className="plane-icon" />
                <span className="city-code">{search.to}</span>
              </div>
              <div className="date-info">
                <span className="date-label">Departure:</span>
                <span className="date-value">{search.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;