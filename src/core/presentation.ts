import {ShellElement} from "../helpers/shell-element";
import {Direction, Messages, Names, Route} from "../types/types";
import {NodeElement} from "../helpers/node-element";
import {DocumentWrapper} from "../helpers/document-wrapper";
import {Animation} from "../user/animation";
import {Router} from "./router/router";
import {Slide} from "./slide";
import {RouterHelper} from "./router/router-helper";
import {ComponentInitialiser} from "../components/component.initialiser";
import {RouterController} from "../visitor/routerController";
import {KeyListener} from "./keys";
import {Bus} from "./mediator/bus";

export class Presentation {
    private readonly _appShell = new ShellElement(Names.SHELL);
    private readonly _pageShell = new ShellElement(Names.PAGE);
    private readonly _styleShell = new NodeElement(Names.STYLES);
    private readonly _document = new DocumentWrapper(document);
    private readonly _animation = new Animation(this._pageShell);
    private readonly _messageEvents = new Bus();

    private _router: Router;

    constructor(userRoutes: Array<Route>) {
        this._router = new Router(userRoutes);
        new ComponentInitialiser(this._appShell, this._document, this._messageEvents);
        new KeyListener(this._messageEvents);
        this.generateNewSlide();
        this._messageEvents.subscribe(Messages.SET_PAGE, (direction) => this.setPage(direction));
    }

    setPage(direction: Direction): void {
        this._router = RouterController.setActiveRoute(this._router, direction, this._messageEvents);
        RouterHelper.updateHistoryPushState(this._router);
        this.generateNewSlide();
        this._animation.triggerPageAnimation();
    }

    generateNewSlide(): void {
        new Slide(RouterHelper.retrieveActiveRoute(this._router), this._appShell, this._pageShell, this._styleShell, this._document, this._messageEvents);
    }

}
