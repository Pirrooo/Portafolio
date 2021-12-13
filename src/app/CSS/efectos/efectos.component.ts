import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-efectos',
  templateUrl: './efectos.component.html',
  styleUrls: ['./efectos.component.scss']
})
export class EfectosComponent implements OnInit {
  @Input() seleccion: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
