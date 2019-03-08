export class MessageBus {
    public subscriptions = { };

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

        Object.keys(this.subscriptions[eventType])
            .forEach(key => this.subscriptions[eventType][key](arg))
    }

    public getIdGenerator() {
        let lastId = 0;

        return function getNextUniqueId() {
            lastId += 1;

            return lastId;
        }
    }
}

export const messageBus = new MessageBus();
