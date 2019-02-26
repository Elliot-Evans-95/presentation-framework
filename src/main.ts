//----- HELPERS
import {PresentationController} from "./mediator/presentation.controller";

// GLOBAL HELPERS
import './helpers/globals';

// USER
import './user/routes';

// MEDIATOR
import './mediator/presentation.controller';

// CORE
import './core/router';
import './core/page';
import './core/keys';
import './core/dom';

// COMPONENTS
import './components/progress-bar';

PresentationController.init();