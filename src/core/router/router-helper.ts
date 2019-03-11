import {Route} from "../../types/types";
import {RouterTransformer} from "./router-transformer";

export abstract class RouterHelper {
    public static retrieveActiveRoute(): Route {
        // @todo: Find a way of retaining the current router state before it is changed so that the app does not break
        if(!RouterTransformer.retrieveCurrentRouter() || RouterTransformer.retrieveCurrentRouter().length <= 0) return null;

        return RouterTransformer.retrieveCurrentRouter().find((route) => route.isActive);
    }

    public static updateHistoryPushState(): void {
        window.history.pushState(
            null,
            `/${RouterHelper.retrieveActiveRoute()}`,
            window.location.origin + `/${RouterHelper.retrieveActiveRoute().routeName}`
        );
    }
}
