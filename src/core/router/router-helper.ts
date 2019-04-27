import {Route} from "../../types/types";
import {RouterTransformer} from "./router-transformer";

export abstract class RouterHelper {
    static retrieveActiveRoute(): Route {
        return RouterTransformer.retrieveCurrentRouter().find((route) => route.isActive);
    }

    static updateHistoryPushState(): void {
        window.history.pushState(
            null,
            `/${RouterHelper.retrieveActiveRoute()}`,
            window.location.origin + `/${RouterHelper.retrieveActiveRoute().routeName}`
        );
    }
}
