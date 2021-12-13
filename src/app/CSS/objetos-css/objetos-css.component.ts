import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-objetos-css',
  templateUrl: './objetos-css.component.html',
  styleUrls: ['./objetos-css.component.scss']
})
export class ObjetosCSSComponent implements OnInit {
  isUserLoggedIn: boolean;
  @Input() seleccion: string;
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
