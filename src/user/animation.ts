import {messageBus} from "../core/bus/message-bus";
import {dom} from "../core/dom";
import {Messages} from "../types/types";

messageBus.subscribe(Messages.PAGE_CHANGED, () => triggerAnimation());

function triggerAnimation() {
    dom.triggerPageTransitionAnimation();
}
