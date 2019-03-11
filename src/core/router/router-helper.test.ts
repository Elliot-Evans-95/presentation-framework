import {RouterHelper} from "./router-helper";
import {Route} from "../../types/types";

const fakeActiveRoute: Route = {
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

describe('When a "updateHistoryPushState" is called', () => {
    test('Then the history pushState is fired', () => {
        const historySpy = spyOn(history, 'pushState');

        RouterHelper.updateHistoryPushState();

        expect(historySpy).toHaveBeenCalled();
    });

    test('Then the history pushState is fired with the active route', () => {
        const historySpy = spyOn(history, 'pushState');
        RouterHelper.updateHistoryPushState();

        expect(historySpy).toHaveBeenCalledWith(null, `/${fakeActiveRoute}`,  `http://localhost/${fakeActiveRoute.routeName}`);
    });
});

describe('When "retrieveActiveRoute" is called', () => {
    test('Then the active route is returned', () => {
        expect(RouterHelper.retrieveActiveRoute()).toEqual(fakeActiveRoute);
    });

});
