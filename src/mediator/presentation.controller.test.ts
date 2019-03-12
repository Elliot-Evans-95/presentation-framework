import {PresentationController} from "./presentation.controller";
import {messageBus} from "../core/message-bus";
import {Direction} from "../types/types";

describe('When the "init" is called on the PresentationController', () => {
    test('Then publish message is fired', () => {
        const publishSpy = spyOn(messageBus, 'publish');

        PresentationController.init();

        expect(publishSpy).toHaveBeenCalled();
    });
});

describe('When the "rebuildDom" is called on the PresentationController', () => {
    test('Then publish message is fired', () => {
        const publishSpy = spyOn(messageBus, 'publish');

        PresentationController.rebuildDom();

        expect(publishSpy).toHaveBeenCalled();
    });
});

// describe('When the "goToPage" is called on the PresentationController', () => {
//     test('Then publish message is fired', () => {
//         const publishSpy = spyOn(messageBus, 'publish');
//
//         PresentationController.goToPage(Direction.NEXT);
//
//         expect(publishSpy).toHaveBeenCalled();
//     });
// });

// describe('When the "setNewRoute" is called on the PresentationController', () => {
//     test('Then publish message is fired', () => {
//         const publishSpy = spyOn(messageBus, 'publish');
//
//         PresentationController.setNewRoute(Direction.NEXT);
//
//         expect(publishSpy).toHaveBeenCalled();
//     });
// });
