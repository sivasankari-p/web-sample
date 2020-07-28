import React from "react";
import MenuCategory from "./MenuCategory";
import {IMenuCategory} from "./menuTypes";
import "./menu.scss";

const menu: IMenuCategory[] = [
    {
        name: "Category 1",
        items: [
            {
                name: "Item 1",
                description: "Lorem Ipsum",
                rate: "19.90 TL"
            },
            {
                name: "Item 2",
                description: "Lorem Ipsum",
                rate: "19.90 TL"
            },
            {
                name: "Item 3",
                description: "Lorem Ipsum",
                rate: "19.90 TL"
            },
            {
                name: "Item 4",
                description: "Lorem Ipsum",
                rate: "19.90 TL"
            }
        ]
    },
    {
        name: "Category 2",
        items: [
            {
                name: "Item 1",
                description: "Lorem Ipsum",
                rate: "28.90 TL"
            },
            {
                name: "Item 2",
                description: "Lorem Ipsum",
                rate: "28.90 TL"
            }
        ]
    }
];

const RestaurantMenu = (props: {}) => {
    return (
        <div className={"menu-container"}>
            {menu.map((category: IMenuCategory) => (
                <MenuCategory category={category} />
            ))}
        </div>
    );
};

export default RestaurantMenu;
