import {Direction, Messages} from "../shared/types/types";
import {Bus} from "../messages/bus";

export class KeyListener {
    private readonly _messageEvents: Bus;

    constructor(messageEvents: Bus) {
        this._messageEvents = messageEvents;

        document.addEventListener("keydown", (event: KeyboardEvent) => {
            switch (event.key) {
                case "ArrowRight":
                    this._messageEvents.publish(Messages.SET_PAGE, Direction.NEXT);
                    break;
                case "ArrowLeft":
                    this._messageEvents.publish(Messages.SET_PAGE, Direction.PREVIOUS);
                    break;
            }
        });
    }
}
