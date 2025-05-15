import React, { useContext, useEffect, useState } from "react";
import RestaurantCard,{withpromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

function Body() {
  const [allresList, setAllresList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const onlineStatus = useOnlineStatus();
  const promotedRestaurant = withpromotedLabel(RestaurantCard);
  const {loggedInUser,setUserInfo} = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);

  const proxyUrl = "https://thingproxy.freeboard.io/fetch/";
  const swiggyUrl =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.745476848927034&lng=78.6230892688036&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const fetchData = async () => {
    try {
      const response = await fetch(proxyUrl + swiggyUrl);
      const json = await response.json();

      // Safe access to nested restaurant data
      const restaurantData = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (restaurantData) {
        console.log(restaurantData);
        setAllresList(restaurantData);
        setFilteredList(restaurantData);
      } else {
        console.warn("Restaurant data not found in API response.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = () => {
    const filterData = allresList.filter((res) => {
      return res.info.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setFilteredList(filterData);
  };

  if (onlineStatus === false) {
    return <h1>Something went wrong! Looks you are offline</h1>;
  }

  return allresList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-4 border border-black bg-gradient-to-br from-red-200 to-violet-300">
      <div className="mt-4 flex flex-wrap justify-center">
        <input
          type="text"
          placeholder="Enter the food restaurant or Food"
          className="pr-16 pl-2 ml-8 mr-2 h-10 border border-red-500"
          data-testid="searchInput"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button
          className="bg-green-300 p-2 h-10 border border-green-600 "
          onClick={handleChange}
        >
          Search
        </button>
        <button
          className="bg-violet-300 p-2 h-10 px-2 mx-2 border border-violet-600"
          onClick={() => {
            setFilteredList(
              allresList.filter((resData) => resData.info.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <label>UserName:</label>
        <input
          type="text"
          placeholder="Enter the Name"
          className="pr-16 pl-2 ml-8 mr-2 h-10 border border-red-500"
          value={loggedInUser}
          onChange={(e) => {
            setUserInfo(e.target.value);
          }}
        />
        </div>
      </div>

      <div className="flex flex-wrap p-4 m-4 justify-center">
        {filteredList.map((resData) => (
          <Link to={"/restaurant/" + resData.info.id} key={resData.info.id}>
            <RestaurantCard resData={resData.info} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
