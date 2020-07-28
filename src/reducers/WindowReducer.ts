import {WINDOW_RESIZE} from "../constants/windowConstants";

export const WINDOW_REDUCER_KEYS = {
    IS_WINDOW_SMALL: "isWindowSmall",
    IS_WINDOW_MEDIUM: "isWindowMedium",
};


export interface IWindowReducer {
    isWindowSmall: boolean,
    isWindowMedium: boolean
}


const initialState: IWindowReducer = {
    isWindowSmall: window.outerWidth < 650,
    isWindowMedium: window.outerWidth >= 650 && window.outerWidth< 950
};

export default (state = initialState, action: any): IWindowReducer => {
    switch (action.type) {
        case WINDOW_RESIZE:
            return { ...state,
                [WINDOW_REDUCER_KEYS.IS_WINDOW_SMALL]: action.payload.width < 650,
                [WINDOW_REDUCER_KEYS.IS_WINDOW_MEDIUM]: action.payload.width >= 650
                && action.payload.width < 950
            };
        default:
            return state;
    }
};
