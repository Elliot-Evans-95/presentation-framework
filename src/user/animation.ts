import { ShellElement } from "../helpers/shell-element";

export class Animation {
    private readonly _pageShell: ShellElement;

    constructor(pageShell: ShellElement) {
        this._pageShell = pageShell;
    }

    pageAnimation() {
        this._pageShell.addClassName = 'defaultPageTransition';

        this._pageShell
            .addEventListener('animationend')
            .then(() => this._pageShell.removeClassName = 'defaultPageTransition');
    }
}
