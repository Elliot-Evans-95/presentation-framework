import {Direction} from "../types/types";
import {PresentationController} from "../mediator/presentation.controller";

document.addEventListener("keydown", (event: KeyboardEvent) => {
    switch (event.key) {
        case "n":
            window.open('/popup.html', '', 'width=350, height=250, scrollbars=yes, resizable=yes');

            break;
        case "ArrowRight":
            PresentationController.goToPage(Direction.NEXT);
            PresentationController.rebuildDom();
            break;
        case "ArrowLeft":
            PresentationController.goToPage(Direction.PREVIOUS);
            PresentationController.rebuildDom();
            break;
    }
});
