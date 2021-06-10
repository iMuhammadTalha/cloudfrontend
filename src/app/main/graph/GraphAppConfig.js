/** @format */

import GraphApp from "./GraphApp";
import {authRoles} from "app/auth";

export const GraphAppConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    auth: authRoles.fleet,
    routes: [
        {
            path: "/graph",
            component: GraphApp,
        },
    ],
};
