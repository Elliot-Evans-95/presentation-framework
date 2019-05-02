export class DocumentWrapper {
    private readonly document: Document;

    constructor(document: Document) {
        this.document = document;
    }

    set title(title: string) {
        this.document.title = title;
    }

    querySelectorAll(className: string): NodeListOf<any> {
        return this.document.querySelectorAll(className);
    }

    createElement(htmlElementName: string, options?: { is: string }): HTMLElement {
        return this.document.createElement(htmlElementName, options);
    }
}
