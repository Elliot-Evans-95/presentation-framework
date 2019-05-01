
// TODO create an element interface
export class ShellElement {
    private readonly _HTMLElement: HTMLElement;

    constructor(id: string) {
        this._HTMLElement = <HTMLElement>document.getElementById(id) || <HTMLElement>document.createElement(id);
    }

    get element(): HTMLElement {
        return this._HTMLElement;
    }

    set innerHTML(content: string) {
        if(!content) return;

        this._HTMLElement.innerHTML = content;
    }

    set addClassName(className: string) {
        this._HTMLElement.classList.add(className);
    }

    set removeClassName(className: string) {
        this._HTMLElement.classList.remove(className);
    }

    addEventListener(listener: string): Promise<any> {
        return new Promise(resolve => this._HTMLElement.addEventListener(listener, () => resolve()));
    }

    addComponent(component: HTMLElement, insertPosition?: InsertPosition) {
        if(!this._HTMLElement.insertAdjacentElement) return;

        this._HTMLElement.insertAdjacentElement(insertPosition, component);
    }

}
