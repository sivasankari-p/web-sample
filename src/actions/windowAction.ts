import {WINDOW_RESIZE} from "../constants/windowConstants";

export const resizeWindow = (width: number) => ({
    type: WINDOW_RESIZE,
    payload: {
        width
    }
});
