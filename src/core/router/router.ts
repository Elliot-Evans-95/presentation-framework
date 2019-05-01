import {Route} from "../../types/types";

/*
    @ State Design Pattern
 */
export class Router {
    private readonly _routerState: Array<Route>;

    constructor(userRoutes: Array<Route>) {
        this._routerState = userRoutes;
    }

    get state(): Array<Route> {
        return this._routerState;
    }

}
