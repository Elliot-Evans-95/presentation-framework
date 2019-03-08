import {Direction, Names} from "../types/types";
import {PresentationController} from "../mediator/presentation.controller";

document.addEventListener("keydown", (event: KeyboardEvent) => {
    switch (event.key) {
        case "n":
            window.open(Names.POPUP, '', 'width=350, height=250, scrollbars=yes, resizable=yes');

            break;
        case "ArrowRight":
            PresentationController.goToPage(Direction.NEXT);
            break;
        case "ArrowLeft":
            PresentationController.goToPage(Direction.PREVIOUS);
            break;
    }
});
