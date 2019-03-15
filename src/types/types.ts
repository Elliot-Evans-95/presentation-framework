export type Route = {
    id: number,
    routeName: string,
    routeHTML: string,
    routeStyle: string,
    isActive: boolean,
}

export enum Direction {
    NEXT = 'next',
    PREVIOUS = 'prev'
}

export enum Names {
    STYLES = 'style',
    SHELL = 'app-shell',
    PAGE = 'main',
    POPUP = '/popup.html'
}

export enum Messages {
    CONTENT_ADDED = '[DOM] Added Content',
    CONTENT_REMOVED = '[DOM] Removed Content',
    PAGE_CHANGED = '[ROUTER] Page Changed',
}

export enum ComponentEvents {
    DIRECTION = '[ROUTER] Direction changed',
}
