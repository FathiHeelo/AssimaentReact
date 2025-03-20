
const PopularStays = ({ stays }) => {
  return (
    <div className="popular-stays">
      <h2>Popular Stays</h2>
      
      <div className="stays-grid">
        {stays.map((stay) => (
          <div key={stay.name} className="stay-card">
            <img src={stay.image} alt={stay.name} />
            <div className="stay-info">
              <h3>{stay.name}</h3>
              <p className="price">${stay.price}/night</p>
              <p className="rating">Rating: {stay.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularStays;