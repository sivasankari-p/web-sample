import React from "react";
import "./row.scss";

const Row = (props: { children: React.ReactChild }) => (
    <div className={"row"}>
        {props.children}
    </div>
);

export default Row;
