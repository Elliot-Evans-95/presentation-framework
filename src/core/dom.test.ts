import {Dom} from "./dom";
import {Names, Route} from "../types/types";
import {messageBus} from "./bus/message-bus";

describe('Given a new version of the Dom class has been made', () => {
    let dom: Dom;

    beforeAll( () => dom = new Dom());

    test('dom is constructed', () => expect(dom).not.toEqual(null));

    describe('when "addContentToPage" is called', () => {
        let fakeRoute: Route;
        let fakeApp: HTMLElement;

        beforeAll( () => {
            fakeRoute = {
                id: 1,
                routeName: "pageOne",
                routeHTML: "<h1>Page one of presentation</h1>",
                routeStyle: "#app-shell {background: aqua;}",
                isActive: true
            };

            fakeApp = document.createElement('div');
            fakeApp.setAttribute('id', Names.SHELL)
        });

        test('then elements are added to the document', () => {
            dom.addContentToPage(fakeRoute);

            expect((dom as any)._document.document.innerHTML).not.toEqual(null);
        });

        test('then the title of the tab is changed', () => {
            dom.addContentToPage(fakeRoute);

            expect((dom as any)._document.document.title).toEqual(fakeRoute.routeName);
        });

        test('then the "pageShell" has content', () => {
            dom.addContentToPage(fakeRoute);

            expect((dom as any)._pageShell.HTMLElement.innerHTML).toEqual(fakeRoute.routeHTML);
        });

        test('then the "appShell" has content', () => {
            dom.addContentToPage(fakeRoute);

            expect((dom as any)._appShell.element.textContent).toEqual('Page one of presentation#app-shell {background: aqua;}');
        });

        test('then the "styleShell" has content', () => {
            dom.addContentToPage(fakeRoute);

            expect((dom as any)._styleShell.element.textContent).toEqual('#app-shell {background: aqua;}');
        });

        test('then a message is published', () => {
            const publishSpy = spyOn(messageBus, 'publish');

            dom.addContentToPage(fakeRoute);

            expect(publishSpy).toHaveBeenCalled();
        });
    });

});
