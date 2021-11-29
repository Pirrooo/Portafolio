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
  title = 'PortafolioSegundo';
  showFiller = false;

  constructor(private router: Router) { }

  refresh(comando:string){
    this.router.navigateByUrl("", { skipLocationChange: true }).then(() => {
      this.router.navigate([''+comando+'']);
  }); 
 // console.log(com);
  //  window.location.reload();
  }

  aleatorio(comando:string){
    let primer =['Perretes', 'Guardamar'];
    let elige = comando  + (primer[Math.round((Math.random()))]);
    this.router.navigateByUrl("", { skipLocationChange: true }).then(() => {
      this.router.navigate([''+elige+'']);
  }); 
  console.log(elige);
  }

  

}


