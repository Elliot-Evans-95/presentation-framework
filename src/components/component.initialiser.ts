import {dom} from "../core/dom";
import {ProgressBar} from "./progress-bar";

export class ComponentInitialiser {
    private readonly _progressBarElement: HTMLElement;

    constructor() {
        this._progressBarElement = this.createComponent(ProgressBar, 'progress-bar', 'footer');
        this.addComponentToPage(this._progressBarElement, "afterend");
    }

    private createComponent(component: any, elementName: string, htmlElementName: string): HTMLElement {
        customElements.define(elementName, component, {extends: htmlElementName});

        return document.createElement(htmlElementName, { is: elementName });
    }

    private addComponentToPage(component: HTMLElement, position: InsertPosition) {
        dom.addComponentToPage(component, position);
    }
}
