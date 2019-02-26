import {appShell} from "../main";
import {router} from "./router";

export class Dom {
    public static removeContent(): void {
        while (appShell.firstChild) {
            appShell.removeChild(appShell.firstChild);
        }
    }

    public static addContentToPage(): void {
        const pageHTML = document.createElement('main');

        pageHTML.innerHTML = router.state.current.routeHTML;
        appShell.appendChild(pageHTML);
    };

    public static addComponentToPage(component: HTMLElement, insertPosition?: InsertPosition) {
        appShell.insertAdjacentElement(insertPosition, component);
    }

}