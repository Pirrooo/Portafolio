import { Component, OnInit } from '@angular/core';
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
  seleccion: string;
  constructor(private _route: ActivatedRoute, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.seleccion = this._route.snapshot.paramMap.get('page');
  }

}
