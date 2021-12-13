import {Route} from '@angular/router';
import { PrimerComponenteComponent } from './CSS/tarjetas/primer-componente.component';
import { AppComponent } from './app.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ObjetosCSSComponent } from './CSS/objetos-css/objetos-css.component';
import { EfectosComponent } from './CSS/efectos/efectos.component';
import { ScrollComponent } from './CSS/scroll/scroll.component';
import { BloqueCSSComponent } from './CSS/bloque-css.component';
import { HistoriaComponent } from './BBDD/historia/historia.component';

export const APP_ROUTES: Route[] = [
    {path: 'CSS', component: BloqueCSSComponent},
    {path: 'Curriculum', component: CurriculumComponent},
    {path: 'BBDD', component: HistoriaComponent},
    {path: 'Primer/:page', component: PrimerComponenteComponent},
    {path: 'Scroll/:page', component: ScrollComponent},
    {path: 'Efectos/:page', component: EfectosComponent},
    {path: 'ObjetosCSS/:page', component: ObjetosCSSComponent},
    {path:'', redirectTo: '/', pathMatch: 'full'},
    {path:'**', redirectTo: '/', pathMatch: 'full'}
]