import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-objetos-css',
  templateUrl: './objetos-css.component.html',
  styleUrls: ['./objetos-css.component.scss']
})
export class ObjetosCSSComponent implements OnInit {
  isUserLoggedIn: boolean;
  seleccion: string;
  constructor(private _route: ActivatedRoute, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.seleccion = this._route.snapshot.paramMap.get('page');
  }

}
