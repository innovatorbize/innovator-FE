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
                login:"auth/login",
                register:"auth/saveSignUp"
            },
            MASTERS: {
                TEST: {
                    add : "masters/savetests",
                    list : "masters/testsList",
                    edit : "masters/editTests",
                    delete : "masters/deleteTests",
                }
            }
        },
    },
}
);
