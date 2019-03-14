import {routes} from "../user/routes";
import {dom} from "../core/dom";

export class ProgressBar extends HTMLElement {
    public progress: HTMLDivElement;

    private readonly _progressBarMaxPercentage: number;
    private readonly _percentagePerStep: number;
    private _currentPercentage: number;

    constructor() {
        super();

        this._progressBarMaxPercentage = 100;
        this._percentagePerStep = (100 / routes.length) || 0;
        this._currentPercentage = 0;

        this.setAttribute('id', 'progressBar');
        this.setAttribute('class', 'footer');

        const shadow = this.attachShadow({mode: 'open'});

        this.progress = document.createElement('div');
        this.progress.setAttribute('id', 'progress');

        const style = document.createElement('style');
        style.textContent =
        `
            :host {
                width: 100vw;
            }
            #progress {
                background: red;
                height: 18px;
                max-width: 0%;
            }
        `;
        shadow.appendChild(style);
        shadow.appendChild(this.progress);
    }

    static get observedAttributes() {
        return ['movement'];
    }

    setProgress(width) {
        this.progress.setAttribute('style', `max-width: ${width}%`);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(newValue === 'prev') {
            if(this._currentPercentage <= 0) return;

            this._currentPercentage = this._currentPercentage - this._percentagePerStep;
            this.setProgress(this._currentPercentage);
        }
        if(newValue === 'next') {
            if(this._currentPercentage >= this._progressBarMaxPercentage) return;

            this._currentPercentage = this._currentPercentage + this._percentagePerStep;
            this.setProgress(this._currentPercentage);
        }
    }

}

customElements.define('progress-bar', ProgressBar, {extends: 'footer'});
const progressBarElement = document.createElement('footer', { is: 'progress-bar'});

dom.addComponentToPage(progressBarElement, "afterend");
