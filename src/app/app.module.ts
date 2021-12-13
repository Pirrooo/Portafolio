import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { HistoriaComponent } from './BBDD/historia/historia.component';
import { BloqueCSSComponent } from './CSS/bloque-css.component';
import { ObjetosCSSComponent } from './CSS/objetos-css/objetos-css.component';
import { PrimerComponenteComponent } from './CSS/tarjetas/primer-componente.component';
import { ScrollComponent } from './CSS/scroll/scroll.component';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { EfectosComponent } from './CSS/efectos/efectos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    ObjetosCSSComponent,
    ScrollComponent,
    BloqueCSSComponent,
    CurriculumComponent,
    EfectosComponent,
    HistoriaComponent
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonModule,
    MatExpansionModule,
    MatTreeModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

