import { environment } from "./environments/environments";

export const AppConstant = Object.freeze({
    API_END_POINT: environment.baseURL,

    LOCALSTORAGE: {
        TOKEN: "token",
        USER: "userData",
        SESSIONTYPE: "storageType",
        ISVERIFIED: "isVerified",
    },
    API_CONFIG: {
        API_URL: {
            LOGIN: {
                login:"auth/saveSignup"
            },
        },
    },
}
);
