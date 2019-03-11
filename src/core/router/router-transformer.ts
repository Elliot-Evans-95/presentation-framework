import {Route} from "../../types/types";
import {Router, router} from "./router";

export abstract class RouterTransformer {
    public static retrieveCurrentRouter(): Array<Route> {
        return router.state;
    }

    public static generateNewRouter(route: Array<Route>) {
        new Router(route);
    }

}
