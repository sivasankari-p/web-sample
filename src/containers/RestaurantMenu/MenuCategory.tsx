import React from "react";
import {IMenuCategory, IMenuItem} from "./menuTypes";
import MenuItem from "./MenuItem";

interface IMenuCategoryProps {
    category: IMenuCategory
}

const MenuCategory = (props: IMenuCategoryProps) => {
    const { category } = props;
    return (
        <div className={"menu-category"}>
            <div>
                {category.name}
                <i className={"fa fa-angle-down"}/>
            </div>
            {category.items.map((item: IMenuItem) => (
                <MenuItem item={item} />
            ))}
        </div>
    )
};

export default MenuCategory;
