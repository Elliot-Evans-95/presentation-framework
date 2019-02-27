import {Route} from "../types/types";

export const routes: Readonly<Array<Route>> = [
    {
        id: 1,
        routeName: 'pageOne',
        routeHTML: '<h1>HELLO WORLD</h1>',
        routeStyle: '.test123 { background: aqua}',
        isActive: true
    },
    {
        id: 2,
        routeName: 'pageTwo',
        routeHTML: '<h1>HELLO WORLD 2</h1>',
        routeStyle: '.test123 { background: aqua}',
        isActive: false
    }
];
