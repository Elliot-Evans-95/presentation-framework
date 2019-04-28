import {Direction} from "../types/types";
import {RouterController} from "../visitor/routerController";

const map: any = {};

beforeAll( () => {
    const mockDocument = {
        addEventListener: jest.fn((event, callback) => {
            map[event] = callback;
        }),
    };

    mockDocument.addEventListener("keydown", (event: KeyboardEvent) => {
        switch (event.key) {
            case "ArrowRight":
                RouterController.goToPage(Direction.NEXT);
                break;
            case "ArrowLeft":
                RouterController.goToPage(Direction.PREVIOUS);
                break;
        }
    });
});

test('When the user presses the arrow right button then it calls the goToPage on the RouterController', () => {
    const spyPresentationController = spyOn(RouterController, "goToPage");

    map.keydown({ key: 'ArrowRight' });

    expect(spyPresentationController).toHaveBeenCalled();
});

test('When the user presses the arrow left button then it calls the goToPage on the RouterController', () => {
    const spyPresentationController = spyOn(RouterController, "goToPage");

    map.keydown({ key: 'ArrowLeft' });

    expect(spyPresentationController).toHaveBeenCalled();
});

test('When the user presses the arrow down button then it calls the goToPage on the RouterController', () => {
    const spyPresentationController = spyOn(RouterController, "goToPage");

    map.keydown({ key: 'ArrowDown' });

    expect(spyPresentationController).not.toHaveBeenCalled();
});
