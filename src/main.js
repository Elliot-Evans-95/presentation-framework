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

    return routes[currentIndex + 1] ? routes[currentIndex + 1].routeName : null;
};
const getPrevPage = (currentRoute) => {
    const route = routes.find( (route) => route.routeName === currentRoute);
    const currentIndex = route.id - 1;

    return routes[currentIndex - 1] ? routes[currentIndex - 1].routeName : null;
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

// ------- DOM

if(isIndexRoute()) {
    removeContent();
    setPageState(firstPage);
    addContentToPage(firstPage);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "n") {
        window.open(location.href, '', 'width=350, height=250, scrollbars=yes, resizable=yes');
    }

    if (event.key === "ArrowRight") {
        const currentPage = getCurrentPage();
        const nextPage = getNextPage(currentPage);

        removeContent();
        setPageState(nextPage);
        addContentToPage(nextPage);
    }
    if (event.key === "ArrowLeft") {
        const currentPage = getCurrentPage();
        const prevPage = getPrevPage(currentPage);

        removeContent();
        setPageState(prevPage);
        addContentToPage(prevPage);
    }
});
