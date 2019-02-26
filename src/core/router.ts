import {Direction, IRouterState, Route} from "../types/types";
import {routes} from "../user/routes";
import {appShell} from "../main";
import {Dom} from "./dom";

export class Router {
    public routerState: IRouterState;

    constructor() {
        this.routerState = {
            prev: null,
            current: Router.getFirstPage()
        };

        Router.setPushState(this.routerState.current);
        Dom.removeContent();

        // TEMP //
        const pageHTML = document.createElement('main');

        pageHTML.innerHTML = this.routerState.current.routeHTML;
        appShell.appendChild(pageHTML);
        //
    }

    public static getFirstPage(): Route {
        return routes.length >= 0 ? routes[0] : null
    }

    public getNextPage() {
        const currentIndex = this.routerState.current.id - 1;

        return routes[currentIndex + 1] ? routes[currentIndex + 1].routeName : routes[currentIndex].routeName;
    }

    public getPrevPage() {
        const currentIndex = this.routerState.current.id - 1;

        return routes[currentIndex - 1] ? routes[currentIndex - 1].routeName : routes[currentIndex].routeName;
    }

    public get state(): IRouterState {
        return this.routerState;
    }

    public setState(newRoute: Route) {
        if(this.routerState.current) {
            this.routerState.prev = this.routerState.current;
        }
        this.routerState.current = newRoute;

        Router.setPushState(newRoute);
    }

    public static isIndexRoute(): boolean {
        return location.pathname === '/' || location.pathname === null
    }

    public goToPage(direction: Direction) {
        const newRoute = this.getNewRoute(direction);

        this.setState(newRoute);
    }

    public static setPushState(newRoute: Route): void {
        window.history.pushState(
            null,
            `/${newRoute}`,
            window.location.origin + `/${newRoute.routeName}`
        );
    }

    public getNewRoute(direction: Direction) {
        const currentIndex = this.routerState.current.id - 1;

        switch (direction) {
            case Direction.NEXT:
                return routes[currentIndex + 1];
            case Direction.PREVIOUS:
                return routes[currentIndex - 1];
            default:
                return this.routerState.current;
        }
    }

    public createNewState(newRoute: IRouterState): void {
        this.routerState = {...newRoute};
    }
}

export const router = new Router();
