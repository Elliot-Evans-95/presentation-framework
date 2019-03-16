import {RouterTransformer} from "./router-transformer";
import {Route} from "../../types/types";
import {Router} from "./router";

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

let router: Router;

beforeAll(() => router = new Router(fakeRoutes));

describe('When a "retrieveCurrentRouter" is called', () => {
    beforeAll(() => spyOn(RouterTransformer, 'retrieveCurrentRouter').and.returnValue(router.state));

    test('Then the current router state is returned', () =>
        expect(RouterTransformer.retrieveCurrentRouter()).toEqual(fakeRoutes));
});

