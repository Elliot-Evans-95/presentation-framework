export class ShellElement {
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
