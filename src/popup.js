// ----- USER INPUT

const routes = [
    {
        id: 1,
        routeName: 'pageOne',
        routeHTML: '<h1>HELLO WORLD</h1>',
        routeStyle: '.test123 { background: aqua}',
    },
    {
        id: 2,
        routeName: 'pageTwo',
        routeHTML: '<h1>HELLO WORLD 2</h1>',
        routeStyle: '.test123 { background: aqua}',
        routeNotes: '#Hello World',
    }
];

// ---- PROGRESS BAR

class Timer extends HTMLElement {

    constructor() {
        super();

        this.setAttribute('id', 'timer');

        const shadow = this.attachShadow({mode: 'open'});

        this.button = document.createElement('button');
        this.button.setAttribute('id', 'timerButton');
        this.button.setAttribute('clock', 'stop');
        this.button.addEventListener('click', () => {
            this.toggleButton();
            this.toggleTimer();
        });

        this.timer = document.createElement('h1');
        this.timer.setAttribute('id', 'timerClock');

        const style = document.createElement('style');
        style.textContent =
        `
            :host {
                width: 100vw;
            }
            #progress {
                background: red;
                height: 1rem;
                max-width: 0%;
            }
        `;
        shadow.appendChild(style);
        shadow.appendChild(this.button);
        shadow.appendChild(this.timer);
    }

    toggleButton() {
        if(this.button.getAttribute('clock') === 'stop') {
            this.button.setAttribute('clock', 'start');
        }
        if(this.button.getAttribute('clock') === 'start') {
            this.button.setAttribute('clock', 'stop');
        }
    }

    toggleTimer() {
        if(this.button.getAttribute('clock') === 'stop') {
            this.resetTimer();
        }
        if(this.button.getAttribute('clock') === 'start') {
            this.startTimer();
        }
    }

    resetTimer() {
        this.timer.textContent = '';
    }

    startTimer() {
        this.timer.textContent = 'START';
    }
}

customElements.define('timer', Timer, {extends: 'div'});
const timerElement = document.createElement('div', { is: 'timer'});
appShell.insertAdjacentElement("afterend", timerElement);

