import {Route} from "../types/types";

export const routes: Array<Route> = [
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
        // routeNotes: '#Hello World',
    }
];
