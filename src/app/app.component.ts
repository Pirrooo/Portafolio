import { Component, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


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
    let com = "/Primer/"+comando+"";
    this.router.navigateByUrl("", { skipLocationChange: true }).then(() => {
      this.router.navigate([''+com+'']);
  }); 
 // console.log(com);
  //  window.location.reload();
  }

  

}


