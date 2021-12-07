import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {
  seleccion: string;
  constructor(private _route: ActivatedRoute, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.seleccion = this._route.snapshot.paramMap.get('page');
  }

}
