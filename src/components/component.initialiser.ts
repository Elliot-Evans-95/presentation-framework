import {ProgressBar} from "./progress-bar";
import {ShellElement} from "../helpers/shell-element";
import {DocumentWrapper} from "../helpers/document-wrapper";
import {ComponentEvents, Direction} from "../types/types";
import {Bus} from "../core/mediator/bus";

export class ComponentInitialiser {
    private readonly _progressBarElement: HTMLElement;
    private readonly _appShell: ShellElement;
    private readonly _document: DocumentWrapper;
    private readonly _messageEvents: Bus;

    constructor(appShell: ShellElement, document: DocumentWrapper, messageEvents: Bus) {
        this._appShell = appShell;
        this._document = document;
        this._messageEvents = messageEvents;
        this._progressBarElement = this.createComponent(ProgressBar, 'progress-bar', 'footer');
        this.addComponentToPage(this._progressBarElement, "afterend");
        this._messageEvents.subscribe(ComponentEvents.DIRECTION, direction => this.setComponentDirection(direction));
    }

    private createComponent(component: any, elementName: string, htmlElementName: string): HTMLElement {
        customElements.define(elementName, component, {extends: htmlElementName});
        return this._document.createElement(htmlElementName, { is: elementName });
    }

    private addComponentToPage(component: HTMLElement, position: InsertPosition) {
        this._appShell.addComponent(component, position);
    }

    private setComponentDirection(direction: Direction) {
        this._progressBarElement.setAttribute('movement', direction);
    }

}
