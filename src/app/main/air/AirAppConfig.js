/** @format */

import AirApp from "./AirApp";
import {authRoles} from "app/auth";

export const AirAppConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    auth: authRoles.fleet,
    routes: [
        {
            path: "/air",
            component: AirApp,
        },
    ],
};
