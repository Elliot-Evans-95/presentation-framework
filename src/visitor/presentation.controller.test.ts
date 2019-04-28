import {RouterController} from "./routerController";
import {messageBus} from "../core/mediator/message-bus";
import {Direction, Route} from "../types/types";
import {RouterHelper} from "../core/router/router-helper";
import {RouterTransformer} from "../core/router/router-transformer";
import {Router} from "../core/router/router";

const fakeRoutes: Readonly<Array<Route>> = [
    {
        id: 1,
        routeName: 'pageOne',
        routeHTML: '<h1>Page one of presentation</h1>',
        routeStyle: `
            #app-shell { 
                background: aqua;
            }
        `,
        isActive: true
    },
    {
        id: 2,
        routeName: 'pageTwo',
        routeHTML: '<h1>Page two of presentation</h1>',
        routeStyle: `
            #app-shell { 
                background: fuchsia;
            }
        `,
        isActive: false
    }
];

describe('When the "init" is called on the RouterController', () => {
    test('Then publish message is fired', () => {
        const publishSpy = spyOn(messageBus, 'publish');

        RouterController.init();

        expect(publishSpy).toHaveBeenCalled();
    });
});

describe('When the "rebuildDom" is called on the RouterController', () => {
    test('Then publish message is fired', () => {
        const publishSpy = spyOn(messageBus, 'publish');

        RouterController.rebuildDom();

        expect(publishSpy).toHaveBeenCalled();
    });
});

describe('When the "goToPage" is called on the RouterController', () => {
    beforeAll( () => spyOn(RouterController, 'setNewRoute').and.returnValue(fakeRoutes));

    test('Then "publish" is fired', () => {
        const publishSpy = spyOn(messageBus, 'publish');

        RouterController.goToPage(Direction.NEXT);

        expect(publishSpy).toHaveBeenCalled();
    });


    test('Then "updateHistoryPushState" is fired', () => {
        const updateHistoryStateSpy = spyOn(RouterHelper, 'updateHistoryPushState');

        RouterController.goToPage(Direction.NEXT);

        expect(updateHistoryStateSpy).toHaveBeenCalled();
    });

    test('Then "rebuildDom" is fired', () => {
        const rebuildDomSpy = spyOn(RouterController, 'rebuildDom');

        RouterController.goToPage(Direction.NEXT);

        expect(rebuildDomSpy).toHaveBeenCalled();
    });

    test('Then "rebuildDom" is fired', () => {
        const generateNewRouterSpy = spyOn(RouterTransformer, 'generateNewRouter');

        RouterController.goToPage(Direction.NEXT);

        expect(generateNewRouterSpy).toHaveBeenCalled();
    });
});

describe('When the "setNewRoute" is called on the RouterController', () => {
    let router: Router;

    beforeAll( () => {
        const fakeRoute: Readonly<Route> = {
            id: 1,
            routeName: 'pageOne',
            routeHTML: '<h1>Page one of presentation</h1>',
            routeStyle: `
                #app-shell { 
                    background: aqua;
                }
            `,
            isActive: true
        };

        router = new Router(fakeRoutes);

        spyOn(RouterHelper, 'retrieveActiveRoute').and.returnValue(fakeRoute);
        spyOn(RouterTransformer, 'retrieveCurrentRouter').and.returnValue(router.state);
    });

    test('Then it sets the "NEXT" route as the active route', () => {
        const fakeChangedActiveRoutes: Readonly<Array<Route>> = [
            {
                id: 1,
                routeName: 'pageOne',
                routeHTML: '<h1>Page one of presentation</h1>',
                routeStyle: `
            #app-shell { 
                background: aqua;
            }
        `,
                isActive: false
            },
            {
                id: 2,
                routeName: 'pageTwo',
                routeHTML: '<h1>Page two of presentation</h1>',
                routeStyle: `
            #app-shell { 
                background: fuchsia;
            }
        `,
                isActive: true
            }
        ];

        RouterController.setNewRoute(Direction.NEXT);

        expect(router.state).toEqual(fakeChangedActiveRoutes);
    });
});
