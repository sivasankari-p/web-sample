import React from "react";
import { connect } from "react-redux";
import RestaurantHeader from "./RestaurantHeader";
import "./detail.scss";
import Breadcrumb from "./Breadcrumb";
import {STORE_KEYS, WINDOW_REDUCER_KEYS} from "../../reducers";
import TabRouter from "./TabRouter";

interface IRestaurantProps {
    isWindowSmall: boolean,
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
    const { isWindowSmall } = props;
    return (
        <div>
            {!isWindowSmall && (
                <Breadcrumb />
            )}
            <RestaurantHeader
                img={DETAIL.img}
                restaurantName={DETAIL.restaurantName}
                location={DETAIL.location}
                rating={DETAIL.rating}
                info={DETAIL.info}
                isUserFavorite={true}
            />
            <TabRouter/>
        </div>
    )
};

export default connect(
    (store: any) => ({
        isWindowSmall: store[STORE_KEYS.WINDOW_STORE][WINDOW_REDUCER_KEYS.IS_WINDOW_SMALL]
    })
)(RestaurantDetail);
