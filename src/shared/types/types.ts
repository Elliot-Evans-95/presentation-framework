export enum Direction {
    NEXT = 'next',
    PREVIOUS = 'prev'
}

export enum Messages {
    CONTENT_ADDED = '[DOM] Added Content',
    CONTENT_REMOVED = '[DOM] Removed Content',
    SET_PAGE = '[PRESENTATION] Set Page',
}

export enum ComponentEvents {
    DIRECTION = '[ROUTER] Direction changed',
}
