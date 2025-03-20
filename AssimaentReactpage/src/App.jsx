import { useState } from "react";
import Navbar from "../Components/Navbar";
import FlightSearch from '../Components/FlightSearch';

import RecentSearches from "../Components/RecentSearches";
import TripPreparation from "../Components/TripPreparation";
import PopularDestinations from "../Components/PopularDestinations";
import PopularStays from "../Components/PopularStays";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import RecommendedHolidays from "../Components/RecommendedHolidays";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  const tripItems = ["Hotel", "Attractions", "Eats", "Commute", "Taxi", "Movies"];

  const [recentSearches] = useState([
    { from: "SIN", to: "LAX", date: "7 Sep 2021" },
    { from: "MY", to: "DUB", date: "9 Sep 2021" }
  ]);

  const destinations = [
    { image: "/public/imges/ParisImage.png", name: "Paris", price: 699 },
    { image: "/public/imges/GreeceImage.png", name: "Greece", price: 1079 },
    { image: "/public/imges/NorwayImage.png", name: "Norway", price: 895 },
    { image: "/public/imges/TuscanyImage.png", name: "Tuscany", price: 1245 },
  ];

  const stays = [
    { image: "/public/imges/Discovery Shores Image.png", name: "Discovery Shores", price: 360, rating: 4.8 },
    { image: "/public/imges/Arctic Hut Image.png", name: "Arctic Hut", price: 420, rating: 4.7 },
    { image: "/public/imges/Lake Louise Image.png", name: "Lake Louise Inn", price: 244, rating: 4.6 },
    { image: "/public/imges/Matterhorn Suites Image.png", name: "Matterhorn Suites", price: 575, rating: 4.9 },
  ];

  const holidays = [
    { image: "/public/imges/image_480.png", name: "Bali", duration: "4D3N", price: 899 },
    { image: "/public/imges/SwitzerlandImage.png", name: "Swiss", duration: "6D5N", price: 900 },
    { image: "/public/imges/BoracayImage.png", name: "Boracay", duration: "5D4N", price: 699 },
    { image: "/public/imges/PalawanImage.png", name: "Palawan", duration: "4D3N", price: 789 },
  ];

  return (
    <div>
      <Navbar />
      <FlightSearch />

      <RecentSearches searches={recentSearches} />
      <TripPreparation items={tripItems} />
      <PopularDestinations destinations={destinations} />
      <RecommendedHolidays holidays={holidays} /> 
      <PopularStays stays={stays} />
      <Newsletter placeholderName="Your name" placeholderEmail="Email address" buttonText="Submit" />
      <Footer text="Fickle Flight is your one-stop travel portal. We offer hassle-free flight and hotel bookings." />
    </div>
  );
};

export default App;