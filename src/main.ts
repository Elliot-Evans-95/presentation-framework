//----- HELPERS
import {ComponentInitialiser} from "./components/component.initialiser";

// USER ROUTES
import {routes} from "./user/routes";

// CORE
import './core/mediator/message-bus';
import './core/router/router-transformer';
import './core/keys';

import {Router} from "./core/router/router";
import {RouterHelper} from "./core/router/router-helper";
import {Slide} from "./core/slide";
import {ShellElement} from "./helpers/shell-element";
import {Direction, Messages, Names} from "./types/types";
import {NodeElement} from "./helpers/node-element";
import {DocumentWrapper} from "./helpers/document-wrapper";
import {Animation} from "./user/animation";
import {PresentationController} from "./visitor/presentation.controller";
import {messageBus} from "./core/mediator/message-bus";

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

        messageBus.subscribe(Messages.SET_PAGE, (direction) => this.setPage(direction));
    }

    setPage(direction: Direction) {
        new Router(PresentationController.setNewRoute(direction));
        RouterHelper.updateHistoryPushState();

        new Slide(RouterHelper.retrieveActiveRoute(), this._appShell, this._pageShell, this._styleShell, this._document);

        this._animation.triggerPageAnimation();

        messageBus.publish(Messages.PAGE_CHANGED, null);
    }

}

new Presentation();
