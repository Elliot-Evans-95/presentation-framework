import {RouterHelper} from "./router-helper";
import {Router} from "../router";
import {Route} from "../router.type";

const fakeActiveRoute: Route = {
    id: 1,
    routeName: 'pageOne',
    routeHTML: '<h1>Page one of presentation</h1>',
    routeStyle: `
            #app-shell { 
                background: aqua;
            }
        `,
    isActive: true
};
const fakeRoutes: Readonly<Array<Route>> = [
    {
        id: 1,
        routeName: 'pageOne',
        routeHTML: '<h1>Page one of presentation</h1>',
        routeStyle: `
            #app-shell { 
                background: aqua;
            }
        `,
        isActive: true
    },
    {
        id: 2,
        routeName: 'pageTwo',
        routeHTML: '<h1>Page two of presentation</h1>',
        routeStyle: `
            #app-shell { 
                background: fuchsia;
            }
        `,
        isActive: false
    }
];

describe('When a "updateHistoryPushState" is called', () => {
    test('Then the history pushState is fired', () => {
        const historySpy = spyOn(history, 'pushState');

        RouterHelper.updateHistoryPushState(new Router(fakeRoutes));

        expect(historySpy).toHaveBeenCalled();
    });

    test('Then the history pushState is fired with the active route', () => {
        const historySpy = spyOn(history, 'pushState');
        RouterHelper.updateHistoryPushState(new Router(fakeRoutes));

        expect(historySpy).toHaveBeenCalledWith(null, `/${fakeActiveRoute}`,  `http://localhost/${fakeActiveRoute.routeName}`);
    });
});

describe('When "retrieveActiveRoute" is called', () => {
    test('Then the active route is returned', () => {
        expect(RouterHelper.retrieveActiveRoute(new Router(fakeRoutes))).toEqual(fakeActiveRoute);
    });
});
