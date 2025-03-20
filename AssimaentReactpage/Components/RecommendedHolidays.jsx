
const RecommendedHolidays = ({ holidays }) => {
  return (
    <div className="recommended-holidays">
      <h2>Recommended Holidays</h2>
      
      <div className="holidays-grid">
        {holidays.map((holiday) => (
          <div key={holiday.name} className="holiday-card">
            <img src={holiday.image} alt={holiday.name} />
            <div className="holiday-info">
              <h3>{holiday.name}</h3>
              <p className="duration">{holiday.duration}</p>
              <p className="price">${holiday.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedHolidays;