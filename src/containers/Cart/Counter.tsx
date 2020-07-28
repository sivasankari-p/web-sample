import React from "react";

interface ICounterProps {
    currentCount: number,
    onChange: (count: number) => void
}

const Counter = (props: ICounterProps) => {
    return (
        <React.Fragment>
            <div>
                {props.currentCount}
            </div>
            <div>
                <button> + </button><br/>
                <button> - </button>
            </div>
        </React.Fragment>
    )
};

export default Counter;
