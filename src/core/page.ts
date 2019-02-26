export class Page {
    private _id: number;
    private _routeName: string;
    private _routeHTML: string;
    private _routeStyle: string;

    constructor(id: number, routeName: string, routeHTML: string, routeStyle: string) {
        this._id = id;
        this._routeName = routeName;
        this._routeHTML = routeHTML;
        this._routeStyle = routeStyle;
    }

}
