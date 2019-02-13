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

//----- HELPERS

const appShell = document.getElementById('app-shell');
const urls = {
    prev: null,
    current: null
};
const firstPage = routes.length >= 0 ? routes[0].routeName : null;
const getNextPage = (currentRoute) => {
    const route = routes.find( (route) => route.routeName === currentRoute);
    const currentIndex = route.id - 1;

    return routes[currentIndex + 1] ? routes[currentIndex + 1].routeName : routes[currentIndex].routeName;
};
const getPrevPage = (currentRoute) => {
    const route = routes.find( (route) => route.routeName === currentRoute);
    const currentIndex = route.id - 1;

    return routes[currentIndex - 1] ? routes[currentIndex - 1].routeName : routes[currentIndex].routeName;
};
const setActivePage = (newUrl) => {
    if(urls.current) {
        urls.prev = urls.current;
    }
    urls.current = newUrl;
};
const isIndexRoute = () => location.pathname === '/' || location.pathname === null;
const getCurrentPage = () => location.pathname.replace('/', '');
const setPageState = (page) => {
    console.log(page);

    window.history.pushState(
        setActivePage(page),
        `/${page}`,
        window.location.origin + `/${page}`
    );
};
const addContentToPage = (page) => {
    const pageRoute = routes.find( (route) => route.routeName === page);
    const pageHTML = document.createElement('main');
    pageHTML.innerHTML = pageRoute.routeHTML;
    appShell.appendChild(pageHTML);
};
const removeContent = () => {
    while (appShell.firstChild) {
        appShell.removeChild(appShell.firstChild);
    }
};

// ---- PROGRESS BAR

class ProgressBar extends HTMLElement {

    constructor() {
        super();

        this._progressBarMaxPercentage = 100;
        this._percentagePerStep = 100 / routes.length;
        this._currentPercentage = 0;

        this.setAttribute('id', 'progressBar');

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
                height: 1rem;
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
appShell.insertAdjacentElement("afterend", progressBarElement);

// ------- DOM

if(isIndexRoute()) {
    removeContent();
    setPageState(firstPage);
    addContentToPage(firstPage);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "n") {
        window.open('/popup.html', '', 'width=350, height=250, scrollbars=yes, resizable=yes');
    }

    if (event.key === "ArrowRight") {
        const currentPage = getCurrentPage();
        const nextPage = getNextPage(currentPage);

        removeContent();
        setPageState(nextPage);
        document.getElementById('progressBar').setAttribute('movement', 'next');
        addContentToPage(nextPage);
    }
    if (event.key === "ArrowLeft") {
        const currentPage = getCurrentPage();
        const prevPage = getPrevPage(currentPage);

        removeContent();
        setPageState(prevPage);
        document.getElementById('progressBar').setAttribute('movement', 'prev');
        addContentToPage(prevPage);
    }
});
