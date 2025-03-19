const PopularStays = ({ stays }) => (
  <section>
    <h2>Popular Stays</h2>
    {stays.map((stay, index) => (
      <div key={index} className="stay">
        <img src={stay.image} alt={stay.name} />
        <p>{stay.name} - ${stay.price}/night ({stay.rating})</p>
      </div>
    ))}
  </section>
);

export default PopularStays;