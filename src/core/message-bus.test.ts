import {MessageBus} from "./message-bus";
import {Messages} from "../types/types";

describe('Given a new version of the message bus class has been made', () => {
    let messageBus: MessageBus;

    beforeAll( () => {
        messageBus = new MessageBus();
    });

    describe('when "publish" is called', () => {

        test('then the "subscribe" function fires with the publish value', () => {
            let fakeCallBack = (event) => expect(event).toEqual('test');

            messageBus.subscribe(Messages.CONTENT_ADDED, fakeCallBack);
            messageBus.publish(Messages.CONTENT_ADDED, 'test');
        });

    });

});
