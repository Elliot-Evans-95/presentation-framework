export type Route = {
    id: number,
    routeName: string,
    routeHTML: string,
    routeStyle: string,
    isActive: boolean,
}

export interface IRouterState {
    prev: Route;
    current: Route;
}

export enum Direction {
    NEXT = 'next',
    PREVIOUS = 'prev'
}