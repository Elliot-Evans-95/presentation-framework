import {Route} from "../types/types";
import {messageBus} from "./message-bus";
import {NodeElement, ShellElement} from "../helpers/element";

export class Dom {

    private _appShell = new ShellElement('app-shell');
    private _pageShell = new ShellElement('main');
    private _styleShell = new NodeElement('style');

    public removeContent(): void {
        while (this._appShell.element.firstChild) {
            this._appShell.element.removeChild(this._appShell.element.firstChild);
        }

        messageBus.publish('[DOM] Removed Content', this._appShell);
    }

    public addContentToPage(route: Route): void {
        document.title = route.routeName;

        this._pageShell.innerHTML = route.routeHTML;
        this._styleShell.style = route.routeStyle;

        this._appShell.element.appendChild(this._pageShell.element);
        this._appShell.element.appendChild(this._styleShell.element);

        messageBus.publish('[DOM] Added Content', this._appShell);
    };

    public addComponentToPage(component: HTMLElement, insertPosition?: InsertPosition) {
        this._appShell.element.insertAdjacentElement(insertPosition, component);
    }

}

export const dom = new Dom();
