import {Route} from "../../types/types";
import {routes} from "../../user/routes";

export class Router {
    private readonly _routerState: Array<Route>;

    constructor(userRoutes: Array<Route>) {
        this._routerState = userRoutes;
    }

    public get state(): Array<Route> {
        return this._routerState;
    }

}

export const router = new Router(routes);
