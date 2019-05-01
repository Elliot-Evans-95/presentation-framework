import {KeyListener} from "./keys";
import {Bus} from "../messages/bus";
import Spy = jasmine.Spy;

const messageEvents = new Bus();
let spyPresentationController: Spy;

beforeEach( () => {
    new KeyListener(messageEvents);
    spyPresentationController = spyOn(messageEvents, "publish");
});

test('When the user presses the arrow right button then it calls the goToPage on the RouterController', () => {
    const event = new KeyboardEvent("keydown",{
        "key": "ArrowRight"
    });
    document.dispatchEvent(event);

    expect(spyPresentationController).toHaveBeenCalled();
});

test('When the user presses the arrow left button then it calls the goToPage on the RouterController', () => {
    const event = new KeyboardEvent("keydown",{
        "key": "ArrowLeft"
    });
    document.dispatchEvent(event);

    expect(spyPresentationController).toHaveBeenCalled();
});

test('When the user presses the arrow down button then it calls the goToPage on the RouterController', () => {
    const event = new KeyboardEvent("keydown",{
        "key": "ArrowDown"
    });
    document.dispatchEvent(event);

    expect(spyPresentationController).not.toHaveBeenCalled();
});
