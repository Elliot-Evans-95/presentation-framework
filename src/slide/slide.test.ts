import {Slide} from "./slide";
import {RouterHelper} from "../router/helpers/router-helper";
import {ShellElement} from "../shellElement/shell-element";
import {NodeElement} from "../nodeElement/node-element";
import {DocumentWrapper} from "../documentWrapper/document-wrapper";
import {Bus} from "../messages/bus";
import {Router} from "../router/router";
import {fakeRoutes} from "../router/router.test";
import {Names} from "./dom.type";
import {Route} from "../router/router.type";

describe('Given a new version of the Slide class has been made', () => {
    let dom: Slide;
    const appShell = new ShellElement(Names.SHELL);
    const pageShell = new ShellElement(Names.PAGE);
    const styleShell = new NodeElement(Names.STYLES);
    const documentWrapper = new DocumentWrapper(document);
    const messageEvents = new Bus();

    beforeAll( () => dom = new Slide(RouterHelper.retrieveActiveRoute(new Router(fakeRoutes)), appShell, pageShell, styleShell, documentWrapper, messageEvents));

    test('dom is constructed', () => expect(dom).not.toEqual(null));

    describe('when "add" is called', () => {
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
            dom.add(fakeRoute);

            expect((dom as any)._document.document.innerHTML).not.toEqual(null);
        });

        test('then the title of the tab is changed', () => {
            dom.add(fakeRoute);

            expect((dom as any)._document.document.title).toEqual(fakeRoute.routeName);
        });

        test('then the "pageShell" has content', () => {
            dom.add(fakeRoute);

            expect((dom as any)._pageShell.element.innerHTML).toEqual(fakeRoute.routeHTML);
        });

        test('then the "appShell" has content', () => {
            dom.add(fakeRoute);

            expect((dom as any)._appShell.element.textContent).toEqual('Page one of presentation#app-shell {background: aqua;}');
        });

        test('then the "styleShell" has content', () => {
            dom.add(fakeRoute);

            expect((dom as any)._styleShell.element.textContent).toEqual('#app-shell {background: aqua;}');
        });

        test('then a message is published when adding content to the dom', () => {
            const publishSpy = spyOn(messageEvents, 'publish');

            dom.add(fakeRoute);

            expect(publishSpy).toHaveBeenCalled();
        });

        test('then a message is published when removing content to the dom', () => {
            const publishSpy = spyOn(messageEvents, 'publish');

            dom.remove();

            expect(publishSpy).toHaveBeenCalled();
        });
    });

});
