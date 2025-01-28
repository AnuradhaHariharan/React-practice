const FoodCard =(prop)=>{
    return (
        <div className='res-card'>
         <div className='image-container'>
            <img className="res-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+prop.resData.cloudinaryImageId} alt='restaurant'/>
         </div>
         <div className='about-res'>
         <p className='res-name'>{prop.resData.name}</p>
         <p>🌟 {prop.resData.avgRating} stars</p>
         <p className='cost'>{prop.resData.costForTwo}</p>
         <p>{prop.resData.sla.deliveryTime} minutes</p>
         <p className='status'>{prop.resData.isOpen ? "Open" : "Closed"}</p>
        </div>
        </div>
    )
};
export default FoodCard;