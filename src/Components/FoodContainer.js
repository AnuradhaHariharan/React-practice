import FoodCard from "./FoodCard";
import { useState,useEffect } from "react";
import { ShimmerPostList } from "react-shimmer-effects";

const FoodContainer=()=>{
  const [defaultRestaurantData,setDefaultRestaurantData]=useState([]);
    
    const fetchdata= async ()=>{
      const fetchedData= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8062341&lng=80.198166&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json= await fetchedData.json();
      const apiData=json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      setRestaurantData(apiData);
      setDefaultRestaurantData(apiData);
    }
  

    useEffect(() => {
      console.log("running")
      fetchdata();
    }, []);
    const [restaurantData,setRestaurantData]=useState([]);
    const [searchItem ,setSearchItem]=useState("");
    const filterRes = defaultRestaurantData.filter((res)=>res.info.avgRating>4);

    return (
      <div className="main-content">
        <div className="btn-container">
          <button className="top-rated" onClick={() => setRestaurantData(filterRes)}>
            Top Rated Restaurants
          </button>
          <div className="searchContainer">
          <input type="text" placeholder="Search restaurants" className="search" value={searchItem} onChange={(e)=>{setSearchItem(e.target.value)}}></input>
          <span className="search-icon" onClick={()=>{
           let resData= defaultRestaurantData.filter((res)=>{
            return(
              res.info.name.toLowerCase().includes(searchItem.toLowerCase())||
              res.info.cuisines.some(cusines=>cusines.toLowerCase().includes(searchItem))||
              res.info.areaName.toLowerCase().includes(searchItem)
            );
           }
            )
            console.log(resData);
            resData.length===0?setRestaurantData(defaultRestaurantData):setRestaurantData(resData);
              }}>&#x1F50D;</span>
        </div>
        </div>
        
        {restaurantData.length === 0 ? (
          <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
        ) : (
          <div className='food-container'>
            {/* Correctly wrapping the map function inside curly braces */}
            {restaurantData.map((restaurant) => (
              <FoodCard key={restaurant.info.id} resData={restaurant.info} />
            ))}
          </div>
        )}
      </div>
    );
    
};
export default FoodContainer;
