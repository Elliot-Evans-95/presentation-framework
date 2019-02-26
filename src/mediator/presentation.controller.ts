import {Direction, IRouterState} from "../types/types";
import {router} from "../core/router";
import {Dom} from "../core/dom";
import {routes} from "../user/routes";

export class PresentationController {

    public static getNewRoute(direction: Direction): IRouterState {
        const currentIndex = router.state.current.id - 1;

        function getCurrentRoute() {
            switch (direction) {
                case Direction.NEXT:
                    document.getElementById('progressBar').setAttribute('movement', Direction.NEXT);

                    return routes[currentIndex + 1];
                case Direction.PREVIOUS:
                    document.getElementById('progressBar').setAttribute('movement', Direction.PREVIOUS);

                    return routes[currentIndex - 1];
                default:
                    return router.state.current;
            }
        }

        return {
            prev: router.state.current || null,
            current: getCurrentRoute()
        };
    }

    public static goToPage(direction: Direction): void {
        const newRoute = PresentationController.getNewRoute(direction);

        router.createNewState(newRoute);
    }

    public static rebuildDom(): void {
        Dom.removeContent();
        Dom.addContentToPage();
    }
}
