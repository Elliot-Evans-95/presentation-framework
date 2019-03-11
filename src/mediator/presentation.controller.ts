import {Direction, Route} from "../types/types";
import {dom} from "../core/dom";
import {RouterHelper} from "../core/router/router-helper";
import {RouterTransformer} from "../core/router/router-transformer";

export abstract class PresentationController {

    public static setNewRoute(direction: Direction): Array<Route> {
        const currentRoute = RouterHelper.retrieveActiveRoute();
        const currentRouteIndex = currentRoute.id - 1;
        const routerStateSnapshot = RouterTransformer.retrieveCurrentRouter();

        routerStateSnapshot[currentRouteIndex].isActive = false;

        switch (direction) {
            case Direction.NEXT:
                if(!routerStateSnapshot[currentRouteIndex + 1]) return;

                // @todo: this setting seems like a side effect and needs to be changed
                document.getElementById('progressBar').setAttribute('movement', Direction.NEXT);

                routerStateSnapshot[currentRouteIndex + 1].isActive = true;
                break;
            case Direction.PREVIOUS:
                if(!routerStateSnapshot[currentRouteIndex - 1]) return;

                // @todo: this setting seems like a side effect and needs to be changed
                document.getElementById('progressBar').setAttribute('movement', Direction.PREVIOUS);

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

        // @todo: this setting seems like a side effect and needs to be changed
        dom.triggerPageTransitionAnimation();
    }

    public static rebuildDom(): void {
        dom.removeContent();
        dom.addContentToPage(RouterHelper.retrieveActiveRoute());
    }

    public static init(): void {
        const currentRoute = RouterHelper.retrieveActiveRoute();

        dom.addContentToPage(currentRoute);
    }
}
