import {Route} from '@angular/router';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { AppComponent } from './app.component';
import { CurriculumComponent } from './curriculum/curriculum.component';

export const APP_ROUTES: Route[] = [
    {path: 'PrimerComponente', component: PrimerComponenteComponent},
    {path: 'Curriculum', component: CurriculumComponent}
]