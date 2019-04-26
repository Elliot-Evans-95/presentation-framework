import {Direction, Messages} from "../types/types";
import {messageBus} from "./mediator/message-bus";

document.addEventListener("keydown", (event: KeyboardEvent) => {
    switch (event.key) {
        case "ArrowRight":
            messageBus.publish(Messages.SET_PAGE, Direction.NEXT);
            break;
        case "ArrowLeft":
            messageBus.publish(Messages.SET_PAGE, Direction.PREVIOUS);
            break;
    }
});
