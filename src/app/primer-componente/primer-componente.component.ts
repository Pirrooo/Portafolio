import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.scss']
})
export class PrimerComponenteComponent implements OnInit {
 seleccion
  constructor() { }

  ngOnInit(): void {
    this.seleccion = 'Perretes'
  }

}
