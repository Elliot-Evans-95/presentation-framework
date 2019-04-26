//----- HELPERS
import {PresentationController} from "./visitor/presentation.controller";
import {ComponentInitialiser} from "./components/component.initialiser";

// USER ROUTES
import './user/routes';

// MEDIATOR
import './visitor/presentation.controller';

// CORE
import './core/mediator/message-bus';
import './core/router/router-transformer';
import './core/router/router-helper';
import './core/router/router';
import './core/keys';
import './core/dom';

// COMPONENTS
// import './components/progress-bar';

// USER SETTINGS
import './user/animation';

export class Presentation {
    constructor() {
        PresentationController.init();
        new ComponentInitialiser()
    }
}

new Presentation();
