const HolidayCard = ({ image, name, duration, price }) => (
    <div className="holiday-card">
      <img src={image} alt={name} />
      <p>{name} - {duration}</p>
      <p>${price}</p>
    </div>
  );
  
  const RecommendedHolidays = ({ holidays }) => (
    <section>
      <h2>Recommended Holidays</h2>
      <div className="holidays-container">
        {holidays.map((holiday, index) => (
          <HolidayCard key={index} {...holiday} />
        ))}
      </div>
    </section>
  );
  
  export default RecommendedHolidays;