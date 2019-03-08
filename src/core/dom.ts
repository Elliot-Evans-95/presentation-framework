import {Route} from "../types/types";
import {messageBus} from "./message-bus";

class ShellElement {
    private readonly HTMLElement: HTMLElement;

    constructor(id: string) {
        this.HTMLElement = <HTMLElement>document.getElementById(id) || <HTMLElement>document.createElement(id);
    }

    get element(): HTMLElement {
        return this.HTMLElement;
    }

    set innerHTML(content: string) {
        if(!content) return;

        this.HTMLElement.innerHTML = content;
    }
}

export class Dom {

    private _appShell = new ShellElement('app-shell');
    private _pageShell = new ShellElement('main');

    public removeContent(): void {
        while (this._appShell.element.firstChild) {
            this._appShell.element.removeChild(this._appShell.element.firstChild);
        }

        messageBus.publish('[DOM] Removed Content', this._appShell);
    }

    public addContentToPage(route: Route): void {
        this._pageShell.innerHTML = route.routeHTML;
        document.title = route.routeName;
        this._appShell.element.appendChild(this._pageShell.element);

        messageBus.publish('[DOM] Added Content', this._appShell);
    };

    public addComponentToPage(component: HTMLElement, insertPosition?: InsertPosition) {
        this._appShell.element.insertAdjacentElement(insertPosition, component);
    }

}

export const dom = new Dom();
