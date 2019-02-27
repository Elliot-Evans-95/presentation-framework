import {appShell, pageShell} from "../helpers/globals";
import {Route} from "../types/types";

export class Dom {
    public static removeContent(): void {
        while (appShell.firstChild) {
            appShell.removeChild(appShell.firstChild);
        }
    }

    public static addContentToPage(route: Route): void {
        pageShell.innerHTML = route.routeHTML;
        appShell.appendChild(pageShell);
    };

    public static addComponentToPage(component: HTMLElement, insertPosition?: InsertPosition) {
        appShell.insertAdjacentElement(insertPosition, component);
    }

    static constructPage(routeHTML: string) {
        pageShell.innerHTML = routeHTML;
        appShell.appendChild(pageShell);
    }
}