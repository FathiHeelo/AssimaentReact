

const PopularDestinations = ({ destinations }) => {
  return (
    <div className="popular-destinations">
      <h2>Most Popular Destinations</h2>
      
      <div className="destinations-grid">
        {destinations.map((destination) => (
          <div key={destination.name} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <div className="destination-info">
              <h3>{destination.name}</h3>
              <p>Starting from ${destination.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;