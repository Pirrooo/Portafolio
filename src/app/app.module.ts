import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { CurriculumComponent } from './curriculum/curriculum.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    CurriculumComponent
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
