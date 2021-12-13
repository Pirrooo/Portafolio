import { Component, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatTreeModule} from '@angular/material/tree'; 
import { MatDrawer } from '@angular/material/sidenav';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  panelOpenState = false;
  title = 'PortafolioSegundo';
  showFiller = false;
  Pantalla: boolean;

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.Pantalla = true;
  }

  refresh(comando:boolean){
    this.Pantalla = comando;
  }

  

}


