import FoodCard from "./Components/FoodCard";
import data from "./Utils/data";


const FoodContainer=()=>{
    return (
        <div className='food-container'>
          {data.map((restaurant)=>(
            <FoodCard key={restaurant.info.id} resData={restaurant.info}/>
          ))
          }
        </div>
    )
};
export default FoodContainer;
