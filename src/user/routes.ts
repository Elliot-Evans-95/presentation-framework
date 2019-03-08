import {Route} from "../types/types";

export const routes: Readonly<Array<Route>> = [
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
