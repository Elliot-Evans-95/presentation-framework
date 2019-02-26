import {router} from "./router";
import {appShell, pageShell} from "../helpers/globals";

export class Dom {
    public static removeContent(): void {
        while (appShell.firstChild) {
            appShell.removeChild(appShell.firstChild);
        }
    }

    public static addContentToPage(): void {
        pageShell.innerHTML = router.state.current.routeHTML;
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