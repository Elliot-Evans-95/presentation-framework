import {Route} from "../../types/types";
import {Router} from "./router";

export abstract class RouterHelper {
    static retrieveActiveRoute(router: Router): Route {
        return router.state.find((route) => route.isActive);
    }

    static updateHistoryPushState(router: Router): void {
        window.history.pushState(
            null,
            `/${RouterHelper.retrieveActiveRoute(router)}`,
            window.location.origin + `/${RouterHelper.retrieveActiveRoute(router).routeName}`
        );
    }
}
