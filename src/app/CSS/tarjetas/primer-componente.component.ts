import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';    
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.scss']
})
export class PrimerComponenteComponent implements OnInit {
  isUserLoggedIn: boolean;
  @Input() seleccion: string;
  constructor() { }

  ngOnInit(): void {
      this.seleccion = 'Perretes'
  }

}
