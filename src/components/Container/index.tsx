import React from "react";
import "./container.scss";

const Container = (props: { children: React.ReactChild }) => (
    <div className={"container"}>
        {props.children}
    </div>
);

export default Container;
