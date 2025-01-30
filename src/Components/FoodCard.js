const FoodCard = (prop) => {
    return (
        <div className='res-card'>
            <div className='image-container'>
                <img className="res-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + prop.resData.cloudinaryImageId} alt='restaurant' />
                <span className="discount">
                <p className="discount-text">{prop.resData.aggregatedDiscountInfoV3?.header}</p>
                <p className="discount-text">{prop.resData.aggregatedDiscountInfoV3?.subHeader}</p>
                </span>
            </div>
            <div className='about-res'>
                <p className='res-name'>{prop.resData.name}</p>
                <div className="time-rating">
                    <p>
                        <span className="star-rating">
                        ★
                        </span>
                    </p>
                    <p> {prop.resData.avgRating} .</p>
                    <p>{prop.resData.sla.slaString}</p>
                </div>
                <p className="cuisine">
                    {prop.resData.cuisines.length > 3
                        ? `${prop.resData.cuisines.slice(0, 3).join(', ')}...`
                        : prop.resData.cuisines.join(', ')}
                </p>

                <p className='locality'>{prop.resData.areaName}</p>
            </div>
        </div>
    )
};
export default FoodCard;