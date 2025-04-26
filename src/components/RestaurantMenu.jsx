import { useEffect, useState, React, useContext } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showItems, setShowItems] = useState(null);
  const { loggedInUser } = useContext(UserContext);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, locality, areaName, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const cardItems =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
      ?.itemCards;
  const cardCategory =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(cardCategory);
  return (
    <div className="m-4 border border-black p-4">
      <div className="text-center">
        <h1 className="font-bold">{name}</h1>
        <p>{locality}</p>
        <p>{areaName}</p>
        <p>{costForTwoMessage}</p>
        <p>{loggedInUser}</p>
      </div>

      <div className="">
        {/* {cardCategory.map((c)=><p key={c.card.card.categoryId}>{c.card.card.title}</p>)} */}
        {/* <CardCategory cardCategory={cardCategory} /> */}
        {cardCategory.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.categoryId}
            data={category?.card?.card}
            showItems={index === showItems ? true : false}
            setShowItems={() => setShowItems(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
