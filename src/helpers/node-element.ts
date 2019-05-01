// TODO create an element interface
export class NodeElement {
    private readonly nodeElement: HTMLElement;

    constructor(id: string) {
        this.nodeElement = <HTMLElement>document.createElement(id);
    }

    get element(): HTMLElement {
        return this.nodeElement;
    }

    set style(styleSheet: string) {
        if(!styleSheet) return;

        this.nodeElement.textContent = styleSheet;
    }

}
