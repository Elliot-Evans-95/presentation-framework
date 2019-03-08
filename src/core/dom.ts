import {appShell, pageShell} from "../helpers/globals";
import {Route} from "../types/types";
import {messageBus} from "./message-bus";


class ShellElement extends HTMLElement {
    public name: string;

    constructor(name: string) {
        super();

        this.name = name;
    }

    get element(): HTMLElement {
        return document.getElementById(this.name);
    }

}

export class Dom {

    private _appShell: HTMLElement = new ShellElement('app-shell');
    private _pageShell: HTMLElement = new ShellElement('main');

    public static removeContent(): void {
        while (appShell.firstChild) {
            appShell.removeChild(appShell.firstChild);
        }

        messageBus.publish('[DOM] Removed Content', appShell);
    }

    public static addContentToPage(route: Route): void {
        pageShell.innerHTML = route.routeHTML;
        document.title = route.routeName;
        appShell.appendChild(pageShell);

        messageBus.publish('[DOM] Added Content', appShell);
    };

    public static addComponentToPage(component: HTMLElement, insertPosition?: InsertPosition) {
        appShell.insertAdjacentElement(insertPosition, component);
    }

}
