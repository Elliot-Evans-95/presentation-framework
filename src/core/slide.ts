import {Messages, Route} from "../types/types";
import {messageBus} from "./mediator/message-bus";
import {ShellElement} from "../helpers/shell-element";
import {NodeElement} from "../helpers/node-element";
import {DocumentWrapper} from "../helpers/document-wrapper";
import {Bus} from "./mediator/bus";

export interface Dom {
    add: (content: any) => void;
    remove: () => void;
}

export class Slide implements Dom {
    private readonly _appShell;
    private readonly _pageShell;
    private readonly _styleShell;
    private readonly _document;
    private readonly _messageEvents: Bus;

    constructor(route: Route,
                appShell: ShellElement,
                pageShell: ShellElement,
                styleShell: NodeElement,
                document: DocumentWrapper,
                messageEvents: Bus) {
        this._appShell = appShell;
        this._pageShell = pageShell;
        this._styleShell = styleShell;
        this._document = document;
        this._messageEvents = messageEvents;

        this.remove();
        this.add(route);
    }

    remove(): void {
        while (this._appShell.element.firstChild) {
            this._appShell.element.removeChild(this._appShell.element.firstChild);
        }

        this._messageEvents.publish(Messages.CONTENT_REMOVED, this._appShell);
    }

    add(route: Route): void {
        this._document.title = route.routeName;
        this._pageShell.innerHTML = route.routeHTML;
        this._styleShell.style = route.routeStyle;

        this._appShell.element.appendChild(this._pageShell.element);
        this._appShell.element.appendChild(this._styleShell.element);

        this._messageEvents.publish(Messages.CONTENT_ADDED, this._appShell);
    };

}
