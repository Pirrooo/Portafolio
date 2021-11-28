import {Route} from '@angular/router';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { AppComponent } from './app.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ObjetosCSSComponent } from './objetos-css/objetos-css.component';

export const APP_ROUTES: Route[] = [
    {path: 'Primer/:page', component: PrimerComponenteComponent},
    {path: 'Curriculum', component: CurriculumComponent},
    {path: 'ObjetosCSS', component: ObjetosCSSComponent}
]