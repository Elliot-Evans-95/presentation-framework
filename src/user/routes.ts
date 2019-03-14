import {Route} from "../types/types";

export const routes: Readonly<Array<Route>> = [
    {
        id: 1,
        routeName: 'pageOne',
        routeHTML: '<p>Page one of presentation</p>',
        routeStyle: `
            #app-shell { 
                //background: aqua;
            }
        `,
        isActive: true
    },
    {
        id: 2,
        routeName: 'pageTwo',
        routeHTML: '<p>Page two of presentation</p>',
        routeStyle: `
            #app-shell { 
                //background: fuchsia;
            }
        `,
        isActive: false
    }
];
