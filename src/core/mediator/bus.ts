export class Bus {
    public subscriptions = {};
    private _index: number = 0;

    constructor() {}

    public subscribe(eventType, callback) {
        const id = this.getIdGenerator();

        if(!this.subscriptions[eventType])
            this.subscriptions[eventType] = {};

        this.subscriptions[eventType][id] = callback;

        return {
            unsubscribe: () => {
                delete this.subscriptions[eventType][id];
                if(Object.keys(this.subscriptions[eventType]).length === 0) delete this.subscriptions[eventType];
            }
        }
    }

    public publish(eventType, arg) {
        if(!this.subscriptions[eventType]) return;

        Object
            .keys(this.subscriptions[eventType])
            .forEach(key => this.subscriptions[eventType][key](arg))
    }

    public getIdGenerator() {
        if (this._index > 0) {
            this._index =+ this._index;

            return this._index;
        }

        return this._index;
    }
}
