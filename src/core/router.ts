import {Route} from "../types/types";
import {routes} from "../user/routes";

export class Router {
    public routerState: Array<Route>;

    constructor(userRoutes: Array<Route>) {
        this.routerState = userRoutes;
        this.setPushState();
    }

    public get state(): Array<Route> {
        return this.routerState;
    }

    public set state(newRoutes: Array<Route>) {
        this.routerState = newRoutes;
    }

    public setPushState(): void {
        window.history.pushState(
            null,
            `/${this.getActiveRoute()}`,
            window.location.origin + `/${this.getActiveRoute().routeName}`
        );
    }

    public getActiveRoute(): Route {
        // @todo: Find a way of retaining the current router state before it is changed so that the app does not break
        if(!this.routerState || this.routerState.length <= 0) return null;

        return this.routerState.find((route) => route.isActive);
    }
}

export const router = new Router(routes);
