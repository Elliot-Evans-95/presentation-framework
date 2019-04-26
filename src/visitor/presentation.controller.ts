import {ComponentEvents, Direction, Messages, Route} from "../types/types";
import {RouterHelper} from "../core/router/router-helper";
import {RouterTransformer} from "../core/router/router-transformer";
import {componentBus} from "../core/mediator/component-bus";
import {messageBus} from "../core/mediator/message-bus";

export abstract class PresentationController {

    public static setNewRoute(direction: Direction): Array<Route> {
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

    public static goToPage(direction: Direction): void {
        RouterTransformer.generateNewRouter(PresentationController.setNewRoute(direction));
        RouterHelper.updateHistoryPushState();

        PresentationController.rebuildDom();

        messageBus.publish(Messages.PAGE_CHANGED, null);
    }

    public static rebuildDom(): void {
        // dom.removeContent();
        // dom.addContentToPage(RouterHelper.retrieveActiveRoute());
        // new Dom(RouterHelper.retrieveActiveRoute(), this._appShell, this._pageShell, this._styleShell, this._document);
    }

    public static init(): void {
        const currentRoute = RouterHelper.retrieveActiveRoute();
        // dom.addContentToPage(currentRoute);
    }
}
