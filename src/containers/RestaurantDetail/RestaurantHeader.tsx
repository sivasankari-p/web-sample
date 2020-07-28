import React, {useEffect, useState} from "react";
import Rating from "./Rating";
import "./header.scss";

interface IHeaderProps {
    img: string,
    restaurantName: string,
    location: string,
    rating: {
        speed: number,
        flavor: number,
        offer: number
    },
    info: {
        one: string,
        two: string,
        three: string
    },
    isUserFavorite: boolean
}

const SPEED_LABEL = "Speed";
const FLAVOR_LABEL = "Flavor";
const OFFER_LABEL = "Offer";

const INFO_ONE = "Info 1";
const INFO_TWO = "Info 2";
const INFO_THREE = "Info 3";

const RestaurantHeader = (props: IHeaderProps) => {

    const [ isWindowSmall, setWindowSmall ] = useState(window.outerWidth < 650);

    function windowResize() {
        if (window.outerWidth < 650 && !isWindowSmall) {
            setWindowSmall(true);
        } else if (window.outerWidth > 650 && isWindowSmall) {
            setWindowSmall(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", windowResize);
        return () => {
            window.removeEventListener("resize", windowResize);
        }
    });

    return (
        <React.Fragment>
            <div className={"d-flex-card"}>
                <img src={props.img} alt={props.restaurantName} />
                <div className={"flex-1 d-flex direction-col"}>
                    <div className={"d-flex direction-row align-center justify-space-between"}>
                        <div className={"header-container"}>
                            <div className={"header"}>{props.restaurantName}</div>
                            <div className={"subtitle"}>{props.location}</div>
                        </div>
                        <div>
                            <button onClick={() => {}}> Favorite </button>
                            <button onClick={() => {}}> Share </button>
                            <button onClick={() => {}}> Like </button>
                        </div>
                    </div>
                    <div className={"d-flex direction-row align-center"}>
                        <div className={"d-flex direction-row align-center"}>
                            <Rating label={SPEED_LABEL} value={props.rating.speed}/>
                            <Rating label={FLAVOR_LABEL} value={props.rating.flavor}/>
                            <Rating label={OFFER_LABEL} value={props.rating.offer}/>
                        </div>
                        {!isWindowSmall && (
                            <div className={"d-flex direction-row align-center border-box"}>
                                <div>
                                    <div>{props.info.one}</div>
                                    <div>{INFO_ONE}</div>
                                </div>
                                <div>
                                    <div>{props.info.two}</div>
                                    <div>{INFO_TWO}</div>
                                </div>
                                <div>
                                    <div>{props.info.three}</div>
                                    <div>{INFO_THREE}</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div id={"xs-border-box"} className={"d-flex direction-row align-center border-box"}>
                {isWindowSmall && (
                    <React.Fragment>
                        <div>
                            <div>{props.info.one}</div>
                            <div>{INFO_ONE}</div>
                        </div>
                        <div>
                            <div>{props.info.two}</div>
                            <div>{INFO_TWO}</div>
                        </div>
                        <div>
                            <div>{props.info.three}</div>
                            <div>{INFO_THREE}</div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        </React.Fragment>
    )
};

export default RestaurantHeader;
