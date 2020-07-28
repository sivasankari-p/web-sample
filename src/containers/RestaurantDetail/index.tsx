import React from "react";
import RestaurantHeader from "./RestaurantHeader";
import "./detail.scss";

interface IRestaurantProps {

}

const DETAIL = {
    img: "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/PizzaHut.jpg?itok=8m3Mf8Bf",
    restaurantName: "Pizza Hut",
    location: "Chennai, India",
    rating: {
        speed: 5,
        flavor: 9,
        offer: 10
    },
    info: {
        one: "25 TL",
        two: "45 dk",
        three: "09:00 - 22:00"
    }
};

const RestaurantDetail = (props: IRestaurantProps) => {
    return (
        <div>
            <RestaurantHeader
                img={DETAIL.img}
                restaurantName={DETAIL.restaurantName}
                location={DETAIL.location}
                rating={DETAIL.rating}
                info={DETAIL.info}
                isUserFavorite={true}
            />
        </div>
    )
};

export default RestaurantDetail;
