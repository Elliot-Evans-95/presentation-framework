//----- HELPERS
import {PresentationController} from "./mediator/presentation.controller";

// GLOBAL HELPERS
import './helpers/globals';

// USER ROUTES
import './user/routes';

// MEDIATOR
import './mediator/presentation.controller';

// CORE
import './core/bus/message-bus';
import './core/router/router-transformer';
import './core/router/router-helper';
import './core/router/router';
import './core/keys';
import './core/dom';

// COMPONENTS
import './components/progress-bar';

// USER SETTINGS
import './user/animation';

PresentationController.init();
