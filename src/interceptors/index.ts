import axios from "axios";

export const setBaseUrl = (baseUrl: string) => {
    axios.defaults.baseURL = baseUrl;
};

export const setAuthToken = (token: string) => {
    // axios.defaults.headers.common[TOKEN_KEY] = token;
};

export const setupInterceptors = () => {
    // @ts-ignore
    setBaseUrl(process.env.BASE_URL);
    axios.defaults.headers.common["Content-type"] = "application/json";

    // Add a request interceptor
    axios.interceptors.request.use(
        config => {
            // Do something before request is sent
            return config;
        },
        error => {
            // Do something with request error
            return Promise.reject(error);
        }
    );

    // Add a response interceptor
    axios.interceptors.response.use(
        response => {
            // If the login is failed then throw error
            if (response.data.error) {
                console.log("Login Failed ");
                throw new Error("Login Failed ");
            }

            return response;
        },
        error => {
            console.log("ERROR IN RESPONSE :: ", error.request.status, error);
            if (error.request.status === 401) {
                console.log("Token is invalid. Force logout the user");
                // Token is invalid. Force logout the user
                /*store.dispatch({
                    type: DELETE_TOKEN_FROM_PERSISTENCE,
                });*/
                return;
            }
            return Promise.reject(error);
        }
    );
};
