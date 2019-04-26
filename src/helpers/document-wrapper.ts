export class DocumentWrapper {
    private readonly document: Document;

    constructor(document: Document) {
        this.document = document;
    }

    set title(title: string) {
        this.document.title = title;
    }

}
