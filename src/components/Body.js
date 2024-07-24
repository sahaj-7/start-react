import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

const Body = () => {
  const [res, setRes] = useState(restaurants);

  function handleClick() {
    const res2 = res.filter((item) => item.info.avgRating > 4.5);
    setRes(res2);
  }

  return (
    <div className="body">
      <div className="search-box">
        <input type="text" placeholder="Search..." />
      </div>
      <Button onClick={handleClick}>Top Rated Restaurant</Button>
      <div className="res-container">
        {res.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
