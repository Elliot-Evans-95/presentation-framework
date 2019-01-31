const appShell = document.getElementById('app-shell');
let isPageOneRegistered = false;
let isPageTwoRegistered = false;

document.getElementById('page1').addEventListener('click', () => {
    while (appShell.firstChild) {
        appShell.removeChild(appShell.firstChild);
    }

    window.history.pushState(
        {},
        '/page1',
        window.location.origin + '/page1'
    );


    if(!isPageOneRegistered) {
        class PageOne extends HTMLElement {
            constructor() {
                super();

                const shadow = this.attachShadow({mode: 'open'});
                const heading = document.createElement('h1');
                const style = document.createElement('style');

                heading.textContent = "PAGE ONE";
                style.textContent = `
                    :host {
                        background: aqua;
                        animation-duration: .38s;
                        animation-fill-mode: both;
                        animation-name: slideInUp;
                    }
                `;

                shadow.appendChild(heading);
                shadow.appendChild(style);
            }
        }

        customElements.define('page-1', PageOne, {extends: 'main'});
        customElements.whenDefined('page-1').then(() => isPageOneRegistered = true);
    }

    const pageOneElement = document.createElement('main', { is: 'page-1'});
    appShell.appendChild(pageOneElement);
});

document.getElementById('page2').addEventListener('click', () => {
    while (appShell.firstChild) {
        appShell.removeChild(appShell.firstChild);
    }

    window.history.pushState(
        {},
        '/page2',
        window.location.origin + '/page2'
    );

    if(!isPageTwoRegistered) {
        class PageTwo extends HTMLElement {
            constructor() {
                super();

                const shadow = this.attachShadow({mode: 'open'});
                const heading = document.createElement('h1');

                heading.textContent = "PAGE TWO";
                shadow.appendChild(heading);
            }
        }

        customElements.define('page-2', PageTwo, {extends: 'main'});
        customElements.whenDefined('page-2').then(() => isPageTwoRegistered = true);
    }

    const pageTwoElement = document.createElement('main', { is: 'page-2'});
    appShell.appendChild(pageTwoElement);
});
