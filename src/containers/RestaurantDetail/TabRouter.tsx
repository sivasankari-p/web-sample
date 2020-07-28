import React from "react";
import {BrowserRouter as Router, NavLink, Redirect, Route, Switch} from "react-router-dom";
import "./tabRouter.scss";
import RestaurantMenu from "../RestaurantMenu";
import TabContent from "./TabContent";

const TabRouter = (props: {}) => {
    return (
        <Router>
            <div>
                <div className={"tab-container"}>
                    <NavLink activeClassName={"active"} to="/tab1">Tab 1</NavLink>
                    <NavLink activeClassName={"active"} to="/tab2">Tab 2</NavLink>
                    <NavLink activeClassName={"active"} to="/tab3">Tab 3</NavLink>
                    <NavLink activeClassName={"active"} to="/tab4">Tab 4</NavLink>
                </div>
                <div className={"tab-content"}>
                    <TabContent/>
                </div>
            </div>
        </Router>
    )
};

export default TabRouter;
