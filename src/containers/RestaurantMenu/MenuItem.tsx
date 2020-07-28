import React from "react";
import {IMenuItem} from "./menuTypes";

interface IMenuItemProps {
    item: IMenuItem
}

const MenuItem = (props: IMenuItemProps) => {
    const { item } = props;
    return (
        <div className={"menu-item"}>
            <div>
                <div>{item.name}</div>
                <div>{item.description}</div>
            </div>
            <div>
                <span> {item.rate} </span>
                <button>+</button>
            </div>
        </div>
    )
};

export default MenuItem;
