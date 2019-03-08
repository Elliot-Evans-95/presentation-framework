import {Messages, Names, Route} from "../types/types";
import {messageBus} from "./message-bus";
import {NodeElement, ShellElement} from "../helpers/element";

export class Dom {

    private _appShell = new ShellElement(Names.SHELL);
    private _pageShell = new ShellElement(Names.PAGE);
    private _styleShell = new NodeElement(Names.STYLES);

    public removeContent(): void {
        while (this._appShell.element.firstChild) {
            this._appShell.element.removeChild(this._appShell.element.firstChild);
        }

        messageBus.publish(Messages.CONTENT_REMOVED, this._appShell);
    }

    public addContentToPage(route: Route): void {
        document.title = route.routeName;

        this._pageShell.innerHTML = route.routeHTML;
        this._styleShell.style = route.routeStyle;

        this._appShell.element.appendChild(this._pageShell.element);
        this._appShell.element.appendChild(this._styleShell.element);

        messageBus.publish(Messages.CONTENT_ADDED, this._appShell);
    };

    public addComponentToPage(component: HTMLElement, insertPosition?: InsertPosition) {
        this._appShell.element.insertAdjacentElement(insertPosition, component);
    }

    public triggerPageTransitionAnimation(): void {
        this._pageShell.addClassName = 'animationTest';

        this._pageShell
            .addEventListener( 'animationend')
            .then(() => this._pageShell.removeClassName = 'animationTest');
    }

}

export const dom = new Dom();
