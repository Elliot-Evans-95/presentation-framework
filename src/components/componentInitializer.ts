import { ProgressBar } from './progress-bar'
import { ShellElement } from '../shellElement/shell-element'
import { DocumentWrapper } from '../documentWrapper/document-wrapper'
import { ComponentEvents, Direction } from '../shared/types/types'
import { Bus } from '../messages/bus'

export class ComponentInitializer {
    private readonly _progressBarElement: HTMLElement
    private readonly _appShell: ShellElement
    private readonly _document: DocumentWrapper
    private readonly _messageEvents: Bus

    constructor(
        appShell: ShellElement,
        document: DocumentWrapper,
        messageEvents: Bus
    ) {
        this._appShell = appShell
        this._document = document
        this._messageEvents = messageEvents
        this._progressBarElement = this.createComponent(
            ProgressBar,
            'progress-bar',
            'footer'
        )
        this.addComponentToPage(this._progressBarElement, 'afterend')
        this._messageEvents.subscribe(
            ComponentEvents.DIRECTION,
            (direction: Direction) => this.setComponentDirection(direction)
        )
    }

    private createComponent(
        component: any,
        elementName: string,
        htmlElementName: string
    ): HTMLElement {
        customElements.define(elementName, component, {
            extends: htmlElementName,
        })
        return this._document.createElement(htmlElementName, {
            is: elementName,
        })
    }

    private addComponentToPage(
        component: HTMLElement,
        position: InsertPosition
    ) {
        this._appShell.addComponent(component, position)
    }

    private setComponentDirection(direction: Direction) {
        this._progressBarElement.setAttribute('movement', direction)
    }
}
