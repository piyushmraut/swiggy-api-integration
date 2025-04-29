import React from "react";
import { RES_CARD_ITEM_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
/*
 *  Let's try to add the item in the cart 
 */
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item)=>{
    dispatch(addItem(item));
  }
  return (
    <div>
      {items.map((item) => (
        <div
          className="flex justify-between mb-4 border-gray-300 border-b-4"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <h2 className="font-bold "> {item.card.info.name}</h2>
            <p>
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
            <p>{item.card.info?.ratings?.aggregatedRating?.rating}</p>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 ml-8 mt-4">
            <div className="relative w-36 h-36 p-2">
              <img
                src={RES_CARD_ITEM_IMAGE_URL + item?.card?.info?.imageId}
                className="w-full h-full rounded-lg shadow-lg"
              />
              <button onClick={()=> handleAddItem(item)} className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-green-600 border border-black rounded-md w-20  shadow-md">
                +Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
