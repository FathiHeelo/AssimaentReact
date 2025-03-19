import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const HeroSection = () => {
  const [departure, setDeparture] = useState("Singapore (SIN)");
  const [arrival, setArrival] = useState("Los Angeles (LA)");
  const [date, setDate] = useState("01/05/2022");
  const [tripType, setTripType] = useState("One-way");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ departure, arrival, date, tripType });
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Let's explore & travel the world</h1>
        <p>Find the best destinations and the most popular stays!</p>

        <Card className="search-box">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <div className="d-flex flex-wrap gap-3">
                <Form.Group controlId="departure" className="flex-grow-1">
                  <Form.Label>Departure</Form.Label>
                  <Form.Control
                    type="text"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="arrival" className="flex-grow-1">
                  <Form.Label>Arrival</Form.Label>
                  <Form.Control
                    type="text"
                    value={arrival}
                    onChange={(e) => setArrival(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="date" className="flex-grow-1">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="tripType" className="flex-grow-1">
                  <Form.Label>Trip Type</Form.Label>
                  <Form.Select
                    value={tripType}
                    onChange={(e) => setTripType(e.target.value)}
                  >
                    <option value="One-way">One-way</option>
                    <option value="Return">Return</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <Button type="submit" className="w-100 mt-3">
                SEARCH FLIGHTS
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;