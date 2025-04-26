import { CDN_URL } from "../utils/constants";

export default function RestaurantCard({ resData }) {
  let { name, cuisines, avgRating, costForTwo, locality, cloudinaryImageId } =
    resData.info;
  return (
    <div className="p-4 m-4 w-[250px] border border-slate-600 rounded-lg bg-gradient-to-tr from-slate-50 to-slate-200">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="loading"
        className="w-52 h-48 rounded-xl mb-2 hover:scale-105 border border-gray-600 shadow shadow-red-400 "
      />
      <h3 className="font-bold text-lg">{name}</h3>

      <h4>{cuisines.join(", ")}</h4>

      <p>
        {avgRating} {avgRating > 4 ? "⭐⭐⭐⭐" : "⭐⭐⭐"}
      </p>
      <h4>{costForTwo}</h4>
      <p>{locality}</p>
    </div>
  );
}

/*
 *  Let's try to write the code for Higher Order Function
 *  Higher Order function take input as a Component and it enhances the component
 */

export function withpromotedLabel(RestaurantCard){
  return (props)=>{
    return <div>
      <label>Promoted</label>
      <RestaurantCard {...props}/>
    </div>
  }
}
