import {Router} from "./router";
import {Route} from "../../types/types";

describe('Given a new version of the Router class has been made', () => {
    let router: Router;
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

    beforeAll( () => router = new Router(fakeRoutes));

    test('Then is the router state is made', () => expect(router.state).toEqual(fakeRoutes));

});
