import {messageBus} from "./mediator/message-bus";
import {Direction, Messages} from "../types/types";

export class KeyListener {
    constructor() {
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
    }
}
