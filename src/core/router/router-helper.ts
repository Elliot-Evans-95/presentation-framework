import {Route} from "../../types/types";
import {RouterTransformer} from "./router-transformer";

export abstract class RouterHelper {
    public static retrieveActiveRoute(): Route {
        console.log(RouterTransformer.retrieveCurrentRouter());
        return RouterTransformer.retrieveCurrentRouter().find((route) => route.isActive);
    }

    public static updateHistoryPushState(): void {
        console.log('updateHistoryPushState');
        window.history.pushState(
            null,
            `/${RouterHelper.retrieveActiveRoute()}`,
            window.location.origin + `/${RouterHelper.retrieveActiveRoute().routeName}`
        );
    }
}
