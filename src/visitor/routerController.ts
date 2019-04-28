import {ComponentEvents, Direction} from "../types/types";
import {RouterHelper} from "../core/router/router-helper";
import {componentBus} from "../core/mediator/component-bus";
import {Router} from "../core/router/router";

export class RouterController {

    static setNewActiveRoute(router: Router, direction: Direction) {
        const currentRoute = RouterHelper.retrieveActiveRoute(router);
        const currentRouteIndex = currentRoute.id - 1;

        switch (direction) {
            case Direction.NEXT:
                if(!router.state[currentRouteIndex + 1]) return;

                router.state[currentRouteIndex].isActive = false;
                router.state[currentRouteIndex + 1].isActive = true;

                componentBus.publish(ComponentEvents.DIRECTION, Direction.NEXT);

                break;
            case Direction.PREVIOUS:
                if(!router.state[currentRouteIndex - 1]) return;

                router.state[currentRouteIndex].isActive = false;
                router.state[currentRouteIndex - 1].isActive = true;

                componentBus.publish(ComponentEvents.DIRECTION, Direction.PREVIOUS);

                break;
            default:
                router.state[currentRouteIndex].isActive = true;

                break;
        }

    }

}
