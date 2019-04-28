import {ProgressBar} from "./progress-bar";
import {ShellElement} from "../helpers/shell-element";
import {DocumentWrapper} from "../helpers/document-wrapper";

export class ComponentInitialiser {
    private readonly _progressBarElement: HTMLElement;
    private readonly _appShell: ShellElement;
    private readonly _document: DocumentWrapper;

    constructor(appShell: ShellElement, document: DocumentWrapper) {
        this._appShell = appShell;
        this._document = document;
        this._progressBarElement = this.createComponent(ProgressBar, 'progress-bar', 'footer');
        this.addComponentToPage(this._progressBarElement, "afterend");
    }

    private createComponent(component: any, elementName: string, htmlElementName: string): HTMLElement {
        customElements.define(elementName, component, {extends: htmlElementName});
        return this._document.createElement(htmlElementName, { is: elementName });
    }

    private addComponentToPage(component: HTMLElement, position: InsertPosition) {
        this._appShell.addComponent(component, position);
    }
}
