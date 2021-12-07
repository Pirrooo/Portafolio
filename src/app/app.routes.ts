import {Route} from '@angular/router';
import { PrimerComponenteComponent } from './tarjetas/primer-componente.component';
import { AppComponent } from './app.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ObjetosCSSComponent } from './objetos-css/objetos-css.component';
import { EfectosComponent } from './efectos/efectos.component';
import { ScrollComponent } from './scroll/scroll.component';

export const APP_ROUTES: Route[] = [
    {path: 'Primer/:page', component: PrimerComponenteComponent},
    {path: 'Scroll/:page', component: ScrollComponent},
    {path: 'Efectos/:page', component: EfectosComponent},
    {path: 'Curriculum', component: CurriculumComponent},
    {path: 'ObjetosCSS/:page', component: ObjetosCSSComponent}
]