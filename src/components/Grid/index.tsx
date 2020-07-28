import React from "react";
import "./grid.scss";

interface IGridProps {
    size: number,
    children: React.ReactChild
}

const Grid = (props: IGridProps) => {
    return (
        <div className={`col-${props.size}`}>
            {props.children}
        </div>
    );
};

export default Grid;
