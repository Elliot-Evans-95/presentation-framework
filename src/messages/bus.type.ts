export interface Mediator {
    subscribe (name: string, callback: () => any): Subscription;
    publish (name: string, data: any): void;
}

export interface Subscription {
    unsubscribe: () => void;
}
