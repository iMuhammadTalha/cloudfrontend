/** @format */

import AirDashboardApp from "./AirDashboardApp";
import {authRoles} from "app/auth";

export const AirDashboardAppConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    auth: authRoles.fleet,
    routes: [
        {
            path: "/dashboard",
            component: AirDashboardApp,
        },
    ],
};
