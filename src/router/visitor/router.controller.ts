import {ComponentEvents, Direction} from "../../shared/types/types";
import {RouterHelper} from "../helpers/router-helper";
import {Router} from "../router";
import {Bus} from "../../messages/bus";

/*
    @ Proxy Design Pattern
 */
export class RouterController {

    static setActiveRoute(router: Router, direction: Direction, messageBus: Bus): Router {
        const currentRouteIndex = RouterHelper.retrieveActiveRoute(router).id - 1;

        switch (direction) {
            case Direction.NEXT:
                if(!router.state[currentRouteIndex + 1]) return;

                router.state[currentRouteIndex].isActive = false;
                router.state[currentRouteIndex + 1].isActive = true;

                messageBus.publish(ComponentEvents.DIRECTION, Direction.NEXT);

                break;
            case Direction.PREVIOUS:
                if(!router.state[currentRouteIndex - 1]) return;

                router.state[currentRouteIndex].isActive = false;
                router.state[currentRouteIndex - 1].isActive = true;

                messageBus.publish(ComponentEvents.DIRECTION, Direction.PREVIOUS);

                break;
            default:
                router.state[currentRouteIndex].isActive = true;

                break;
        }

        return new Router(router.state);
    }

}
