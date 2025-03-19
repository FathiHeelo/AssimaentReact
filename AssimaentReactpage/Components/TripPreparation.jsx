import { FaHotel, FaTicketAlt, FaUtensils, FaCar, FaTaxi, FaFilm } from "react-icons/fa";

const TripPreparation = ({ items }) => {
  const icons = [
    <FaHotel size={40} className="icon icon-hotel" />, // Hotel
    <FaTicketAlt size={40} className="icon icon-tickets" />, // Tickets
    <FaUtensils size={40} className="icon icon-eats" />, // Eats
    <FaCar size={40} className="icon icon-commute" />, // Commute
    <FaTaxi size={40} className="icon icon-taxi" />, // Taxi
    <FaFilm size={40} className="icon icon-movies" />, // Movies
  ];

  return (
    <section className="trip-preparation">
      <h2>Prepare for your trip</h2>
      <div className="container">
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-md-2 mb-2">
              <div className="card">
                <div className="card-body text-center">
                  <div>{icons[index]}</div>
                  <h5 className="card-title">{item}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripPreparation;