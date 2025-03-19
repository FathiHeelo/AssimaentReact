import { FaPlane } from "react-icons/fa";

const RecentSearches = ({ searches }) => {
  return (
    <section className="recent-searches">
      <h2>Recent Searches</h2>
      <div className="search-container">
        {searches.map((search, index) => (
          <div className="search-card" key={index}>
            <div className="flight-info">
              <span className="airport-code">{search.from}</span>
              <FaPlane className="plane-icon" />
              <span className="airport-code">{search.to}</span>
            </div>
            <div className="departure-date">
              <strong>Depart On:</strong> {search.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentSearches;