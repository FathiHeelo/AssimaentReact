const PopularDestinations = ({ destinations }) => (
  <section>
    <h2>Most Popular Destinations</h2>
    {destinations.map((dest, index) => (
      <div key={index} className="destination">
        <img src={dest.image} alt={dest.name} />
        <p>{dest.name} - ${dest.price}</p>
      </div>
    ))}
  </section>
);

export default PopularDestinations;