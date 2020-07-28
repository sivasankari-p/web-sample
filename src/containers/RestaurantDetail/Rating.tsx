import React from "react";

interface IRatingProps {
    label: string,
    value: number
}

const RATING_GOOD_AVG = 5;
const RATING_OKAY_AVG = 2;

const Rating = (props: IRatingProps) => {
    const color = props.value > RATING_GOOD_AVG
        ? "green"
        : (
            props.value > RATING_OKAY_AVG ? "orange" : "red"
        );
    return (
        <div className={"d-flex direction-col rating"}>
            <div style={{
                borderColor: color,
                color
            }}>{props.value}</div>
            <div>{props.label}</div>
        </div>
    )
};

export default Rating;
