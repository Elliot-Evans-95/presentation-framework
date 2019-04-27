import {ShellElement} from "../helpers/shell-element";
import {Direction, Messages, Names} from "../types/types";
import {NodeElement} from "../helpers/node-element";
import {DocumentWrapper} from "../helpers/document-wrapper";
import {Animation} from "../user/animation";
import {Router} from "./router/router";
import {routes} from "../user/routes";
import {Slide} from "./slide";
import {RouterHelper} from "./router/router-helper";
import {ComponentInitialiser} from "../components/component.initialiser";
import {messageBus} from "./mediator/message-bus";
import {PresentationController} from "../visitor/presentation.controller";
import {KeyListener} from "./keys";

export class Presentation {
    private readonly _appShell = new ShellElement(Names.SHELL);
    private readonly _pageShell = new ShellElement(Names.PAGE);
    private readonly _styleShell = new NodeElement(Names.STYLES);
    private readonly _document = new DocumentWrapper(document);
    private readonly _animation = new Animation(this._pageShell);

    constructor() {
        new Router(routes);
        new Slide(RouterHelper.retrieveActiveRoute(), this._appShell, this._pageShell, this._styleShell, this._document);
        new ComponentInitialiser(this._appShell, this._document);
        new KeyListener();

        messageBus.subscribe(Messages.SET_PAGE, (direction) => this.setPage(direction));
    }

    setPage(direction: Direction): void {
        new Router(PresentationController.setNewRoute(direction));
        RouterHelper.updateHistoryPushState();

        new Slide(RouterHelper.retrieveActiveRoute(), this._appShell, this._pageShell, this._styleShell, this._document);

        this._animation.triggerPageAnimation();

        messageBus.publish(Messages.PAGE_CHANGED, null);
    }

}
