import {ComponentEvents, Direction, Route} from "../types/types";
import {RouterHelper} from "../core/router/router-helper";
import {RouterTransformer} from "../core/router/router-transformer";
import {componentBus} from "../core/mediator/component-bus";

export abstract class PresentationController {

    static setNewRoute(direction: Direction): Array<Route> {
        const currentRoute = RouterHelper.retrieveActiveRoute();
        const currentRouteIndex = currentRoute.id - 1;
        const routerStateSnapshot = RouterTransformer.retrieveCurrentRouter();

        switch (direction) {
            case Direction.NEXT:
                if(!routerStateSnapshot[currentRouteIndex + 1]) return;

                componentBus.publish(ComponentEvents.DIRECTION, Direction.NEXT);

                routerStateSnapshot[currentRouteIndex].isActive = false;
                routerStateSnapshot[currentRouteIndex + 1].isActive = true;

                break;
            case Direction.PREVIOUS:
                if(!routerStateSnapshot[currentRouteIndex - 1]) return;

                componentBus.publish(ComponentEvents.DIRECTION, Direction.PREVIOUS);

                routerStateSnapshot[currentRouteIndex].isActive = false;
                routerStateSnapshot[currentRouteIndex - 1].isActive = true;

                break;
            default:
                routerStateSnapshot[currentRouteIndex].isActive = true;

                break;
        }

        return routerStateSnapshot;
    }

}
