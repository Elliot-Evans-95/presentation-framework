/*
    @ State Design Pattern
 */
import { Route } from './router.type'

export class Router {
    private readonly _routerState: Readonly<Array<Route>>

    constructor(userRoutes: Readonly<Array<Route>>) {
        this._routerState = userRoutes
    }

    get state(): Readonly<Array<Route>> {
        return this._routerState
    }
}
