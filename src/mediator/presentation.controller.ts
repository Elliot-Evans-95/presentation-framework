import {Direction, Route} from "../types/types";
import {router} from "../core/router";
import {Dom} from "../core/dom";

export class PresentationController {

    public static setNewRoute(direction: Direction): Array<Route> {
        const currentRoute = router.getActiveRoute();
        const currentRouteIndex = currentRoute.id - 1;
        const routerStateSnapshot = router.state;

        routerStateSnapshot[currentRouteIndex].isActive = false;

        switch (direction) {
            case Direction.NEXT:
                document.getElementById('progressBar').setAttribute('movement', Direction.NEXT);
                routerStateSnapshot[currentRouteIndex + 1].isActive = true;
                break;
            case Direction.PREVIOUS:
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
        router.state = PresentationController.setNewRoute(direction);
        router.setPushState();
        PresentationController.rebuildDom();
    }

    // should be an observer to detect changes made and fire the event
    public static rebuildDom(): void {
        Dom.removeContent();
        Dom.addContentToPage(router.getActiveRoute());
    }

    public static init(): void {
        const currentRoute = router.getActiveRoute();

        Dom.addContentToPage(currentRoute);
    }
}
