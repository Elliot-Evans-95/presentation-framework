import {IRouterState, Route} from "../types/types";
import {routes} from "../user/routes";

export class Router {
    public routerState: IRouterState;

    constructor(userRoutes: Array<Route>) {
        this.routerState = {
            prev: null,
            current: userRoutes.length > 0 ? userRoutes[0] : null
        };

        this.setPushState();
    }

    public get state(): IRouterState {
        return this.routerState;
    }

    public setPushState(): void {
        window.history.pushState(
            null,
            `/${this.routerState.current}`,
            window.location.origin + `/${this.routerState.current.routeName}`
        );
    }

    public createNewState(newRoute: IRouterState): void {
        this.routerState = {...newRoute};
        this.setPushState()
    }

    // private getActiveRoute(userRoutes: Array<Route>): Route {
    //     if(userRoutes.length <= 0) return null;
    //
    //     const activeRoutes = userRoutes.find((route) => route.isActive);
    //
    //     return activeRoutes[0];
    // }
}

export const router = new Router(routes);
