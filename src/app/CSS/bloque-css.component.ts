import { Component, EventEmitter, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bloque-css',
  templateUrl: './bloque-css.component.html',
  styleUrls: ['./bloque-css.component.scss']
})
export class BloqueCSSComponent implements OnInit {
  panelOpenState = false;
  title = 'PortafolioSegundo';
  showFiller = false;
  Panel: string;
  seleccion: string;

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  refresh(comando: string, comando2: string) {
    this.Panel = comando;
    this.seleccion = comando2;
 /*   this.router.navigateByUrl("", { skipLocationChange: true }).then(() => {
      this.router.navigate(['' + comando2 + '']);
    });*/
  }
 

 /* aleatorio(comando: string) {
    let primer = ['Perretes', 'Guardamar'];
    let elige = comando + (primer[Math.round((Math.random()))]);
    this.router.navigateByUrl("", { skipLocationChange: true }).then(() => {
      this.router.navigate(['' + elige + '']);
    });
    console.log(this.showFiller);
  }*/
}
