import { Direction } from "../types/types";
import {PresentationController} from "../visitor/presentation.controller";

document.addEventListener("keydown", (event: KeyboardEvent) => {
    switch (event.key) {
        case "ArrowRight":
            PresentationController.goToPage(Direction.NEXT);
            break;
        case "ArrowLeft":
            PresentationController.goToPage(Direction.PREVIOUS);
            break;
    }
});
