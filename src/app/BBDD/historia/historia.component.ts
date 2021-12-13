import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent implements OnInit {
  ReyesArray;
  constructor() { }

  ngOnInit(): void {
    this.ReyesArray = [
      {nombre:'Federico', apodo:'El fede', fecha:'12/08/1996'},
      {nombre:'Isabel', apodo:'La Isa', fecha:'12/08/1994'},
      {nombre:'Paco', apodo:'Pacorro', fecha:'12/04/1996'}]
  };

}
