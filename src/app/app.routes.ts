import {Route} from '@angular/router';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { AppComponent } from './app.component';

export const APP_ROUTES: Route[] = [
    {path: 'PrimerComponente', component: PrimerComponenteComponent}
]