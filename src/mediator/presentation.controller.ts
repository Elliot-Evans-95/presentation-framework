import {Direction, Route} from "../types/types";
import {router} from "../core/router";
import {dom} from "../core/dom";

export class PresentationController {

    public static setNewRoute(direction: Direction): Array<Route> {
        const currentRoute = router.getActiveRoute();
        const currentRouteIndex = currentRoute.id - 1;
        const routerStateSnapshot = router.state;

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
        router.state = PresentationController.setNewRoute(direction);
        router.setPushState();

        PresentationController.rebuildDom();

        // @todo: this setting seems like a side effect and needs to be changed
        dom.triggerPageTransitionAnimation();
    }

    public static rebuildDom(): void {
        dom.removeContent();
        dom.addContentToPage(router.getActiveRoute());
    }

    public static init(): void {
        const currentRoute = router.getActiveRoute();

        dom.addContentToPage(currentRoute);
    }
}
