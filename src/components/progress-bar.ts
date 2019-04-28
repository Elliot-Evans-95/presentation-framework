import {routes} from "../user/routes";
import {Direction} from "../types/types";

export class ProgressBar extends HTMLElement {
    progress: HTMLDivElement;

    private readonly _progressBarMaxPercentage: number;
    private readonly _percentagePerStep: number;

    private _currentPercentage: number;

    constructor() {
        super();

        this._progressBarMaxPercentage = 100;
        this._percentagePerStep = 100 / (routes.length - 1);
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
                background-color: var(--text-heading-color) !important;
                height: 18px;
            }
            #progress {
                height: 18px;
                position: relative;
                overflow: hidden;
                max-width: 0;
                background-color: var(--primary-color);
                transition: max-width var(--default-transition-speed) var(--default-transition-style);
                box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.25);
            }
        `;
        shadow.appendChild(style);
        shadow.appendChild(this.progress);
    }

    static get observedAttributes(): Array<string> {
        return ['movement'];
    }

    connectedCallback(): void {
        // this._messageEvents.subscribe(ComponentEvents.DIRECTION, event => this.retrieveDirection(event));
    }

    retrieveDirection(event: Direction): void {
        this.setPercentage(event)
    }

    setProgress(width): void {
        this.progress.setAttribute('style', `max-width: ${width}%`);
    }

    setPercentage(direction: Direction): void {
        if(direction === Direction.PREVIOUS) {
            if(this._currentPercentage <= 0) return;

            this._currentPercentage = this._currentPercentage - this._percentagePerStep;
            this.setProgress(this._currentPercentage);
        }
        if(direction === Direction.NEXT) {
            if(this._currentPercentage >= this._progressBarMaxPercentage) return;

            this._currentPercentage = this._currentPercentage + this._percentagePerStep;
            this.setProgress(this._currentPercentage);
        }
    }

}
