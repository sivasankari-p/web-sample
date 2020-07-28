import React from "react";
import {Redirect, Route, Switch} from "react-router";
import RestaurantMenu from "../RestaurantMenu";
import {connect} from "react-redux";
import {STORE_KEYS, WINDOW_REDUCER_KEYS} from "../../reducers";
import Cart from "../Cart";

interface ITabContentProps {
    isWindowSmall: boolean,
    isWindowMedium: boolean
}

const CART_TOTAL = "Total";
const PRICE_UNIT = "TL";

const TabContent = (props: ITabContentProps) => {
    const { isWindowSmall, isWindowMedium } = props;
    const hideCart = isWindowMedium || isWindowSmall;
    return (
        <div className={"d-flex flex-row"}>
            <div className={"flex-2"}>
                <Switch>
                    <Route exact path="/tab1">
                        <RestaurantMenu/>
                    </Route>
                    <Route exact path="/tab2">
                        <div/>
                    </Route>
                    <Route exact path="/tab3">
                        <div/>
                    </Route>
                    <Route exact path="/tab4">
                        <div/>
                    </Route>
                    <Route path="*">
                        <Redirect to={"/tab1"}/>
                    </Route>
                </Switch>
            </div>
            {!hideCart && (
                <div className={"flex-1"}>
                    <Cart/>
                </div>
            )}
            {hideCart && (
                <div className={"floating-cart"}>
                    <i className={"fa fa-shopping-cart"} />
                    <div>
                        <div>{CART_TOTAL}</div>
                        <div>{`50.00 ${PRICE_UNIT}`}</div>
                    </div>
                </div>
            )}
        </div>
    )
};

export default connect(
    (store: any) => ({
        isWindowSmall: store[STORE_KEYS.WINDOW_STORE][WINDOW_REDUCER_KEYS.IS_WINDOW_SMALL],
        isWindowMedium: store[STORE_KEYS.WINDOW_STORE][WINDOW_REDUCER_KEYS.IS_WINDOW_MEDIUM]
    })
)(TabContent);
