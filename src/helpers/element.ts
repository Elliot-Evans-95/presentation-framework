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

    set addClassName(className: string) {
        this.HTMLElement.classList.add(className);
    }

    set removeClassName(className: string) {
        this.HTMLElement.classList.remove(className);
    }

    addEventListener(listener: string): Promise<any> {
        const htmlElement = this.HTMLElement;

        return new Promise(resolve => htmlElement.addEventListener(listener, () => resolve()));
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

export class DocumentWrapper {
    private readonly document: Document;

    constructor(document: Document) {
        this.document = document;
    }

    set title(title: string) {
        this.document.title = title;
    }

}
