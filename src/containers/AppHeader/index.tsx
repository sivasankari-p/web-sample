import React, {useEffect} from "react";
import { connect } from "react-redux";
import fullLogo from "../../assets/uber-eats-logo.png";
import mobileLogo from "../../assets/eats-logo.png";
import "./appHeader.scss";
import {resizeWindow} from "../../actions/windowAction";
import {ActionInterface} from "../../actions/action";
import {STORE_KEYS, WINDOW_REDUCER_KEYS} from "../../reducers";

interface IAppHeaderProps {
    isWindowSmall: boolean,
    resizeWindow: (width: number) => ActionInterface
}

const AppHeader = (props: IAppHeaderProps) => {

    const { isWindowSmall, resizeWindow } = props;

    function windowResize() {
        resizeWindow(window.outerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", windowResize);
        return () => {
            window.removeEventListener("resize", windowResize);
        }
    });

    console.log({ isWindowSmall });
    return (
        <div className={"app-header"}>
            {isWindowSmall
                ? <img src={mobileLogo} alt={"uber-eats"} />
                : <img src={fullLogo} alt={"uber-eats"} />}
        </div>
    );
};

export default connect(
    (store: any) => ({
        isWindowSmall: store[STORE_KEYS.WINDOW_STORE][WINDOW_REDUCER_KEYS.IS_WINDOW_SMALL]
    }),
    {
        resizeWindow
    }
)(AppHeader);
