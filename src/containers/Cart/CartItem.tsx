import React from "react";
import {ICartItem} from "./cartTypes";
import Counter from "./Counter";

interface ICartItemProps {
    item: ICartItem
}

const PRICE_UNIT = "TL";

const CartItem = (props: ICartItemProps) => {
    const { item } = props;
    return (
        <div className={"card-item"}>
            <div className={"d-flex flex-row align-center"}>
                <div className={"counter"}>
                    <Counter currentCount={item.quantity} onChange={() => {}}/>
                </div>
                <div className={"item-details"}>
                    <div>{item.name}</div>
                    <div>{item.description}</div>
                </div>
            </div>
            <div className={"cart-action"}>
                <div>{`${item.price} ${PRICE_UNIT}`}</div>
                <div><i className={"fa fa-times-circle-o"} /></div>
            </div>
        </div>
    )
};

export default CartItem;
