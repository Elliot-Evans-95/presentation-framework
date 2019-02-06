const appShell = document.getElementById('app-shell');
let isPageOneRegistered = false;
let isPageTwoRegistered = false;
const urls = {
    prev: null,
    current: null
};
const routeList = [
    'pageOne',
    'pageTwo'
];
const firstPage = routeList[0];
const getNextPage = (currentRoute) => routeList[routeList.indexOf(currentRoute) + 1];
const getPrevPage = (currentRoute) => routeList[routeList.indexOf(currentRoute) - 1];
const setActivePage = (newUrl) => {
    if(urls.current) {
        urls.prev = urls.current;
    }
    urls.current = newUrl;
};
const toPascalCase = (word) => word.replace(/\w+/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase());
const delimiterSeparateWord = (word) => word.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
const isIndexRoute = () => location.pathname === '/' || location.pathname === null;

const routes = [
    {
        id: 1,
        routeName: '',
        routeClass: new class test {

        },
        isRegistered: false
    }
];

if(isIndexRoute()) {
    while (appShell.firstChild) {
        appShell.removeChild(appShell.firstChild);
    }

    window.history.pushState(
        setActivePage(firstPage),
        `/${firstPage}`,
        window.location.origin + `/${firstPage}`
    );
}

// go to next
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        const currentPage = location.pathname.replace('/', '');
        const nextPage = getNextPage(currentPage);

        while (appShell.firstChild) {
            appShell.removeChild(appShell.firstChild);
        }

        window.history.pushState(
            setActivePage(nextPage),
            `/${nextPage}`,
            window.location.origin + `/${nextPage}`
        );

        createPageComponent(nextPage);
    }
    if (event.key === "ArrowLeft") {
        const currentPage = location.pathname.replace('/', '');
        const prevPage = getPrevPage(currentPage);

        while (appShell.firstChild) {
            appShell.removeChild(appShell.firstChild);
        }

        window.history.pushState(
            setActivePage(prevPage),
            `/${prevPage}`,
            window.location.origin + `/${prevPage}`
        );

        createPageComponent(prevPage);
    }
});

const createPageComponent = (page) => {
    console.log('CREATE COMPONENT');

    const className = toPascalCase(page);
    const elementName = delimiterSeparateWord(page);

    console.log(className);
    console.log(elementName);

    const nameIt = (name, cls) => (
        {
            [name] : class extends cls {}
        }
    )[name];

    const test123 = nameIt(className);
    const t = new test123;

    console.log(t);

    // class className extends HTMLElement {
    //     constructor() {
    //         super();
    //
    //         this.setAttribute('id', 'page-1');
    //
    //         const shadow = this.attachShadow({mode: 'open'});
    //         const heading = document.createElement('h1');
    //         const style = document.createElement('style');
    //
    //         heading.textContent = "TEST PAGE";
    //         style.textContent = `
    //                 :host {
    //                     background: red;
    //                     animation-duration: .38s;
    //                     animation-fill-mode: both;
    //                     animation-name: slideInUp;
    //                 }
    //             `;
    //
    //         shadow.appendChild(heading);
    //         shadow.appendChild(style);
    //     }
    // }

    // customElements.define('page-1', className, {extends: 'main'});
    // customElements.whenDefined('page-1').then(() => isPageOneRegistered = true);

};

// document.getElementById('page1').addEventListener('click', () => {
    // while (appShell.firstChild) {
    //     appShell.removeChild(appShell.firstChild);
    // }

    // window.history.pushState(
    //     setActivePage('/page1'),
    //     '/page1',
    //     window.location.origin + '/page1'
    // );

//     if(!isPageOneRegistered) {
//         class PageOne extends HTMLElement {
//             constructor() {
//                 super();
//
//                 this.setAttribute('id', 'page-1');
//
//                 const shadow = this.attachShadow({mode: 'open'});
//                 const heading = document.createElement('h1');
//                 const style = document.createElement('style');
//
//                 heading.textContent = "PAGE ONE";
//                 style.textContent = `
//                     :host {
//                         background: aqua;
//                         animation-duration: .38s;
//                         animation-fill-mode: both;
//                         animation-name: slideInUp;
//                     }
//                 `;
//
//                 shadow.appendChild(heading);
//                 shadow.appendChild(style);
//             }
//         }
//
//         customElements.define('page-1', PageOne, {extends: 'main'});
//         customElements.whenDefined('page-1').then(() => isPageOneRegistered = true);
//     }
//
//     const pageOneElement = document.createElement('main', { is: 'page-1'});
//     appShell.appendChild(pageOneElement);
// });

// document.getElementById('page2').addEventListener('click', () => {
    // while (appShell.firstChild) {
    //     appShell.removeChild(appShell.firstChild);
    // }

    // window.history.pushState(
    //     setActivePage('/page2'),
    //     '/page2',
    //     window.location.origin + '/page2'
    // );

//     if(!isPageTwoRegistered) {
//         class PageTwo extends HTMLElement {
//             constructor() {
//                 super();
//
//                 this.setAttribute('id', 'page-2');
//
//                 const shadow = this.attachShadow({mode: 'open'});
//                 const heading = document.createElement('h1');
//                 const style = document.createElement('style');
//
//                 heading.textContent = "PAGE TWO";
//                 style.textContent = `
//                     :host {
//                         background: fuchsia;
//                         animation-duration: .38s;
//                         animation-fill-mode: both;
//                         animation-name: slideInUp;
//                     }
//                 `;
//                 shadow.appendChild(heading);
//                 shadow.appendChild(style);
//             }
//         }
//
//         customElements.define('page-2', PageTwo, {extends: 'main'});
//         customElements.whenDefined('page-2').then(() => isPageTwoRegistered = true);
//     }
//
//     const pageTwoElement = document.createElement('main', { is: 'page-2'});
//     appShell.appendChild(pageTwoElement);
// });
